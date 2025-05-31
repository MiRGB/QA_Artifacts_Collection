import { testItem1, testItem2, titleChecklist } from "../../data/data";
import DeleteElChecklistScreen from "../../screenobjects/android/deleteElementOnChecklist.screen";
import DeleteNoteScreen from "../../screenobjects/android/deleteNote.screen";
import MoveElChecklistScreen from "../../screenobjects/android/moveElementsOnChecklist.screen";

describe('Move elements on checklist', () => {
    it('skip tutorial', async () => {
        await DeleteNoteScreen.skipTutorial();
    });

    it('add calendar checklist', async () => {
        await DeleteElChecklistScreen.addCalendarChecklist(titleChecklist, testItem1);
    });

    it('drag and drop', async () => {
        // add second item
        await MoveElChecklistScreen.addItem(testItem2);

        // save bottom item text
        const bottomItem = await MoveElChecklistScreen.bottomEl.getText();

        // drag and drop
        await MoveElChecklistScreen.dragAndDrop();

        // save upper item text
        const upperItem = await MoveElChecklistScreen.bottomEl.getText();

        // assertion
        await MoveElChecklistScreen.waitEl.waitForDisplayed({ timeout: 5000 });
        await expect(bottomItem).not.toEqual(upperItem);

        // save note
        await MoveElChecklistScreen.saveBtn.click();
        await MoveElChecklistScreen.saveEl.waitForDisplayed({ timeout: 5000 });
        const savedItem = await MoveElChecklistScreen.saveEl.getText();
        await expect(savedItem).toEqual(upperItem);
    });
});