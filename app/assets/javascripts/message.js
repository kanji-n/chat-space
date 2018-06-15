$(function () {
  function buildHTML(message) {
    var html = `<div class="messages-list">
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
      return image = ""
    }
  }
  /**
  * 入力フォームの初期化
  * @type {void}
  */
  function formClear() {
    $('.messages__content__msg-send-footer__input-text').val('');
    $('.messages__content__msg-send-footer__submit-btm').prop("disabled", false);
    $('.messages__content__msg-send-footer__label__file').val('');
  }
  $('#send-messages').on('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function (data) {
        var html = buildHTML(data);
        $('.messages__content__lists').append(html);
        formClear();
      })
  });
});
