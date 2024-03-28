import { expect } from '@wdio/globals'
import homePage from '../pageobjects/homePage.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import formCalculator from '../pageobjects/formCalculator.page.js'
import emailActions from '../pageobjects/emailActions.page.js'

describe('Google Cloud Calculator', () => {
    it('should search calculator', async () => {
        await homePage.openHomepage()
        await homePage.search("Google Cloud Platform Pricing Calculator")
        //SS de que funciona
        await SecurePage.titleMatch();
        await expect(SecurePage.flashAlert).toMatchElementSnapshot('flashAlert')

        await homePage.openCalculator()
    })

    it('should show calculator', async () => {
        await homePage.cloudCalculator();
        
        await SecurePage.titleCalculator();
        await expect(SecurePage.calculatorAlert).toMatchElementSnapshot('calculatorAlert')

        await homePage.selectComputeEngine();
    })

    it('Estimate Form', async () => {
        await formCalculator.completeEstimationForm();
        await expect(SecurePage.estimateAlert).toMatchElementSnapshot('estimateAlert')
    });

    it('Create Mail and Send', async () => {
        await emailActions.createMailAndVerify();
        await expect(SecurePage.emailAlert).toMatchElementSnapshot('emailAlert')
    });



})

