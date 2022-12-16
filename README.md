# V0.1 Task Tracker
This is my first attempt at making a to-do list
Currently there is no back-end. So nothing gets stored.

However it does contain some logic to create, delete and update DOM-elements.
In the future I am thinking about adding a priority list. This will be added in future versions.

For the styling I tried to go with a Matrix esc esthetic. It is not the most appealing look but I do like it.
During this assignment I had the chance to utilise toggle() method. 

Previously I didn't know about this method and would utilise only remove() and add().
Toggle() allowed me to check wether a token or element contains an attribute. 

If it exists then it removes it and returns false. When it doesn't exist then it adds it and returns true.
Doing this allows me to give the user an option to mark a task as done.

There might not be too much javascript for now but I did encounter some trouble with the edit button.
I had difficulty copying the text without the captions of the buttons. 
So, I had to do a bit of research and found out that childNodes was what I was looking for. It is a property that returns a list of child nodes.
A neet workaround indeed.

In the foreseeing future I am planning on adding an order button so that users can order their tasks according to priority.


#V0.2 Task Tracker
Sooner than I anticipated. I made a couple of changes where users are able to properly order their task according to priority level.
Give it a try. In the future I would like to add some functionality where the user can save their list. Now that is quite a challenge.
The thought of it excites me. The code currently is not optimal but it does it job.
