JSX RULES & SYNTAX CHEAT SHEET

1. JSX must have one parent element
   ✅
   return (
     <div>
       <h1>Hello</h1>
       <p>World</p>
     </div>
   );

   OR

   return (
     <>
       <h1>Hello</h1>
       <p>World</p>
     </>
   );

2. Close all tags
   <img />
   <input />
   <br />
   <hr />

3. Use className instead of class
   <div className="container"></div>

4. Use htmlFor instead of for
   <label htmlFor="email">Email</label>

5. JavaScript expressions use {}
   <h1>{name}</h1>
   <h1>{10 + 20}</h1>
   <h1>{Math.random()}</h1>

6. Inline CSS uses an object
   <div style={{ color: "red", fontSize: "20px" }}></div>

7. Conditional Rendering

   Ternary:
   {isLoggedIn ? <Home /> : <Login />}

   AND:
   {isLoggedIn && <Home />}

8. List Rendering
   {users.map((user, index) => (
     <li key={index}>{user}</li>
   ))}

9. Event Handling
   <button onClick={handleClick}>Click</button>

   <button onClick={() => alert("Hello")}>
     Click
   </button>

10. Common Events
    onClick
    onChange
    onSubmit
    onKeyDown
    onKeyUp
    onFocus
    onBlur
    onMouseEnter
    onMouseLeave

11. Props

    Parent:
    <User name="Kritik" age={21} />

    Child:
    function User(props){
      return <h1>{props.name}</h1>;
    }

    Destructuring:
    function User({name, age}){
      return <h1>{name}</h1>;
    }

12. Fragments
    <>
      <h1>Hello</h1>
    </>

13. Comments
    {/* This is a comment */}

14. Dynamic Attributes
    <img src={imageUrl} />
    <input disabled={true} />

15. useState Destructuring
    const [count, setCount] = useState(0);

16. Object Destructuring
    const {name, age} = user;

17. Children Prop

    Parent:
    <Card>
      <h1>Hello</h1>
    </Card>

    Child:
    function Card({children}){
      return <div>{children}</div>;
    }

18. Function Calls
    <h1>{greet()}</h1>

19. Template Literals
    <h1>{`Hello ${name}`}</h1>

20. Rendering Objects
    ❌ {user}
    ✅ {user.name}

21. Rendering Arrays
    {numbers.map(num => (
      <p key={num}>{num}</p>
    ))}

22. Forms

    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">
        Submit
      </button>
    </form>

23. Default Values
    function User({name = "Guest"}){
      return <h1>{name}</h1>;
    }

24. Nested JSX

    <div>
      <header>
        <h1>Title</h1>
      </header>

      <main>
        <p>Content</p>
      </main>
    </div>

25. Spread Operator

    const user = {
      name: "Kritik",
      age: 21
    };

    <User {...user} />

26. Common JSX Expressions

    {name}
    {count}
    {count + 1}
    {Math.random()}
    {new Date().toLocaleDateString()}
    {isLoggedIn ? "Yes" : "No"}

27. React Hooks Common Syntax

    const [state, setState] = useState();

    useEffect(() => {
      console.log("Mounted");
    }, []);

28. Inline Arrow Functions

    <button onClick={() => doSomething()}>
      Click
    </button>

29. Dynamic Class Names

    <div className={isActive ? "active" : "inactive"}>
    </div>

30. Dynamic Styles

    <div style={{
      color: isDark ? "white" : "black"
    }}>
    </div>

31. Passing Functions as Props

    <Child handleClick={handleClick} />

32. Optional Chaining

    <h1>{user?.name}</h1>

33. Logical OR

    <h1>{username || "Guest"}</h1>

34. Nullish Coalescing

    <h1>{username ?? "Guest"}</h1>

35. React Components

    function Welcome(){
      return <h1>Hello</h1>;
    }

    <Welcome />

36. JSX Can Render
    Strings
    Numbers
    Arrays
    React Elements

37. JSX Cannot Directly Render
    Objects
    Functions
    Undefined

38. Key Rule for Lists
    Always provide a unique key.

    {users.map(user => (
      <li key={user.id}>{user.name}</li>
    ))}

39. Exporting Components

    export default App;

40. Importing Components

    import Navbar from "./Navbar";

41. React Component Naming Rule
    Component names must start with CAPITAL letters.

    ✅ <Navbar />
    ❌ <navbar />

42. Common React Imports

    import React from "react";
    import { useState } from "react";
    import { useEffect } from "react";

43. JSX = HTML-like syntax + JavaScript inside {}

    Example:

    function App() {
      const name = "Kritik";

      return (
        <div>
          <h1>Hello {name}</h1>
          <button onClick={() => alert(name)}>
            Click Me
          </button>
        </div>
      );
    }
