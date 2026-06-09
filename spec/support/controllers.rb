def mock_tenant
  tenant = Tenant.find_or_create_by(subdomain: 'test') do |tenant|
    tenant.name = 'Test Tenant'
    tenant.api_key = 'test_key'
  end

  allow(Tenant).to receive(:default_tenant).and_return(tenant)
end
