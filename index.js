const {Builder, By, Key, until} = require('selenium-webdriver');
require("regenerator-runtime/runtime");
 
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://cn.bing.com/');
    await driver.findElement(By.id('sb_form_q')).sendKeys('selenium webdriver', Key.RETURN);
    await driver.wait(until.titleContains('selenium webdriver'), 5000);
  } finally {
    await driver.quit();
  }
})();