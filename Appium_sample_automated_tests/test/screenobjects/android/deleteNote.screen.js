import AddNoteScreen from "./addNote.screen";

class DeleteNoteScreen {
    get titleView() {
        return $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get moreBtn() {
        return $('~More');
    }

    get deleteBtn() {
        return $('//*[@text="Delete"]');
    }

    get navBtn() {
        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trashBtn() {
        return $('//*[@text="Trash Can"]');
    }

    async skipTutorial() {
        await AddNoteScreen.skipBtn.click();
        await AddNoteScreen.addNoteText.waitForDisplayed({ timeout: 5000 });
        await expect(AddNoteScreen.addNoteText).toBeDisplayed();
    }

    async saveNote(noteTitle, noteBody) {
        await AddNoteScreen.addNoteText.click();
        await AddNoteScreen.checklistText.waitForDisplayed({ timeout: 5000 });
        await expect(AddNoteScreen.checklistText).toBeExisting();
        await AddNoteScreen.textText.click();
        await AddNoteScreen.editingText.waitForDisplayed({ timeout: 5000 });
        await expect(AddNoteScreen.editingText).toBeDisplayed();
        
        // add title
        await AddNoteScreen.titleInput.setValue(noteTitle);
        
        // add body
        await AddNoteScreen.bodyInput.addValue(noteBody);
        
        // save
        await AddNoteScreen.saveNote();
        
        // assertion
        await AddNoteScreen.editNoteBtn.waitForDisplayed({ timeout: 5000 });
        await expect(AddNoteScreen.editNoteBtn).toBeDisplayed();
        
        await AddNoteScreen.bodyView.waitForDisplayed({ timeout: 5000 });
        await expect(AddNoteScreen.bodyView).toHaveText(noteBody);
        
        await AddNoteScreen.titleInput.waitForDisplayed({ timeout: 5000 });
        await expect(AddNoteScreen.titleInput).toHaveText(noteTitle);
    }
}

export default new DeleteNoteScreen();