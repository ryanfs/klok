class ProjectController < ApplicationController

  # read only

 # GET /project
 def index
  @projects = Project.all
 end

 # GET /project/id
 def show
  @project = Project.find(params[:id])
 end

end
