# Preview all emails at http://localhost:3000/rails/mailers/message_mailer
class MessageMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/message_mailer/sendMessage
  def contact(message)
    @message = message
    MessageMailer.contact
  end

end
