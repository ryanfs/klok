class ProjectsController < ApplicationController

  def index
    day = Date.parse(params['date'])
    @projects = Project.includes(:timeblocks).where(timeblocks: {end: day.beginning_of_day .. day.end_of_day})
  end

  def show
    @project = Project.find(params[:id])
  end

end
