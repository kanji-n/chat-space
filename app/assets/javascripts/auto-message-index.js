$(function () {
  var timer_message;
  // タイマー制御(メッセージを表示している時のみタイマー実行)
  var isChatLength = document.getElementsByClassName("messages").length;
  if (isChatLength > 0) {
    startTimer(5000);
  } else {
    stopTimer();
  }
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
    var id = $(".messages-list").last().data('msg-id');
    $.ajax({
      type: 'GET',
      url: location.href,
      data: { message_id: id },
      dataType: 'json'
    })
      .done(function (messages) {
        if (messages.length !== 0) {
          messages.forEach(function (message) {
            console.log(message.content);
            var html = buildHTML(message);
            $('.messages__content__lists').append(html);
            scrollBottom('.messages__content__lists');
          });
        }
      })
      .fail(function () {
        alert('自動更新に失敗しました');
      });
  }
});
