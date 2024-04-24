/**
 * validatorjsを使ったバリデーション実装
 * 
 * https://qiita.com/y-miine/items/615d4fc29327c64d661f
 * https://github.com/mikeerickson/validatorjs
 */

function validateForm() {
    Validator.useLang('ja');

    // カスタムルール：年齢
    Validator.register('age_check', function(value, requirement, attribute) {
        return value >= requirement;
    },
        '年齢は18歳以上である必要があります。'
    );

    // カスタムルール：メールアドレスの確認
    Validator.register('email_confirmation', function(value, requirement, attribute) {
        const confirmationField = attribute.replace('_confirmation', '');
        const confirmationValue = document.getElementById(confirmationField).value;
        return value === confirmationValue;
    },
        'メールアドレスが一致しません。'
    );

    // カスタムルール：ラジオボタンの必須入力検証
    Validator.register('required_radio', function(value, requirement, attribute) {
        let radioButtons = document.querySelectorAll('input[name="' + attribute + '"]');
        for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                return true;
            }
        }
        return false;
    }, ':attributeは必須項目です。');

    // カスタムルール：チェックボックスの必須入力検証
    Validator.register('required_checkbox', function(value, requirement, attribute) {
        return document.getElementById(attribute).checked;
    }, ':attributeは必須項目です。');


    let data = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        gender: getSelectedRadioValue('gender'),
        email: document.getElementById('email').value,
        email_confirmation: document.getElementById('email_confirmation').value,
        accept_terms: document.getElementById('accept_terms').checked
    };

    let rules = {
        name: 'required',
        age: 'required|age_check:18',
        gender: 'required_radio',
        email: 'required|email',
        email_confirmation: 'required|email_confirmation',
        accept_terms: 'required_checkbox'
    };

    let validation = new Validator(data, rules);

    // フィールド名を日本語に変換
    validation.setAttributeNames({
        name: '名前',
        age: '年齢',
        gender: '性別',
        email: 'メールアドレス',
        email_confirmation: '確認用メールアドレス',
        accept_terms: '注意事項・利用規約への同意'
    });

    // 個別に未入力エラーメッセージを設定
    let messages = Validator.getMessages('ja');
    messages.required = '【:attribute】は必須項目です。';
    Validator.setMessages('ja', messages);

    // ラジオボタンが選択されていない場合に手動でエラーメッセージを追加
    if (!document.querySelector('input[name="gender"]:checked')) {	
        validation.errors.add('gender', '【性別】は必須項目です。');	
    }

    if (validation.passes()) {
        alert('フォームが正常に送信されました！');
        let form = document.getElementById('myForm');
        form.action = '../';
        form.method = 'get';
        form.submit();
    } else {
        // バリデーションエラーがある場合、エラーメッセージを表示します。
        let errors = validation.errors.all();
        let errorMessage = '';
        for (let error in errors) {
            errorMessage += errors[error][0] + '\n';
        }
        alert(errorMessage);
    }
}

// ラジオボタンの値を取得する関数
function getSelectedRadioValue(name) {
    let radios = document.querySelectorAll('input[name="' + name + '"]');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
    return null;
}