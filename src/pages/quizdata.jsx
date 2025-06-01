// quiz questions for each category
export const quizData = {
    // c language
    c: [
        {
            question: "Which of the following is a valid C data type?",
            options: ["number", "int", "string", "real"],
            answer: "int"
        },
        {
            question: "Which symbol is used to declare a pointer in C?",
            options: ["&", "*", "#", "$"],
            answer: "*"
        },
        {
            question: "Which function is used to print output in C?",
            options: ["echo()", "cout<<", "print()", "printf()"],
            answer: "printf()"
        },
        {
            question: "What is the index of the first element in an array in C?",
            options: ["1", "0", "-1", "Depends on array size"],
            answer: "0"
        },
        {
            question: "What is the output of this code: `printf(\"%d\", 5 + 3);`",
            options: ["8", "53", "Error", "Nothing"],
            answer: "8"
        },
        {
            question: "Which keyword is used to loop over a block of code in C?",
            options: ["loop", "iterate", "for", "repeat"],
            answer: "for"
        },
        {
            question: "Which of the following is used to take input from the user?",
            options: ["input()", "scanf()", "gets()", "cin>>"],
            answer: "scanf()"
        },
        {
            question: "What is the correct syntax to declare a variable in C?",
            options: ["int a = 5;", "a := 5;", "var a = 5;", "int: a = 5;"],
            answer: "int a = 5;"
        },
        {
            question: "Which header file is required for input/output functions?",
            options: ["stdlib.h", "conio.h", "stdio.h", "string.h"],
            answer: "stdio.h"
        },
        {
            question: "What is the purpose of `return 0;` in main()?",
            options: [
                "Returns nothing",
                "Indicates successful program termination",
                "Restarts the program",
                "Initializes main()"
            ],
            answer: "Indicates successful program termination"
        }
    ],

    // cpp
    cpp: [
        {
            question: "Which of the following is not a feature of C++?",
            options: ["Encapsulation", "Inheritance", "Garbage Collection", "Polymorphism"],
            answer: "Garbage Collection"
        },
        {
            question: "Which of the following is the correct way to declare an object in C++?",
            options: ["class obj;", "obj class;", "Class obj();", "Class obj;"],
            answer: "Class obj;"
        },
        {
            question: "What is the use of the 'this' pointer?",
            options: [
                "To access private members",
                "To refer to current object instance",
                "To return current object",
                "To destroy an object"
            ],
            answer: "To refer to current object instance"
        },
        {
            question: "Which header file is needed to use the `vector` class in C++?",
            options: ["<array>", "<vector>", "<list>", "<queue>"],
            answer: "<vector>"
        },
        {
            question: "Which of the following is used for function overloading?",
            options: ["Same function name, different parameters", "Multiple main()", "Templates", "Inheritance"],
            answer: "Same function name, different parameters"
        },
        {
            question: "What is a constructor in C++?",
            options: [
                "A method that initializes objects",
                "A method that destroys objects",
                "A function to call other methods",
                "A class with only static members"
            ],
            answer: "A method that initializes objects"
        },
        {
            question: "What is the output of: `cout << 10 / 4;`?",
            options: ["2.5", "2", "2.0", "Error"],
            answer: "2"
        },
        {
            question: "Which keyword is used for inheritance?",
            options: ["extends", "inherits", "base", "public"],
            answer: "public"
        },
        {
            question: "Which container stores elements in sorted order with no duplicates?",
            options: ["vector", "set", "map", "stack"],
            answer: "set"
        },
        {
            question: "What is the purpose of a destructor?",
            options: [
                "Initialize objects",
                "Free memory when object is destroyed",
                "Create multiple objects",
                "Copy values between objects"
            ],
            answer: "Free memory when object is destroyed"
        },
        {
            question: "Which of the following correctly defines a class?",
            options: [
                "class MyClass {}",
                "MyClass: class {}",
                "class = MyClass {}",
                "define class MyClass {}"
            ],
            answer: "class MyClass {}"
        },
        {
            question: "Which STL container uses key-value pairs?",
            options: ["vector", "set", "map", "queue"],
            answer: "map"
        }
    ],

    // oops
    oops: [
        {
            question: "Which of the following best defines encapsulation?",
            options: [
                "Wrapping data and methods together",
                "Hiding implementation details",
                "Code reuse using classes",
                "Linking one class with another"
            ],
            answer: "Wrapping data and methods together"
        },
        {
            question: "What is inheritance in OOP?",
            options: [
                "Deriving a class from another class",
                "Overriding methods in the same class",
                "Hiding variables from outside access",
                "Using same function name with different parameters"
            ],
            answer: "Deriving a class from another class"
        },
        {
            question: "Polymorphism allows:",
            options: [
                "Only one form of a function",
                "Different classes to use unrelated methods",
                "Objects to behave differently based on context",
                "Private data to be accessed publicly"
            ],
            answer: "Objects to behave differently based on context"
        },
        {
            question: "Which concept restricts access to the internal state of an object?",
            options: ["Inheritance", "Encapsulation", "Abstraction", "Polymorphism"],
            answer: "Encapsulation"
        },
        {
            question: "What is abstraction?",
            options: [
                "Displaying only essential details while hiding complexities",
                "Copying properties from one class to another",
                "Creating multiple constructors",
                "Breaking code into multiple functions"
            ],
            answer: "Displaying only essential details while hiding complexities"
        },
        {
            question: "Which OOP concept allows reusability of code?",
            options: ["Polymorphism", "Abstraction", "Inheritance", "Encapsulation"],
            answer: "Inheritance"
        },
        {
            question: "Which keyword is used to inherit a class in C++?",
            options: ["extends", "implements", "public", "inherits"],
            answer: "public"
        },
        {
            question: "Which of the following is an example of polymorphism?",
            options: [
                "Function overloading",
                "Object instantiation",
                "Constructor definition",
                "Class declaration"
            ],
            answer: "Function overloading"
        },
        {
            question: "Which of the following allows one interface to be used for a general class of actions?",
            options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
            answer: "Polymorphism"
        },
        {
            question: "Which of these is not a pillar of OOPS?",
            options: ["Encapsulation", "Inheritance", "Compilation", "Abstraction"],
            answer: "Compilation"
        }
    ],

    // html
    html: [
        {
            question: "What does HTML stand for?",
            options: [
                "HyperText Markup Language",
                "HighText Machine Language",
                "Hyperlink and Text Markup Language",
                "Home Tool Markup Language"
            ],
            answer: "HyperText Markup Language"
        },
        {
            question: "Which tag is used to create a hyperlink in HTML?",
            options: ["<link>", "<a>", "<href>", "<url>"],
            answer: "<a>"
        },
        {
            question: "Which tag is used to define an unordered list?",
            options: ["<ol>", "<ul>", "<li>", "<list>"],
            answer: "<ul>"
        },
        {
            question: "What is the correct HTML element for inserting a line break?",
            options: ["<break>", "<br>", "<lb>", "<newline>"],
            answer: "<br>"
        },
        {
            question: "Which attribute is used to provide an alternative text for an image?",
            options: ["src", "alt", "title", "href"],
            answer: "alt"
        },
        {
            question: "Which HTML tag is used to define a table row?",
            options: ["<td>", "<tr>", "<table>", "<th>"],
            answer: "<tr>"
        },
        {
            question: "Which tag is used to insert a horizontal line?",
            options: ["<hr>", "<line>", "<br>", "<hl>"],
            answer: "<hr>"
        },
        {
            question: "What is the purpose of the <head> tag in HTML?",
            options: [
                "To define the visible content of the page",
                "To store metadata and links to scripts/styles",
                "To add a heading to the page",
                "To define the page body"
            ],
            answer: "To store metadata and links to scripts/styles"
        },
        {
            question: "Which tag is used to input data from users in a form?",
            options: ["<input>", "<form>", "<data>", "<entry>"],
            answer: "<input>"
        },
        {
            question: "Which of these is a semantic HTML tag?",
            options: ["<div>", "<span>", "<article>", "<br>"],
            answer: "<article>"
        }
    ],

    // css
    css: [
        {
            question: "What does CSS stand for?",
            options: [
                "Computer Style Sheets",
                "Creative Style System",
                "Cascading Style Sheets",
                "Colorful Style Syntax"
            ],
            answer: "Cascading Style Sheets"
        },
        {
            question: "Which HTML tag is used to link an external CSS file?",
            options: ["<script>", "<css>", "<link>", "<style>"],
            answer: "<link>"
        },
        {
            question: "Which property is used to change text color?",
            options: ["font-color", "color", "text-color", "text-style"],
            answer: "color"
        },
        {
            question: "What is the default position value in CSS?",
            options: ["relative", "absolute", "static", "fixed"],
            answer: "static"
        },
        {
            question: "Which property controls the size of text?",
            options: ["font-style", "text-size", "font-size", "text-style"],
            answer: "font-size"
        },
        {
            question: "Which CSS unit is relative to the root element's font-size?",
            options: ["em", "rem", "px", "%"],
            answer: "rem"
        },
        {
            question: "What does the 'z-index' property do?",
            options: [
                "Controls zoom level",
                "Sets the stack order of elements",
                "Defines image resolution",
                "Rotates the element"
            ],
            answer: "Sets the stack order of elements"
        },
        {
            question: "Which property is used to make a flex container?",
            options: ["display: block", "display: inline", "display: flex", "position: flex"],
            answer: "display: flex"
        },
        {
            question: "How do you center a block element horizontally?",
            options: [
                "text-align: center;",
                "margin: 0 auto;",
                "align: center;",
                "padding: auto;"
            ],
            answer: "margin: 0 auto;"
        },
        {
            question: "Which property adds shadow to elements?",
            options: ["box-shadow", "text-shadow", "shadow", "element-shadow"],
            answer: "box-shadow"
        },
        {
            question: "Which pseudo-class targets the first child element?",
            options: [":hover", ":focus", ":first-child", ":nth-child(1)"],
            answer: ":first-child"
        },
        {
            question: "What value of `position` is used to fix an element relative to the browser window?",
            options: ["absolute", "relative", "fixed", "sticky"],
            answer: "fixed"
        }
    ],

    // javascript
    javascript: [
        {
            question: "Which of the following is a JavaScript data type?",
            options: ["Number", "Float", "Character", "Double"],
            answer: "Number"
        },
        {
            question: "Which method is used to write content to the browser in JavaScript?",
            options: ["console.log()", "window.alert()", "document.write()", "document.log()"],
            answer: "document.write()"
        },
        {
            question: "What will `typeof null` return?",
            options: ["'object'", "'null'", "'undefined'", "'number'"],
            answer: "'object'"
        },
        {
            question: "What is the correct way to declare a constant in ES6?",
            options: ["var PI = 3.14;", "const PI = 3.14;", "let PI = 3.14;", "#PI = 3.14;"],
            answer: "const PI = 3.14;"
        },
        {
            question: "Which symbol is used for single-line comments in JavaScript?",
            options: ["<!-- -->", "//", "/* */", "#"],
            answer: "//"
        },
        {
            question: "What does the `isNaN()` function check?",
            options: ["If a value is null", "If a value is a number", "If a value is NaN", "If a variable is undefined"],
            answer: "If a value is NaN"
        },
        {
            question: "Which loop will execute at least once regardless of the condition?",
            options: ["for", "while", "do...while", "foreach"],
            answer: "do...while"
        },
        {
            question: "Which keyword is used to define a function in JavaScript?",
            options: ["func", "def", "function", "method"],
            answer: "function"
        },
        {
            question: "What is the output of: `console.log(2 + '2')`?",
            options: ["4", "'22'", "NaN", "Error"],
            answer: "'22'"
        },
        {
            question: "Which method adds an element to the end of an array?",
            options: ["push()", "pop()", "shift()", "unshift()"],
            answer: "push()"
        },
        {
            question: "What is hoisting in JavaScript?",
            options: [
                "Moving functions to the end of the file",
                "Declaring functions twice",
                "Default initialization of all variables to null",
                "Moving declarations to the top of their scope"
            ],
            answer: "Moving declarations to the top of their scope"
        },
        {
            question: "How do you access the first element of an array named `arr`?",
            options: ["arr[0]", "arr(0)", "arr.first()", "arr->0"],
            answer: "arr[0]"
        },
        {
            question: "Which of these is a correct way to create an arrow function?",
            options: ["function() => {}", "() => {}", "=> () {}", "() -> {}"],
            answer: "() => {}"
        },
        {
            question: "What is the output of `Boolean(0)`?",
            options: ["true", "false", "undefined", "0"],
            answer: "false"
        },
        {
            question: "Which object is the root of the DOM hierarchy in a browser?",
            options: ["document", "window", "html", "body"],
            answer: "window"
        }
    ],

    // react js
    reactjs: [
        {
            question: "What is the purpose of the `useState` hook in React?",
            options: [
                "To fetch data from APIs",
                "To manage side effects",
                "To create local component state",
                "To handle routing"
            ],
            answer: "To create local component state"
        },
        {
            question: "What does JSX stand for?",
            options: [
                "JavaScript XML",
                "Java Syntax Extension",
                "JavaScript Extension",
                "JavaScript XHTML"
            ],
            answer: "JavaScript XML"
        },
        {
            question: "Which method is used to pass data from a parent to a child component?",
            options: ["state", "setState", "props", "dispatch"],
            answer: "props"
        },
        {
            question: "What is the default behavior of `useEffect` if no dependency array is provided?",
            options: [
                "It runs once after mount",
                "It runs only on unmount",
                "It runs on every render",
                "It does not run at all"
            ],
            answer: "It runs on every render"
        },
        {
            question: "Which hook is used to perform side effects in function components?",
            options: ["useState", "useEffect", "useContext", "useMemo"],
            answer: "useEffect"
        },
        {
            question: "What is the virtual DOM?",
            options: [
                "An actual copy of the browser DOM",
                "A lightweight in-memory representation of the real DOM",
                "A server-side version of the DOM",
                "A CSS engine for layout"
            ],
            answer: "A lightweight in-memory representation of the real DOM"
        },
        {
            question: "What is the correct syntax to import a component named `Navbar`?",
            options: [
                "import Navbar from './Navbar';",
                "include Navbar from './Navbar'",
                "require Navbar from './Navbar'",
                "Navbar = require('./Navbar')"
            ],
            answer: "import Navbar from './Navbar';"
        },
        {
            question: "How can we conditionally render a component in React?",
            options: [
                "Using `if` only",
                "Using `switch` statements",
                "Using ternary operator or logical &&",
                "Only with external libraries"
            ],
            answer: "Using ternary operator or logical &&"
        },
        {
            question: "What is the key prop in React used for?",
            options: [
                "Passing state to child components",
                "Optimizing rendering of lists",
                "Creating unique CSS classes",
                "Referencing DOM elements"
            ],
            answer: "Optimizing rendering of lists"
        },
        {
            question: "Which one is a valid React fragment syntax?",
            options: ["<></>", "<Fragment></Fragment>", "Both", "None"],
            answer: "Both"
        },
        {
            question: "What will happen if `setState` is called with the same value as the current state?",
            options: [
                "The component re-renders anyway",
                "React throws an error",
                "React skips re-render",
                "State becomes undefined"
            ],
            answer: "React skips re-render"
        },
        {
            question: "Which hook would you use to share data across components without prop drilling?",
            options: ["useReducer", "useRef", "useState", "useContext"],
            answer: "useContext"
        }
    ],

    // bootstrap
    bootstrap: [
        {
            question: "What is the primary purpose of Bootstrap?",
            options: [
                "Back-end development",
                "Creating APIs",
                "Responsive front-end design",
                "Database management"
            ],
            answer: "Responsive front-end design"
        },
        {
            question: "Which class is used to create a Bootstrap button?",
            options: ["btn", "button", "bootstrap-btn", "btn-default"],
            answer: "btn"
        },
        {
            question: "Which Bootstrap class creates a responsive container with fixed width?",
            options: ["container-fluid", "container", "container-box", "container-fixed"],
            answer: "container"
        },
        {
            question: "What class is used to make columns in Bootstrap?",
            options: ["grid", "col", "column", "row"],
            answer: "col"
        },
        {
            question: "Which class is used to make text centered?",
            options: ["text-left", "text-right", "text-center", "text-middle"],
            answer: "text-center"
        },
        {
            question: "What is the default number of columns in Bootstrap’s grid system?",
            options: ["10", "12", "6", "8"],
            answer: "12"
        },
        {
            question: "Which class makes an image responsive in Bootstrap?",
            options: ["img-responsive", "image-fluid", "img-fluid", "img-resize"],
            answer: "img-fluid"
        },
        {
            question: "What class do you use to add margin in Bootstrap?",
            options: ["margin", "m", "mg", "pad"],
            answer: "m"
        },
        {
            question: "What does `d-flex` do in Bootstrap?",
            options: [
                "Sets the display to flex",
                "Deletes flex behavior",
                "Adds default padding",
                "Centers content"
            ],
            answer: "Sets the display to flex"
        },
        {
            question: "Which Bootstrap component is used for responsive navigation?",
            options: ["Navbar", "Header", "MenuBar", "NavigationBar"],
            answer: "Navbar"
        }
    ],

    // tailwind css
    tailwind: [
        {
            question: "What type of CSS framework is Tailwind CSS?",
            options: [
                "Component-based",
                "Utility-first",
                "OOP-based",
                "Grid-based only"
            ],
            answer: "Utility-first"
        },
        {
            question: "Which class is used to make text bold in Tailwind?",
            options: ["font-style-bold", "text-bold", "font-bold", "bold"],
            answer: "font-bold"
        },
        {
            question: "How do you apply a background color of blue in Tailwind?",
            options: ["bgColor-blue", "bg-blue-500", "background-blue", "blue-bg-500"],
            answer: "bg-blue-500"
        },
        {
            question: "What does the class `flex` do in Tailwind?",
            options: [
                "Applies float: left",
                "Sets display: flex",
                "Centers content",
                "Adds flex-grow"
            ],
            answer: "Sets display: flex"
        },
        {
            question: "Which class adds padding of 4 units on all sides?",
            options: ["p-4", "padding-4", "pa-4", "pd-4"],
            answer: "p-4"
        },
        {
            question: "How do you make an element responsive to medium screens and above?",
            options: ["@media-md", "md:", "responsive-md", "screen-md"],
            answer: "md:"
        },
        {
            question: "What is the purpose of `space-x-4` in Tailwind?",
            options: [
                "Adds margin on all sides",
                "Adds horizontal spacing between child elements",
                "Adds padding-left",
                "Adds margin-top"
            ],
            answer: "Adds horizontal spacing between child elements"
        },
        {
            question: "Which class centers text in Tailwind CSS?",
            options: ["text-center", "center-text", "textAlign-center", "center"],
            answer: "text-center"
        },
        {
            question: "What does `rounded-lg` do?",
            options: [
                "Adds a light grey border",
                "Rounds the corners with large radius",
                "Adds padding to corners",
                "Makes border invisible"
            ],
            answer: "Rounds the corners with large radius"
        },
        {
            question: "Which config file lets you customize themes and colors in Tailwind?",
            options: [
                "tailwind.js",
                "tailwind-config.js",
                "tailwind.config.js",
                "tw.config"
            ],
            answer: "tailwind.config.js"
        }
    ],

    // git & github
    gitgithub: [
        {
            question: "What does Git primarily help with?",
            options: [
                "Managing databases",
                "Version control",
                "Designing UIs",
                "Writing server code"
            ],
            answer: "Version control"
        },
        {
            question: "Which command initializes a new Git repository?",
            options: ["git start", "git init", "git create", "git new"],
            answer: "git init"
        },
        {
            question: "What is the purpose of `git clone`?",
            options: [
                "Create a new repository",
                "Copy a remote repo locally",
                "Merge two branches",
                "Push changes to remote"
            ],
            answer: "Copy a remote repo locally"
        },
        {
            question: "Which command stages changes for the next commit?",
            options: ["git commit", "git add", "git push", "git track"],
            answer: "git add"
        },
        {
            question: "What does `git commit -m` do?",
            options: [
                "Commits with a message",
                "Commits with metadata",
                "Commits with merging",
                "Commits without staging"
            ],
            answer: "Commits with a message"
        },
        {
            question: "Which command shows the commit history?",
            options: ["git history", "git show", "git log", "git commits"],
            answer: "git log"
        },
        {
            question: "How do you create a new branch in Git?",
            options: ["git new branch", "git init branch", "git create", "git branch [name]"],
            answer: "git branch [name]"
        },
        {
            question: "What is GitHub?",
            options: [
                "A file-sharing service",
                "A version control tool",
                "A cloud hosting service for Git repositories",
                "An IDE for Git"
            ],
            answer: "A cloud hosting service for Git repositories"
        },
        {
            question: "What does `git push` do?",
            options: [
                "Pull code from remote",
                "Push changes to local",
                "Push local changes to remote",
                "Delete a remote branch"
            ],
            answer: "Push local changes to remote"
        },
        {
            question: "Which command is used to get the latest code from a remote repo?",
            options: ["git push", "git pull", "git fetch", "git clone"],
            answer: "git pull"
        }
    ]
};