import AddCalendarChecklistScreen from "./addCalendarChecklist.screen";


class DeleteChecklistScreen {
    get moreBtn() {
        return $('~More');
    }

    get deleteBtn() {
        return $('//*[@text="Delete"]');
    }

    get checklistEl() {
        return $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text"]');
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
        
        //add title
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
        await expect(elementTitle).toEqual(testItem1)
    }
}

export default new DeleteChecklistScreen();