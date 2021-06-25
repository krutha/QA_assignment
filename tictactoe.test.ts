import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')
const {test}=require('@jest/globals')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test("clicking the upper left square adds an X to the square", async() => {
    let Left = await (await driver).findElement(By.id('cell-0'))
    await Left.click()
    await driver.sleep(2000)
})



test("clicking the upper right square adds an X to the square", async()=>{
    let Right = await driver.findElement(By.id('cell-2'))
    await Right.click()
    await driver.sleep(2000)
})

test(' clicking the lower right square adds an X to the square', async()=>{
    let loweright=await(await driver).findElement(By.id('cell-5'));
      await loweright.click();

})

