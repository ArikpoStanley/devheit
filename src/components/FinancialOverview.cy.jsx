import React from 'react'
import FinancialOverview from './FinancialOverview'

describe('<FinancialOverview />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FinancialOverview />)
  })
})