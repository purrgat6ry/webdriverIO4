import { browser } from '@wdio/globals'

export default class Page {

    openHomepage () {
        return browser.url(`https://cloud-dot-devsite-v2-prod.appspot.com/`)
    }

    openCalculator () {
        return browser.url(`https://cloudpricingcalculator.appspot.com/`)
    }
}
