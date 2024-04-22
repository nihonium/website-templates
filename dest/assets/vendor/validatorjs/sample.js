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

    let data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        email_confirmation: document.getElementById('email_confirmation').value,
        age: document.getElementById('age').value
    };

    let rules = {
        name: 'required',
        email: 'required|email',
        email_confirmation: 'required|email_confirmation',
        age: 'required|age_check:18'
    };

    let validation = new Validator(data, rules);

    // フィールド名を日本語に変換
    validation.setAttributeNames({
        name: '名前',
        email: 'メールアドレス',
        email_confirmation: '確認用メールアドレス',
        age: '年齢'
    });

    // 個別に未入力エラーメッセージを設定
    let messages = Validator.getMessages('ja');
    messages.required = '【:attribute】は必須項目です。';
    Validator.setMessages('ja', messages);

    if (validation.passes()) {
        alert('Form submitted successfully!');
        // ここでフォームを送信するためのコードを追加することができます。
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