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
        return value >= 18;
    }, '【年齢は18歳以上である必要があります。】');

    // カスタムルール：メールアドレスの確認
    Validator.register('email_confirmation', function(value, requirement, attribute) {
        const confirmationField = attribute.replace('_confirmation', '');
        const confirmationValue = document.getElementById(confirmationField).value;
        return value === confirmationValue;
    }, '【メールアドレスが一致しません。】');

    // カスタムルール：ラジオボタンの必須入力検証
    Validator.register('required_radio', function(value, requirement, attribute) {
        let radioButtons = document.querySelectorAll('input[name="' + attribute + '"]');
        for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                return true;
            }
        }
        return false;
    }, '【:attribute】は必須項目です。');

    // カスタムルール：チェックボックスの必須入力検証
    Validator.register('required_checkbox', function(value, requirement, attribute) {
        return document.getElementById(attribute).checked;
    }, '【:attribute】は必須項目です。');

    let data = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        gender: {
            male: document.getElementById('gender_male').value,
            female: document.getElementById('gender_female').value
        },
        email: document.getElementById('email').value,
        email_confirmation: document.getElementById('email_confirmation').value,
        accept_terms: document.getElementById('accept_terms').checked
    };

    let rules = {
        name: 'required',
        age: 'required|age_check',
        gender: 'required|required_radio',
        email: 'required|email',
        email_confirmation: 'required|email_confirmation',
        accept_terms: 'required|required_checkbox'
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

    if (validation.passes()) {
        alert('フォームが正常に送信されました！' + '\n' + '(トップページに戻る)');
        let form = document.getElementById('myForm');
        form.action = '../';
        form.method = 'get';
        form.submit();
    } else {
        // バリデーションエラーがある場合、エラーメッセージを表示します。
        let errors = validation.errors.all();
        let errorMessage = '';
        for (let error in errors) {
            errorMessage += '<li>' + errors[error][0] + '</li>' + '\n';
        }

        let errorMessageBox = '<ul data-form-error>' + errorMessage + '</ul>';
        const errorBox = document.getElementById('errorMyForm');
        const elementErrorBox = document.querySelector('[data-form-error]');
        if (elementErrorBox) {
            elementErrorBox.remove();
        }
        errorBox.insertAdjacentHTML('afterbegin', errorMessageBox);
        errorBox.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        });
    }
}
