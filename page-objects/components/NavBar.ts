import { Page, Locator} from "@playwright/test"

export class NavBar{
    readonly page: Page
    readonly checkOutBtn: Locator
    readonly cartBtn: Locator
    readonly accountBtn: Locator
    readonly specialsBtn: Locator
    readonly loginRegisterBtn: Locator


    constructor(page:Page){
        this.page = page
        this.checkOutBtn = page.getByRole('link', {name: 'Checkout'})
        this.cartBtn = page.getByRole('link', {name: 'Cart'})
        this.accountBtn = page.getByRole('link', {name: 'Account'})
        this.specialsBtn = page.getByRole('link', {name: 'Special'})
        this.loginRegisterBtn = page.locator('#customer_menu_top')

    }

    async clickNavBar (tabName) {
        switch (tabName) {
            case "Checkout":
                await this.checkOutBtn.click()
                break
            case "Cart":
                await this.cartBtn.click()
                break 
            case "Account":
                await this.accountBtn.click()
                break
            case "Special":
                await this.specialsBtn.click()
                break
            case "Login and Register":
                await this.loginRegisterBtn.click() 
                break  
             default:
                throw new Error('This tab not exist..')   

        }

    }
}