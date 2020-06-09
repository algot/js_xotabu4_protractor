import { browser, $ } from "protractor"

describe('Registration', function () {
    it("should be successfull", async function () {
        await browser.get('/create_account');
        const form = $('[name="customer_form"]');

        await expect(form).toAppear();
        await form.$('[name="firstname"]').click();
        await form.$('[name="firstname"]').sendKeys('Test');
        await form.$('[name="lastname"]').sendKeys('Test');

        await form.$('[name="country_code"]').click();
        const afghanistan = form.$$('[name="country_code"] option').get(1);
        await expect(afghanistan).toAppear();
        await afghanistan.click();

        await form.$('[name="email"]').sendKeys(`test${new Date().getTime()}@test.com`);
        await form.$('[name="phone"]').sendKeys('123456789');

        await form.$('[name="password"]').sendKeys('123456');
        await form.$('[name="confirmed_password"]').sendKeys('123456');

        await form.$('[name="create_account"]').click();

        await expect($('.alert.alert-success')).toAppear('Registration should be successfull')
    })
})
