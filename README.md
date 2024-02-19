# QUIZZED

Quizzed is a Quiz game based on general knowledge questions. The home page gives a brief introduction and instructions on how to play. The game area has 20 questions with 4 multiple choice answers to each question that one can choose from. When the correct answer is chosen the button lights up greena nd when the wrong answer is chosen the button turns red. The score is shown at the end of the quiz. The form page has a form for the user to complete tlo register their details to be updated whenever there is a new quiz uploaded on the page.

![mockup](readme-images/am-i-responsive-screenshot.jpg)

## FEATURES

### SITE WIDE
* Logo
  * The logo is an image of a brain which goes hand in hand with the subject of general knowledge. Quizzes are in my opinion, brain games. The logo appears at the top, center of the page and is shown across all 3 pages.

* Navigation Menu
  * Contains links to the Home, Game Area and Form pages. It is responsive on all devices.
    * The navigation allows users to navigate between the pages easily within the site on any device.
    * The logo also allows users to return to the Home page by clicking on it from anywhere in the site.

![Navigation menu](readme-images/nav-bar-screenshot.jpg)

* Footer
  * This has links to social media websites that open in new tabs. Icons will be accessible to the visually impaired who may be using a screen reader by the use of aria-labels.

![Footer menu](readme-images/footer-screenshot.jpg)

* Favicon
  * The favicon will display as an image on the left in the page window tab next to the page name. The favicon appears when the user is on any page.
  * The favicon makes it easy for users to identify and open the website if they have many tabs open on their screen.

![Favicon](readme-images/favicon-screenshot.jpg)

* 404 Page
  * A 404 page will be implemented and will display if a user navigates to a broken link.

![404-error](readme-images/404-error-screenshot.jpg)

### HOME PAGE

* Welcome Paragraph
  * This paragraph welcomes the user to the game and let's them know what is in store.

* Instruction Paragraph
  * This paragraph explains to the user how to play the game.

* Game Area Button
  * The Game Area button that is displayed on the home page is not in line with the other items on the navigation menu as it is a link to the game area and is sisplayed at the bottom of the page so that after the user has read the instructions, they do not have to go too far to click on the link to go to the game area.

### GAME AREA PAGE

* Game area
  * The game area has the page displays the question in bold, large font which is easily readeable for the user.
  * The buttons with the answer choices are large to allow for an easy reading of the choices and ample space to click on the answer.
  * The questions are numbered from 1 - 20.
  * On clicking each question, the answer will turn red if it is incorrect and green if it is correct.
  * On clicking each question, the next question will display after a question is answered.

![Gallery-paragraph](readme-images/gallery-page-paragraph-screenshot.jpg)

### FORM PAGE

* Register Paragraph
  * This paragraph thanks the user for playing and congratulates them for completing the quiz.

* Form
  * The form has a name, password, email and comment section for the user to complete.
  * On completing the form the user clicks on the register button to submit their details to register.

### EXISTING FEATURES

* The design is responsive on mobile, tablet and laptop displays.
* The site has a register form and success page

### FEATURES TO IMPLEMENT

* I would like to add some more styling to the website like a new background and a difeerent font. Currently the focus is on getting the code to simply function.
* I would like to add different quiz subjects so the user can choose between general knowledge, music, film, sports etc.

## TECHNOLOGIES

* JavaSrript
  * JavaScript was used to create the functions based off of the basic html structure.
* HTML
  * HTML was used to create the structure of the website.
* CSS
  * The website was styled using custom CSS.
* Codeanywhere
  * Codeanywhere IDE was used to develop the website
* GitHub
  * The source code is hosted on GitHub and the site was deployed using Git Pages
* Git
  * Git was used to commit and push code during the development of the website
* Font Awesome
  * Icons from <https://fontawesome.com/> were used for the social media links in the footer section and the favicon.
* Favicon
  * The favicon was created at <https://favicon.io/favicon-converter/>
  
## TESTING

### Responsiveness

All pages were tested to ensure responsiveness on screen sizes from 320px and upwards in <https://ui.dev/amiresponsive>, on Chrome and Microsoft Edge browsers.

Steps to test:

1. Open browser and navigate to <https://tammygirl2015.github.io/Quizzed/>
2. Open the developer tools (right click and inspect)
3. Set to responsive and decrease width to 320px
4. Click and drag the responsive window to maximum width

Expected:

Website is responsive on all screen sizes and no images are pixelated or stretched.
No horizontal scroll is present.
No elements overlap.

Actual:

Website behaved as expected.

The website was also opened on the following devices and no responsive issues were seen:

* iPhone 13
* iPhone 14
* Samsung Galaxy S9 Plus
* Samsung Galaxy Tablet

### Accessibility

Wave Accessibility (<https://wave.webaim.org/>) tool was used for final testing of the deployed website to check for and aid accessibility testing.

![Wave-accessibility-testing](readme-images/wave-summary-screenshot.jpg)

* All forms have associated labels or aria-labels so that this is read out on a screen reader to users who tab to form inputs
* Color contrasts meet a minimum ratio as specified in [WCAG 2.1 Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
* Heading levels are not missed or skipped to ensure the importance of content is relayed correctly to the end user
* All content is contained within landmarks to ensure ease of use for assistive technology, allowing the user to navigate by page regions
* All non textual content has alternative text or titles so descriptions are read out to screen readers
* HTML page lang attribute has been set
* Aria properties have been implemented correctly

### Lighthouse Testing

![Lighthouse-Home-Test](readme-images/lighthouse-home-test-screenshot.jpg)
![Lighthouse-Home-Test](readme-images/lighthouse-gallery-test-screenshot.jpg)
![Lighthouse-Home-Test](readme-images/lighthouse-discovermore-test-screenshot.jpg)

### Functional Testing

* Nav links
* Footer links
* Form submit fields

Description                                                                            |Action                                                             |Expected Result                                                                                                                                                                                                                                                           |Pass/Fail
---------------------------------------------------------------------------------------|---------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------
Test Logo goes to correct page                                                         |Click on logo                                                        |Logo-> Home (index.html)                                                                                                                                                                                                                                                  |Pass
Test nav links go to correct pages                                                     |Click each link in the nav bar from each page                        |Home-> index.html; Gallery-> gallery.html; Discover More-> discovermore.html                                                                                                                                                                                              |Pass
Test footer links go to correct pages in new tab                                       |Click on link                                                        |Facebook-> <https://www.facebook.com>; Instagram-><https://www.instagram.com;> YouTube-><https://www.youtube.com;> Twitter(X)-><https://www.twitter.com;> Threads-><https://www.threads.com>                                                                                        |Pass
Test if the Discover More page form first name field requires input                    |Input text in field and click submit (Discover More!) button         |Page does not submit if first name and all required fields are not completed. If first name and all other fields are completed correctly, the page loads to code institute formdump congratulations page and displays input                                               |Pass
Test if the Discover More page form last name field requires input                     |Input text in field and click submit (Discover More!) button         |Page does not submit if last name and all required fields are not completed. If last name and all other fields are filled correctly, page loads to code institute formdump congratulations page and displays input                                                        |Pass
Test if the Discover More page form email address field requires email address         |Input email address in field and click submit (Discover More!) button|Page does not submit if an email address is not input and other input fields are not completed. If email address and all other fields are completed correctly, the page loads to code institute formdump congratulations page and displays input displaying provided input|Pass
Test if Discover More page form submit (Discover More!) button POSTS to correct address|Input required fields and click on submit (Discover More!) button    |Opens code institute formdump congratulations page and displays input                                                                                                                                                                                                     |Pass

### Validator Testing

* HTML

![index.html-validation-test](readme-images/home-validator-screenshot.jpg)
![gallery.html-validation-test](readme-images/gallery-validator-screenshot.jpg)
![discovermore.html-validation-test](readme-images/discovermore-validator-screenshot.jpg)
  
* CSS

![css-validation-test](readme-images/css-validator-screenshot.jpg)

### Unfixed Bugs

* 1 alert in wave regarding a repititiive link.
![Wave warning](readme-images/wave-summary-screenshot.jpg)

* Some info indicated in html and css code regarding trailing slashes on void elements to be corrected at a later date.

![HTML-info-message](readme-images/html-info.jpg)

### Version Control

The site was created using the Codeanywhere code editor and pushed to github to the remote repository ‘Vairgo’.

The following git commands were used throughout development to push code to the remote repo:

```git add . <file>``` - This command was used to add the file(s) to the staging area before they are committed.

```git commit -m “commit message”``` - This command was used to commit changes to the local repository queue ready for the final step.

```git push``` - This command was used to push all committed code to the remote repository on github.

### Deployment to Github Pages

* The site was deployed to GitHub pages. The steps to deploy are as follows:
  * In the GitHub repository, navigate to the Settings tab
  * From the menu on left select 'Pages'
  * From the source section drop-down menu, select the Branch: main
  * Click 'Save'
  * A live link will be displayed in a green banner when published successfully.

The live link can be found here -  [Vairgo Travel Blog](<https://tammygirl2015.github.io/Vairgo>)

### Clone the Repository Code Locally

Navigate to the GitHub Repository you want to clone to use locally:

* Click on the code drop down button
* Click on HTTPS
* Copy the repository link to the clipboard
* Open your IDE of choice (git must be installed for the next steps)
* Type git clone copied-git-url into the IDE terminal

The project will now have been cloned on your local machine for use.

## CREDITS

### Page Name

* The page name was initially Trivia Time however i did not think at some point that the questions put on the website were trivia based but rather more general knowledge based hence the change to: Quizzed.

### Format

* The format of the website is credited to looking at the general layout of several quiz pages online and i had a general idea of the format of the quiz i wanted to create.
* The READme is a template from a previous project of mine and adjusted to suit the project.

### Content

* Content is credited to myself for text input with questions being taken from several websites as templates for sample questions.

### Media

* All images used were taken from <https://pexels.com>
