class CreateTweet < ActiveRecord::Migration[5.2]
  def change
    create_table :tweets do |t|
      t.string :description
      t.integer :favorites, default: 0

      t.timestamps
    end
  end
end
