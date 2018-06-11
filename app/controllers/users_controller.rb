class UsersController < ApplicationController

  def edit
  end

  def update
    current_user.id.update(user_edit_params);
    redirect_to root_path
  end

  private
  def user_edit_params
    params.require(:user).permit(:name, :email)
  end
end
