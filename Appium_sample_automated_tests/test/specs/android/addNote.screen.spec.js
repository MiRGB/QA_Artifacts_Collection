import AddNoteScreen from "../../screenobjects/android/addNote.screen";
import { bodyValue, titleValue } from "../../data/data";

describe('Add Notes', () => {
    it('skip tutorial', async () => {
        await AddNoteScreen.skipBtn.click();
        await expect(AddNoteScreen.addNoteText).toBeDisplayed();
    });

    it('add note', async () => {
        await AddNoteScreen.addNoteText.click();
        await expect(AddNoteScreen.checklistText).toBeExisting();
        await AddNoteScreen.textText.click();
        await expect(AddNoteScreen.editingText).toBeDisplayed();

        // add title
        await AddNoteScreen.titleInput.setValue(titleValue);

        // add body
        await AddNoteScreen.bodyInput.addValue(bodyValue);

        // save
        await AddNoteScreen.saveNote();

        // assertion
        await expect(AddNoteScreen.editNoteBtn).toBeDisplayed();

        await expect(AddNoteScreen.bodyView).toHaveText(bodyValue);

        await expect(AddNoteScreen.titleInput).toHaveText(titleValue);
    });
});