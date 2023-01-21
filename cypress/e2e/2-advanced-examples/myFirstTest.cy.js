const navbarText = Cypress.env('navbarText');



context('My First Test', ()=>{
  // beforeEach(()=>{
  //   cy.visit('commands/actions')
  // })
  // it('h1 element is present on the page', ()=>{
  //   cy.get('h1').should('exist');
  // })
  // it('renders the correct h1 text', ()=>{
  //   cy.get('h1').should('contain.text', 'Actions');
  // })
  // it('renders a paragraph under h1', ()=>{
  //   cy.get('.container').eq(1).find('p').should('exist');
  // })
  // it('renders a section with the correct elements', ()=>{
  //   cy.get('.container').eq(2).within(()=>{
  //     cy.get('h4').should('exist');
  //     cy.get('p').should('exist');
  //   })
  // })
  // it('correctly renders the cypress website link', ()=>{
  //   cy.findByText(navbarText).should('exist');
  // })
  // it('types into an email field', ()=>{
  //   cy.visit('/commands/actions')
  //   cy.findByPlaceholderText('Email').type('test@email.com')
  //   cy.wait(5000)
  //   console.log('test is finished')
  // })
  // it('shows the active class for the current page', ()=>{
  //   cy.visit('/commands/actions')
  //   cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')

  // })
  // it('should not have an active class assigned to inactive pages', ()=>{
  //   cy.visit('/commands/actions')
  //   cy.get('.dropdown-menu').find('li').first().should('not.have.class', 'active')
  // })
  // it('links to the actions page correctly', ()=>{
  //   cy.visit('/')
  //   cy.findAllByText('Actions').last().click()
  //   cy.url().should('include', 'commands/actions')
  // })

  // it('lets you type an input field', ()=>{
  //   cy.visit('commands/actions')
  //   cy.findByPlaceholderText('Email').type('Testing').should('have.value', 'Testing')
  // })
  // it('lets you clear an input field', ()=>{
  //   cy.visit('commands/actions')
  //   cy.findByLabelText('Describe:').type('testing description one two three four').should('have.value', 'testing description one two three four')
  //     .clear().should('have.value', '')
  // })
  // it('lets you check a checkbox', ()=>{
  //   cy.visit('/commands/actions')
  //   cy.get('.action-checkboxes [type="checkbox"]').first().check().should('be.checked')
  // })
  // beforeEach(()=>{
  //   cy.fixture('example').then(function (data) {
  //     this.datu = data
  //     cy.log('THIS', this.datu)
  //   })
  // })
  
  // it('pulls data from a fixture', ()=>{
  //   cy.fixture('example').then((data)=>{
  //     cy.log(data);
  //   })
  // })
  // it('updates data in real time', ()=>{
  //   cy.fixture('example').then((data)=>{
  //     data.email = 'updated@mail.com'
  //     cy.log('UPDATED ', data)
  //   })
  // })
  // // it('uses fixture data in a nw req', function () {
  // //   cy.visit('commands/network-requests')
  // //   cy.intercept('GET', '**/comments/*').as('getComment')     //no test stub is defined yet, we have only specified the request to intercept and provided an alias. 
  // //   cy.get('.network-btn').click()                            // clicking this button will fire the GET command specified above
  // //   cy.wait('@getComment').then((res)=>{                      // As we have not defined fixture data, the argument in then function is the actual response object
  // //     cy.log('Response: ', res)                               //this.datu here represents the this.datu obj containg the fixture data
  // //   })
  // // })

  // it('uses fixture data in a nw req', function () {
  //   cy.visit('commands/network-requests')
  //   cy.intercept('GET', '**/comments/*', this.datu).as('getComment')     ////we have provided the test stub in the form of this.datu. It represents the this.datu obj containg the fixture data 
  //   cy.get('.network-btn').click()                            // clicking this button will fire the GET command specified above
  //   cy.wait('@getComment').then((res)=>{                      // As we have defined fixture data, the argument in then function is the test stub object and not the response
  //     cy.log('Response: ', res)                               
  //   })
  // })

  // it('sets and gets a token in local storage', ()=>{
  //   cy.setLocalStorage('token', 'abc123')
  //   cy.getLocalStorage('token').should('eq', 'abc123')
  // })
  // it('overwrites the type command by using sensitive characters', ()=>{
  //   cy.visit('/commands/actions')
  //   cy.findByPlaceholderText('Email').type('test@mail.com')
  //   cy.findByPlaceholderText('Email').type('test@mail.com', {sensitive: true})
  // })
  beforeEach(()=>{
    cy.visit('/commands/actions')
  })
  // it('triggers a popover on click', ()=>{
  //   cy.get('.action-btn').click();
  //   cy.findByText('This popover shows up on click').should('be.visible')
  // })
  // it('can click on different sections of canvas', ()=>{
  //   cy.get('#action-canvas').click('top')
  //   cy.get('#action-canvas').click('bottomRight')
  //   cy.get('#action-canvas').click(80,100)
  // })
  // it('can double click and edit', ()=>{
  //   cy.get('.action-div').dblclick().should('not.be.visible')
  //   cy.get('.action-input-hidden').should('be.visible')
  // })
  // it('can right click to edit', ()=>{
  //   cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
  //   cy.get('.rightclick-action-input-hidden').should('be.visible')
  // })
  it('shows the nav links on hover', ()=>{
    cy.get('.dropdown-toggle').trigger('mouseover')
    cy.get('.dropdown-menu').should('be.visible')
  })
})