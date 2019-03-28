
if @new_messages.present? # @new_messageに中身があれば
  json.array! @new_messages.all do |message| # 配列かつjson形式で@new_messageを返す
    json.user_name          message.user.name
    json.created_at         message.created_at.strftime("%Y/%m/%d %H:%M")
    json.content_present    message.content.present?
    json.content            message.content
    json.image_present      message.image.present?
    json.image              message.image.url
    json.id                 message.id
    json.group_id           message.group_id
  end
end
