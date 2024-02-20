# QUIZZED

Quizzed is a Quiz game based on general knowledge questions. The home page gives a brief introduction and instructions on how to play. The game area has 20 questions with 4 multiple choice answers to each question that one can choose from. When the correct answer is chosen the button lights up green, and when the wrong answer is chosen the button turns red. The score is shown at the end of the quiz.

![Screenshot 2024-02-20 024900](https://github.com/TammyGirl2015/Quizzed/assets/148330702/dae1be53-82b9-4df8-a604-f3e0bfdb35ca)

## FEATURES

### SITE WIDE
* Logo
  * The logo is an image of a brain which goes hand in hand with the subject of general knowledge. Quizzes are in my opinion, brain games. The logo appears at the top, center of the page and is shown across both pages.
 
![Screenshot 2024-02-19 160049](https://github.com/TammyGirl2015/Quizzed/assets/148330702/602f0b92-a5e9-4c92-96c8-82f7f326dc9f)

* Navigation Menu
  * Contains links to the Home and Game Area pages. It is responsive on all devices.
    * The navigation allows users to navigate between the pages easily within the site on any device.

![Screenshot 2024-02-20 025116](https://github.com/TammyGirl2015/Quizzed/assets/148330702/74b57bcc-bf31-4017-96c5-1d0f6a323112)

* Footer
  * This has links to social media websites that open in new tabs. Icons will be accessible to the visually impaired who may be using a screen reader by the use of aria-labels.

![Screenshot 2024-02-19 135157](https://github.com/TammyGirl2015/Quizzed/assets/148330702/601ee4a4-b3b4-4901-a85a-4e7b8c6f8e6e)

* Favicon
  * The favicon will display as an image on the left in the page window tab next to the page name. The favicon appears when the user is on any page.
  * The favicon makes it easy for users to identify and open the website if they have many tabs open on their screen.

![Screenshot 2024-02-19 140331](https://github.com/TammyGirl2015/Quizzed/assets/148330702/4cd478fe-8340-4e01-b995-8147962c74b5)

### HOME PAGE

* Welcome Paragraph
  * This paragraph welcomes the user to the game and let's them know what is in store.

* Instruction Paragraph
  * This paragraph explains to the user how to play the game.

* Game Area Button
  * The Game Area button that is displayed on the home page is not in line with the other items on the navigation menu as it is a link to the game area and is isplayed at the bottom of the page so that after the user has read the instructions, they do not have to go too far to click on the link to go to the game area.
 
![Screenshot 2024-02-20 025305](https://github.com/TammyGirl2015/Quizzed/assets/148330702/4ab182a3-a707-44a2-8d79-92e65b037bff)

### GAME AREA PAGE

* Game area
  * The game area has the page displays the question in bold, large font which is easily readeable for the user.
  * The buttons with the answer choices are large to allow for an easy reading of the choices and ample space to click on the answer.
  * The questions are numbered from 1 - 20.
  * On clicking each question, the answer will turn red if it is incorrect and green if it is correct.
  * On clicking each question, the next question will display after a question is answered.
  * At the end of the quiz, the score will be displayed at the bottom of the page.

![Screenshot 2024-02-20 025335](https://github.com/TammyGirl2015/Quizzed/assets/148330702/d3af21c8-6b7f-419a-b1f8-02614a634f63)

### EXISTING FEATURES

* The design is responsive on mobile, tablet and laptop displays.

### FEATURES TO IMPLEMENT

* I would like to add some more styling to the website like a new background and a different font. Currently the focus is on getting the code to simply function.
* I would like to add different quiz subjects so the user can choose between general knowledge, music, film, sports etc.
* A form would be a nice addition to have the user give us their email address so that whenever there are new quizzes available they can receive an alert.

## TECHNOLOGIES

* JavaScript
  * JavaScript was used to create the functions to action the HTML code.
* HTML
  * HTML was used to create the structure of the pages.
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

![Screenshot 2024-02-20 024900](https://github.com/TammyGirl2015/Quizzed/assets/148330702/dae1be53-82b9-4df8-a604-f3e0bfdb35ca)

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

* iPhone 11
* iPhone 13
* iPhone 14
* Honor Magic 5 Lite
* Samsung Galaxy S9 Plus
* Samsung Galaxy Tablet

### Accessibility

Wave Accessibility (<https://wave.webaim.org/>) tool was used for final testing of the deployed website to check for and aid accessibility testing.

![Screenshot 2024-02-20 025919](https://github.com/TammyGirl2015/Quizzed/assets/148330702/0e887680-8ed8-48f7-8024-d89720d00c18)

![Screenshot 2024-02-20 030038](https://github.com/TammyGirl2015/Quizzed/assets/148330702/06a59ac4-e5a5-4f10-a5ca-142bbacdf990)

* All forms have associated labels or aria-labels so that this is read out on a screen reader to users who tab to form inputs
* Color contrasts meet a minimum ratio as specified in [WCAG 2.1 Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
* Heading levels are not missed or skipped to ensure the importance of content is relayed correctly to the end user
* All content is contained within landmarks to ensure ease of use for assistive technology, allowing the user to navigate by page regions
* All non textual content has alternative text or titles so descriptions are read out to screen readers
* HTML page lang attribute has been set to English
* Aria properties have been implemented correctly

### Lighthouse Testing



### Functional Testing

* Nav links
* Footer links
* Click answer function
* Results display

Description                                                      |Action                                            |Expected Result                                                                                                                                                                                                                                                           |Pass/Fail
-----------------------------------------------------------------|--------------------------------------------------|------------------------------------------------------|----------------------------------
Test nav links got to correct pages                           |Click on nav links                                |Home-> index.html; Game Area-> game.html                 |Pass


Test footer links go to correct pages in new tab              |Click on link                                     |Facebook-> <https://www.facebook.com>;                   |Pass
                                                                                                                  Instagram-><https://www.instagram.com>; 
                                                                                                                  Twitter(X)-><https://www.twitter.com>;
                                                                                                                  Threads-><https://www.threads.com>                        


Test buttons turn red/green when                              |Click on option buttons                           |Button lights red of incorrect and green if correct      |Pass
clicked on


Test 1.5sec delay after answer is chosen                      |Click on option buttons                           |1.5sec delay after the button is clicked on              |Pass


Test next question appears after answer is chosen and 1.5sec  |Click on option buttons                           |The button lights red/green 1.5sec delay passes and      |Pass
delay                                                                                                             the next question is displayed


Test results are displayed at the end of the quiz             |Complete quiz on clicking an option to the last  |The results are displayed at the bottom of the screen     |Pass
                                                               question                                          based on how many questions were answered correctly

### Validator Testing

* HTML
  
![Screenshot 2024-02-19 152110](https://github.com/TammyGirl2015/Quizzed/assets/148330702/f0457652-cc1a-4e07-b00c-ec08706eda12)

 
* CSS
  
![Screenshot 2024-02-19 152702](https://github.com/TammyGirl2015/Quizzed/assets/148330702/9d71ca5b-1244-4c44-bfa1-b5c693d2122d)

* JavaScript

  
### Unfixed Bugs

* 1 alert in wave regarding a repititiive link.
![Wave warning](readme-images/wave-summary-screenshot.jpg)

* Some info indicated in html and css code, namely trailing slashes on void elements to be corrected at a later date.

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

The live link can be found here - 

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

* The page name was initially Trivia Time however at some point during the making of the site, i didn't feel that the questions were trivia but rather more general knowledge based hence the change to: Quizzed.

### Format

* The format of the website is credited to looking at the general layout of several quiz pages online and i had a general idea of the format of the quiz i wanted to create and ultimately went with that.
* The READme is a template from a previous project of mine and adjusted to suit the project.

### Content

* Content is credited to myself for text input with the answers to the 'made up' questions and some of the questions being taken from Google.

### Media

* All images used were taken from <https://pexels.com>
