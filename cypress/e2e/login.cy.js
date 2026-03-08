describe("Login Form", () => {

  beforeEach(() => {
    cy.visit("http://localhost:5173")
  })

  it("Başarılı form doldurulduğunda success sayfasına gider", () => {

    cy.get('[data-testid="email-input"]')
      .type("test@test.com")

    cy.get('[data-testid="password-input"]')
      .type("Strong123")

    cy.get('[data-testid="checkbox"]')
      .check()

    cy.get('[data-testid="login-button"]')
      .should("not.be.disabled")
      .click()

    cy.url().should("include", "/success")

    cy.contains("Login Başarılı")

  })

  it("Email yanlış girildiğinde hata mesajı görünür", () => {

  cy.get('[data-testid="email-input"]')
    .type("yanlisemail")

  cy.get('[data-testid="password-input"]')
    .type("Strong123")

  cy.get(".error")
    .should("have.length", 1)

  cy.contains("Geçerli bir email giriniz")

  cy.get('[data-testid="login-button"]')
    .should("be.disabled")

})

it("Email ve password yanlış", () => {

  cy.get('[data-testid="email-input"]')
    .type("yanlis")

  cy.get('[data-testid="password-input"]')
    .type("123")

  cy.get(".error")
    .should("have.length", 2)

  cy.contains("Şifre en az 8 karakter")

})

it("Şartlar kabul edilmeden login yapılamaz", () => {

  cy.get('[data-testid="email-input"]')
    .type("test@test.com")

  cy.get('[data-testid="password-input"]')
    .type("Strong123")

  cy.get('[data-testid="login-button"]')
    .should("be.disabled")

})

})

