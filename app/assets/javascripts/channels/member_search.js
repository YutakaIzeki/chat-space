$(function(){

  var search_list = $('#user-search-result');

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
      if(users.length !== 0) {
        users.forEach((user) => {
          var html =buildHTML(user);
          search_list.append(html)
        });
      }else{
        search_list.append(html)
      }
    })
    .fail(function(){
      alert('error');
    })
  })
})
