API is a talking language between 2 systems, these systems can be our backend and frontend, or our backend/frontend and some other system's frontend/backend.

There are many public APIs like github api, randomuserme api etc.

To read APIs we can go to JSONformatter.org, this will help us read APIs better.

Now in recent times, we use fetch to send and receive APIs but in the earlier times, we used `XML HTTP Requests` for this, this is also used today in some legacy code websites.


XMLHTTPRequest (XHR) objects are used to interact with servers, you can retrieve data from a URL without having to do a full page refresh. This enables the web page to update a part of the page without disrupting what the user is doing.

XHR was used heavily with AJAX 
(Asynchronous JavaScript And XML) programming.

XHR can be used to retrieve any type of data, not just XML.

## XHR: readyState property

XMLHTTPRequest.readyState property returns the state an XHR client is in. An XHR client can exist in one of the following states:

VALUE - STATE - Description

0 -	UNSENT - Client has been created. open() not called yet.

1	- OPENED	- open() has been called.

2	- HEADERS_RECEIVED	- send() has been called, and headers and status are available.

3	- LOADING	- Downloading; responseText holds partial data.

4	- DONE	- The operation is complete.

eg.

```javascript
const xhr = new XMLHttpRequest();
console.log("UNSENT", xhr.readyState); // readyState will be 0

xhr.open("GET", "/api", true);
console.log("OPENED", xhr.readyState); // readyState will be 1

xhr.onprogress = () => {
  console.log("LOADING", xhr.readyState); // readyState will be 3
};

xhr.onload = () => {
  console.log("DONE", xhr.readyState); // readyState will be 4
};

xhr.send(null);

```


## V8 Engine

JavaScript and NodeJs are run on this engine and this engine is written in C++.

JavaScript is basically a wrapper over c++.