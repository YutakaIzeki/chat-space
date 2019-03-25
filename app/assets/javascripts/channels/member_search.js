$(function(){

  var search_list = $('#user-search-result');

  function appendName(user){

    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="ユーザー名">追加</a>
                </div>`
    search_list.append(html);
  }

  function appendMsg(msg){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${msg}</p>
                </div>`
    search_list.append(html);
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
          appendName(user)
        });
      }else{
        appendMsg("該当するユーザが見つかりません")
      }
    })
    .fail(function(){
      alert('ユーザー検索に失敗しました');
    })
  })
})
