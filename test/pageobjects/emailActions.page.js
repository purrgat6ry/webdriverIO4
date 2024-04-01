import { expect, browser, $ } from '@wdio/globals';
import Page from './page.js';

class emailActions extends Page {
    // Función  para extraer números del texto.
    valueExtract(textValue) {
        const result = textValue.match(/[\d,]+\.\d+/);
        return result ? parseFloat(result[0].replace(/,/g, '')) : null;
    }


    async createMailAndVerify() {
        
        await browser.newWindow('https://email-fake.com/');
        expect(await browser.getUrl()).toContain('https://email-fake.com/');
        await $("#copbtn").click();  // Supone que este botón copia al portapapeles.

        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[0]); 
        
        const firstEstimate = await $(".md-flex.ng-binding.ng-scope").getText();
        const firstExtractValue = this.valueExtract(firstEstimate);

        const emailEstimateButton = await $("(//button[@id='Email Estimate'])[1]");
        await emailEstimateButton.click();

        await $("#dialogContent_626 > form > md-content > div:nth-child(3)").click(); 
        await browser.keys(['Control', 'v']);

        const sendButton = await $("button[ng-disabled='emailForm.$invalid']");
        await sendButton.click();

        await browser.switchToWindow(handles[1]);
        await browser.refresh();

        const secondEstimate = await $("tbody tr td:nth-child(2) h3:nth-child(1)").getText();
        const secondExtractValue = this.valueExtract(secondEstimate);
        expect(firstExtractValue).toEqual(secondExtractValue); 
    }
}

export default new emailActions();
