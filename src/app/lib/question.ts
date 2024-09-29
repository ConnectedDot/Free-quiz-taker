// questions.ts

export type Topic =
	| "AI"
	| "Python"
	| "JavaScript"
	| "CSS"
	| "HTML"
	| "UIDesign";

export const questionsData = {
	AI: [
		{
			id: 1,
			question: "What is Artificial Intelligence?",
			options: [
				"A type of food",
				"A programming language",
				"A field of study",
				"A type of music",
			],
			answer: "A field of study",
		},
		{
			id: 2,
			question: "Who is known as the father of AI?",
			options: ["Alan Turing", "Elon Musk", "Bill Gates", "Steve Jobs"],
			answer: "Alan Turing",
		},
		{
			id: 3,
			question: "Which of the following is an application of AI?",
			options: ["Self-driving cars", "Word processing", "Spreadsheet", "Email"],
			answer: "Self-driving cars",
		},
		{
			id: 4,
			question: "What is machine learning?",
			options: [
				"A type of AI that learns from data",
				"A type of AI that does not learn",
				"A programming language",
				"A type of hardware",
			],
			answer: "A type of AI that learns from data",
		},
		{
			id: 5,
			question: "Which of the following is a type of AI?",
			options: ["Narrow AI", "General AI", "Super AI", "All of the above"],
			answer: "All of the above",
		},
		{
			id: 6,
			question: "What is the Turing Test?",
			options: [
				"A test for human intelligence",
				"A test for AI intelligence",
				"A test for programming skills",
				"A test for computer hardware",
			],
			answer: "A test for AI intelligence",
		},
		{
			id: 7,
			question: "Which of the following is a programming language used in AI?",
			options: ["Python", "Java", "Lisp", "All of the above"],
			answer: "All of the above",
		},
		{
			id: 8,
			question: "What is natural language processing?",
			options: [
				"A type of AI that processes human language",
				"A type of AI that processes images",
				"A type of AI that processes data",
				"A type of AI that processes sound",
			],
			answer: "A type of AI that processes human language",
		},
		{
			id: 9,
			question: "Which of the following is a goal of AI?",
			options: [
				"To create machines that can think and learn",
				"To create machines that can only perform specific tasks",
				"To create machines that can only store data",
				"To create machines that can only process data",
			],
			answer: "To create machines that can think and learn",
		},
		{
			id: 10,
			question: "What is deep learning?",
			options: [
				"A type of machine learning that uses neural networks",
				"A type of machine learning that does not use neural networks",
				"A type of programming language",
				"A type of hardware",
			],
			answer: "A type of machine learning that uses neural networks",
		},
	],
	Python: [
		{
			id: 1,
			question: "What is Python?",
			options: ["A snake", "A programming language", "A car", "A movie"],
			answer: "A programming language",
		},
		{
			id: 2,
			question: "Who created Python?",
			options: ["Guido van Rossum", "Elon Musk", "Bill Gates", "Steve Jobs"],
			answer: "Guido van Rossum",
		},
		{
			id: 3,
			question: "What is the correct file extension for Python files?",
			options: [".py", ".java", ".js", ".html"],
			answer: ".py",
		},
		{
			id: 4,
			question: "Which of the following is a Python framework?",
			options: ["Django", "React", "Angular", "Vue"],
			answer: "Django",
		},
		{
			id: 5,
			question: "What is the keyword to define a function in Python?",
			options: ["function", "def", "func", "define"],
			answer: "def",
		},
		{
			id: 6,
			question: "Which of the following is a Python data type?",
			options: ["String", "Integer", "List", "All of the above"],
			answer: "All of the above",
		},
		{
			id: 7,
			question: "What is the output of print(2 ** 3) in Python?",
			options: ["5", "6", "8", "9"],
			answer: "8",
		},
		{
			id: 8,
			question:
				"Which of the following is used to handle exceptions in Python?",
			options: ["try-except", "if-else", "for-while", "switch-case"],
			answer: "try-except",
		},
		{
			id: 9,
			question: "Which of the following is a mutable data type in Python?",
			options: ["List", "Tuple", "String", "Integer"],
			answer: "List",
		},
		{
			id: 10,
			question: "What is the output of len('Hello') in Python?",
			options: ["3", "4", "5", "6"],
			answer: "5",
		},
	],
	JavaScript: [
		{
			id: 1,
			question: "What is JavaScript?",
			options: [
				"A type of coffee",
				"A programming language",
				"A car",
				"A movie",
			],
			answer: "A programming language",
		},
		{
			id: 2,
			question: "Who created JavaScript?",
			options: ["Brendan Eich", "Elon Musk", "Bill Gates", "Steve Jobs"],
			answer: "Brendan Eich",
		},
		{
			id: 3,
			question: "Which company developed JavaScript?",
			options: ["Netscape", "Microsoft", "Google", "Apple"],
			answer: "Netscape",
		},
		{
			id: 4,
			question:
				"What is the correct syntax for referring to an external script called 'xxx.js'?",
			options: [
				"<script href='xxx.js'>",
				"<script name='xxx.js'>",
				"<script src='xxx.js'>",
				"<script file='xxx.js'>",
			],
			answer: "<script src='xxx.js'>",
		},
		{
			id: 5,
			question: "How do you write 'Hello World' in an alert box?",
			options: [
				"msgBox('Hello World');",
				"alertBox('Hello World');",
				"msg('Hello World');",
				"alert('Hello World');",
			],
			answer: "alert('Hello World');",
		},
		{
			id: 6,
			question: "How do you create a function in JavaScript?",
			options: [
				"function myFunction()",
				"function:myFunction()",
				"function = myFunction()",
				"function => myFunction()",
			],
			answer: "function myFunction()",
		},
		{
			id: 7,
			question: "How do you call a function named 'myFunction'?",
			options: [
				"call myFunction()",
				"call function myFunction()",
				"myFunction()",
				"execute myFunction()",
			],
			answer: "myFunction()",
		},
		{
			id: 8,
			question: "How to write an IF statement in JavaScript?",
			options: ["if i = 5 then", "if i == 5 then", "if (i == 5)", "if i = 5"],
			answer: "if (i == 5)",
		},
		{
			id: 9,
			question: "How does a WHILE loop start?",
			options: [
				"while (i <= 10; i++)",
				"while (i <= 10)",
				"while i = 1 to 10",
				"while (i++ <= 10)",
			],
			answer: "while (i <= 10)",
		},
		{
			id: 10,
			question: "How can you add a comment in JavaScript?",
			options: [
				"<!-- This is a comment -->",
				"// This is a comment",
				"' This is a comment",
				"/* This is a comment */",
			],
			answer: "// This is a comment",
		},
	],
	CSS: [
		{
			id: 1,
			question: "What does CSS stand for?",
			options: [
				"Cascading Style Sheets",
				"Computer Style Sheets",
				"Creative Style Sheets",
				"Colorful Style Sheets",
			],
			answer: "Cascading Style Sheets",
		},
		{
			id: 2,
			question: "Which HTML attribute is used to define inline styles?",
			options: ["class", "style", "font", "styles"],
			answer: "style",
		},
		{
			id: 3,
			question: "Which property is used to change the background color?",
			options: ["color", "bgcolor", "background-color", "background"],
			answer: "background-color",
		},
		{
			id: 4,
			question:
				"Which property is used to change the text color of an element?",
			options: ["fgcolor", "color", "text-color", "font-color"],
			answer: "color",
		},
		{
			id: 5,
			question: "Which property is used to change the font of an element?",
			options: ["font-family", "font-style", "font-weight", "font-size"],
			answer: "font-family",
		},
		{
			id: 6,
			question:
				"How do you make each word in a text start with a capital letter?",
			options: [
				"text-transform:capitalize",
				"text-transform:uppercase",
				"text-transform:lowercase",
				"text-transform:capitalize-each",
			],
			answer: "text-transform:capitalize",
		},
		{
			id: 7,
			question:
				"Which property is used to change the left margin of an element?",
			options: ["margin-left", "padding-left", "indent-left", "margin"],
			answer: "margin-left",
		},
		{
			id: 8,
			question: "How do you select an element with id 'demo'?",
			options: ["#demo", ".demo", "demo", "*demo"],
			answer: "#demo",
		},
		{
			id: 9,
			question: "How do you select elements with class name 'test'?",
			options: [".test", "#test", "test", "*test"],
			answer: ".test",
		},
		{
			id: 10,
			question: "How do you make a list that lists its items with squares?",
			options: [
				"list-style-type: square",
				"list-type: square",
				"list: square",
				"list-style: square",
			],
			answer: "list-style-type: square",
		},
	],
	HTML: [
		{
			id: 1,
			question: "What does HTML stand for?",
			options: [
				"Hyper Text Markup Language",
				"Home Tool Markup Language",
				"Hyperlinks and Text Markup Language",
				"Hyperlinking Text Marking Language",
			],
			answer: "Hyper Text Markup Language",
		},
		{
			id: 2,
			question: "Who is making the Web standards?",
			options: [
				"Mozilla",
				"Microsoft",
				"Google",
				"The World Wide Web Consortium",
			],
			answer: "The World Wide Web Consortium",
		},
		{
			id: 3,
			question: "Which HTML tag is used to define an unordered list?",
			options: ["<ul>", "<ol>", "<li>", "<list>"],
			answer: "<ul>",
		},
		{
			id: 4,
			question: "Which HTML tag is used to define a hyperlink?",
			options: ["<a>", "<link>", "<href>", "<hyperlink>"],
			answer: "<a>",
		},
		{
			id: 5,
			question: "Which HTML tag is used to define a table?",
			options: ["<table>", "<tab>", "<tr>", "<td>"],
			answer: "<table>",
		},
		{
			id: 6,
			question: "Which HTML tag is used to define a list item?",
			options: ["<li>", "<list>", "<ul>", "<ol>"],
			answer: "<li>",
		},
		{
			id: 7,
			question: "Which HTML tag is used to define a paragraph?",
			options: ["<p>", "<para>", "<paragraph>", "<text>"],
			answer: "<p>",
		},
		{
			id: 8,
			question: "Which HTML tag is used to define a header?",
			options: ["<h1>", "<header>", "<head>", "<h>"],
			answer: "<h1>",
		},
		{
			id: 9,
			question: "Which HTML tag is used to define a footer?",
			options: ["<footer>", "<foot>", "<bottom>", "<end>"],
			answer: "<footer>",
		},
		{
			id: 10,
			question: "Which HTML tag is used to define a division or a section?",
			options: ["<div>", "<section>", "<part>", "<divide>"],
			answer: "<div>",
		},
	],
	UIDesign: [
		{
			id: 1,
			question: "What is UI Design?",
			options: [
				"User Interface Design",
				"User Interaction Design",
				"User Integration Design",
				"User Information Design",
			],
			answer: "User Interface Design",
		},
		{
			id: 2,
			question: "Which tool is commonly used for UI Design?",
			options: ["Photoshop", "Sketch", "Illustrator", "All of the above"],
			answer: "All of the above",
		},
		{
			id: 3,
			question: "What does UX stand for?",
			options: [
				"User Experience",
				"User Exchange",
				"User Execution",
				"User Example",
			],
			answer: "User Experience",
		},
		{
			id: 4,
			question: "Which principle is important in UI Design?",
			options: ["Consistency", "Randomness", "Complexity", "Ambiguity"],
			answer: "Consistency",
		},
		{
			id: 5,
			question: "What is wireframing?",
			options: [
				"A process of creating a blueprint for a website",
				"A process of creating a final design for a website",
				"A process of creating a prototype for a website",
				"A process of creating a mockup for a website",
			],
			answer: "A process of creating a blueprint for a website",
		},
		{
			id: 6,
			question: "Which of the following is a UI design pattern?",
			options: [
				"Modal window",
				"Dropdown menu",
				"Accordion",
				"All of the above",
			],
			answer: "All of the above",
		},
		{
			id: 7,
			question: "What is the purpose of a style guide?",
			options: [
				"To ensure consistency in design",
				"To ensure randomness in design",
				"To ensure complexity in design",
				"To ensure ambiguity in design",
			],
			answer: "To ensure consistency in design",
		},
		{
			id: 8,
			question: "Which of the following is a principle of good UI design?",
			options: ["Simplicity", "Complexity", "Ambiguity", "Randomness"],
			answer: "Simplicity",
		},
		{
			id: 9,
			question: "What is a prototype?",
			options: [
				"A preliminary version of a product",
				"A final version of a product",
				"A blueprint of a product",
				"A mockup of a product",
			],
			answer: "A preliminary version of a product",
		},
		{
			id: 10,
			question: "Which of the following is a tool for creating prototypes?",
			options: ["Figma", "Sketch", "Adobe XD", "All of the above"],
			answer: "All of the above",
		},
	],
};
