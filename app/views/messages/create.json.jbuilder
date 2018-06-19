json.id @message.id
json.user_name  @message.user.name
json.created_at @message.created_at.to_s()
json.content  @message.content
json.img_url  @message.image.url
