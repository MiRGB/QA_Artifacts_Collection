import { testItem1 } from "../../data/data";

class AddCalendarChecklistScreen {
    get menuNav() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get calendarBtn() {
        return $('//*[@text="Calendar"]');
    }

    get addToCalendarBtn() {
        return $('//*[@text="Add"]');
    }

    get addTextNoteBtn() {
        return $('//*[@text="Text"]');
    }

    get addChecklistNoteBtn() {
        return $('//*[@text="Checklist"]');
    }

    get editingText() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/datetime_relative"]');
    }

    get checklistTitle() {
        return $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    get addItemBtn() {
        return $('//*[@text="Add Item"]');
    }

    get itemInput() {
        return $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit"]');
    }

    get okBtn() {
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }

    itemElement(text = testItem1) {
    return $(`android=new UiSelector().textContains("${text}")`);
    }

    get saveChecklistBtn() {
        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/back_btn"]');
    }

    get checklistSavedEl() {
        return $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text"]');
    }

    
    get calendarEl() {
        return $('id=com.socialnmobile.dictapps.notepad.color.note:id/month_view');
    }

    async selectDay() {
        const monthView = await this.calendarEl;

        const rect = await browser.getElementRect(monthView.elementId);

        const cols = 7;
        const rows = 6;

        const dayWidth = rect.width / cols;
        const dayHeight = rect.height / rows;

        const dayNumber = 15;
        const dayIndex = dayNumber - 1;

        const row = Math.floor(dayIndex / cols);
        const col = dayIndex % cols;

        const clickX = Math.floor(rect.x + col * dayWidth + dayWidth / 2);
        const clickY = Math.floor(rect.y + row * dayHeight + dayHeight / 2);

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: clickX, y: clickY },
                { type: 'pointerDown', button: 0 },
                { type: 'pointerUp', button: 0 } ],
        }]);
    }
}

export default new AddCalendarChecklistScreen();