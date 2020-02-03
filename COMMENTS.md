# Developer Comments
* Github used as CI server to run tests and deploy to heroku on commit to master
  * https://clearscore-fed-test.herokuapp.com/
* I decided to go for a simple material design/trello look, nothing too fancy
* CSS is hand coded, to demonstrate my ability to use the following:
  * css grid
  * flexbox
  * css custom properties
  * responsive design
* I would normally add more tests but ran out of time.
* If i were to continue this I would likely switch to using Redux to handle the state and actions because the top level App is getting crowded.

## TODO
* Utilise the localStorage API to persist current state when the page is refreshed.
* Add a character countdown as the user is approaching the limit of their description text.
* Add an unobtrusive notification when an update is made to a tile.

## Ideas to extend
* give the ability to add/remove new columns with custom name
* sorting by other things both ascending / decending
* icons instead of buttons would be nicer to look at
* theme support using react contexts
* sorting via drag and drop using something like react DnD
