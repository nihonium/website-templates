/**
 * validatorjsを使ったバリデーション実装
 * 
 * https://qiita.com/y-miine/items/615d4fc29327c64d661f
 * https://github.com/mikeerickson/validatorjs
 */

function validateForm() {
    Validator.useLang('ja');

    let data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value
    };

    let rules = {
        name: 'required',
        email: 'required|email',
        age: 'required|min:18'
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

// document.addEventListener("DOMContentLoaded", validateForm);