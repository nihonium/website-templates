{
    const formElement = document.getElementById('postForm');
    const handleSubmit = (event) => {
        const isYes = confirm('この内容で送信していいですか？');

        if (isYes === false) {
            event.preventDefault();
        }
    };

    formElement.addEventListener('submit', handleSubmit);
}