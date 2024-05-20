All events in JavaScript are run sequentially.

JS language is run sequentially. 


some exceptions are Async JS, events etc.

Events on their own do not do anything, they get invoked when an activity happens.

A very basic way to write or trigger an event:

```javascript
 <li><img width="200px" id="owl" src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" onClick="alert("owl")" ></li>
```
But this process is very inefficient when we scale our application.

So in normal JS, don't inject this approach in HTML code.

But in react code, we can do like this as it is a very scalable code.

Another approach:

```javascript 

// after body tag
<script>
    document.getElementById('owl').onclick = function() {
        alert('oooooooooowwwwllll');
    }
</script>
```

Now this information is also insufficient as onClick does not give us that much information.

Hence we use eventListeners as they give us the ability of onclick functionality and event propagation ability.

## Event Listener Syntax:

```javascript
document.getElementById('owl').addEventListener('click', function() {}, false)
```

🛑🛑 Interview Q.
Why is here 'false' used in the arguments.

A. Default value or behaviour of an event listener is false.

In some apps, we need to mention it as true or false because these apps need these true and false events to work.

Best Case scenario
```javascript
document.getElementById('owl').addEventListener('click', function() {
    alert('Oye OWL');
}, false)
```

```javascript

document.getElementById('owl').addEventListener('click', function() {
    alert('Oye OWL');
}, false)

// In Early days, we used to write attachEvent() with this event listener too. This was used to run apps in Internet Explorer.

// attachEvent()
```

Types of Events:

1. Browser Events
2. Environment Events


## Things to study:
1. type
2. timestamp
3. defaultPrevented
4. target
5. toElement
6. srcElement
7. currentTarget

## Interview Related
1. clientX
2. clientY
3. screenX
4. screenY

## Special Key in Events
1. altKey
2. ctrlkey
3. shiftkey
4. keyCode

# Event Propagation
There are 2 contexts to this,
1. Event Bubbling (default false hidden)
2. Event Capturing


 Event Propagation (Bubbling)

 Suppose you made 2 events same to same with the following changes:

 ```javascript

    // Selects the entire UL under event listener 
document.getElementById('images').addEventListener('click', function(e){
        console.log("UL clicked");
    }, false)


    // Selects the owl li under event listener 
    document.getElementById('owl').addEventListener('click', function(e){
        console.log("Owl Clicked");
    }, false)

 ```

 Now if we click on any image or outside, it will say `UL clicked`

 But if we click on owl, it will say `Owl clicked` first and then it will say `UL Clicked`.

 This concept is called Event Propagation - Bubbling i.e. events of inner elements get activated first and then it goes to upper parent elements. 

It is just like a bubble going from down to up.

 So the hierarchy is: img > li > ul

 🛑🛑 Now this all happens when the value is false


  Event Propagation (Capturing)
This happens when the value is true.


 ```javascript

    // Selects the entire UL under event listener 
document.getElementById('images').addEventListener('click', function(e){
        console.log("UL clicked");
    }, true) // 🛑🛑 


    // Selects the owl li under event listener 
    document.getElementById('owl').addEventListener('click', function(e){
        console.log("Owl Clicked");
    }, true) // 🛑🛑🛑 true

 ```

 Now if we click on any image or outside, it will say `UL clicked`

 But if we click on owl, it will say `UL clicked` first and then it will say `Owl Clicked`.

 Capturing goes from top to bottom.

 🛑🛑 To stop bubbling (i.e. bottom to top action), we will use:

 `e.stopPropagation()` in owl event listener


  ```javascript

     // Selects the entire UL under event listener 
 document.getElementById('images').addEventListener('click', function(e){
         console.log("UL clicked");
     }, false) // 🛑🛑 


     // Selects only the owl li under event listener 
     document.getElementById('owl').addEventListener('click', function(e){
         console.log("Owl Clicked");

       // 🛑🛑🛑 
       e.stopPropagation();
     }, false) // 🛑🛑 false 

  ```

 Now if we click on any image or outside, it will say `UL clicked`

 But if we click on owl, it will say `Owl Clicked` only.


 🛑🛑🛑 e.preventDefault() example

 ```javascript

 document.getElementById('google').addEventListener('click', function(e) {
     // 🛑🛑 putting e inside the function means we are capturing the event
     e.preventDefault();
     e.stopPropagation();

     console.log("Google Clicked")
 }, false)
 ```

 When we execute this code bit, we will not be directed to google as its default is prevented and its propagation is stopped.