class CreateTenants < ActiveRecord::Migration[8.1]
  def change
    create_table :tenants do |t|
      t.string :name, null: false
      t.string :subdomain, null: false
      t.string :api_key, null: false
      t.boolean :active, null: false, default: true

      t.timestamps
    end

    add_index :tenants, :subdomain, unique: true
    add_index :tenants, :api_key, unique: true
  end
end
