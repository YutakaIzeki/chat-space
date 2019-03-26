$(function(){

  var search_list = $('#user-search-result');

  function appendName(user){

    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                </div>`
    search_list.append(html);
  }

  function appendMsg(msg){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${msg}</p>
                </div>`
    search_list.append(html);
  }

  function appendUserToGroup(user_id, user_name){
    var html =`<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                <input name='group[user_ids][]' type='hidden' value='${user_id}'>
                <p class='chat-group-user__name'>${user_name}</p>
                <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
              </div>`
    $('#chat-group-users').append(html)
  }



  $('#user-search-field.chat-group-form__input').on('keyup', function(){
    var input = $("#user-search-field.chat-group-form__input").val();
    $.ajax({
      type: "GET",
      url: '/users',
      data: { keyword: input },
      dataType: 'json',
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
      $(document).ready(function(){
        $('.chat-group-user__btn--add').on('click',function(){
          $(this).parent().remove()
          var user_id= $(this).attr("data-user-id")
          var user_name= $(this).attr("data-user-name")
          appendUserToGroup(user_id, user_name)
          $(document).ready(function(){
            $('.chat-group-user__btn--remove').on('click',function(){
              $(this).parent().remove()
            })
          })
        });
      })
    })
    .fail(function(){
      alert('ユーザー検索に失敗しました');
    })
  })
});

