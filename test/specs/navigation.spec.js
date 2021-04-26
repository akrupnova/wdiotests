import MainPage from '../pageobjects/portal/main.portal.page';
import CoursesPage from '../pageobjects/portal/courses.portal.page';

describe('Navigation', () => {

    before( () => {
        browser.login('anna.krupnovaa@gmail.com', '123zxc!!');
    });

    beforeEach(() => {
        MainPage.open();
    });

    it('courses page opens', () => {
        MainPage.goToCourses();
        CoursesPage.isOpen();
   });

    // it('cards page opens', () => {
    //     MainPage.goToCards();
    //     CardsPage.isOpen();
    // });

});