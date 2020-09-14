class MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)
    if @message.save!
      MessageMailer.contact(@message).deliver_now
    end
  end

  private

  def message_params
    params.require(:message).permit(:name, :email, :content)
  end
end
