class User < ApplicationRecord
  has_secure_password
  attr_reader :password

  validates :email, :first_name, :last_name, :password_digest, :session_token, :phone_number, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :email, :session_token, :phone_number, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :phone_number, length: { is: 10 }, numericality: { only_integer: true }


  before_validation :ensure_session_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    return user.is_password?(password) ? user : nil
  end

  def reset_session_token!
    self.update!(session_token: generate_unique_session_token)
    self.session_token
  end

  private

  def generate_unique_session_token
    token = SecureRandom.urlsafe_base64(16)
    while User.exists?(session_token: token)
      token = SecureRandom.urlsafe_base64(16)
    end
    token
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

end
