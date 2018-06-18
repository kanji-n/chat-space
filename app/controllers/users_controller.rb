class UsersController < ApplicationController

  def index
    @users = User.where('name LIKE(?) AND name != (?)', "%#{params[:search_name]}%", current_user.name)
    respond_to do |format|
      format.html
      format.json
    end
  end

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
