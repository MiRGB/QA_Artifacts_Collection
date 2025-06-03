class ScrollCalendarScreen {
    get dateBtn() {
        return $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text_button_center"]');
    }

    async scrollToEnd() {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
    }
}

export default new ScrollCalendarScreen();