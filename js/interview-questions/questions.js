const questions = [
  {
    _id: 1,
    question: "What is a data structure?",
    answers: [
      "A data structure is a storage format that defines the way data is stored, organized, and manipulated.",
      "Some popular data structures are Arrays, Trees, and Graphs",
    ],
  },
  {
    _id: 2,
    question: "What is an Array?",
    answers: [
      "An array is commonly referred to as a collection of items stored at contiguous memory locations.",
      "Items stored are of the same type.",
      "It organizes data so that a related set of values can be easily sorted or searched.",
    ],
  },
  {
    _id: 3,
    question: "What is a Linked List?",
    answers: [
      "Like an array, a linked list refers to a linear data structure in which the elements are not necessarily stored in a contiguous manner.",
      "It is basically a sequence of nodes, each node points towards the next node forming a chain-like structure.",
    ],
  },
  {
    _id: 4,
    question: "What is LIFO?",
    answers: [
      "LIFO is an abbreviation for Last In First Out",
      "It is a way of accessing, storing and retrieving data.",
      "It extracts the data that was stored last first.",
    ],
  },
  {
    _id: 5,
    question: "What is a Stack?",
    answers: [
      "A stack refers to a linear data structure performing operations in a LIFO (Last In First Out) order.",
      "In a stack, elements can only be accessed, starting from the topmost to the bottom element.",
    ],
  },
  {
    _id: 6,
    question: "What is FIFO?",
    answers: [
      "FIFO stands for First In First Out.",
      "It is a way of accessing, storing and retrieving data.",
      "The data that was stored first is extracted first.",
    ],
  },
  {
    _id: 7,
    question: "What is a Queue?",
    answers: [
      "A queue refers to a linear data structure that performs operations in a FIFO order.",
      "In a queue, the least recently added elements are removed first as opposed to a stack. ",
    ],
  },
  {
    _id: 8,
    question: "What are Binary Trees?",
    answers: [
      "A binary tree is an extension of the linked list structure where each node has at most two children.",
      "A binary tree has two nodes at all times, a left node and a right node.",
    ],
  },
  {
    _id: 9,
    question: "What is Recursion?",
    answers: [
      "Recursion refers to a function calling itself based on a terminating condition.",
      "It uses LIFO and therefore makes use of the stack data structure.",
    ],
  },
  {
    _id: 10,
    question: "What is the OOPs concept?",
    answers: [
      "OOP stands for Object-Oriented Programming System, a paradigm that provides concepts such as objects, classes, and inheritance.",
    ],
  },
  {
    _id: 11,
    question: "What are the concepts introduced in OOPs?",
    answers: [
      "Object - A real-world entity having a particular state and behavior. We can define it as an instance of a class.",
      "Class - A logical entity that defines the blueprint from which an object can be created or instantiated.",
      "Inheritance - A concept that refers to an object gaining all the properties and behaviors of a parent object. It provides code reusability.",
      "Polymorphism - A concept that allows a task to be performed in different ways. In Java, we use method overloading and method overriding to achieve polymorphism.",
      "Abstraction - A concept that hides the internal details of an application and only shows the functionality. In Java, we use abstract class and interface to achieve abstraction.",
      "Encapsulation - A concept that refers to the wrapping of code and data together into a single unit.",
    ],
  },
  {
    _id: 12,
    question: "Explain what a Binary Search Tree is.",
    answers: [
      "A binary search tree is used to store data in a manner that it can be retrieved very efficiently.",
      "The left sub-tree contains nodes whose keys are less than the node’s key value.",
      "The right sub-tree contains nodes whose keys are greater than or equal to the node’s key value",
    ],
  },
  {
    _id: 13,
    question: "Explain Doubly Linked Lists",
    answers: [
      "Doubly linked lists are categorized as a special type of linked list in which traversal across the data elements can be done in both directions.",
      "This is made possible by the presence of two links in every node, one that links to the node next to it and another that connects to the node before it.",
    ],
  },
  {
    _id: 14,
    question: "What is a Graph?",
    answers: [
      "A graph is a particular type of data structure that contains a set of ordered pairs.",
      "The ordered pairs in a graph are also known as edges or arcs and are most commonly used to connect nodes where the data can be stored and retrieved.",
    ],
  },
  {
    _id: 15,
    question: "What is a Deque?",
    answers: [
      "A deque is a double-ended queue.",
      "This is a structure in which elements can be inserted or removed from either end.",
    ],
  },
  {
    _id: 16,
    question: "Which sorting algorithm is the best?",
    answers: [
      "There are many types of sorting algorithms: bubble sort, quick sort, balloon sort, merge sort, radix sort, and more.",
      "No algorithm can be considered as the best or fastest because they have designed each for a specific type of data structure where it performs the best",
    ],
  },
  {
    _id: 17,
    question: "How does variable declaration affect memory?",
    answers: [
      "The amount of memory that is to be reserved or allocated depends on the data type being stored in that variable.",
      "For example, if a variable is declared to be “integer type”, 32 bits of memory storage will then be reserved for that particular variable.",
    ],
  },
  {
    _id: 18,
    question: "What are dynamic data structures?",
    answers: [
      "Dynamic data structures have the feature where they expand and contract as a program runs. It provides a very flexible method of data manipulation because adjusts based on the size of the data to be manipulated.",
    ],
  },
];
