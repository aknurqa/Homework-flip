//Тестовый сценарий для осуществления цели:  
//"Проверить, что наш пользователь может добавить товар и выбрать метод оплаты для товара после авторизации на сайте"
// 1. Открыть сайт https://www.flip.kz/
// 2. Кликнуть на кнопку "Войти", заполнить данные и войти в учетную запись
// 2. В поисковой строке ввести необходимый товар и выбрать его
// 3. Выбрать количество и кликнуть на Добавление в корзину
// 4. Кликнуть оформить заказ
// 5. Выбрать адрес
// 6. Выбрать курьерскую доставку
// 7. Выбрать способ оплаты

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.flip.kz/')
    cy.contains('Войти').click()
    cy.contains('Войти используя пароль').click()
    cy.contains('Телефон или E-mail').type('aknurgbd@gmail.com')  
    cy.contains('Пароль').type('Uralsk123')  
    cy.get('.password-form > .nbtn').click()
    cy.wait(2000)
    cy.get('#search_input').type('Северус')
    cy.get(`.sBtm > input`).click()
    cy.get(`:nth-child(1) > .good-list-item > .p-10 > .pic > img`).click()
    cy.get('select[name="cart_count_produce"]').select('2')
    cy.get('#cart_button').click()
    cy.get('form > .nbtn').click()
    cy.get('[value="Выбрать"]').first().click()
    cy.get('[for="item-2-sw"] > strong').click()
    cy.get('.item-1 > .table > .cell > .nbtn').click()
    cy.get('.nbtn').click()
  })
})

//cy.get('[data-id="addTracker"]').click()
