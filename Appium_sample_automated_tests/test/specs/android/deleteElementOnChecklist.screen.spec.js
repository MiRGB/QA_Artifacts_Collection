import { testItem1, titleChecklist } from "../../data/data";
import DeleteElChecklistScreen from "../../screenobjects/android/deleteElementOnChecklist.screen";
import DeleteNoteScreen from "../../screenobjects/android/deleteNote.screen";

describe('delete element on checklist', () => {
    it('skip tutorial', async () => {
        await DeleteNoteScreen.skipTutorial();
    });

    it('add calendar checklist', async () => {
        await DeleteElChecklistScreen.addCalendarChecklist(titleChecklist, testItem1);
    });

    it('delete element on checklist', async () => {
        await DeleteElChecklistScreen.deleteBtn.click();
        await expect(DeleteElChecklistScreen.checklistEl()).not.toBeExisting();
    });
});