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
    });

    // カスタムルール：メールアドレスの確認
    Validator.register('email_confirmation', function(value, requirement, attribute) {
        const confirmationField = attribute.replace('_confirmation', '');
        const confirmationValue = document.getElementById(confirmationField).value;
        return value === confirmationValue;
    });

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