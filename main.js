
// function butotnClick(){
//   let checkValue = '';

//   for (let i = 0; i < len; i++){
//     if (boy_girl_radio.item(i).checked){
//       checkValue = boy_girl_radio.item(i).value;
//     }
//     if (cool_cute_radio.item(i).checked){
//       checkValue = cool_cute_radio.item(i).value;
//     }
//     if (up_down_radio.item(i).checked){
//       checkValue = up_down_radio.item(i).value;
//     }
//     if (sawayaka_deep_radio.item(i).checked){
//       checkValue = sawayaka_deep_radio.item(i).value;
//     }
//     if (love_not_radio.item(i).checked){
//       checkValue = love_not_radio.item(i).value;
//     }

//   }
//   console.log('選択されているのは ' + checkValue + ' です');
// }

// let boy_girl_radio = document.getElementsByName('boy-girl');
// let len = boy_girl_radio.length;

// let cool_cute_radio = document.getElementsByName('cool_cute');
// let len = cool_cute_radio.length;

// let up_down_radio = document.getElementsByName('up_down');
// let len = up_down_radio.length;

// let sawayaka_deep_radio = document.getElementsByName('sawayaka_deep');
// let len = sawayaka_deep_radio.length;

// let love_not_radio = document.getElementsByName('love_not');
// let len = love_not_radio.length;

// let checkButton = document.getElementById('checkButton');
// checkButton.addEventListener('click', butotnClick);

// var(checkValue="namuja"){
//   let str = "あああ"; // 出力文字列
//         let ary = str.split(''); // 配列形式に変換（後述のBlobで全要素出力）
//         let blob = new Blob(ary,{type:"text/plan"}); // テキスト形式でBlob定義
//         let link = document.createElement('a'); // HTMLのaタグを作成
//         link.href = <iframe width="560" height="315" src="https://www.youtube.com/embed/JsOOis4bBFg?si=dvhJ3ysJqCuafwZ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>(blob);
// }

const boy_girl = document.getElementById('boy-girl');
const cool_cute = document.getElementById('cool-cute');
const up_down = document.getElementById('up-down');
const sawayaka_deep = document.getElementById('sawayaka-deep');
const love_not = document.getElementById('love-not');
const submitButton = document.getElementById('submitButton');
const resultText = document.getElementById('resultText');

submitButton.addEventListener('click', () => {
    // ボタンを無効化して再連打を防ぐ
    submitButton.disabled = true;

    // 読み込み中メッセージを表示
    resultText.textContent = '読み込み中...';

    setTimeout(() => {
        const selectedboy_girl = document.querySelector('input[name="boy-girl"]:checked');
        const selectedcool_cute = document.querySelector('input[name="cool-cute"]:checked');

        if (selectedboy_girl && selectedcool_cute) {
            const boy_girl.Value = selectedColor.value;
            const cool.Value = selectedcool-cute.value;

            let message = '';
            let videoURL = '';

            // musicdataから一致するYouTube動画のURLを取得
            const selectedVideoURL = musicdata[boy-girlValue] && musicdata[seasonValue][colorValue];

            if (selectedVideoURL) {
                videoURL = selectedVideoURL;
            } else {
                message = "該当する動画は見つかりませんでした。";
            }

            if (videoURL) {
                // iframeでYouTube動画を表示
                const iframe = document.createElement('iframe');
                iframe.src = videoURL;
                iframe.width = "560"; // iframeの幅を調整
                iframe.height = "315"; // iframeの高さを調整
                iframe.allowFullscreen = true; // フルスクリーン表示を許可
                iframe.frameBorder = "0"; // ボーダーを非表示に
                resultText.innerHTML = ''; // 以前の結果をクリア
                resultText.appendChild(iframe);
            } else {
                resultText.textContent = message;
            }
        } else {
            resultText.textContent = '色と季節の両方を選んでください。';
        }

        // ボタンを再度有効化
        submitButton.disabled = false;
    }, 2000); // 2秒間待機
});
const musicdata = {
    "春": {
        "赤": "https://www.youtube.com/embed/XogSflwXgpw?si=d8KtG_-fu0UQyyEy",
        "青": "https://www.example.com/music/spring_blue"
    },
    "夏": {
        "赤": "https://www.example.com/music/summer_red",
        "青": "https://www.example.com/music/summer_blue",
        "緑": "https://www.example.com/music/summer_green"
    },
    // 他の季節と色のデータも同様に追加
};