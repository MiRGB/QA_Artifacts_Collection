import { notesList, notesMap } from "../../data/data";
import DeleteNoteScreen from "../../screenobjects/android/deleteNote.screen";
import SortNotesScreen from "../../screenobjects/android/sortNotes.screen";

describe('Sort Notes', () => {
    it('skip tutorial', async () => {
        await DeleteNoteScreen.skipTutorial();
    });

    it('add 4 notes', async () => {
        for (const { note, test } of notesList) {
            await SortNotesScreen.addNote(note, test);
        }
    });

    it('change to "sort alphabetically"', async () => {
        await SortNotesScreen.sortBtn.click();
        await SortNotesScreen.byColorBtn.waitForDisplayed({ timeout: 5000 });
        await expect(SortNotesScreen.byColorBtn).toBeExisting();

        await SortNotesScreen.byAlphabeticallyBtn.click();
        await SortNotesScreen.firstEl.waitForDisplayed({ timeout: 5000 });
        const firstNote = await SortNotesScreen.firstEl;

        await expect(firstNote).toHaveText(notesMap.aNote);
    }); 
});