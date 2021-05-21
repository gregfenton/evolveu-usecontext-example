# Simple use of React's Context API

This is a simple example of how to use the **Context API** in a React project.

## Overview
This project has these components:
* `App` - the top level component that "wraps" the _rest of the application_ with a "provider component"
* `MySimpleProvider` - the "provider component" that holds 1 state variable (`aaa`) & its set function (`setAaa`), and makes those available to any decendant components that want to have them via the **Context API**
* `ShowTheValueZone` - a component that uses `useContext()` to fetch `aaa` and displays its value
* `ChangeTheValueZone` - a component that uses `useContext()` to fetch `setAaa` allows the user to type input that is passed to `setAaa()`

## To Run the Project
1. `npm install`
1. `npm start`

When the browser opens, be amazed!