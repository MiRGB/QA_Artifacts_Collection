import { testItem1 } from "../../data/data";
import AddCalendarChecklistScreen from "./addCalendarChecklist.screen";

class DeleteElChecklistScreen {
    get deleteBtn() {
        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_del"]');
    }

    checklistEl(text = testItem1) {
        return $(`android=new UiSelector().textContains("${text}")`);
    }

    async addCalendarChecklist(titleChecklist, testItem1) {
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
    }
}

export default new DeleteElChecklistScreen();