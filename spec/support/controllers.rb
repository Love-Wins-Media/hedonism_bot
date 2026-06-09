def mock_tenant(tenant = nil)
  tenant ||= create(:default_tenant)

  allow(Tenant).to receive_messages(default_tenant: tenant, find_by: tenant)
end
