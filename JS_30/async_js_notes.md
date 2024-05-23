# Default JavaScript

1. JavaScript is mostly synchronous i.e. it executes one code block, then another, then another and so on.

2. It is also a single threaded language.

# Execution Context

🛑 Executes one line of code at a time.

We cannot go to a new statement once the old statement is executed.
OR
Each Operation waits for the last one to complete before executing.


## Blocking Code vs Non Blocking Code

### Blocking Code
- Blocks the flow of the program
- Read file Sync

### Non Blocking Code
- Does not block the execution of the program
- Read file Async

Blocking Code example: "Reading a File"

Flow -> 
- Code is running, Code reaches a line where it is asked to read a file.
- Since Code cannot read a file, code tells Kernel to read that file. Code gives the kernel the context of the file.
- Kernel tells the code to wait i.e. stop the program execution. Wait till kernel has gone through the details of the file and read that file.
- When kernel has read that file, it shares the file details with the code and tells it to resume its execution.

We get file system access under Node JS.

In this use-case Non Blocking Code was successful.


Now let us look at a use-case where non blocking code is not good:
- We have to submit the user details in a database i.e. (write into a file in db) and then once the process is successfully done, send the user a message saying "details submitted successfully ✅"
- If we wrote a non blocking code here i.e. give the user a message beforehand while the details are still submitting, and suppose we get an error while submitting the data, it will be bad as we were using non blocking code.
- So in such cases, using blocking code works here.


## Event Loop Diagram

![](JS_30/Event-Loop.png)

JS Engine contains of Call Stack and Memory Heap.

Web APIs are found inside browsers.

Alternative of Web API is Node.

In Web API we get DOM API

In Node, we donot get DOM API as there is no DOM.

Task Queue makes JavaScript fast and Asynchronous.

Promises in JS have a different queue named 'Promise Queue' or 'High Priority Queue'.

eg. of Asynchronous APIs -> setTimeOut(), setInterval() 🛑🛑 INTERVIEW QUESTION 

Since setTimeOut() is an asynchronous API, we call it in the call stack and since it is found in Node API, we transfer the call from the call stack to the Node API for this Asynchronous Function().

SetTimeOut tells the function to execute itself after x amount of time.

Now there is a Register call back in the node Api, it's directions are to remind us to execute a task after 'x' amount of time whenever we press an event.

Now there is a task queue, its task is to add the completed asynchronous tasks back into the function call stack (function call "stack" principle -> First in Last Out). Though in diagram it is shown it enters from below but it enters the stack from top.

🛑 fetch() API -> There are promises in fetch() and it works in the same manner as the asynchronous functions work (something like, if the work is done, great inform us. If it is not done, then also inform us), but the promises go into a 'Promise Queue' or 'High Priority Queue'.


