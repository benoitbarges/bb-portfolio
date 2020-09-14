require 'test_helper'

class MessageMailerTest < ActionMailer::TestCase
  test "sendMessage" do
    mail = MessageMailer.sendMessage
    assert_equal "Sendmessage", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
