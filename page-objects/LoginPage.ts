import {expect, Page, Locator} from '@playwright/test'

export class LoginPage {
  
    readonly page: Page
    readonly registerLogin: Locator
    readonly loginName: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator
    readonly errorLogin: Locator

    constructor (page:Page) {
        this.page = page
        this.registerLogin = page.locator('#customer_menu_top')
        this.loginName = page.locator('#loginFrm_loginname')
        this.passwordInput = page.locator('#loginFrm_password')
        this.loginButton = page.locator("button[title='Login']")
        this.errorLogin = page.locator('.alert.alert-error.alert-danger')
    }

    async visitWeb() {
        await this.page.goto('https://automationteststore.com/')
    }

    async clickOnLoginRegister() {
        await this.registerLogin.click()
    }

    async login(username: string, password: string) {
       await this.loginName.fill(username)
       await this.passwordInput.fill(password)
       await this.loginButton.click() 
    }

    async assertErrorMessage() {
        await expect(this.errorLogin).toContainText('Error: Incorrect login or password provided.')
    }

}