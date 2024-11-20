TicketManagement
|
This project was generated with Angular CLI version 18.2.4.
|
Development Setup
|
Running the App with JSON Server
|
Install JSON Server (if not already installed): npm install -g json-server
|
Run the JSON Server for the db.json file: json-server --watch db.json --port 3000
|
Start the Angular Application: ng serve
|
Navigate to http://localhost:4200/ in your browser.
.
.
.
.
.
.
.
CRUD Operations :-
|
Create: New tickets can be added via the "Add data" button in the UI. Data is posted to the ticketConfirmation endpoint in db.json.
|
Read: The application fetches ticket data from the ticketConfirmation endpoint.
|
Update: The "Edit" button allows users to update ticket details, which are sent to the respective ticket in db.json.
|
Delete: The "Delete" button allows users to remove a ticket from the list and the db.json file.
|
|
||
|||
||||
|||||
||||||
|||||||
||||||||
       |
       |
       |
       |
       |
       |
       |__
          |
     |||||||||||
    ||         ||
   ||  O     O  ||
   ||     ^     ||
   ||    ---    ||
    ||         ||
     |||||||||||



Note on the Design


I’m not the best designer 😁, so the dropdown might look a bit odd. It's more "dropped" than it should be! Working on improving it, but hey, the functionality is solid! 😅


thank u read till here !


