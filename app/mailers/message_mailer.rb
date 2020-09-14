class MessageMailer < ApplicationMailer
  require 'mailgun-ruby'

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.message_mailer.sendMessage.subject
  #

  def contact(message)
   # First, instantiate the Mailgun Client with your API key
  @message = message
   mg_client = Mailgun::Client.new ENV['MAILGUN']

   # Define your message parameters
   message_params = { from: message.email,
                      to:   'benoitbarges@gmail.com',
                      subject: 'Mail from benoitbarges.com',
                      text:    message.content
                    }

   # Send your message through the client
   mg_client.send_message 'www.benoitbarges.com', message_params
  end
end
