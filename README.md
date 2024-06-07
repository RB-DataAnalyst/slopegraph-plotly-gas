# Slopegraph in Google Sheets

## Overview

This project demonstrates how to create a custom slopegraph in Google Sheets using Google Apps Script (GAS) and Plotly.js. The slopegraph visualizes changes between two points in time for multiple categories, offering clear and direct labels on the graph itself.

## Why This Project?

Inspired by *Storytelling with Data* by Cole Nussbaumer Knaflic, I wanted to leverage the simplicity and effectiveness of slopegraphs to visualize changes over time. While Google Sheets doesn’t natively support slopegraphs, I aimed to develop a custom solution that integrates advanced visualizations directly into the tools used by non-technical stakeholders.

## Project Structure

The project involves four main files:

1. **SlopeGraphMenu.gs**: The Google Apps Script file that creates a custom menu in Google Sheets and handles data fetching and image saving.
2. **index.html**: The HTML file that defines the structure of the modal dialog displayed in Google Sheets.
3. **styles.html**: The CSS file that styles the modal dialog and its contents.
4. **scripts.html**: The JavaScript file that includes Plotly.js and contains the logic for drawing the slopegraph and handling user interactions.

## Features

- **Interactive Slopegraph**: Utilizes Plotly.js to create interactive visualizations.
- **Custom Annotations and Colors**: Users can select custom colors for each category and add annotations for clear labeling.
- **Data Formatting**: Supports displaying values as percentages, formatted before rendering.
- **Seamless Integration**: Embeds visualizations directly in Google Sheets for enhanced accessibility and collaboration.

## Tools Used

- **Google Apps Script**: Automates tasks and extends the functionality of Google Sheets.
- **Plotly.js**: Creates interactive and customizable visualizations.

## How to Use

### Setup

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/RB-DataAnalyst/slopegraph-plotly-gas.git
    cd slopegraph-plotly-gas
    ```

2. **Open Google Sheets**:
    - Create a new Google Sheets document.

3. **Google Apps Script**:
    - Open the Script Editor (`Extensions` -> `Apps Script`).
    - Copy and paste the content from `SlopeGraphMenu.gs` into the script editor.
    - Save the project.

4. **HTML and CSS Files**:
    - In the Script Editor, create new HTML files (`index.html`, `styles.html`, `scripts.html`).
    - Copy and paste the content from the respective files in the repository into these HTML files.

### Usage

1. **Open the Slopegraph Modal**:
    - In your Google Sheets, you should see a new menu item called `Custom Menu`.
    - Click `Custom Menu` -> `Open Slope Graph`.

2. **Enter Data and Options**:
    - Enter the range of your data, title, and other options in the modal dialog.
    - Click `Draw Chart` to visualize the slopegraph.
    - Optionally, save the chart as an image directly into your Google Sheets.

## Recreating the Simplicity of Slopegraphs with Plotly

By combining various functionalities of Plotly.js, such as lines and markers, annotations, custom colors, and pre-formatted data for percentages, I was able to effectively recreate the simplicity and clarity of slopegraphs to visualize changes between two points over time.

- **Lines and Markers**: Used Plotly.js’s `lines+markers` mode to plot lines connecting two points for each category. This creates the basic structure of the slopegraph, where each line represents the change between two points in time.
- **Annotations**: Added annotations to label each data point with the category name and value. This mimics the simplicity of slopegraphs by providing clear, direct labels on the graph itself, avoiding the need for legends or additional context.
- **Custom Colors**: Allowed users to select custom colors for each category. This helps distinguish different categories visually, which is particularly useful when the graph includes multiple lines.
- **Data Formatting**: Included the option to display values as percentages, which is a common for slopegraphs. This was handled by formatting the data before passing it to Plotly.js for rendering.
