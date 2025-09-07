1) What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- getElementById('id'): Selects the one unique element that has the specified ID. If there are multiple id's it selects the first one.
- getElementsByClassName('class'): Selects all elements that contain the specified class name.
- querySelector('selector'): Selects the very first element in the document that matches the specified CSS selector. 
- querySelectorAll('selector'): Selects all elements in the document that match the specified CSS selector. But the collection us static.

2) How do you create and insert a new element into the DOM?
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello, World!';
const body = document.querySelector('body');

3) What is Event Bubbling?
- Event Bubbling is the process where an event, triggered on a specific element, travels (or "bubbles") up through its ancestors in the DOM tree. 

4) What is Event Delegation? 
- Event Delegation is where you attach a single event listener to a parent element instead of attaching individual listeners to all of its children. This single listener then manages events for all of its current and future child elements.

5) What is the difference between preventDefault() and stopPropagation() methods?
- event.preventDefault(): This method stops the browser's default action for that event. It does not stop the event from bubbling up the DOM tree.
- event.stopPropagation(): This method stops the event from propagating further up the DOM tree. It does not prevent the browser's default action.