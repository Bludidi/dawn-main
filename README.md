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
- Clone this Repo using this command
- Open your terminal and run the command.
  ```
  git clone https://github.com/Bludidi/dawn-main.git
  cd dawn-main
  shopify theme dev --store product-feature-section
  ```
  - For local preview the store will be served at ```http://127.0.0.1:9292```
