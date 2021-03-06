$(function(){
  function buildHTML(message){
    let image = message.image_present ? message.image : "" ;
    var html = `<div class="message" id="${message.id}">
                  <div class="message__upper-info">
                    <p class="message__upper-info__talker">
                      ${message.user_name}
                    </p>
                    <p class="message__upper-info__date">
                      ${message.created_at}
                    </p>
                  </div>
                  <div class="message__lower">
                      <p class="message__text">
                        ${message.content}
                      </p>
                      <img class="message__lower__image" src="${image}" >
                  </div>
                </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
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
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('#new_message')[0].reset()
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $('.submit-btn').prop('disabled', false);
    })
    .fail(function(){
      alert('error');
      $('.submit-btn').prop('disabled', false);
    })
  })

  $(function(){
    setInterval(update,5000);
  })
  function update(){
    var message = $('.message:last-child').attr('id')
    $.ajax({
      url: location.href,
      type: 'GET',
      data: { id: message },
      dataType: 'json'
    })
    .always(function(data){
      if($.isEmptyObject(data)){
      }else{
        data.forEach(function(element){
          var html = buildHTML(element)
          $('.messages').append(html)
        })
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      }
    })
  }



})
