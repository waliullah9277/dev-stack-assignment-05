1. Project Name
-> Web Dev Stack

----------------------------------------------------
2. Project Descriptions
-> Dev Stack is a simple React project for developers.
In this project, users can see different technologies and add to stack, remove stack etc.

----------------------------------------------------
3. Technologies Used
-> React.js
-> TypeScript
-> Tailwind CSS
-> DaisyUI
-> React-Toastify
-> JSON
-> Vite
-> React Icons

-----------------------------------------------------
4. 3 features
  1. View Technologies: Users can see different technologies like frontend, backend, database, and tools.
  2. Add Technology: Users can select a technology and add it to their own stack.
  3. Remove Technology: Users can remove one technology or remove all technologies from their stack.

------------------------------------------------------
-> React Questions & Answers
1. What is JSX, and why is it used in React?
Answer: JSX is a way to write HTML like code inside JavaScript or TypeScript. It makes React code easier to write and understand.

------------------------------------------------------
2. What is the difference between props and state?
Answer: Props are used to send data from a parent component to a child component. On the other hand State is used to store data inside a component and change that data when needed.

------------------------------------------------------
3. What does the useState hook do, and where did you use it in this project?
Answer: useState is used to store and change data in a React component. I used useState to store the technologies selected by the user.
For Example:
const [selectedStack, setSelectedStack] = useState<ITechnologies[]>([]);

------------------------------------------------------
4. What does the useEffect hook do, and why did you need it to load the JSON data?
Answer: useEffect is used to run some code when a component loads or when some data changes.

------------------------------------------------------
5. Why does every item in a .map() list need a unique key prop?
Answer: The key helps React identify each item in a list. It helps React know which item was changed, added, or removed.

For Example:
```technologies.map((technology) => (
    <TechnologiesCart
        key={technology.id}
        technology={technology}
    />
))
```

------------------------------------------------------
6. What is conditional rendering? Show one place you used it.
Answer: Conditional rendering means showing something based on a condition. I used it to show a message when the selected stack is empty.

For Example: 
```{selectedStack.length === 0 ? (
    <p>Your Stack is Empty</p>
) : (
    selectedStack.map((technology) => (
        // selected technologies
    ))
)}
```

------------------------------------------------------
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Answer: We can pass data from a parent to a child using props. In my project, I pass the technology data from AvailableTechnologies to TechnologiesCart. A child can send something back to the parent by using a function passed through props.

For Example:
```<TechnologiesCart
    technology={technology}
    handleAddToStack={handleAddToStack}
/>
```

Here, handleAddToStack is a function from the parent component. The child calls this function when the user clicks the button.