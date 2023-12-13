# ContestHub Project

Welcome to ContestHub, the ultimate platform where innovation meets recognition! ContestHub is a dynamic and user-friendly Contest Creation Platform designed to foster creativity, engage communities, and celebrate talent across various domains. Whether you're organizing a design competition, coding challenge, or any other creative contest, ContestHub is your go-to destination for seamless contest creation and efficient winner selection. Below is a detailed overview of the project's key features and technologies:

## Technologies Used

- **React**: A powerful JavaScript library for building user interfaces. Used to create the front-end of the application.

- **MongoDB**: A flexible NoSQL database used for storing and managing contest and user information.

- **React Router**: Enables client-side routing, making navigation seamless and efficient.

- **Private Route**: Provides a mechanism to protect certain routes, ensuring that only authorized users can access them.

- **Auth Provider**: A custom component that manages user authentication and authorization, making it easy to integrate authentication into the app.

- **Firebase Authentication**: Utilized for secure user authentication, enabling users to create accounts and log in with ease.

- **React Toast**: A notification library used to display user-friendly messages, such as successful logins or contest submissions.

- **Sweet Alert**: A responsive and customizable alert/confirmation library that provides a polished user experience.

- **Axios**: A promise-based HTTP client for making requests to the back-end server. Axios is configured with base URLs and interceptors for enhanced functionality.

- **JWT (JSON Web Tokens)**: Used for secure and efficient authentication, ensuring that user sessions are managed securely.

- **Cookie Parser**: Enables easy parsing and manipulation of cookies, contributing to effective session management.

- **Chart.js**: Utilized for creating dynamic and visually appealing charts, such as the status pie chart on the dashboard.

- **TanStack Query**: Data fetching and refetching using TanStack queries in this project.

<!-- - **Pagination**: Implemented for effective navigation through large datasets, enhancing usability.

- **Search Functionality**: Backend-integrated search functionality for efficient data retrieval based on user queries.

- **Filtering**: The application provides filtering options for users to narrow down search results based on specific criteria. -->

- **Secure Payments with Stripe:** Ensure a secure and streamlined payment process using Stripe, allowing participants to make transactions with confidence.

## Features

- **User Authentication**: Users can create accounts, sign in, and securely manage their profiles using Firebase Authentication. Personalized experiences and secured transactions are made possible through user authentication.

- **Contest Participation**: Users can browse and participate in various contests hosted on the platform. Real-time updates and an intuitive user interface enhance the contest experience.

- **Contest Management**: Admins can log in to the system and manage contests, including adding new contests to the database. This provides a simple and efficient way to organize and oversee contests.

- **Dashboard Control**: The platform features a dashboard control that provides insights into contest participation, status, and other relevant data. The status pie chart offers a visual representation of contest outcomes.

- **Private Routes**: Certain routes, such as the contest management page, are protected and accessible only to authenticated users. This ensures data privacy and security for both users and administrators.

- **Responsive Design**: The application is designed to be responsive, ensuring usability and accessibility on various screen sizes, including mobile devices, tablets, and desktops.

- **JWT**: Secure user authentication using JWT ensures data privacy and personalized experiences for users.

- **Axios Configuration**: Axios is configured with base URLs and interceptors to simplify API requests and manage responses effectively.

- **Chart.js Integration**: Dynamic charts created using Chart.js for visual representation of contest data.

<!-- - **Pagination**: Effective pagination for large datasets, providing users with seamless navigation through content.

- **Search Functionality**: Backend-integrated search functionality allows users to quickly find relevant contests.

- **Filtering Options**: Users can filter search results based on specific criteria, streamlining the data retrieval process. -->

## Getting Started

1. **Clone the Repository**: Begin by cloning the project repository to your local machine.

```bash
  https://github.com/Atik203/ContestHub-Client-Side

```

2. **Install Dependencies**: Install the required project dependencies to ensure all features work seamlessly.

   ```bash
   npm install
   ```

- Configure Firebase: Set up a Firebase project and add the Firebase configuration to the project to enable user authentication and other Firebase features.

- Set Environment Variables: Create a `.env` file with the necessary environment variables. You can add the Firebase configuration and other environment-specific settings here.

- Start the Development Server: Launch the development server to run the application locally.

  ```bash
  npm start
  ```

3. **Testing Credentials**:

- Admin Credentials:
  Email: admin@gmail.com
  Password: Admin123@
- Contest Creator Credentials:
  Email: creator@gmail.com
  Password: Creator123@

## Live Demo

Check out the live demo of the project at [ContestHub](https://contesthub.surge.sh/). Experience the application's features and functionalities in action.
Check out the server-side code of this project [Click Here](https://github.com/Atik203/ContestHub-Server-Side)

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt) file for details.
