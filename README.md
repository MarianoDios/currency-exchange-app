# Currency Exchange App

A modern currency exchange application built with React, TypeScript, and Material-UI.

## 🚀 Quick Start

Follow these steps to run the application:

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd currency-exchange-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   *Note: Node.js version 20.19 or higher is required*

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000/`

## 🛠️ Tech Stack

- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI)
- **State Management**: React Query for API state management
- **Styling**: Material-UI's `sx` prop system

## 🏗️ Architecture

This project is based on the Vite-React boilerplate. The application architecture includes:

- **Material-UI Components**: The project uses Material-UI as the component library. Given the project's scope, a custom theme wasn't necessary, so styles are applied using the `sx` prop as recommended by the library's documentation.

- **React Query Integration**: React Query simplifies API call management for currency exchange rates. It automatically handles re-fetching when currency pairs change, provides intelligent caching to avoid duplicate requests, and manages loading/error states without manual lifecycle management.

- **Custom Hook Management**: A custom hook serves as a state manager (which could also be implemented as a context) to maintain logic and data across the wrapper component and its children.

## 🎨 Design Notes

Regarding the design implementation:

- Minimal changes were made to the original design
- Fixed a design issue in the conversion results display
- The blueprint showed price per unit instead of the input number
- Updated the color scheme for better visual consistency

