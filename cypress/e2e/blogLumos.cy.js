describe('Personal Blog Lumos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('check localhost', () => {
    cy.visit('http://localhost:5173')
  })

  it('check display home page', () => {
    cy.get('[cy-data="navbar"]').should('be.visible')
    cy.get('[cy-data="blog"]').should('be.visible')
    cy.get('[cy-data="footer"]').should('be.visible')
  })

  it('check nav link blog', () => {
    cy.get('[cy-data="nav-blog"]').click()
    cy.get('[cy-data="navbar"]').should('be.visible')
    cy.get('[cy-data="blog"]').should('be.visible')
    cy.get('[cy-data="footer"]').should('be.visible')
  })

  it('check nav link about and display about page', () => {
    cy.get('[cy-data="nav-about"]').click()
    cy.get('[cy-data="navbar"]').should('be.visible')
    cy.get('[cy-data="header"]').should('be.visible')
    cy.get('[cy-data="about"]').should('be.visible')
    cy.get('[cy-data="footer"]').should('be.visible')
  })

  it('check nav link newsletter and display newsletter page', () => {
    cy.get('[cy-data="nav-news"]').click()
    cy.get('[cy-data="navbar"]').should('be.visible')
    cy.get('[cy-data="news"]').should('be.visible')
    cy.get('[cy-data="blog-list"]').should('be.visible')
    cy.get('[cy-data="footer"]').should('be.visible')
  })

  it('check nav link home', () => {
    cy.get('[cy-data="logo"]').click()
    cy.get('[cy-data="navbar"]').should('be.visible')
    cy.get('[cy-data="blog"]').should('be.visible')
    cy.get('[cy-data="footer"]').should('be.visible')
  })

  it('check theme toggle', () => {
    //go dark mode
    cy.get('[cy-data="light-toggle"]').click()
    cy.get('body').should('have.class', 'dark')
    cy.get('[cy-data="light-toggle"]').should('have.prop', 'disabled', true)
    //go light mode
    cy.get('[cy-data="dark-toggle"]').click()
    cy.get('body').should('not.have.class', 'dark')
    cy.get('[cy-data="dark-toggle"]').should('have.prop', 'disabled', true)
  })

  it('check access blog detail', () => {
    // access with recent blog post
    cy.wait(10000)
    cy.get('[cy-data="recent-blog-title"]').first().click()
    cy.get('[cy-data="blog-detail"]').should('be.visible')
    // access with blog list
    // access from home
    cy.get('[cy-data="nav-blog"]').click()
    cy.get('[cy-data="blog-list"]', { timeout: 10000 }).should('be.visible')
    cy.get('[cy-data="blog-list-img"]').first().click()
    cy.get('[cy-data="blog-detail"]').should('be.visible')
    // access from blog
    cy.get('[cy-data="nav-blog"]').click()
    cy.get('[cy-data="blog-list"]', { timeout: 10000 }).should('be.visible')
    cy.get('[cy-data="navbar"]').should('be.visible')
    cy.get('[cy-data="blog-list"]').should('be.visible')
    cy.get('[cy-data="footer"]').should('be.visible')
    cy.get('[cy-data="blog-list-img"]').first().click()
    cy.get('[cy-data="blog-detail"]').should('be.visible')
    // access from newsletter
    cy.get('[cy-data="nav-news"]').click()
    cy.get('[cy-data="blog-list"]', { timeout: 10000 }).should('be.visible')
    cy.get('[cy-data="navbar"]').should('be.visible')
    cy.get('[cy-data="news"]').should('be.visible')
    cy.get('[cy-data="blog-list"]').should('be.visible')
    cy.get('[cy-data="footer"]').should('be.visible')
    cy.get('[cy-data="blog-list-img"]').first().click()
    cy.get('[cy-data="blog-detail"]').should('be.visible')
  })

  it('check form newsletter', () => {
    cy.get('[cy-data="nav-news"]').click()
    cy.get('[cy-data="form-input"]').type('test@gmail.com')
    cy.get('[cy-data="form-button"]').click()
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Thank you for subscribing!');
    });
    
  })
})