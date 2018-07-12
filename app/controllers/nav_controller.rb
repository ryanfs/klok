class NavController < ApplicationController
  def index
    @projects = Project.all
  end
end
