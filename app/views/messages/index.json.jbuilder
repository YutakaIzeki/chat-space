
if @new_messages.present? # @new_messageに中身があれば
  json.array! @new_messages # 配列かつjson形式で@new_messageを返す
end
