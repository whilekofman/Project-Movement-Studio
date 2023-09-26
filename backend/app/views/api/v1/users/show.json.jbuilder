json.user do
    json.extract! @user, :id, :username, :email, :first_name, :last_name, :phone_number, :admin, :created_at, :updated_at
end