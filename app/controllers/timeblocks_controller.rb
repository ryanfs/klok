class TimeblocksController < ApplicationController

 def index
  @timeblocks = Timeblock.all
 end

 def show
  @timeblock = Timeblock.find(params[:id])
 end

end
