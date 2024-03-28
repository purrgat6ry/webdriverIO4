import { $ } from '@wdio/globals'
import Page from './page.js';


class homePage extends Page {

    get inputSearch () {
        return $("//input[@placeholder='Search']");
    }

    get optionComputeEngine () {
        return $("#tab-item-1 div.presets-buttons");
    }

    async search (searchText) {
        await this.inputSearch.setValue(searchText);
        await browser.keys('Enter')
    }

    async cloudCalculator() {
        await browser.url("https://cloudpricingcalculator.appspot.com/");
    }

    async selectComputeEngine() {
        await this.optionComputeEngine.click();
    }
}

export default new homePage();
