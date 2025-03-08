# Pathfinder Visualizer 🚀

### Table of Contents 📚
1. [Overview](#overview)
2. [Features 🌟](#features-🌟)
3. [File Structure 📁](#file-structure-📁)
4. [Technologies Used 🛠️](#technologies-used-🛠️)
5. [Getting Started 🚀](#getting-started-🚀)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
6. [Usage 📘](#usage-📘)
7. [Algorithm Details 🔍](#algorithm-details-🔍)
   - [Pathfinding Algorithms](#pathfinding-algorithms)
   - [Maze Generation Algorithms](#maze-generation-algorithms)
8. [Contributions 🤝](#contributions-🤝)
9. [License 📄](#license-📄)
10. [Acknowledgements 🙏](#acknowledgements-🙏)

## Overview

Pathfinder Visualizer is an interactive web application that demonstrates various pathfinding algorithms in a visual format. This project allows users to see how algorithms explore paths and find the shortest route between points on a grid. The visualizer provides an intuitive way to understand complex algorithms like **Dijkstra's**, **A\***, **Breadth-First Search (BFS)**, and **Depth-First Search (DFS)**.

## Features 🌟

- **Interactive Grid Interface**: Users can create walls, set start and end points, and watch as algorithms find the shortest path.
- **Multiple Pathfinding Algorithms**:
  - **Dijkstra's Algorithm**: The shortest path algorithm with weighted edges.
  - **A\* Algorithm**: Optimized pathfinding using heuristics.
  - **BFS**: Explores the shortest path in an unweighted grid.
  - **DFS**: Explores as far as possible before backtracking.
- **Maze Generation Algorithms**:
  - **Recursive Division**: Creates mazes with recursive sub-division.
  - **Binary Tree**: Simple and fast maze generation.
  - **Horizontal & Vertical Division**: Creates structured mazes.
- **Customizable Speed**: Adjust the speed of the pathfinding visualization.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.
- **Built with Modern Technologies**: React, TypeScript, and Tailwind CSS for styling.

## File Structure 📁

```
/root-directory
|-- public/                       # Public assets for the application
|   |-- vite.svg                  # Vite logo
|
|-- src/                          # Main source code
|   |-- assets/                   # Static assets used in the project
|   |   |-- react.svg             # React logo
|   |
|   |-- components/               # React components for the UI
|   |   |-- Grid.tsx              # Main grid component
|   |   |-- Nav.tsx               # Navigation bar component
|   |   |-- PlayButton.tsx        # Play button for starting visualization
|   |   |-- Select.tsx            # Dropdown select component
|   |   |-- Tile.tsx              # Tile component representing grid cells
|   |
|   |-- context/                  # Context for global state management
|   |   |-- PathfindingContext.tsx # Context for pathfinding algorithm state
|   |   |-- SpeedContext.tsx      # Context for speed settings
|   |   |-- TitleContext.tsx      # Context for title management
|   |
|   |-- hooks/                    # Custom React hooks
|   |   |-- usePathfinding.tsx    # Hook for pathfinding logic
|   |   |-- useSpeed.tsx          # Hook for speed control
|   |   |-- useTile.tsx           # Hook for tile operations
|   |
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
|   |
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
```

### Technologies Used 🛠️

| Technology     | Purpose                                      |
|----------------|-----------------------------------------------|
| **React**      | Building the user interface                  |
| **TypeScript** | Ensuring type safety and improved development |
| **Tailwind CSS** | Providing efficient, customizable styling  |
| **Vite**       | Modern and fast development environment       |

## Getting Started 🚀

Follow these steps to run the project locally:

### Prerequisites

- Node.js (version 14.x or above recommended)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/pathfinder-visualizer.git
   cd pathfinder-visualizer
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and go to `http://localhost:5173` to view the app.

## Usage 📘

1. **Place the Start and End Points**: Click on the grid to set the start and end nodes.
2. **Create Walls**: Click and drag on the grid to create walls that the algorithms must navigate around.
3. **Select an Algorithm**: Use the dropdown to choose a pathfinding or maze generation algorithm.
4. **Run the Visualization**: Click the play button to watch the algorithm in action.
5. **Adjust Speed**: Use the provided controls to change the visualization speed.

## Algorithm Details 🔍

- **Dijkstra's Algorithm**: Finds the shortest path in weighted graphs; guaranteed to find the shortest path.
- **A\* Algorithm**: Utilizes heuristics to speed up pathfinding while ensuring the shortest path.
- **BFS (Breadth-First Search)**: Explores all nodes level by level; optimal for unweighted grids.
- **DFS (Depth-First Search)**: Explores as far as possible along each branch before backtracking; not optimal for shortest paths.

### Maze Generation Algorithms

- **Recursive Division**: Creates complex mazes using a recursive approach.
- **Binary Tree**: Simple method for generating basic mazes.
- **Horizontal & Vertical Division**: Structured maze creation with controllable complexity.

## Contributions 🤝

Contributions are welcome! If you find any bugs, have suggestions, or want to add new features, feel free to open an issue or submit a pull request.

## License 📄

This project is licensed under the [MIT License](./LICENSE).

## Acknowledgements 🙏

Special thanks to the developers and educators who inspired this project and the pathfinding and maze algorithms research community.

**Happy Pathfinding!** 🌟