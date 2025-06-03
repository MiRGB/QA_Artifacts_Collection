class MoveElChecklistScreen {
    async addItem(text) {
        // add second item
        await $('//*[@text="Add Item"]').click();

        await $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit"]').setValue(text);

        await $('//android.widget.Button[@resource-id="android:id/button1"]').click();

        const item = $(`android=new UiSelector().textContains("${text}")`);
        await item.waitForDisplayed({ timeout: 5000 });
        await expect(item).toHaveText(text);
    }

    async dragAndDrop() {
        const source = await $('(//android.widget.ImageView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_drag"])[2]');
        const target = await $('(//android.widget.ImageView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_drag"])[1]');

        const sourceRect = await driver.getElementRect(source.elementId);
        const targetRect = await driver.getElementRect(target.elementId);

        const startX = Math.floor(sourceRect.x + sourceRect.width / 2);
        const startY = Math.floor(sourceRect.y + sourceRect.height / 2);
        const endX = Math.floor(targetRect.x + targetRect.width / 2);
        const endY = Math.floor(targetRect.y + targetRect.height / 2);

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 800 },
                { type: 'pointerMove', duration: 600, x: endX, y: endY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
    }

    get bottomEl() {
        return $('(//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text"])[2]');
    }

    get waitEl() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text"]');
    }

    get saveBtn() {
        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/back_btn"]');
    }

    get saveEl() {
        return $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text"]');
    }
}

export default new MoveElChecklistScreen();