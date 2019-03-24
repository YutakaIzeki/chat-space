json.user_name          @message.user.name
json.time               @message.created_at.strftime("%Y/%m/%d %H:%M")
json.content_present    @message.content.present?
json.content            @message.content
json.image_present      @message.image.present?
json.image              @message.image.url
