class CreateTenants < ActiveRecord::Migration[8.1]
  def change
    create_table :tenants, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.timestamps

      t.string :name, null: false
      t.string :subdomain, null: false
      t.boolean :active, null: false, default: true
      t.string :api_key, null: false
    end

    add_index :tenants, :subdomain, unique: true
    add_index :tenants, :api_key, unique: true
  end
end
