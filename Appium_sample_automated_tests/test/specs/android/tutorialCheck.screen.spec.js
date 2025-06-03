import AddNoteScreen from "../../screenobjects/android/addNote.screen";
import DeleteNoteScreen from "../../screenobjects/android/deleteNote.screen";
import TutorialCheckScreen from "../../screenobjects/android/tutorialCheck.screen";

describe('Tutorial check', () => {
    it('skip tutorial', async () => {
        await DeleteNoteScreen.skipTutorial();
    });

    it('tutorial loads', async () => {
        // click on nav and change main theme
        await DeleteNoteScreen.navBtn.click();

        await TutorialCheckScreen.tutorialBtn.click();

        // assertion
        await expect(AddNoteScreen.skipBtn).toBeDisplayed();
    });
});