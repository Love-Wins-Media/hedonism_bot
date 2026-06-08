class ApplicationController < ActionController::Base
  attr_reader :tenant

  private

  def tenant
    subdomain = request.hostname&.split(".")&.first
    @tenant ||= Tenant.find_by(subdomain: subdomain) || Tenant.default_tenant if Rails.env.development?

    @tenant or raise "No tenant found (subdomain: #{subdomain})"
  end
end
