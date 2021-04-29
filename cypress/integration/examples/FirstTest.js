describe('MyTestSuit', function()  {
    it('verified title of the page', function()  {
      crypto.visit("https://www.nopcommerce.com/en/demo")
      crypto.title().should('eq','npmcommerce demo store')
    })
  })