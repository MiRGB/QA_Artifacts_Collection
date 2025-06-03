import { testItem1, titleChecklist } from "../../data/data";
import AddCalendarChecklistScreen from "../../screenobjects/android/addCalendarChecklist.screen";
import DeleteNoteScreen from "../../screenobjects/android/deleteNote.screen";

describe('Add calendar checklist', () => {
    it('skip tutorial', async () => {
        await DeleteNoteScreen.skipTutorial();
    });

    it('add calendar checklist', async () => {
        // open calendar
        await AddCalendarChecklistScreen.menuNav.click();
        await AddCalendarChecklistScreen.calendarBtn.click();

        // select a day
        await AddCalendarChecklistScreen.selectDay();

        // add checklist
        await AddCalendarChecklistScreen.addToCalendarBtn.click();
        await AddCalendarChecklistScreen.addTextNoteBtn.waitForDisplayed({ timeout: 5000 });
        await expect(AddCalendarChecklistScreen.addTextNoteBtn).toBeExisting();
        await AddCalendarChecklistScreen.addChecklistNoteBtn.click();
        await AddCalendarChecklistScreen.editingText.waitForDisplayed({ timeout: 5000 });
        await expect(AddCalendarChecklistScreen.editingText).toBeExisting();

        // add title
        await AddCalendarChecklistScreen.checklistTitle.setValue(titleChecklist);

        await driver.back();

        // add item
        await AddCalendarChecklistScreen.addItemBtn.click();

        await AddCalendarChecklistScreen.itemInput.setValue(testItem1);

        await AddCalendarChecklistScreen.okBtn.click();

        await AddCalendarChecklistScreen.itemElement().waitForDisplayed({ timeout: 5000 });
        await expect(AddCalendarChecklistScreen.itemElement()).toHaveText(testItem1);

        // save checklist
        await AddCalendarChecklistScreen.saveChecklistBtn.click();
        const elementTitle = await AddCalendarChecklistScreen.checklistSavedEl.getText();
        await expect(elementTitle).toEqual(testItem1);
    });
});