import { testItem1, titleChecklist } from "../../data/data";
import DeleteChecklistScreen from "../../screenobjects/android/deleteChecklist.screen";
import DeleteNoteScreen from "../../screenobjects/android/deleteNote.screen";

describe('Delete checklist', () => {
    it('skip tutorial', async () => {
        await DeleteNoteScreen.skipTutorial();
    });

    it('add calendar checklist', async () => {
        await DeleteChecklistScreen.addCalendarChecklist(titleChecklist, testItem1);
    });

    it('delete checklist', async () => {
        // delete checklist
        await DeleteChecklistScreen.moreBtn.click();
        await DeleteChecklistScreen.deleteBtn.click();
        await driver.acceptAlert();
        await expect(DeleteChecklistScreen.checklistEl).not.toBeExisting();
    });
});