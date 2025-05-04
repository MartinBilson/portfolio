Portfolio Website
This is a professional portfolio website designed to showcase skills, projects, and contact information. It includes modern features such as Dark Mode, Mobile Responsiveness, Smooth Scroll, and Form Submission via Formspree (or Netlify Forms). The website is built using HTML, CSS, and JavaScript to provide a clean and engaging user experience.

Features
Dark Mode: Toggle between light and dark themes for improved user experience.

Responsive Design: Mobile-friendly with a hamburger menu on smaller screens.

Smooth Scroll: Clickable anchor links that smoothly scroll to sections.

Form Submission: Contact form that sends submissions to Formspree (or Netlify Forms).

CV Download: Option to download your CV directly from the website.

Technologies Used
HTML5: For creating the structure of the website.

CSS3: For styling the website, including Tailwind-based utility classes for responsiveness and custom styles for a polished look.

JavaScript: For interactivity, including dark mode toggle, mobile menu toggle, form submission, and smooth scrolling.

Formspree / Netlify Forms: For handling form submissions.

Installation
To set up this project on your local machine:

1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/portfolio.git
cd portfolio
2. Create a new Formspree (or Netlify Forms) account
For Formspree: Go to Formspree and create an account. Set up a new form and replace the form action URL in script.js with your Formspree form endpoint.

For Netlify: If you're deploying with Netlify, you can set up a form under Netlify Forms by adding a name="contact" attribute to your form and submitting it to Netlify.

3. Customize your content
Update the index.html with your name, project details, skills, and CV link.

Replace the CV URL in the JavaScript file (script.js) with your actual CV file path.

Optionally, replace the sample project information with your real projects.

4. Open the project in a web browser
Once everything is set up, simply open the index.html file in any modern web browser:

bash
Copy
Edit
open index.html
Folder Structure
index.html: The main HTML file that contains the structure of the website.

style.css: The CSS file with the styles for the website.

script.js: The JavaScript file that handles the interactive functionality (Dark Mode, Form submission, etc.).

assets/: Directory for storing any assets like images, icons, and your CV file.

How to Customize
Dark Mode: Toggle the dark mode by clicking the dark mode toggle button. The theme will persist as long as the page is open.

Mobile Menu: The hamburger menu appears on screens smaller than 768px. When clicked, it toggles the navigation links.

Projects Section: Add or update projects within the <section id="projects"> area. Use the .project-card class to style new project cards.

Skills Section: Update the skills section within <section id="skills">. Add skills in the .skill-tag elements.

Form: The contact form will submit entries to Formspree or Netlify. Make sure to set the correct action URL.

CV Download: Update the CV URL in the downloadCV button in script.js to point to your actual CV file.

Deployment
Deploying on GitHub Pages
Create a new repository on GitHub and push your code there.

Go to your GitHub repository settings.

Scroll down to the GitHub Pages section.

Select main as the source and save.

Your portfolio should now be live at https://your-username.github.io/portfolio.

Deploying on Netlify
Push your project to a Git repository (GitHub, GitLab, etc.).

Sign up for a free account on Netlify.

Link your repository to Netlify.

Choose Deploy and follow the instructions.

Your site will be live with a custom URL provided by Netlify.

Contributing
If you'd like to contribute to this project, feel free to fork it and submit a pull request. Make sure to update the documentation and add any new features in a clean and professional manner.

License
This project is open-source and available under the MIT License.

Acknowledgments
Tailwind CSS: A utility-first CSS framework used for styling.

Formspree and Netlify Forms: For easy form handling and submission.

Font Awesome: For the hamburger menu icons.
