$(function () {
  /**
  * メッセージのHTML(レスポンス)
  * @type {json}
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
  * @type {string}
  */
  function isImage(img_url) {
    if (img_url != null) {
      return image = `<img src="${img_url}" class="messages-lists__images">`;
    } else {
      return image = "";
    }
  }
  /**
  * 入力フォームの初期化
  * @type {void}
  */
  function formClear() {
    $('form')[0].reset();
    $('.messages__content__msg-send-footer__submit-btm').prop("disabled", false);
  }
  /**
  * 一番下まで自動スクロール
  * @type {string}
  */
  function scrollBottom(element) {
    $(element).animate({ scrollTop: $(element)[0].scrollHeight }, 'fast');
  }
  $('#new_message').on('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function (data) {
        if (data.content != null || data.img_url != null) {
          var html = buildHTML(data);
          $('.messages__content__lists').append(html);
          scrollBottom('.messages__content__lists');
        }
        formClear();
      })
      .fail(function () {
        formClear();
        alert('メッセージを入力してください');
      });
  });
});
