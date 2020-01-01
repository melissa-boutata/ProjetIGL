
const { Builder, By, Key, until } = require('selenium-webdriver');
/**
 * Dependency Modules
 */
var assert = require("assert").strict;
var webdriver = require("selenium-webdriver");
//require("geckodriver");// Application Server
const serverUri = "http://localhost:3000/Add";
const appTitle = "React App";
/**
 * Config for Chrome browser
 * @type {webdriver}
 */
var browser = new webdriver.Builder()
 .usingServer()
 .withCapabilities({ browserName: "chrome" })
 .build();
 /**
 * Config for Firefox browser (Comment Chrome config when you intent to test in Firefox)
 * @type {webdriver}
 */

/**
 * Function to get the title and resolve it it promise.
 * @return {[type]} [description]
 */
function logTitle() {
 return new Promise((resolve, reject) => {
  browser.getTitle().then(function(title) {
   resolve(title);
  });
 });
}/**
  * Test case to load our application and check the title.
  */
 it("Should load the home page and get title", function() {
    return new Promise((resolve, reject) => {
     browser
      .get(serverUri)
      .then(logTitle)
      .then(title => {
       assert.strictEqual(title, appTitle);
       resolve();
      })
      .catch(err => reject(err));
    });
   });
   async function test() {
    try {
    
        const Title = await browser.findElement(By.xpath('//*[@id="root"]/div/div/div/form/div[1]/div/input')) 
        Title.sendKeys('Hhahahahahahhahaha')
        const Profs = await browser.findElement(By.xpath('//*[@id="root"]/div/div/div/form/div[2]/div/input')) 
        Profs.sendKeys('Mostfai Youcef')
        const Etudiants = await browser.findElement(By.xpath('//*[@id="root"]/div/div/div/form/div[3]/div/input'))
        Etudiants.sendKeys('Boutata Mélissa')
        const Annee = await browser.findElement(By.xpath('//*[@id="root"]/div/div/div/form/div[4]/div/input'))
        Annee.sendKeys=('Octobre 2020')
        const Description = await browser.findElement(By.xpath('//*[@id="root"]/div/div/div/form/div[5]/div/input'))
        Description.sendKeys('Hello world this is me please work')
        const submit= await browser.findElement(By.xpath('//*[@id="send"]/span[1]'))
        submit.click()
      /*
        const Title = await browser.findElement(By.cssSelector("#title")); 
        Title.sendKeys('Hhahahahahahhahaha')
        const Profs = await browser.findElement(By.cssSelector("#prof")); 
        Profs.sendKeys('Mostfai Youcef')
        const Etudiants = await browser.findElement(By.cssSelector("#etud"));
        Etudiants.sendKeys('Boutata Mélissa')
        const Annee = await browser.findElement(By.cssSelector("#month"));
        Annee.sendKeys=('Octobre 2020')
        const Description = await browser.findElement(By.cssSelector("#description"));
        Description.sendKeys('Hello world this is me please work')
        const submit= await browser.findElement(By.cssSelector("#send"));
        submit.click()
*/ 
    } catch (err) {
        console.log('there is an errror here')
        console.log(err)
    }
    finally {
        console.log('Success')
        try {
             
  /**
  * End of test cases use.
  * Closing the browser and exit.
  */

            await browser.quit();
        } catch (error) {
        console.log(`error quitting selenium`)
        }
    }
}
test(); 
  
