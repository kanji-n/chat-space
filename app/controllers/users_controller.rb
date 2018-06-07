class UsersController < ApplicationController
  before_action :authenticate_user!

  def edit
  end

  def update
  end

  private
  def user_edit_params
    params.permit(:name, :email)
  end
end
