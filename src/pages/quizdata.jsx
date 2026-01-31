// quiz questions for each category
export const quizData = {
    // c language
    c: [
        {
            question: "What is the size of 'char' in C according to the C standard?",
            options: ["1 byte", "2 bytes", "4 bytes", "Depends on the compiler"],
            answer: "1 byte"
        },
        {
            question: "Which of the following is the correct way to declare a pointer to an integer?",
            options: ["int *ptr;", "int ptr*;", "ptr <int> *;", "int &ptr;"],
            answer: "int *ptr;"
        },
        {
            question: "What will be the output of: `int a = 10, b = 20; printf(\"%d\", a +++ b);`?",
            options: ["30", "31", "Error", "20"],
            answer: "30"
        },
        {
            question: "What happens if you try to access `arr[10]` in an array of size 10?",
            options: [
                "Returns 0",
                "Compiler Error",
                "Undefined Behavior",
                "Segmentation Fault"
            ],
            answer: "Undefined Behavior"
        },
        {
            question: "Which memory area stores local variables in C?",
            options: ["Heap", "Stack", "Data Segment", "Code Segment"],
            answer: "Stack"
        },
        {
            question: "What does the `void` pointer (`void *ptr`) represent in C?",
            options: [
                "A pointer with no value",
                "A pointer that can point to any data type",
                "A pointer to an empty memory address",
                "A pointer that cannot be dereferenced"
            ],
            answer: "A pointer that can point to any data type"
        },
        {
            question: "What is the output of `sizeof(\"A\")` on a 64-bit system?",
            options: ["1", "2", "4", "8"],
            answer: "2"
        },
        {
            question: "Which function is used to release dynamically allocated memory?",
            options: ["delete()", "remove()", "free()", "dealloc()"],
            answer: "free()"
        },
        {
            question: "What is a 'Dangling Pointer' in C?",
            options: [
                "A pointer pointing to NULL",
                "A pointer pointing to a deleted memory location",
                "An uninitialized pointer",
                "A pointer pointing to the first element of an array"
            ],
            answer: "A pointer pointing to a deleted memory location"
        },
        {
            question: "Which operator is used to access the address of a variable?",
            options: ["*", "->", ".", "&"],
            answer: "&"
        }
    ],

    // cpp
    cpp: [
        {
            question: "Which of the following is used to achieve Run-time Polymorphism in C++?",
            options: ["Function Overloading", "Operator Overloading", "Virtual Functions", "Templates"],
            answer: "Virtual Functions"
        },
        {
            question: "What is the correct way to dynamically allocate an array of 10 integers in C++?",
            options: ["int *arr = malloc(10);", "int *arr = new int[10];", "int arr = new int(10);", "int *arr = alloc(10);"],
            answer: "int *arr = new int[10];"
        },
        {
            question: "Which C++ feature allows a function to be called with different types of data without rewriting the logic?",
            options: ["Inheritance", "Templates", "Encapsulation", "Friend Functions"],
            answer: "Templates"
        },
        {
            question: "In C++, what is the size of an empty class?",
            options: ["0 bytes", "1 byte", "4 bytes", "8 bytes"],
            answer: "1 byte"
        },
        {
            question: "Which STL container provides O(1) time complexity for insertions and deletions at both ends?",
            options: ["vector", "list", "deque", "stack"],
            answer: "deque"
        },
        {
            question: "What is the 'Diamond Problem' in C++ related to?",
            options: ["Encapsulation", "Multiple Inheritance", "File Handling", "Pointers"],
            answer: "Multiple Inheritance"
        },
        {
            question: "Which access specifier makes members accessible only within the class and its derived classes?",
            options: ["private", "public", "protected", "internal"],
            answer: "protected"
        },
        {
            question: "What is a 'Pure Virtual Function' in C++?",
            options: [
                "A function with no body in the base class",
                "A function that returns 0",
                "A function declared as: virtual void func() = 0;",
                "Both A and C"
            ],
            answer: "Both A and C"
        },
        {
            question: "Which operator cannot be overloaded in C++?",
            options: ["+", "==", "::", "<<"],
            answer: "::"
        },
        {
            question: "What does the 'friend' keyword do in C++?",
            options: [
                "Allows a function to access private members of a class",
                "Allows a class to inherit from another",
                "Makes all members public",
                "Creates a copy of an object"
            ],
            answer: "Allows a function to access private members of a class"
        },
        {
            question: "What is the time complexity of searching an element in a `std::map`?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
            answer: "O(log n)"
        },
        {
            question: "Which of the following correctly describes 'RAII'?",
            options: [
                "Runtime Access Interface Instance",
                "Resource Acquisition Is Initialization",
                "Random Access Internal Index",
                "Reference Array Inbuilt Iterator"
            ],
            answer: "Resource Acquisition Is Initialization"
        }
    ],

    // oops
    oops: [
        {
            question: "Which pillar of OOP is primarily used to reduce complexity by hiding unnecessary details from the user?",
            options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
            answer: "Abstraction"
        },
        {
            question: "What is the key difference between Encapsulation and Abstraction?",
            options: [
                "Encapsulation hides data, Abstraction hides complexity",
                "Abstraction is for classes, Encapsulation is for methods",
                "They are the same concept",
                "Encapsulation is a design level concept, Abstraction is implementation level"
            ],
            answer: "Encapsulation hides data, Abstraction hides complexity"
        },
        {
            question: "Which type of Polymorphism is achieved through Function Overloading?",
            options: ["Runtime Polymorphism", "Compile-time Polymorphism", "Static Binding", "Both B and C"],
            answer: "Both B and C"
        },
        {
            question: "In Inheritance, which relationship is represented by a subclass?",
            options: ["HAS-A relationship", "IS-A relationship", "PART-OF relationship", "USES-A relationship"],
            answer: "IS-A relationship"
        },
        {
            question: "What is 'Aggregation' in OOP?",
            options: [
                "A strong 'is-a' relationship",
                "A weak 'has-a' relationship where child can exist independently",
                "A strong 'has-a' relationship where child cannot exist without parent",
                "Multiple inheritance from different classes"
            ],
            answer: "A weak 'has-a' relationship where child can exist independently"
        },
        {
            question: "Virtual functions are used to achieve which of the following?",
            options: ["Early Binding", "Late Binding", "Data Hiding", "Operator Overloading"],
            answer: "Late Binding"
        },
        {
            question: "Which concept allows a class to have multiple methods with the same name but different signatures?",
            options: ["Method Overriding", "Method Overloading", "Method Abstraction", "Method Hiding"],
            answer: "Method Overloading"
        },
        {
            question: "What is the main advantage of using Private access specifiers?",
            options: ["To increase execution speed", "To achieve Data Hiding", "To allow global access", "To simplify inheritance"],
            answer: "To achieve Data Hiding"
        },
        {
            question: "Which of the following is true about an Abstract Class?",
            options: [
                "You cannot create an object of an abstract class",
                "It must contain at least one pure virtual function",
                "It is used as a blueprint for other classes",
                "All of the above"
            ],
            answer: "All of the above"
        },
        {
            question: "Composition is often preferred over Inheritance because it represents:",
            options: ["A tighter coupling", "A more flexible 'Has-A' relationship", "An 'Is-A' relationship", "Static binding"],
            answer: "A more flexible 'Has-A' relationship"
        }
    ],

    // html
    html: [
        {
            question: "Which HTML5 element is used to specify a footer for a document or section?",
            options: ["<bottom>", "<footer>", "<section-end>", "<nav-footer>"],
            answer: "<footer>"
        },
        {
            question: "What is the primary purpose of Semantic HTML?",
            options: [
                "To make the code look prettier",
                "To provide meaning to the web content for both browsers and screen readers",
                "To speed up the page loading time",
                "To replace CSS styling"
            ],
            answer: "To provide meaning to the web content for both browsers and screen readers"
        },
        {
            question: "Which attribute is mandatory for the <img> tag to ensure web accessibility?",
            options: ["src", "title", "alt", "loading"],
            answer: "alt"
        },
        {
            question: "In HTML5, which tag is used to group 'self-contained content' like photos or diagrams?",
            options: ["<section>", "<div>", "<figure>", "<aside>"],
            answer: "<figure>"
        },
        {
            question: "Which of the following is NOT a block-level element by default?",
            options: ["<div>", "<h1>", "<span>", "<p>"],
            answer: "<span>"
        },
        {
            question: "What does the 'target=\"_blank\"' attribute do in an <a> tag?",
            options: [
                "Opens the link in the same tab",
                "Downloads the linked file",
                "Opens the link in a new tab or window",
                "Disables the link"
            ],
            answer: "Opens the link in a new tab or window"
        },
        {
            question: "Which tag is used to define a container for an external application or interactive content (like a plugin)?",
            options: ["<iframe>", "<embed>", "<object>", "All of the above"],
            answer: "All of the above"
        },
        {
            question: "What is the correct way to define the document type in HTML5?",
            options: ["<!DOCTYPE html>", "<html doctype=\"5\">", "<doctype html5>", "<?php doctype html ?>"],
            answer: "<!DOCTYPE html>"
        },
        {
            question: "Which attribute is used to group multiple form elements together logically?",
            options: ["<group>", "<fieldset>", "<section>", "<area>"],
            answer: "<fieldset>"
        },
        {
            question: "What is the purpose of the <meta name=\"viewport\"> tag?",
            options: [
                "To set the background image",
                "To control the page's dimensions and scaling on different devices",
                "To define keywords for SEO",
                "To link a CSS file"
            ],
            answer: "To control the page's dimensions and scaling on different devices"
        }
    ],

    // css
    css: [
        {
            question: "In the CSS Box Model, which property is used to create space OUTSIDE the border of an element?",
            options: ["Padding", "Border", "Margin", "Content"],
            answer: "Margin"
        },
        {
            question: "What is the CSS 'Specificity' order from highest to lowest?",
            options: [
                "Inline > ID > Class > Element",
                "ID > Inline > Element > Class",
                "Class > ID > Inline > Element",
                "Element > Class > ID > Inline"
            ],
            answer: "Inline > ID > Class > Element"
        },
        {
            question: "Which CSS property is used to create a 3-column layout using Flexbox?",
            options: ["flex-direction: column;", "justify-content: space-between;", "display: flex;", "grid-template-columns: 1fr 1fr 1fr;"],
            answer: "display: flex;"
        },
        {
            question: "What is the difference between 'visibility: hidden' and 'display: none'?",
            options: [
                "Both remove the element from the document flow",
                "visibility: hidden leaves the space empty; display: none removes the space entirely",
                "display: none leaves the space empty; visibility: hidden removes the space entirely",
                "They are exactly the same"
            ],
            answer: "visibility: hidden leaves the space empty; display: none removes the space entirely"
        },
        {
            question: "Which property is used to handle text overflow and add an ellipsis (...)?",
            options: ["text-wrap", "text-overflow", "overflow-behavior", "white-space"],
            answer: "text-overflow"
        },
        {
            question: "What does 'box-sizing: border-box' do?",
            options: [
                "Adds padding to the outside of the box",
                "Includes padding and border in the element's total width and height",
                "Excludes padding from the total width",
                "Makes all boxes square"
            ],
            answer: "Includes padding and border in the element's total width and height"
        },
        {
            question: "Which selector is used to style an element when a user moves their mouse over it?",
            options: [":active", ":focus", ":hover", ":visited"],
            answer: ":hover"
        },
        {
            question: "How do you apply a style to all <p> elements inside a <div>?",
            options: ["div + p", "div p", "div.p", "div > p"],
            answer: "div p"
        },
        {
            question: "Which CSS unit is relative to 1% of the width of the viewport?",
            options: ["vh", "em", "vw", "rem"],
            answer: "vw"
        },
        {
            question: "What is the purpose of the @media rule in CSS?",
            options: [
                "To import external fonts",
                "To apply different styles for different media types/devices",
                "To play video files",
                "To create animations"
            ],
            answer: "To apply different styles for different media types/devices"
        }
    ],

    // javascript
    javascript: [
        {
            question: "What is the difference between '==' and '===' in JavaScript?",
            options: [
                "They are identical",
                "== compares values only, while === compares both value and type",
                "=== is used for assigning variables",
                "== is faster than ==="
            ],
            answer: "== compares values only, while === compares both value and type"
        },
        {
            question: "Which of the following is an example of a 'closure' in JavaScript?",
            options: [
                "A function that is closed for modification",
                "A function that has access to variables from an outer function's scope",
                "A loop that never ends",
                "An object with private methods"
            ],
            answer: "A function that has access to variables from an outer function's scope"
        },
        {
            question: "What is the output of `console.log(typeof NaN)`?",
            options: ["'number'", "'NaN'", "'undefined'", "'object'"],
            answer: "'number'"
        },
        {
            question: "What is the 'Event Loop' in JavaScript responsible for?",
            options: [
                "Handling synchronous code execution only",
                "Managing the execution of multiple threads",
                "Managing the callback queue and pushing tasks to the call stack",
                "Stopping memory leaks"
            ],
            answer: "Managing the callback queue and pushing tasks to the call stack"
        },
        {
            question: "How do you stop a `setInterval` function from running?",
            options: ["stopInterval()", "clearInterval()", "endInterval()", "breakInterval()"],
            answer: "clearInterval()"
        },
        {
            question: "What is a 'Promise' in JavaScript?",
            options: [
                "A placeholder for a value that will be available in the future",
                "A function that returns a boolean value",
                "A way to write faster loops",
                "An internal error handling mechanism"
            ],
            answer: "A placeholder for a value that will be available in the future"
        },
        {
            question: "Which keyword is used to handle exceptions in JavaScript?",
            options: ["error", "catch", "try", "Both B and C"],
            answer: "Both B and C"
        },
        {
            question: "What is the output of `[] == ![]`?",
            options: ["true", "false", "TypeError", "undefined"],
            answer: "true"
        },
        {
            question: "Which ES6 method is used to create a new array by performing a function on each element of an existing array?",
            options: ["forEach()", "filter()", "map()", "reduce()"],
            answer: "map()"
        },
        {
            question: "What does the `async` keyword before a function ensure?",
            options: [
                "The function will run in parallel",
                "The function always returns a Promise",
                "The function will wait for 1 second",
                "The function cannot contain errors"
            ],
            answer: "The function always returns a Promise"
        },
        {
            question: "What is the purpose of 'use strict' at the beginning of a JS file?",
            options: [
                "To make the code run faster",
                "To enforce stricter parsing and error handling",
                "To enable ES6 features",
                "To prevent the use of global variables"
            ],
            answer: "To enforce stricter parsing and error handling"
        },
        {
            question: "Which method converts a JSON string into a JavaScript object?",
            options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.toObject()"],
            answer: "JSON.parse()"
        }
    ],

    // react js
    react: [
        {
            question: "What is 'Reconciliation' in React?",
            options: [
                "The process of syncing state with a database",
                "The algorithm React uses to diff the virtual DOM with the real DOM",
                "A way to handle errors in components",
                "The method for passing props to deeply nested children"
            ],
            answer: "The algorithm React uses to diff the virtual DOM with the real DOM"
        },
        {
            question: "In `useEffect`, what does returning a function from the effect hook achieve?",
            options: [
                "It triggers a re-render",
                "It defines a cleanup mechanism (like clearInterval or unsubscribing)",
                "It returns the data to the component",
                "It sets the initial state"
            ],
            answer: "It defines a cleanup mechanism (like clearInterval or unsubscribing)"
        },
        {
            question: "What is the primary difference between `useMemo` and `useCallback`?",
            options: [
                "useMemo is for state, useCallback is for effects",
                "useMemo returns a memoized value; useCallback returns a memoized function",
                "There is no difference",
                "useMemo is faster than useCallback"
            ],
            answer: "useMemo returns a memoized value; useCallback returns a memoized function"
        },
        {
            question: "Why should you avoid using array indices as 'key' props when rendering lists?",
            options: [
                "It causes a syntax error",
                "It can lead to issues with component state and incorrect UI updates during reordering",
                "Keys must always be strings, and indices are numbers",
                "React cannot render more than 10 items with index keys"
            ],
            answer: "It can lead to issues with component state and incorrect UI updates during reordering"
        },
        {
            question: "How does React handle state updates triggered within the same event handler?",
            options: [
                "It re-renders the component for every state update",
                "It batches the updates and re-renders only once for performance",
                "It throws an 'infinite loop' warning",
                "It ignores all updates except the first one"
            ],
            answer: "It batches the updates and re-renders only once for performance"
        },
        {
            question: "What is a 'Pure Component' in React?",
            options: [
                "A component that has no state",
                "A component that only renders when its props or state change (shallow comparison)",
                "A component that is written as a class",
                "A component that does not use hooks"
            ],
            answer: "A component that only renders when its props or state change (shallow comparison)"
        },
        {
            question: "What is the purpose of the `useRef` hook?",
            options: [
                "To trigger re-renders when data changes",
                "To persist values between renders without triggering a re-render",
                "To replace the useState hook entirely",
                "To handle global application state"
            ],
            answer: "To persist values between renders without triggering a re-render"
        },
        {
            question: "What are 'High-Order Components' (HOC) in React?",
            options: [
                "Components that are rendered at the top of the tree",
                "Functions that take a component and return a new component with added functionality",
                "Components that handle API calls only",
                "The main App component"
            ],
            answer: "Functions that take a component and return a new component with added functionality"
        },
        {
            question: "Which hook is best suited for managing complex state logic that involves multiple sub-values?",
            options: ["useState", "useReducer", "useRef", "useLayoutEffect"],
            answer: "useReducer"
        },
        {
            question: "When does the `useLayoutEffect` hook run?",
            options: [
                "After the DOM has been painted",
                "Synchronously after all DOM mutations but before the browser paints",
                "Only on the server side",
                "Before the component is even mounted"
            ],
            answer: "Synchronously after all DOM mutations but before the browser paints"
        }
    ],

    // bootstrap
    bootstrap: [
        {
            question: "Which Bootstrap class allows a column to take up half the width on a large screen and full width on a small screen?",
            options: ["col-lg-6", "col-6 col-lg-12", "col-12 col-lg-6", "col-sm-12"],
            answer: "col-12 col-lg-6"
        },
        {
            question: "In Bootstrap 5, which class has replaced the 'left' and 'right' naming convention for properties like float and margin?",
            options: ["start and end", "left and right", "prefix and suffix", "before and after"],
            answer: "start and end"
        },
        {
            question: "How does Bootstrap's grid system handle more than 12 columns in a single '.row'?",
            options: ["The row overflows horizontally", "The extra columns wrap to a new line", "The browser throws an error", "Columns shrink to fit"],
            answer: "The extra columns wrap to a new line"
        },
        {
            question: "Which class is used to vertically center items in a flexbox '.row'?",
            options: ["justify-content-center", "align-items-center", "text-center", "vertical-align-middle"],
            answer: "align-items-center"
        },
        {
            question: "What is the purpose of the 'gutter' in Bootstrap's grid system?",
            options: ["To add padding between columns", "To set the background color", "To define the font size", "To create a sticky footer"],
            answer: "To add padding between columns"
        },
        {
            question: "Which class is used to hide an element on mobile (xs) but show it on medium (md) screens?",
            options: ["d-none d-md-block", "hide-sm show-md", "invisible-md", "d-md-none"],
            answer: "d-none d-md-block"
        },
        {
            question: "What utility class would you use to add a 1-pixel border to the top of an element?",
            options: ["border-top", "border-1", "border-t-1", "outline-top"],
            answer: "border-top"
        },
        {
            question: "Which of the following is true about 'container-fluid'?",
            options: ["It has a max-width of 1200px", "It always spans 100% of the viewport width", "It only works on desktop", "It removes all horizontal padding"],
            answer: "It always spans 100% of the viewport width"
        },
        {
            question: "What is the role of the 'z-index' utility classes in Bootstrap (e.g., .z-1)?",
            options: ["To zoom into images", "To control the stack order of elements", "To fix elements to the top", "To rotate elements"],
            answer: "To control the stack order of elements"
        },
        {
            question: "Which Bootstrap component requires Popper.js to function correctly?",
            options: ["Buttons", "Tooltips & Popovers", "Cards", "Forms"],
            answer: "Tooltips & Popovers"
        }
    ],

    // tailwind css
    tailwind: [
        {
            question: "What does 'Utility-First' mean in the context of Tailwind CSS?",
            options: [
                "Building components using predefined UI classes",
                "Building custom designs by composing low-level utility classes",
                "Using JavaScript to generate CSS styles",
                "Focusing only on the utility segment of the website"
            ],
            answer: "Building custom designs by composing low-level utility classes"
        },
        {
            question: "In Tailwind, which prefix ensures a style is only applied when the user's system is set to dark mode?",
            options: ["night:", "black:", "dark:", "theme-dark:"],
            answer: "dark:"
        },
        {
            question: "How do you apply a custom arbitrary value, like 'height: 432px', using Tailwind?",
            options: ["h-432", "h-[432px]", "height-custom", "h-px-432"],
            answer: "h-[432px]"
        },
        {
            question: "What is the default mobile-first breakpoint logic in Tailwind?",
            options: [
                "Classes with no prefix apply to all screens; md: applies to 768px and up",
                "Classes with no prefix apply only to desktop",
                "Classes are applied from largest screen to smallest",
                "Breakpoints must be manually defined for every class"
            ],
            answer: "Classes with no prefix apply to all screens; md: applies to 768px and up"
        },
        {
            question: "Which class would you use to create a 3-column grid with equal widths?",
            options: ["grid-cols-3", "columns-3", "flex-3", "grid-3"],
            answer: "grid-cols-3"
        },
        {
            question: "What does the 'peer' modifier in Tailwind allow you to do?",
            options: [
                "Style an element based on the state of a sibling element",
                "Group multiple child elements",
                "Create a sticky sidebar",
                "Share styles across components"
            ],
            answer: "Style an element based on the state of a sibling element"
        },
        {
            question: "Which utility is used to add space between children in a flex/grid container without using margins on the children?",
            options: ["gap-x-4", "between-4", "space-x-4", "Both A and C"],
            answer: "Both A and C"
        },
        {
            question: "What is the benefit of Tailwind's 'Just-in-Time' (JIT) engine?",
            options: [
                "It generates all possible CSS classes at once",
                "It only generates the CSS you actually use, leading to tiny file sizes",
                "It allows you to use Bootstrap classes inside Tailwind",
                "It speeds up the browser's rendering engine"
            ],
            answer: "It only generates the CSS you actually use, leading to tiny file sizes"
        },
        {
            question: "How do you change the opacity of an element's background without affecting its text opacity?",
            options: ["bg-opacity-50", "opacity-50", "bg-blue-500/50", "text-transparent"],
            answer: "bg-blue-500/50"
        },
        {
            question: "Where do you define custom screen sizes or extend the default spacing scale?",
            options: ["tailwind.config.js under the 'theme' object", "The main.css file", "The index.html meta tag", "The package.json file"],
            answer: "tailwind.config.js under the 'theme' object"
        }
    ],

    // git & github
    git: [
        {
            question: "What is the primary difference between `git fetch` and `git pull`?",
            options: [
                "They are exactly the same",
                "git fetch downloads changes without merging; git pull downloads and merges",
                "git pull only works for the main branch",
                "git fetch deletes local changes"
            ],
            answer: "git fetch downloads changes without merging; git pull downloads and merges"
        },
        {
            question: "What is the 'Staging Area' (Index) in Git?",
            options: [
                "A place where deleted files are stored",
                "An intermediate area where changes are prepared before a commit",
                "The remote server where code is hosted",
                "The final step after pushing code"
            ],
            answer: "An intermediate area where changes are prepared before a commit"
        },
        {
            question: "Which command is used to switch to an existing branch named 'feature-ui'?",
            options: [
                "git move feature-ui",
                "git checkout feature-ui",
                "git branch --switch feature-ui",
                "git change feature-ui"
            ],
            answer: "git checkout feature-ui"
        },
        {
            question: "What happens during a `git merge` conflict?",
            options: [
                "Git automatically deletes the conflicting files",
                "Git stops the merge and asks the user to manually resolve differences",
                "The older commit always overwrites the newer one",
                "The repository is corrupted and must be re-cloned"
            ],
            answer: "Git stops the merge and asks the user to manually resolve differences"
        },
        {
            question: "What does the command `git commit --amend` allow you to do?",
            options: [
                "Delete the last commit",
                "Modify the most recent commit (e.g., fix a typo in the message)",
                "Combine all branches into one",
                "Push code to a different remote"
            ],
            answer: "Modify the most recent commit (e.g., fix a typo in the message)"
        },
        {
            question: "What is the purpose of the `.gitignore` file?",
            options: [
                "To list files that should be deleted from the server",
                "To specify which files/folders Git should intentionally untrack",
                "To store passwords and API keys securely",
                "To hide the commit history"
            ],
            answer: "To specify which files/folders Git should intentionally untrack"
        },
        {
            question: "Which command is used to temporarily save uncommitted changes to work on something else?",
            options: ["git save", "git stash", "git hold", "git pause"],
            answer: "git stash"
        },
        {
            question: "In Git, what does 'HEAD' refer to?",
            options: [
                "The very first commit of the repository",
                "The currently checked-out branch or the last commit in the current branch",
                "The main folder of the project",
                "The remote GitHub server"
            ],
            answer: "The currently checked-out branch or the last commit in the current branch"
        },
        {
            question: "What is a 'Pull Request' (PR) on GitHub?",
            options: [
                "A command to download code",
                "A way to propose changes from one branch to another and request a review",
                "A request to delete a repository",
                "An error that occurs when pushing code"
            ],
            answer: "A way to propose changes from one branch to another and request a review"
        },
        {
            question: "What is the difference between `git reset` and `git revert`?",
            options: [
                "reset deletes history; revert creates a new commit to undo changes safely",
                "revert is only for GitHub; reset is for local Git",
                "There is no difference",
                "reset is for files; revert is for branches"
            ],
            answer: "reset deletes history; revert creates a new commit to undo changes safely"
        }
    ],

    // node.js
    nodejs: [
        {
            question: "Node.js is described as 'Single-Threaded.' How does it then handle heavy I/O tasks without blocking?",
            options: [
                "It uses multiple threads for JavaScript execution",
                "It delegates tasks to the system kernel or Libuv's thread pool",
                "It pauses the execution until the task is finished",
                "It skips heavy tasks to keep the UI responsive"
            ],
            answer: "It delegates tasks to the system kernel or Libuv's thread pool"
        },
        {
            question: "Which of the following is the correct order of phases in the Node.js Event Loop?",
            options: [
                "Timers -> I/O Callbacks -> Poll -> Check -> Close",
                "Poll -> Timers -> Check -> Close",
                "Check -> Poll -> Timers -> I/O Callbacks",
                "Timers -> Check -> Poll -> Close"
            ],
            answer: "Timers -> I/O Callbacks -> Poll -> Check -> Close"
        },
        {
            question: "What is the difference between `process.nextTick()` and `setImmediate()`?",
            options: [
                "nextTick runs in the next loop; setImmediate runs in the current one",
                "nextTick runs immediately after the current operation; setImmediate runs in the next 'check' phase",
                "They are aliases for the same function",
                "setImmediate is faster than nextTick"
            ],
            answer: "nextTick runs immediately after the current operation; setImmediate runs in the next 'check' phase"
        },
        {
            question: "Which core module is used to handle large amounts of data efficiently by reading it piece by piece?",
            options: ["buffer", "stream", "http", "string_decoder"],
            answer: "stream"
        },
        {
            question: "In Node.js, what does the `EventEmitter` class allow you to do?",
            options: [
                "Connect to a database",
                "Create and handle custom events",
                "Render HTML templates",
                "Manage environment variables"
            ],
            answer: "Create and handle custom events"
        },
        {
            question: "What is the purpose of the `package-lock.json` file?",
            options: [
                "To lock the project so others can't edit it",
                "To ensure exact versions of dependencies are installed across all environments",
                "To store private API keys",
                "To speed up the V8 engine"
            ],
            answer: "To ensure exact versions of dependencies are installed across all environments"
        },
        {
            question: "Which of the following is a 'Global' object in Node.js (available without requiring it)?",
            options: ["require", "module", "process", "fs"],
            answer: "process"
        },
        {
            question: "What is the result of using a Synchronous function like `fs.readFileSync()` in a high-traffic production server?",
            options: [
                "It improves data accuracy",
                "It blocks the entire event loop, preventing other requests from being handled",
                "It makes the server multi-threaded",
                "It has no impact on performance"
            ],
            answer: "It blocks the entire event loop, preventing other requests from being handled"
        },
        {
            question: "Which library is used by Node.js to handle asynchronous I/O operations?",
            options: ["V8", "Libuv", "OpenSSL", "Zlib"],
            answer: "Libuv"
        },
        {
            question: "How do you access command-line arguments passed to a Node.js script?",
            options: ["process.argv", "os.args", "console.args", "env.arguments"],
            answer: "process.argv"
        }
    ],

    // express.js
    expressjs: [
        {
            question: "In Express.js, what is the correct order of parameters for a standard middleware function?",
            options: ["(res, req, next)", "(req, res, next)", "(next, req, res)", "(req, res)"],
            answer: "(req, res, next)"
        },
        {
            question: "What is the difference between `req.params` and `req.query`?",
            options: [
                "req.params is for POST data; req.query is for GET data",
                "req.params captures dynamic route segments (:id); req.query captures URL query strings (?id=123)",
                "They are two names for the same object",
                "req.query is only available in the frontend"
            ],
            answer: "req.params captures dynamic route segments (:id); req.query captures URL query strings (?id=123)"
        },
        {
            question: "Which built-in middleware is required to serve static files like images, CSS, and JavaScript?",
            options: ["express.static()", "express.serve()", "express.files()", "express.public()"],
            answer: "express.static()"
        },
        {
            question: "How do you define an 'Error-Handling' middleware in Express?",
            options: [
                "By using app.error()",
                "By defining a middleware with 4 parameters: (err, req, res, next)",
                "By using a try-catch block in the app.js file",
                "By setting the status code to 500"
            ],
            answer: "By defining a middleware with 4 parameters: (err, req, res, next)"
        },
        {
            question: "What does the `res.json()` method do?",
            options: [
                "Converts a JavaScript object to a JSON string and sends it as a response",
                "Parses incoming JSON from the request body",
                "Logs JSON data to the console",
                "Redirects the user to a .json file"
            ],
            answer: "Converts a JavaScript object to a JSON string and sends it as a response"
        },
        {
            question: "Which HTTP method is considered 'Idempotent' (making multiple identical requests has the same effect as one)?",
            options: ["POST", "PUT", "PATCH", "Both PUT and GET"],
            answer: "Both PUT and GET"
        },
        {
            question: "What is the purpose of the `app.route()` method?",
            options: [
                "To navigate to a new page",
                "To create chainable route handlers for a specific path",
                "To track the user's location",
                "To define the server's IP address"
            ],
            answer: "To create chainable route handlers for a specific path"
        },
        {
            question: "Which status code should be sent after successfully CREATING a new resource via a POST request?",
            options: ["200 OK", "201 Created", "204 No Content", "302 Found"],
            answer: "201 Created"
        },
        {
            question: "How can you access the 'Body' of an incoming POST request in a modern Express app?",
            options: ["req.body", "req.data", "req.json", "req.payload"],
            answer: "req.body"
        },
        {
            question: "Which method is used to remove a specific middleware from the stack?",
            options: ["app.remove()", "app.delete()", "Express doesn't provide a built-in method; you manage it via logic/routing", "app.unbind()"],
            answer: "Express doesn't provide a built-in method; you manage it via logic/routing"
        }
    ],

    // mongo db
    mongodb: [
        {
            question: "What is BSON in MongoDB?",
            options: [
                "A type of SQL query",
                "A binary-serialized JSON-like format used to store documents",
                "A compression tool for databases",
                "A browser-based JavaScript Object Notation"
            ],
            answer: "A binary-serialized JSON-like format used to store documents"
        },
        {
            question: "In the MERN stack, what is the role of Mongoose?",
            options: [
                "It is the primary database engine",
                "An ODM (Object Data Modeling) library used to manage relationships and schemas",
                "A frontend framework for styling",
                "A package for encrypting MongoDB passwords"
            ],
            answer: "An ODM (Object Data Modeling) library used to manage relationships and schemas"
        },
        {
            question: "Which field is automatically created as a unique primary key for every MongoDB document?",
            options: ["_id", "uid", "pk_id", "index_0"],
            answer: "_id"
        },
        {
            question: "What is the purpose of 'Indexing' in MongoDB?",
            options: [
                "To make documents look organized",
                "To improve the speed of search queries significantly",
                "To encrypt data at rest",
                "To delete duplicate documents"
            ],
            answer: "To improve the speed of search queries significantly"
        },
        {
            question: "Which MongoDB operator is used to update the value of a specific field without overwriting the entire document?",
            options: ["$change", "$set", "$push", "$modify"],
            answer: "$set"
        },
        {
            question: "What is the 'Aggregation Pipeline' in MongoDB?",
            options: [
                "A way to backup the database",
                "A framework for data processing and transformation using multiple stages",
                "A method to connect the frontend to the backend",
                "A tool for horizontal scaling"
            ],
            answer: "A framework for data processing and transformation using multiple stages"
        },
        {
            question: "Which of the following is true about MongoDB schemas?",
            options: [
                "They are rigid and cannot be changed",
                "MongoDB is schema-less, meaning documents in a collection can have different fields",
                "Every document must have exactly 10 fields",
                "Schemas are only used in SQL databases"
            ],
            answer: "MongoDB is schema-less, meaning documents in a collection can have different fields"
        },
        {
            question: "What does the 'Sharding' process achieve in MongoDB?",
            options: [
                "It creates data backups",
                "It distributes data across multiple machines for horizontal scaling",
                "It converts JSON to XML",
                "It secures the database from hackers"
            ],
            answer: "It distributes data across multiple machines for horizontal scaling"
        },
        {
            question: "Which command is used to see the performance stats or 'query plan' of a specific find operation?",
            options: ["db.collection.stats()", "db.collection.explain()", "db.collection.plan()", "db.collection.debug()"],
            answer: "db.collection.explain()"
        },
        {
            question: "In an aggregation pipeline, which stage is used to filter documents similar to the 'find' method?",
            options: ["$group", "$project", "$match", "$lookup"],
            answer: "$match"
        }
    ],

    // java
    java: [
        {
            question: "What is the main difference between JDK, JRE, and JVM?",
            options: [
                "They are different names for the same thing",
                "JDK is for development, JRE is for running apps, and JVM executes the bytecode",
                "JVM is for development, JDK is for running apps",
                "JRE contains the compiler, JDK does not"
            ],
            answer: "JDK is for development, JRE is for running apps, and JVM executes the bytecode"
        },
        {
            question: "Why is Java considered 'Platform Independent'?",
            options: [
                "Because it doesn't use any memory",
                "Because the source code is the same on all systems",
                "Because it compiles to bytecode which runs on any system with a JVM",
                "Because it is a markup language"
            ],
            answer: "Because it compiles to bytecode which runs on any system with a JVM"
        },
        {
            question: "Which memory area in Java is responsible for storing objects and their instance variables?",
            options: ["Stack", "Heap", "Method Area", "PC Register"],
            answer: "Heap"
        },
        {
            question: "What is the purpose of the 'static' keyword in Java?",
            options: [
                "To make a variable constant",
                "To indicate that a member belongs to the class rather than an instance",
                "To prevent a class from being inherited",
                "To force a method to run in a separate thread"
            ],
            answer: "To indicate that a member belongs to the class rather than an instance"
        },
        {
            question: "In the Java Collection Framework, which interface should be used if you need to store unique elements in a specific sorted order?",
            options: ["ArrayList", "HashSet", "TreeSet", "LinkedList"],
            answer: "TreeSet"
        },
        {
            question: "What is 'Autoboxing' in Java?",
            options: [
                "Automatic conversion of primitive types to their corresponding wrapper classes",
                "A way to automatically resize an array",
                "The process of creating a new class automatically",
                "Automatic deletion of unused objects"
            ],
            answer: "Automatic conversion of primitive types to their corresponding wrapper classes"
        },
        {
            question: "Which of the following is true about a 'finally' block in exception handling?",
            options: [
                "It only executes if an exception is caught",
                "It never executes if there is a return statement in try",
                "It always executes regardless of whether an exception is thrown or caught",
                "It is used to throw new exceptions"
            ],
            answer: "It always executes regardless of whether an exception is thrown or caught"
        },
        {
            question: "What does the 'super' keyword do in Java?",
            options: [
                "It refers to the current object",
                "It refers to the immediate parent class object",
                "It makes a method run faster",
                "It imports a package from a higher directory"
            ],
            answer: "It refers to the immediate parent class object"
        },
        {
            question: "Which of these is a functional interface introduced in Java 8?",
            options: ["Runnable", "Comparable", "Predicate", "All of the above"],
            answer: "All of the above"
        },
        {
            question: "How does the 'Garbage Collector' determine which objects to remove from memory?",
            options: [
                "It removes objects that are older than 10 minutes",
                "It removes objects that are no longer reachable by any reference",
                "It removes objects that have been used the most",
                "It removes objects alphabetically by name"
            ],
            answer: "It removes objects that are no longer reachable by any reference"
        }
    ],

    // python
    python: [
        {
            question: "What is the primary difference between a List and a Tuple in Python?",
            options: [
                "Lists are faster than Tuples",
                "Lists are mutable (can be changed); Tuples are immutable (cannot be changed)",
                "Tuples are for numbers; Lists are for strings",
                "Lists use parentheses (); Tuples use square brackets []"
            ],
            answer: "Lists are mutable (can be changed); Tuples are immutable (cannot be changed)"
        },
        {
            question: "What is the purpose of the 'Global Interpreter Lock' (GIL) in Python?",
            options: [
                "To speed up mathematical calculations",
                "To ensure only one thread executes Python bytecode at a time",
                "To prevent users from editing global variables",
                "To lock the computer while Python is running"
            ],
            answer: "To ensure only one thread executes Python bytecode at a time"
        },
        {
            question: "Which of the following is a 'List Comprehension' that squares even numbers from 0-9?",
            options: [
                "[x*x for x in range(10) if x % 2 == 0]",
                "list(x**2 if x % 2 == 0)",
                "{x*x for x in range(10)}",
                "for x in range(10): x*x"
            ],
            answer: "[x*x for x in range(10) if x % 2 == 0]"
        },
        {
            question: "What does the `__init__` method do in a Python class?",
            options: [
                "It deletes an object",
                "It is the constructor that initializes a new instance of a class",
                "It imports a library into the class",
                "It checks if a variable is an integer"
            ],
            answer: "It is the constructor that initializes a new instance of a class"
        },
        {
            question: "In Python, what is the 'PEP 8' document?",
            options: [
                "A technical guide for building web scrapers",
                "The official style guide for writing Python code",
                "A list of all built-in Python functions",
                "A security protocol for Python servers"
            ],
            answer: "The official style guide for writing Python code"
        },
        {
            question: "How do you handle multiple exceptions in a single `except` block?",
            options: [
                "except TypeError, ValueError:",
                "except (TypeError, ValueError):",
                "except TypeError | ValueError:",
                "except {TypeError, ValueError}"
            ],
            answer: "except (TypeError, ValueError):"
        },
        {
            question: "What is the output of `bool([])` in Python?",
            options: ["True", "False", "None", "Error"],
            answer: "False"
        },
        {
            question: "Which library is the foundation for almost all Data Science and ML libraries in Python, providing support for large multi-dimensional arrays?",
            options: ["Pandas", "NumPy", "Scikit-Learn", "TensorFlow"],
            answer: "NumPy"
        },
        {
            question: "What is a 'Decorator' in Python?",
            options: [
                "A way to change the background color of the console",
                "A function that modifies the behavior of another function",
                "A comment that explains what a class does",
                "A tool for creating GUI layouts"
            ],
            answer: "A function that modifies the behavior of another function"
        },
        {
            question: "What does the `yield` keyword do in Python?",
            options: [
                "It stops the program execution immediately",
                "It turns a function into a generator that returns values one at a time",
                "It checks for memory leaks",
                "It imports a module only when needed"
            ],
            answer: "It turns a function into a generator that returns values one at a time"
        }
    ],

    // sql
    sql: [
        {
            question: "Which SQL join returns all records from the left table and the matched records from the right table?",
            options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
            answer: "LEFT JOIN"
        },
        {
            question: "What is the primary difference between the DELETE and TRUNCATE commands?",
            options: [
                "DELETE is DDL; TRUNCATE is DML",
                "DELETE can be rolled back and uses a WHERE clause; TRUNCATE is faster and removes all rows without logging individual deletions",
                "TRUNCATE deletes the table structure; DELETE only deletes data",
                "There is no difference"
            ],
            answer: "DELETE can be rolled back and uses a WHERE clause; TRUNCATE is faster and removes all rows without logging individual deletions"
        },
        {
            question: "What does the 'ACID' acronym stand for in database transactions?",
            options: [
                "Access, Control, Integrity, Durability",
                "Atomicity, Consistency, Isolation, Durability",
                "Algorithm, Coding, Indexing, Data",
                "Accuracy, Continuity, Identity, Delivery"
            ],
            answer: "Atomicity, Consistency, Isolation, Durability"
        },
        {
            question: "Which SQL clause is used to filter the results of an aggregate function (like SUM or COUNT)?",
            options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
            answer: "HAVING"
        },
        {
            question: "What is a 'Unique Key' in a SQL database?",
            options: [
                "A key that must be a number",
                "A constraint that ensures all values in a column are different, but can accept one NULL value",
                "The same as a Primary Key",
                "A key used only for encryption"
            ],
            answer: "A constraint that ensures all values in a column are different, but can accept one NULL value"
        },
        {
            question: "Which of the following is used to avoid data redundancy in a relational database?",
            options: ["Indexing", "Normalization", "Sharding", "Replication"],
            answer: "Normalization"
        },
        {
            question: "What is a 'Self-Join' in SQL?",
            options: [
                "Joining a table with another table having the same name",
                "A regular join where a table is joined with itself",
                "A join that requires no ON condition",
                "A join between two different databases"
            ],
            answer: "A regular join where a table is joined with itself"
        },
        {
            question: "What does the `DISTINCT` keyword do?",
            options: [
                "It sorts the results alphabetically",
                "It returns only unique (different) values by removing duplicates",
                "It makes the query run faster",
                "It highlights the primary key"
            ],
            answer: "It returns only unique (different) values by removing duplicates"
        },
        {
            question: "Which command is used to change the structure of an existing table (like adding a column)?",
            options: ["UPDATE", "MODIFY", "ALTER", "CHANGE"],
            answer: "ALTER"
        },
        {
            question: "What is a 'Foreign Key' used for?",
            options: [
                "To uniquely identify a row in its own table",
                "To link two tables together and enforce referential integrity",
                "To store data from another database",
                "To speed up search queries"
            ],
            answer: "To link two tables together and enforce referential integrity"
        }
    ]
};