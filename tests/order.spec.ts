import{test, expect} from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'
import { NavBar } from '../page-objects/components/NavBar'

test.describe.only('Purcse an order', async () => {
    let loginpage: LoginPage  
    let navbar: NavBar 

    test.beforeEach('go to page', async({page}) => {
        loginpage = new LoginPage(page)
        navbar = new NavBar(page)
        await loginpage.visitWeb()

    })

    test('Add a product in the chart', async ({page}) => {
        await navbar.clickNavBar('Special')
        await page.click('.thumbnail')
        await page.click('.productpagecart')

        


    })

})