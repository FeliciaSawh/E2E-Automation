import {test, expect} from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'
import { SearchPage } from '../page-objects/SearchPage'


test.describe('Search button', () => {

    test('Verifying the search button functionality', async ({page}) => {
        
        loginpage: LoginPage 
        searchpage: SearchPage

        let searchpage = new SearchPage(page)
        let loginpage = new LoginPage(page)

        await loginpage.visitWeb()
        await searchpage.searchProduct('makeup')
        //await page.fill('#filter_keyword', 'makeup')
        //await page.keyboard.press('Enter')
        await page.screenshot({path: 'make-up.png', fullPage:true})
    
    })

})
