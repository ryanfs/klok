class CreateTimeblocks < ActiveRecord::Migration[5.2]
  def change
    create_table :timeblocks do |t|
      t.string :description
      t.datetime :start
      t.datetime :end
      t.boolean :deleted, default: false
      t.references :project

      t.timestamps
    end
  end
end
