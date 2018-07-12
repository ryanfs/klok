class ApplicationController < ActionController::Base
  # before_filter :nav_projects
  helper_method :projects
  # def nav_projects
  #   Project.all
  # end

  def projects
    @projects = Project.all
  end

end
