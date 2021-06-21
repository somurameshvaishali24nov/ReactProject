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

![image](https://user-images.githubusercontent.com/83488278/122664375-03303c80-d16f-11eb-83c0-113043591983.png)



### `When Completed Task is clicked`
You can only view the Task
![image](https://user-images.githubusercontent.com/83488278/122664383-104d2b80-d16f-11eb-985e-5819309956bf.png)

### `When the Add Button is clicked`
When the Add button is clicked, I am displaying a modal, so that the user can enter the the values.\
##### `To be noted` 
ADD TO THE LIST button will be disabled until and unless the Title textbox is filled

![image](https://user-images.githubusercontent.com/83488278/122664429-50aca980-d16f-11eb-9480-7b55a6de5e8a.png)
![image](https://user-images.githubusercontent.com/83488278/122664416-3d014300-d16f-11eb-85fa-b4136c60fe88.png)
![image](https://user-images.githubusercontent.com/83488278/122664439-67eb9700-d16f-11eb-9332-9512902b6d31.png)


##### After adding The Task 
After adding the task you will see the lists of tasks are displaying under `All Tasks`, until and unless the new task is completed by pressing the Task Completed checkbox,\ 
you will not see the Lists of newly added task unless `Completed Task`
![image](https://user-images.githubusercontent.com/83488278/122664471-98333580-d16f-11eb-8162-1c3261d2fa71.png)
![image](https://user-images.githubusercontent.com/83488278/122664479-a97c4200-d16f-11eb-9b15-1cd3944ca11c.png)

#### `When the data is empty`
![image](https://user-images.githubusercontent.com/83488278/122664263-6d94ad00-d16e-11eb-9f34-99f337a4d2aa.png)


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


