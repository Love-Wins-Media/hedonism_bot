class ApplicationController < ActionController::Base
  before_action :populate_tenant


  private

  def populate_tenant
    @tenant ||= Tenant.default_tenant if Rails.env.development?
  end
end
