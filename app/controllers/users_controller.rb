class UsersController < ApplicationController
  before_action :authenticate_user!

  def edit
  end

  def update
    user = User.find(current_user.id)
    user.update(user_edit_params);

    redirect_to root_path
  end

  private
  def user_edit_params
    params.require(:user).permit(:name, :email)
  end
end
