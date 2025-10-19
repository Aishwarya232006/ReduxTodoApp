# Redux Todo App - Lab 6 (CPAN 213)

## Student Information
**Student Name:** Aishwarya Chhablani  
**Student ID:** N01711300 
**Lab:** CPAN 213 - Lab 6  
**Date:** October 18, 2025  

---

## Project Overview
This is a React Native Todo application implemented with **Redux Toolkit** for state management. The app allows users to:

- Add new todos
- Toggle completion status
- Delete todos
- Filter todos by **all**, **active**, or **completed**
- View real-time statistics (total, active, completed todos)

The app demonstrates modern Redux patterns, connecting slices to React Native components using **hooks** (`useSelector` and `useDispatch`). Redux DevTools or terminal logging is used to verify state updates.

---

## Features Implemented

- **Redux Store:** Configured with Redux Toolkit using `configureStore`.
- **Todos Slice:** Includes actions:
  - `addTodo` – adds a new todo
  - `toggleTodo` – toggles completion status
  - `deleteTodo` – deletes a todo by ID
  - `setFilter` – sets the current filter (all, active, completed)
- **Components Connected to Redux:** `TodoListScreen` reads state and dispatches actions using hooks.
- **Filter Functionality:** Users can filter todos with buttons.
- **Live State Logging:** Redux state logs in the VS Code terminal via `store.subscribe()`.

---

## Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/Aishwarya232006/PlatformSettingApp.git
cd PlatformSettingApp
