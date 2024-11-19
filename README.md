# Redux Toolkit Generics Demo

This repository is a demonstration project showcasing the usage of a reusable Redux Toolkit library with generics in a React Native app. The demo provides a clear example of how to integrate the generic Redux slices in a mobile application for state management.

## Features
- **React Native with Redux Toolkit**: Demonstrates integrating Redux Toolkit for state management in a React Native project.
- **Generic Slice Creation**: Utilizes a generic approach for creating slices that reduces boilerplate code.
- **Compatibility**: Works with React Native version 0.70.5 for stability and compatibility with Redux Toolkit.

## Getting Started

### Prerequisites
- **Node.js**: Version 14 or higher
- **npm or Yarn**: Package manager
- **React Native CLI**: For running the project

Make sure you have these tools installed before proceeding.

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/redux-toolkit-generics-demo.git
   cd redux-toolkit-generics-demo
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   or, if you are using Yarn:
   ```bash
   yarn install
   ```

3. **Link Generic Redux Toolkit Library**
   If you have your generic Redux Toolkit library locally, link it:
   ```bash
   npm link /path/to/your/redux-toolkit-generics-library
   ```

### Running the App

1. **Start Metro Bundler**
   ```bash
   npx react-native start
   ```

2. **Run on Android or iOS**
   - For Android:
     ```bash
     npx react-native run-android
     ```
   - For iOS:
     ```bash
     npx react-native run-ios
     ```

### Usage
The demo includes a simple `UserList` component that fetches user data and demonstrates the use of the generic slice for state management. The state includes `loading`, `error`, and `data` for easy access.

You can find the main components and state management setup in the `src` folder:
- **`src/store/userSlice.ts`**: Demonstrates the use of generic slice creation for managing user state.
- **`src/components/UserList.tsx`**: A simple UI component to display user information and manage fetching data.

### Project Structure
```
redux-toolkit-generics-demo/
  |-- android/
  |-- ios/
  |-- src/
      |-- components/
          |-- UserList.tsx
      |-- hooks/
          |-- hooks.ts
      |-- store/
          |-- store.ts
          |-- userSlice.ts
  |-- App.tsx
  |-- package.json
  |-- README.md
```

### Dependencies
- **React Native**: v0.70.5
- **React**: v18.0.0
- **Redux Toolkit**: v1.8.5
- **React Redux**: v8.0.0

### Known Issues
- **Compatibility**: This project has been tested with React Native v0.70.5 and may not be compatible with versions below `0.68`.
- **Metro Bundler Cache**: If you face module resolution issues, try resetting the Metro bundler cache with:
  ```bash
  npx react-native start --reset-cache
  ```

## Contributing
Feel free to submit issues and pull requests. All contributions are welcome to improve the library and the demo project.

## License
This project is licensed under the MIT License.

## Contact
For any questions or suggestions, please reach out at your-email@example.com.

