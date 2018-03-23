A Project to make a Doctor Info API

An application where a user take advantage of the Better Doctor API to find doctors who treat certain conditions, you can also search by name to find that doctor your friend recommended. If the API doesn't return results the program will let you know there are no results.


To Test Locally

git clone to your desktop, then in terminal $ cd js_doctor_api then $ npm install -y to install all required packages. To access the API calls and and see the UI type $ npm run start

Specifications: A user can enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
A user scan enter a doctor name to receive a list of doctors in the Portland area that fit the search query.
If the query response above includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

Technologies Used

API, Node, JS ES6, Jasmine, Karma, Webpack

Support and contact details

Dan Kiss email me as needed at flowfast47@gmail.com

Copyright (c) 2018 Dan Kiss
