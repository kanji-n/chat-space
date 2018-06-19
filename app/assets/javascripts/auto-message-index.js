$(function () {
  var timer_message;
  startTimer(5000);
  /**
  * タイマースタート(メッセージ更新用)
  * @type {int} ミリ秒
  */
  function startTimer(millisecond) {
    timer_message = setInterval(function () {
      updateMsg();
    }, millisecond);
  }
  /**
  * タイマーストップ(メッセージ更新用)
  * @type {void}
  */
  function stopTimer() {
    clearInterval(timer_message);
  }
  /**
  * メッセージのHTML(レスポンス)
  * @type {json} ajaxで取得したjson
  */
  function buildHTML(message) {
    var html = `<div class="messages-list" data-msg-id ="${message.id}" >
                  <p class="messages-list__user-name">
                    ${message.user_name}
                    <span class="messages-list__user-name__date">
                      ${message.created_at}
                    </span>
                  </p>
                  <p class="messages-lists__messages">
                    ${message.content}
                  </p>
                  ${isImage(message.img_url)}
                </div>`;
    return html;
  }
  /**
  * 画像が選択されていれば、Imageタグを返す
  * @type {string} 画像url
  */
  function isImage(img_url) {
    if (img_url != null) {
      return image = `<img src="${img_url}" class="messages-lists__images">`;
    } else {
      return image = "";
    }
  }
  /**
  * 一番下まで自動スクロール
  * @type {string} element名
  */
  function scrollBottom(element) {
    $(element).animate({ scrollTop: $(element)[0].scrollHeight }, 'fast');
  }
  /**
  * メッセージ非同期更新
  * @type {void}
  */
  function updateMsg() {

  }
});
