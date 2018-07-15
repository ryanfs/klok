class TimeblocksController < ApplicationController

 def index
  @timeblock = Timeblock.new
  @projects = Project.all
  @timeblocks = Timeblock.all
end

 def show
  @timeblock = Timeblock.find(params[:id])
 end

 def create
   @timeblock = Timeblock.new(timeblock_params)
   @timeblock.end = Time.now.utc
   @timeblock.start = @timeblock['start'].to_time.utc
   if @timeblock.save
     redirect_to project_path(@timeblock.project)
   else
     render :new
   end
 end

 private
 def timeblock_params
   params.require(:timeblock).permit!
 end

end
