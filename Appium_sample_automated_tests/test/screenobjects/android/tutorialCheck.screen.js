class TutorialCheckScreen {
    get tutorialBtn() {
        return $('//android.widget.TextView[@text="Tutorial"]');
    }
}

export default new TutorialCheckScreen();