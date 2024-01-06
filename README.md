# Provision Store

Provision Store is an E-shop website, a virtual marketplace where users can purchase various types of provision products.

## Overview

This project aims to create an E-commerce platform using React, where users can log in, browse a wide range of provision products, and access information about the website.

## Features

- **Login Module:** Allows users to log in using their email and password. Validates email format and password criteria.
- **Product List:** Displays provision products with a search filter functionality.
- **About Page:** Provides information about the project, its folder structure, and starting steps.
- **API Integration:** Integrates with APIs for user authentication and fetching product details.

## working Screenshots
Login Page

![Screenshot (359)](https://github.com/krunal520/Provision-Store/assets/82266514/90dfba8a-b04f-43d9-a5e6-5dfd93c0fbf5)

Product List

![Screenshot (360)](https://github.com/krunal520/Provision-Store/assets/82266514/7de2072f-77f8-467c-a245-ab0a7268cbc6)

Search Bar

![Screenshot (361)](https://github.com/krunal520/Provision-Store/assets/82266514/91ef37e5-f8c2-42d3-ae49-feb1f030e9a4)




## Usage

1. Clone the repository:

    ```bash
    git clone https://github.com/krunal520/Provision-Store.git
    ```

2. Install dependencies:

    ```bash
    cd provision-store
    npm install
    ```

3. Run the application:

    ```bash
    npm start
    ```

4. Access the website at `http://localhost:3000`.

## Technologies Used

- React.js
- React Router
- Axios (for API requests)
- HTML/CSS

## Folder Structure

- **src/**
  - **components/**: Contains React components (Login, ProductList, About, etc.).
  - **services/**: Handles API services (authentication, product fetching).
  - **styles/**: Contains CSS and styling files.
  - **App.js**: Main component handling routes and navigation.

## API Details

- **Login API**:
  - **POST**: `https://apiv2stg.promilo.com/user/oauth/token`
  - Payload: Email and password sent in FormData format with `grant_type=password`.
- **Product List API**:
  - **GET**: `https://api.kalpav.com/api/v1/product/category/retail`

## Credits

- Logo: [Hindigraphics](http://www.hindigraphics.in/wpcontent/uploads/2019/01/pro.png)
  

