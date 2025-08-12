import React from 'react'
import CampaignCard from './CampaignCard'

describe('<CampaignCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CampaignCard />)
  })
})