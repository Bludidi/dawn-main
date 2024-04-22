# Dawn-main

## Description

**Dawn-main** is a clone version of Shopify Dawn Theme. I cloned it for the purpose of adding a section into the theme under the following guidelines:

- Clone the Dawn theme using Shopify CLI
- Develop a new customizable section within the theme that allows the merchant to choose a product, specify up to 5 feature bullet points, and set the CTA button text and link.
- Implement the section using Liquid for dynamic content rendering.
- Style the section with plain CSS, ensuring it is responsive and cohesive with other sections in the theme.
- (Bonus) Create a web component that automatically cycles through the bullet points, adding an engaging element to the section

## Required

Your computer must have these programs installed:

- Node.js version 18.16.0 or higher
- Git version 2.28.0 or higher
- Ruby version 2.7.2 or higher
- Shopify CLI

## Getting Started

- Clone this Repo using this
 command
- Open your terminal and run the command.

  ```sh
  git clone https://github.com/Bludidi/dawn-main.git
  cd dawn-main
  shopify theme dev --store product-feature-section
  ```

  - For local preview the store will be served at ```http://127.0.0.1:9292```

## Using the Theme as Admin

***Please note the password for my store is:***  ```gupaix```

- When you signed in as Admin you should navigate to ```Themes``` and on the ```Copy of Dawn``` theme click on ```customize``` button.
- Under ```Template``` click on ```Add section``` and on a pop-up modal select a section named ```Feature Section```
- When the ```Feature Section``` is clicked a side panel will show where you will be able to:
  - Select a product
  - Write custom text about the product (5 bullet point inputs)
  - Customise a link for CTA Button
  - Customise a text to show in the button
  - You will have to save your changes.

## Summary of changes I made to the Theme

- In the Sections directory I created a file name ```feature-section.liquid``` and it contains a schema and a code for my new section.
- In the Assets directory I created a file called ```feature-section.css``` with the styling code for the new section. I also applied media quiries for responsiveness.
- I created file called ```feature-section.js``` also located in the Assets directory which contation a function that loops through bullet points and apply the style for engagement.
