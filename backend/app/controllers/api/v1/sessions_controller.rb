class Api::V1::SessionsController < ApplicationController

        
    def show
        
        if current_user
            @user = current_user
            render 'api/v1/users/show'
        else
            render json: { user: nil }
        end
        # if !current_user
        #     render json: { user: nil }
        # else
        #     @user = current_user
        #     render 'api/v1/users/show'
        # end
    end

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if !@user
            login!(@user)
            render '/api/v1/users/show'
        else 
            render json: { errors: ["Invalid email/password combination"] }, status: 401
        end
    end

    def destroy
        if current_user
            logout!
            render json: {}
        else
            render json: { errors: ["No user logged in"] }, status: 404
        end
    end

end
