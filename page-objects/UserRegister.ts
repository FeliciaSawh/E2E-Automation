import {expect, Page, Locator} from '@playwright/test'

export class UserRegister {
    readonly page: Page
    readonly loginNavBra :Locator
    readonly continueRegister: Locator
    readonly accountFirstName: Locator
    readonly accountLastName: Locator
    readonly emailRegister: Locator
    readonly adressInput: Locator
    readonly cityInput: Locator
    readonly zoneInput: Locator
    readonly postCode: Locator
    readonly countryInput: Locator
    readonly accountLoginName: Locator
    readonly accountPassword: Locator
    readonly confirmPassword: Locator
    readonly radioBtnNo: Locator
    readonly accountAgree: Locator
    readonly continueBtn: Locator
    readonly messageLogin: Locator
    readonly logOut: Locator

    constructor (page:Page) {
        this.page = page
        this.loginNavBra = page.locator('#customer_menu_top')
        this.continueRegister = page.locator("button[title='Continue']")
        this.accountFirstName = page.locator('#AccountFrm_firstname')
        this.accountLastName = page.locator('#AccountFrm_lastname')
        this.emailRegister = page.locator('#AccountFrm_email')
        this.adressInput = page.locator('#AccountFrm_address_1')
        this.cityInput = page.locator('#AccountFrm_city')
        this.zoneInput = page.locator('#AccountFrm_zone_id')
        this.postCode = page.locator('#AccountFrm_postcode')
        this.countryInput = page.locator('#AccountFrm_country_id')
        this.accountLoginName = page.locator('#AccountFrm_loginname')
        this.accountPassword = page.locator('#AccountFrm_password')
        this.confirmPassword = page.locator('#AccountFrm_confirm')

        this.radioBtnNo = page.locator('#AccountFrm_newsletter0')
        this.accountAgree = page.locator('#AccountFrm_agree')

        this.continueBtn = page.locator("button[title='Continue']")

        this.messageLogin = page.locator('.maintext')
        this.logOut = page.locator('.side_account_list li:last-child')

    }

    async register(name: string, lastName: string, email: string, adress: string, city: string, zone: string, zipcode: string, country: string, loginName: string, password: string, confirmPassword: string ){
        await this.accountFirstName.fill(name)
        await this.accountLoginName.fill(lastName)
        await this.emailRegister.fill(email)
        await this.adressInput.fill(adress)
        await this.cityInput.fill(city)
        await this.zoneInput.selectOption(zone)
        await this.postCode.fill(zipcode)
        await this.countryInput.selectOption(country)
        await this.accountLoginName.fill(loginName)
        await this.accountPassword.fill(password)
        await this.confirmPassword.fill(confirmPassword)
    }

    async buttonsRadio() {
        await this.radioBtnNo.click()
        await this.accountAgree.click()
    }

    async continueBtnRegister() {
        await this.continueBtn.click()
    }

    async assertMessageLogin() {
        await expect(this.messageLogin).toContainText('Your Account Has Been Created!')
    }

    async logOutAccount() {
    await this.logOut.click()
    }
}