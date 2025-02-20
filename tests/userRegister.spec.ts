import {test, expect} from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'
import { UserRegister } from '../page-objects/UserRegister'

test.describe('Verifying login functionality', () => {
   
    let loginpage: LoginPage
    let userregister: UserRegister

    test.beforeEach('Login page', async ({page}) => {
        loginpage = new LoginPage(page)
        userregister = new UserRegister(page)
        await loginpage.visitWeb()
    })

    test('Should create a user account', async ({page}) => {
        
        await loginpage.clickOnLoginRegister()
        await userregister.register('mark', 'doe', 'mark.doe30@yahoo.com', '888 creekside green dr', 'Kent', 'Kent', '77389', 'United Kindom', 'markdoe29', 'markdoe100', 'markdoe100')
        await userregister.buttonsRadio()
        await userregister.continueBtnRegister()
        await userregister.assertMessageLogin()
        await userregister.logOutAccount()

       // await page.click('#customer_menu_top')
        //await page.click("button[title='Continue']")
        //await page.fill('#AccountFrm_firstname', 'Mark')
        //await page.fill('#AccountFrm_lastname', 'Doe')
        //await page.fill('#AccountFrm_email', 'mark.doe30@yahoo.com')
        //await page.fill('#AccountFrm_address_1', '888 creekside green dr')
        //await page.fill('#AccountFrm_city', 'Kent')
        //await page.selectOption('#AccountFrm_zone_id', 'Kent')
        //await page.fill('#AccountFrm_postcode', '77389')
        //await page.selectOption('#AccountFrm_country_id', 'United Kingdom')
        //await page.fill('#AccountFrm_loginname', 'markdoe29')
        //await page.fill('#AccountFrm_password', 'markdoe100')
       // await page.fill('#AccountFrm_confirm', 'markdoe100')

        //await page.click('#AccountFrm_newsletter0')
        //await page.click('#AccountFrm_agree')
        //await page.click("button[title='Continue']")
       
        //await page.waitForURL('https://automationteststore.com/index.php?rt=account/success')
        //await expect(page.url()).toContain('/success')
  
       //const logOut=  await page.locator('.side_account_list li:last-child')
       //await logOut.click()

       //const messageLogin = await page.locator('.maintext')
       //await page.waitForSelector('text=Your Account Has Been Created!', {state: 'visible'})
       //await expect(messageLogin).toContainText('Your Account Has Been Created!')
    })
    })