class TweetController < ApplicationController

  # read only

 # GET /tweet
 def index
  @tweets = Tweet.all
 end

 # GET /tweet/id
 def show
  @tweet = Tweet.find(params[:id])
 end
