class ProjectsController < ApplicationController

  def index
    @date = params['date'] ?  Date.parse(params['date']) : Date.parse(Date.today.strftime("%F"))
    @projects = Project.includes(:timeblocks).where(timeblocks: {end: @date.beginning_of_day .. @date.end_of_day})
  end

  def show
    @project = Project.find(params[:id])
  end

end
