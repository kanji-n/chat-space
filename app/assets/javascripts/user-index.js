$(function () {
  function appendName(user) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add js-add-btn" data-user-id ="${user.id}" data-user-name="${user.name}">追加</a>
                </div>`;
    $('#user-search-result').append(html);
  }
  function formClear() {
    $("#user-search-result").empty();
  }
  $('#user-search-field').on("keyup", function () {
    formClear();
    var input = $(this).val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { search_name: input },
      dataType: 'json'
    })
      .done(function (users) {
        if (users.length !== 0) {
          users.forEach(function (user) {
            appendName(user);
          });
        }
      })
      .fail(function () {
        alert('ユーザー検索に失敗しました');
      });
  });
});
