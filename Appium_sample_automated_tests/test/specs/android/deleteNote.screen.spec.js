import DeleteNoteScreen from "../../screenobjects/android/deleteNote.screen";
import { titleValue, bodyValue } from "../../data/data";

describe('Delete Notes', () => {
    it('skip tutorial', async () => {
        await DeleteNoteScreen.skipTutorial();
    });

    it('add note', async () => {
        await DeleteNoteScreen.saveNote(titleValue, bodyValue);
    });

    it('delete note', async () => {
        // see list of notes
        await driver.back();

        // assertion
        await DeleteNoteScreen.titleView.waitForDisplayed({ timeout: 5000 });
        await expect(DeleteNoteScreen.titleView).toHaveText(titleValue);

        // delete note
        await DeleteNoteScreen.titleView.click();
        await DeleteNoteScreen.moreBtn.click();
        await DeleteNoteScreen.deleteBtn.click();
        await driver.acceptAlert();

        // check
        await DeleteNoteScreen.navBtn.click();
        await DeleteNoteScreen.trashBtn.click();
        await DeleteNoteScreen.titleView.waitForDisplayed({ timeout: 5000 });
        await expect(DeleteNoteScreen.titleView).toHaveText(titleValue);
    });
});