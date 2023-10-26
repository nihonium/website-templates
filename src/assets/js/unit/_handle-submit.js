{
    const formElement = document.querySelector('form');

    formElement.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
        const isYes = confirm('この内容で送信していいですか？');

        if (isYes === false) {
            event.preventDefault();
        }
    }
}