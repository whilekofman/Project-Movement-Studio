class Api::V1::UsersController < ApplicationController
    wrap_parameters include: User.attribute_names + [:username, :password, :firstName, :lastName, :phoneNumber]

    def index
        unless logged_in? && current_user_admin? 
            @users = User.all
            render :index
        else
            render json: { errors: ["You do not have permission to view all users"] }, status: 401
        end
    end

    def show
        
        id = params[:id]
        @user = User.find_by(id: id)
        # unless id == current_user.id || current_user_admin?
        #     render json: { errors: ["You do not have permission to view this user"] }, status: 401
        #     return
        # end
        render :show
    end

    def update
        id = params[:id]
        unless id == current_user.id || current_user_admin?
            render json: { errors: ["You do not have permission to update this user"] }, status: 401
            return
        end
        @user = User.find_by(id: id)
        if @user.update(user_params)
            render :show
        else
            render json: { errors: @user.errors.full_messages }, status: 422
        end
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: { errors: @user.errors.full_messages }, status: 422
        end
    end

    ## Needs more thought. Do we want to allow users to delete their accounts? If so, how do we handle the data? 
    # def destroy
    #     id = params[:id]
    #     @user = User.find_by(id: id)
    #     if id == current_user.id
    #         render json: { body: ["Please email the admin to have your account removed"] }, status: 200
    #     elsif current_user_admin?
    #         render json: { body: ["You do not have permission to delete this user"] }, status: 401
    #         return
    #     end
    #     if @user.destroy
    #         render json: {}
    #     else
    #         render json: { errors: @user.errors.full_messages }, status: 422
    #     end
    # end

    private
    def user_params
        params.require(:user).permit(:email, :first_name, :last_name, :password, :phone_number, :username)
    end



end
