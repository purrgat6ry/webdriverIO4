import { $ } from '@wdio/globals';
import Page from './page.js';

class formCalculator extends Page {
    // Define los selectores como propiedades de la clase
    get inputInstances() { return $("#input_100"); }
    get inputInstancesUse() { return $("#input_101"); }
    get inputOs() { return $("#select_113"); }
    get optionOs() { return $("#select_option_102");}
    get inputModel() { return $("#select_117"); }
    get optionModel() { return $("#select_option_115"); }
    get inputMachine() { return $("#select_123"); }
    get optionMachine() { return $("#select_option_119"); }
    get inputSeries() { return $("#select_125"); }
    get optionSeries() { return $("#select_option_224"); }
    get inputType() { return $("#select_127"); }
    get optionType() { return $("//div[contains(text(), 'n1-standard-8 (vCPUs: 8, RAM: 30GB)')]"); }
    get optionCheckbox() { return $("(//div[@class='md-container md-ink-ripple'])[3]"); }
    get inputGpu() { return $("#select_510"); }
    get optionGpu() { return $("#select_option_517"); }
    get inputSsd() { return $("#select_469"); }
    get optionSsd() { return $("//div[contains(text(), '2x375 GB')]"); }
    get inputLocation() { return $("#select_133"); }
    get optionLocation() { return $("#select_option_268") }
    get inputUsage() { return $("#select_140"); }
    get optionUsage() { return $("#select_option_138") }
    get addEstimate() { return $("(//button[@type='button'][normalize-space()='Add to Estimate'])[1]"); }   


    // Método para interactuar con el formulario y completar la estimación
    async completeEstimationForm() {
        await this.inputInstances.addValue("4");
        await this.inputInstancesUse.clearValue();

        await this.inputOs.click();
        await this.optionOs.waitForDisplayed({ timeout: 5000 })
        await this.optionOs.click();


        await this.inputModel.click();
        await this.optionModel.waitForDisplayed({ timeout: 5000 })
        await this.optionModel.click();

        await this.inputMachine.click();
        await this.optionMachine.waitForDisplayed({ timeout: 5000 })
        await this.optionMachine.click();

        await this.inputSeries.click();
        await this.optionSeries.waitForDisplayed({ timeout: 5000 })
        await this.optionSeries.click();

        await this.inputType.click();
        await this.optionType.waitForDisplayed({ timeout: 5000 })
        await this.optionType.click();

        await this.optionCheckbox.click();

        await this.inputGpu.click();
        await this.optionGpu.waitForDisplayed({ timeout: 5000 })
        await this.optionGpu.click();

        await this.inputSsd.click();
        await this.optionSsd.waitForDisplayed({ timeout: 5000 })
        await this.optionSsd.click();

        await this.inputLocation.click();
        await this.optionLocation.waitForDisplayed({ timeout: 5000 })
        await this.optionLocation.click();

        await this.inputUsage.click();
        await this.optionUsage.waitForDisplayed({ timeout: 5000 })
        await this.optionUsage.click();

        await this.addEstimate.click();

    }
}

export default new formCalculator();
