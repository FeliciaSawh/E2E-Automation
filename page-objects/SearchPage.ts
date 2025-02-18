import {Page, Locator} from '@playwright/test'

export class SearchPage {
    readonly page: Page
    readonly searchBtn: Locator

    constructor(page:Page) {
        this.page = page
        this.searchBtn = page.locator('#filter_keyword')
    }

    async searchProduct(product:string) {
        await this.searchBtn.fill(product)
        await this.page.keyboard.press('Enter')

    }

}