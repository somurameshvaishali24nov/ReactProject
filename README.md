# Getting Started with Create React App - TODO LIST

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Documentation
The below project explains about the React App. I am used Redux as the state management and Firebase as the Database

I have divided the Tasks into two namely All tasks and Completed Tasks

###### `All tasks - has both completed and not completed tasks` 
###### `Completed Task - Displays only completed tasks`

### `When All Tasks is clicked`
In All Tasks if u wanted to change the Not completed task to Completed task then u can no longer be changed, \
you will also see the strike on the Title of the task which denotes that the task is completed. \
Also when the Task is completed calling an Back End to say that the process has been completed and also displaying a small toast.




### `When Completed Task is clicked`
You can only view the Task



### `When the Add Button is clicked`
When the Add button is clicked, I am displaying a modal, so that the user can enter the the values.\
##### `To be noted` 
ADD TO THE LIST button will be disabled until and unless the Title textbox is filled





##### After adding The Task 
After adding the task you will see the lists of tasks are displaying under `All Tasks`, until and unless the new task is completed by pressing the Task Completed checkbox,\ 
you will not see the Lists of newly added task unless `Completed Task`


## HOW TO RUN THE CODE
Run the below command

Step1: npm install
Step2: npm start

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `Config file`
const firebaseConfig = {
  apiKey: "AIzaSyBZrHgm5tjOWXhU3uJF5jxNzPFi9Fou_Jw",
  authDomain: "todo-list-e8d87.firebaseapp.com",
  projectId: "todo-list-e8d87",
  storageBucket: "todo-list-e8d87.appspot.com",
  messagingSenderId: "62033783186",
  appId: "1:62033783186:web:feae43a9d31677ee04b94b"
};


