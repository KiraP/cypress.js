
describe('Форма логина и пароля', function () { 

    it('Правильный пароль, правильный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        
        cy.get('#pass').type('iLoveqastudio1');
        
        cy.get('#loginButton').click();
        
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Восстановление пароля', function() { 
        cy.reload(); 
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        
        cy.get('#mailForgot').type('ohmy@yandex.ru');
        
        cy.get('#restoreEmailButton').click();
        
        cy.get('#messageHeader').contains ('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Ввод неправильного пароля', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
      
        cy.get('#pass').type('wrongpass');
       
        cy.get('#loginButton').click();
       
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Ввод неправильного логина', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('wrongmail@yandex.ru');
    
        cy.get('#pass').type('iLoveqastudio1');
        
        cy.get('#loginButton').click();
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Ввод неправильного логина_2', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('wrongmailyandex.ru');
      
        cy.get('#pass').type('iLoveqastudio1');
        
        cy.get('#loginButton').click();
        
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Приведение логина к строчным буквам', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
      
        cy.get('#pass').type('iLoveqastudio1');
        
        cy.get('#loginButton').click();
        
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

})