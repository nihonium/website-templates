{
    const formElement = document.getElementById('postForm');
    const handleSubmit = (event) => {
        const isYes = confirm('この内容で送信していいですか？');

        if (isYes === false) {
            event.preventDefault();
        }

        let insertHtml=`
        <!-- loading -->
        <div id="loading"">
            <div class="cv-spinner">
                <span class="spinner"></span>
                <p>送信しています</p>
            </div>
        </div>
        <!-- loading -->
        `
        let insertCSS=`
        <style>
            #loading{
                position: fixed;
                top: 0;
                left: 0;
                z-index: 9999;
                width: 100%;
                height:100%;
                background: rgba(0,0,0,0.6);
            }
            #loading .cv-spinner {
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            #loading .spinner {
                width: 40px;
                height: 40px;
                border: 4px #ddd solid;
                border-top: 4px #999 solid;
                border-radius: 50%;
                animation: sp-anime 0.8s infinite linear;
            }
            #loading p {
                line-height: 40px;
                margin: 0 0 0 8px;
                text-align: center;
                color: #ddd
            }
            @keyframes sp-anime {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(359deg); }
            }
            #loading.is-hide{
                display:none;
            }
        </style>
        `
        document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', insertCSS);
        document.getElementsByTagName('body')[0].insertAdjacentHTML('afterbegin', insertHtml);
    };

    formElement.addEventListener('submit', handleSubmit);
}