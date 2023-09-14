/**
* * YouTubeのIFramePlayerAPIを使って複数のモーダル表示のYouTube動画を自動再生させる
* https://designsupply-web.com/media/programming/6548/
*
*/

const videoPlayButtons = document.querySelectorAll('[data-video-play]');
const modalCloseButton = document.getElementById('auto-play-close');
const modalClose = document.getElementById('auto-play-modal');
const modal = document.getElementById('auto-play');
const videoIframes = document.querySelectorAll('[data-youtube-video]');
let currentVideoId = null;

// APIでのYouTube動画制御
function onYouTubeIframeAPIReady() {
    const videosId = Array.from(videoIframes).map(item => item.id);
    const players = videosId.map(id => {
        return new YT.Player(id, {
            videoId: id,
            playerVars: {
                loop: 0,
                rel: 0
            }
        });
    });

    // モーダル表示＆YouTube動画の自動再生
    videoPlayButtons.forEach(element => {
        element.addEventListener('click', (event) => {
            modal.classList.add('shown');
            const elementId = element.hash.replace('#', '');
            event.preventDefault();
            const targetVideo = players.filter(player => {
                return player.getVideoData().video_id === elementId;
            });
            document.getElementById(targetVideo[0].getVideoData().video_id).style.display = 'block';
            targetVideo[0].unMute().playVideo();
            currentVideoId = elementId;
        });
    });

    // モーダルクローズ＆YouTube動画の停止(閉じるボタン)
    modalCloseButton.addEventListener('click', (event) => {
        const targetVideo = players.filter(player => {
            return player.getVideoData().video_id === currentVideoId;
        });
        targetVideo[0].stopVideo();
        document.getElementById(currentVideoId).style.display = 'none';
        modal.classList.remove('shown');
    });

    // モーダルクローズ＆YouTube動画の停止(閉じるボタン)
    modalClose.addEventListener('click', (event) => {
        const targetVideo = players.filter(player => {
            return player.getVideoData().video_id === currentVideoId;
        });
        targetVideo[0].stopVideo();
        document.getElementById(currentVideoId).style.display = 'none';
        modal.classList.remove('shown');
    });
}