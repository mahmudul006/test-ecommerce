describe('Login Functionality', () => {
  it('startech', async () => {
    browser.url('https://www.startech.com.bd/');
    browser.maximizeWindow();
    const laptopLink = await $('=Laptop');
    await laptopLink.moveTo();
    const gamingLaptopLink = await $('=Gaming Laptop');
    await gamingLaptopLink.moveTo();
    const asusLaptop = await $('=Asus');
    await asusLaptop.click();
    const cards = await $$('.main-content .p-item');
    await cards[1].click();
    await browser.pause(5000);
    await browser.pause(5000);
    await browser.pause(5000);

    await browser.pause(5000);
    await browser.pause(5000);
    await browser.pause(5000);
    await browser.pause(5000);
    await browser.pause(5000);

    await browser.pause(5000);

    await browser.pause(5000);
    await browser.pause(5000);

    await browser.pause(5000);
    await browser.pause(5000);
    await browser.pause(3000);

    await browser.pause(3000);
    await browser.pause(3000);
    await browser.pause(3000);

    // const usernameField = $('#username');
    // const passwordField = $('#password');
    // const loginButton = $('#login-button');

    // usernameField.setValue('validUsername');
    // passwordField.setValue('validPassword');
    // loginButton.click();

    // browser.waitUntil(() => $('#dashboard').isDisplayed(), {
    //   timeout: 5000,
    //   timeoutMsg: 'Dashboard did not appear after login',
    // });

    // const welcomeMessage = $('.welcome-message');
    // expect(welcomeMessage.getText()).toEqual('Welcome, User!');

    console.log("Hello MH")
    console.log("Hello MH")
    console.log("Hello MH")
    console.log("Hello MH")
    console.log("Hello MH")
    console.log("Hello MH")
    console.log("Hello MH")
    console.log("Hello MH")
    console.log('hlw skb');
    console.log('hlw skb');

    console.log('hlw skb');

    console.log('hlw skb');

    console.log('hlw skb');

    console.log('hlw skb');
  });
});
