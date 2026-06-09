require 'rails_helper'

describe HedonismBotSchema do
  it 'has no schema errors' do
    expect(described_class.to_definition).not_to be_empty
  end
end
