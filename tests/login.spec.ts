import {test, expect} from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'

test.describe('Verifying login functionality', () => {
   
    let loginpage: LoginPage
    
    test.beforeEach('Login page', async ({page}) => {
        loginpage = new LoginPage(page)
        await loginpage.visitWeb()
    })

    test('Should log on the website successfully after creating a user account', async ({page}) => {
           
        await loginpage.clickOnLoginRegister()
        await loginpage.login('markdoe29', 'markdoe100')
      
        await page.waitForURL('https://automationteststore.com/index.php?rt=account/account')
        await expect(page.url()).toContain('/account')

    })

    test('Verify login witn invalid credential', async ({page}) => {
        await loginpage.clickOnLoginRegister()
        await loginpage.login('markdoe55', 'markdoe101')
        await loginpage.assertErrorMessage()
       
    })
})