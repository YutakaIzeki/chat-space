$(function(){
  function buildHTML(user){

    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="ユーザー名">追加</a>
                </div>`
    return html;
  }
  $('#user-search-field.chat-group-form__input').on('keyup', function(){
    var input = $("#user-search-field.chat-group-form__input").val();
    console.log(input);
    $.ajax({
      type: "GET",
      url: '/users',
      data: { keyword: input },
      dataType: 'json',
      // processData: false
    })
    .done(function(users){
      $('#user-search-result').empty();
      users.forEach((user) => {
        console.log(user);
        var html =buildHTML(user);
        $('#user-search-result').append(html)
      });
    })
    .fail(function(){
      alert('error');
    })
  })
})
