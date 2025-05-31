import DeleteNoteScreen from "./deleteNote.screen";

class SortNotesScreen {
    async addNote(titleNote, bodyNote) {
        await $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]').waitForDisplayed({ timeout: 5000 });
        await DeleteNoteScreen.saveNote(titleNote, bodyNote);
        // see list of notes
        await driver.back();
    }

    get sortBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text_button_center"]');
    }

    get byColorBtn() {
        return $('//*[@text="by color"]');
    }

    get byAlphabeticallyBtn() {
        return $('//*[@text="alphabetically"]');
    }

    get firstEl() {
        return $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }
}

export default new SortNotesScreen();