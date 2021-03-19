This is a React/Redux front end with Ruby on Rails API/backend project for Flatiron School of Engineering.

I fetch data from my Rails API (https://github.com/jkatem/Law-App). The data saves with Ruby on Rails. The data is sent to the front end once the front end fetches for this data.

##Usage: Navigate to this repository: https://github.com/jkatem/DocuManage. Fork and clone this repository to your local machine. This is the front-end repository.

Simultaneously, navigate to this repository: https://github.com/jkatem/Law-App Begin the backend Ruby on Rails API by cd'ing into the top most folder, running bundle install, and rails s

Now, navigate to the folder in which the front end repository was saved to, and run npm install; npm start Type y when prompted if you'd like to use a different server, since localhost:3000 will be occupied by the backend.

In the backend directory, create and set up the SQLite database. Run: rails db:create rails db:migrate rails db:seed

to create the database, run the migrations, and finally seed the database.

##License: This project is licensed under the MIT License.