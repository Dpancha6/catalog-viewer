# Catalog Viewer React App

This is a simple catalog viewer application built using React. The application allows users to view a list of product images, navigate between them, and start a slideshow.

## Features

- Displays a list of product thumbnails.
- Shows the selected product in a larger view.
- Navigate between images using previous and next buttons.
- Circular navigation: clicking next on the last image shows the first image and vice versa.
- Start a slideshow that automatically cycles through the images every 3 seconds.
- User interactions (thumbnail click, previous/next buttons) are still available during the slideshow.

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

   git clone https://github.com/Dpancha6/catalog-viewer.git
   cd catalog-viewer

3. Install the dependencies:

   npm install

### Running the Application

1. Start the development server:

   npm start

2. Open your browser and navigate to:

   http://localhost:3000

## Components

### App Component

The main component that manages the state and renders the `Viewer` and `Thumbs` components.

### Viewer Component

Displays the currently selected product image in a larger view.

### Thumbs Component

Displays a list of product thumbnails. Allows users to click on thumbnails to select the corresponding image.

## Styling

The application uses CSS for styling. Custom styles for the checkbox are defined in `index.css`.

### Custom Checkbox Style

The "Start Slide Show" checkbox is styled to have a white background with a green checkmark.

## Testing

The application includes unit tests for verifying functionality. To run the tests, use:

npm test
