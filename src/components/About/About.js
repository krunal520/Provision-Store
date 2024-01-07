import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      <h1 className='about-heading'>About Provision Store</h1>

      <section>
        <h2>Folder Structure</h2>
        <p>
          The project structure is organized into various directories:
        </p>
        <ul>
          <li>
            <strong>src/</strong>
            <ul>
              <li><strong>components/</strong>: Contains React components.</li>
              <li><strong>services/</strong>: Manages API integration and services.</li>
              <li><strong>assets/</strong>: Stores static assets (e.g., images).</li>
              <li><strong>styles/</strong>: Holds CSS files and global styles.</li>
              <li><strong>App.js</strong>: Entry point of the application.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Challenges Faced</h2>
        <p>Several challenges were encountered during development:</p>
        <ul>
          <li>API Integration</li>
          <li>State Management</li>
          <li>Component Styling</li>
        </ul>
      </section>

      <section>
        <h2>Project Setup</h2>
        <ol>
          <li>
            <strong>Clone the Repository:</strong>
            <code>git clone https://github.com/your-username/provision-store.git</code>
          </li>
          <li>
            <strong>Install Dependencies:</strong>
            <code>cd provision-store</code>
            <code>npm install</code>
          </li>
          <li>
            <strong>Set Up Environment Variables:</strong>
            <p>Create a `.env` file and add necessary environment variables.</p>
          </li>
          <li>
            <strong>Start the Development Server:</strong>
            <code>npm start</code>
          </li>
          <li>
            <strong>Access the Application:</strong>
            <p>Open your browser and visit <code>http://localhost:3000</code>.</p>
          </li>
        </ol>
      </section>

      <section>
        <h2>Additional Notes</h2>
        <p>
          Ensure Node.js is installed to run the project. React is used for the frontend, and API endpoints need
          to be properly configured. Refer to documentation for more details.
        </p>
        <p>
          For any inquiries or support, check the project's documentation or contact the development team.
        </p>
      </section>
    </div>
  );
};

export default About;
