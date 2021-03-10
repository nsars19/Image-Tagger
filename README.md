This is an image tagging application built for several reasons.

View it live [here](https://nsars19.github.io/Image-Tagger/)!
The backend for this project can be found [here](https://github.com/nsars19/Image-Tagger-API).

This application consumes JSON payloads from a separate Rails api that stores both the character location data and the highscores data.
Upon selecting a level the location data is fetched from the backend, and that level's characters are populated from the returned data. This
populating can be seen in the modal menu. The location data of each character is stored as a decimal representing the percent start and end of their position in the image. For example if Waldo is located between 21.6% and 22.7% on the x axis this will be represented by { x: [0.216, 0.227] } within the Waldo property of the returned JSON.

After a level is selected the game starts! A timer is started at this time, and upon completion of the level it is stopped. The total time is available for POSTing to the backend via the form that renders when the game ends. The player can enter their name, and click submit to post their name and time to the leaderboards. Upon posting of this data the player is then directed to the leaderboard view, which defaults to showing the ten highest scores for the level they just played. They can choose to look at the leaderboards for any of the six levels, choose to play any of these levels, or return to the level selection view.


To run locally:
1) Clone this repo
2) install npm packages <code>npm install</code>
3) start the development server with <code>npm start</code>
