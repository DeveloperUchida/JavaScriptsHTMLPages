function loadContent(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('contentArea').innerHTML = data;
        })
        .catch(error => {
            document.getElementById('contentArea').innerHTML = 'エラー: ' + error;
        });
}

document.addEventListener("DOMContentLoaded", function() {
    // 初期設定として最初のページの内容を読み込む
    loadContent('index.html');
});