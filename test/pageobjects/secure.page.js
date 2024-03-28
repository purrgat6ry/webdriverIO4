import { $ } from '@wdio/globals'
import Page from './page.js';

class SecurePage extends Page {
    /**
     * define selectors using getter methods
    */
    get flashAlert () {
        return $("span[class='richtext']");
    }  

    get calculatorAlert() {
        return $("h2[class='ng-binding']");
    }

    get estimateAlert() {
        return $("#resultBlock");
    }

    get emailAlert() {
        return $(".table");
    }

    async titleMatch() {
        let pageTitle = await browser.getTitle();
        pageTitle = pageTitle.replace(/\s/g, ' ');
        const expectedTitle = "Cloud Computing Services  |  Google Cloud".replace(/\s/g, ' ');
        expect(pageTitle).toEqual(expectedTitle);
    }

    async titleCalculator() {
        const calculatorTitle = await browser.getTitle();
        expect(calculatorTitle).toEqual("Cloud Pricing Calculator");
    }

    async totalEstimate() {
        const calculatorTitle = await browser.getTitle();
        expect(calculatorTitle).toEqual("Cloud Pricing Calculator");
    }
}

export default new SecurePage();
