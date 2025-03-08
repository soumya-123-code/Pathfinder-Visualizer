Pathfinder Visualizer 🚀
Table of Contents 📚
Overview
Features 🌟
File Structure 📁
Technologies Used 🛠️
Getting Started 🚀
Prerequisites
Installation
Usage 📘
Algorithm Details 🔍
Pathfinding Algorithms
Maze Generation Algorithms
Contributions 🤝
License 📄
Acknowledgements 🙏
Overview
Pathfinder Visualizer is an interactive web application that demonstrates various pathfinding algorithms in a visual format. This project allows users to see how algorithms explore paths and find the shortest route between points on a grid. The visualizer provides an intuitive way to understand complex algorithms like Dijkstra's, A*, Breadth-First Search (BFS), and Depth-First Search (DFS).

Features 🌟
Interactive Grid Interface: Users can create walls, set start and end points, and watch as algorithms find the shortest path.
Multiple Pathfinding Algorithms:
Dijkstra's Algorithm: The shortest path algorithm with weighted edges.
A* Algorithm: Optimized pathfinding using heuristics.
BFS: Explores the shortest path in an unweighted grid.
DFS: Explores as far as possible before backtracking.
Maze Generation Algorithms:
Recursive Division: Creates mazes with recursive sub-division.
Binary Tree: Simple and fast maze generation.
Horizontal & Vertical Division: Creates structured mazes.
Customizable Speed: Adjust the speed of the pathfinding visualization.
Responsive Design: Works seamlessly on desktop and mobile devices.
Built with Modern Technologies: React, TypeScript, and Tailwind CSS for styling.
File Structure 📁
bash
Copy
Edit
/root-directory
|-- public/                       # Public assets for the application
|   |-- vite.svg                  # Vite logo
|
|-- src/                          # Main source code
|   |-- assets/                   # Static assets used in the project
|   |   |-- react.svg             # React logo
|
|   |-- components/               # React components for the UI
|   |   |-- Grid.tsx              # Main grid component
|   |   |-- Nav.tsx               # Navigation bar component
|   |   |-- PlayButton.tsx        # Play button for starting visualization
|   |   |-- Select.tsx            # Dropdown select component
|   |   |-- Tile.tsx              # Tile component representing grid cells
|
|   |-- context/                  # Context for global state management
|   |   |-- PathfindingContext.tsx # Context for pathfinding algorithm state
|   |   |-- SpeedContext.tsx      # Context for speed settings
|   |   |-- TitleContext.tsx      # Context for title management
|
|   |-- hooks/                    # Custom React hooks
|   |   |-- usePathfinding.tsx    # Hook for pathfinding logic
|   |   |-- useSpeed.tsx          # Hook for speed control
|   |   |-- useTile.tsx           # Hook for tile operations
|
|   |-- lib/                      # Library for algorithm implementations
|   |   |-- algorithms/
|   |       |-- maze/             # Maze generation algorithms
|   |       |   |-- binaryTree.ts             # Binary tree maze algorithm
|   |       |   |-- horizontalDivision.ts     # Horizontal division maze algorithm
|   |       |   |-- recursiveDivision.ts      # Recursive division algorithm
|   |       |   |-- verticalDivision.ts       # Vertical division maze algorithm
|   |       |
|   |       |-- pathfinding/      # Pathfinding algorithms
|   |           |-- aStar.ts      # A* algorithm
|   |           |-- bfs.ts        # Breadth-First Search algorithm
|   |           |-- dfs.ts        # Depth-First Search algorithm
|   |           |-- dijkstra.ts   # Dijkstra's algorithm
|
|   |-- utils/                    # Utility functions for various tasks
|       |-- animatePath.ts        # Function for animating the path traversal
|       |-- constants.ts          # Constants used in the application
|       |-- constructBorder.ts    # Constructs the grid border
|       |-- createWall.ts         # Function to create walls on the grid
|       |-- destroyWall.ts        # Function to remove walls from the grid
|       |-- getUntraversedNeighbours.ts # Helper to get unvisited neighbors
|       |-- helpers.ts            # Miscellaneous helper functions
|       |-- heuristics.ts         # Heuristic functions for algorithms
|       |-- isInQueue.ts          # Checks if a node is in the queue
|       |-- resetGrid.ts          # Resets the grid to its initial state
|       |-- runMazeAlgorithm.ts   # Executes selected maze algorithm
|       |-- runPathfindingAlgorithm.ts # Executes selected pathfinding algorithm
|       |-- types.ts              # Type definitions used across the app
|
|-- App.tsx                       # Main app component
|-- index.css                     # Global CSS styling
|-- main.tsx                      # Main entry point for React
|-- vite-env.d.ts                 # Vite environment type declaration
|
|-- .eslintrc.cjs                 # ESLint configuration for code linting
|-- .gitignore                    # Files and directories to ignore in Git
|-- LICENSE                       # License for the project
|-- README.md                     # Project description and instructions
|-- index.html                    # Main HTML template
|-- package-lock.json             # Lockfile for npm dependencies
|-- package.json                  # Project metadata and npm scripts
|-- postcss.config.js             # PostCSS configuration
|-- tailwind.config.js            # Tailwind CSS configuration
|-- tsconfig.app.json             # TypeScript configuration for the app
|-- tsconfig.json                 # Base TypeScript configuration
|-- tsconfig.node.json            # TypeScript config for Node environment
|-- vite.config.ts                # Vite configuration file
Technologies Used 🛠️
Technology	Purpose
React	Building the user interface
TypeScript	Ensuring type safety and improved development
Tailwind CSS	Providing efficient, customizable styling
Vite	Modern and fast development environment
Getting Started 🚀
Follow these steps to run the project locally:

Prerequisites
Node.js (version 14.x or above recommended)
npm or yarn