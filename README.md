# Backend Security: add validation and sanitation

Examine at the provided API

- There are two endpoints
- There is one schema and model
- There is a frontend provided; open index.html with live server
- Edit index.html only if necessary

## Your tasks

Do these in order!

1. Setup the project
    - Make the mongoose connection work
    - Make sure the backend starts
    - Open the "frontend"
    - Both backend and frontend *should* work right away
2. Add validation and sanitation logic to the endpoint
    - Start very simple at first
        - At first just make it so that you are validating the "name" field (min length 3 characters)
    - Note that one of the fields is a telephone number
        - Think about and research telephone numbers
        - What kind of validation and sanitation would be good for this data?
3. Test
4. Briefly explain these files
    - package.json
    "This file is kind of a manifest for the project and it is link to having a frontend. It can do a lot of things, completely unrelated. It's a central repository of configuration for tools, for example. It's also where npm stores the names and versions for all the installed packages and starting scripts".
    - .env.example
     "It is a template-kind of file that tells the name/type of data contained in the original .env but without the data itself, which would be on the .env and not accessible publicly. In this case details that the original .env contains data of PORT:, username, databaseName, etc..." 
    - .gitignore
    "this file contains the name of the filed that would not be publicly uploaded to github  and would stay on you local computer for safety. Usually contains API-keys, database access, and the node_modules , since it is far too big to upload to git. 
    - database.js
    In this case it contains a function that executes the connection to the database with monogoose. It gets the information from the -env in regards the database connection and the port and localhost.  The function contains the connection execution <<mongoose.connection.on>> and a console-log of the different connecting status."
    - errorController.js
    "This file contains an endpoint for error in case the request throws a 404 not found or an error 500 and would print the corresponding error message."

5. **BONUS** Make it so that the email is saved too!


























🐻