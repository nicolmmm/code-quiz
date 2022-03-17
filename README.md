for this project I two html pages, one for my quiz and one for my score page.The index.html page holds the content from the quiz which is dynamically updated using javascript each time a question is answered correctly. When a question is answered incorrectly, 10sec is deducted from the timer. At the end of the quiz the user's score is saved in local memory and then shown on the score page where the user can add their initials.

I believe this project could have been improved with the following features which I was not able to impliment due to time constraints:
- if the user could save their score in local storage so they can compare scores in between games
- if I had a more intellegent way of populating the questions and answer fields rather than having a dedicated function for each question. (see lines 43-147)
- ** there is a bug where question 4 will score 2 points instead of 1, making the final score 6 instead of 5. I was not able to work out why this was happening.