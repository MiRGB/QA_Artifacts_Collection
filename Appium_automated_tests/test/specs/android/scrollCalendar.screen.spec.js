import AddCalendarChecklistScreen from "../../screenobjects/android/addCalendarChecklist.screen";
import DeleteNoteScreen from "../../screenobjects/android/deleteNote.screen";
import ScrollCalendarScreen from "../../screenobjects/android/scrollCalendar.screen";

describe('Scroll Calendar to next month', () => {
    it('skip tutorial', async () => {
        await DeleteNoteScreen.skipTutorial();
    });

    it('open calendar', async () => {
        await AddCalendarChecklistScreen.menuNav.click();
        await AddCalendarChecklistScreen.calendarBtn.click();
    });
    

    it('scroll to next month', async () => {
        await ScrollCalendarScreen.dateBtn.waitForDisplayed({ timeout: 5000 })
        const activeMonth = ScrollCalendarScreen.dateBtn.getText();

        await ScrollCalendarScreen.scrollToEnd();

        const nextMonth = await ScrollCalendarScreen.dateBtn.getText();

        await expect(activeMonth).not.toEqual(nextMonth);
    });
});