# React Portfolio Website

Hey there! 👋 This is a modern portfolio website template I built using React and Vite. It's perfect for showcasing your projects and skills to potential employers or clients.

## What's Included

* Responsive design that looks great on all devices
* Customizable sections for projects, skills, and contact info
* Fast loading times thanks to Vite
* Contact form that actually works
* Smooth animations and transitions
* Dark/light theme support

## Setting Up Your Portfolio

### Step 1: Get the code running

First, make sure you have Node.js installed (version 16 or newer).

Clone this repo and install the dependencies:

```bash
git clone https://github.com/MihirAmin2006/personal-portfolio-public.git
cd react-portfolio-website
npm install
```

### Step 2: Create your environment variables

Create a file named `.env` in the root folder with these variables:

```plaintext
# Your social media links
VITE_SOCIAL_GITHUB=https://github.com/yourusername
VITE_SOCIAL_LINKEDIN=https://linkedin.com/in/yourusername
VITE_SOCIAL_INSTAGRAM=https://instagram.com/yourusername

# Your project links
VITE_PROJECT1_LIVE_LINK=https://your-project1.com
VITE_PROJECT1_GITHUB=https://github.com/yourusername/project1
VITE_PROJECT2_LIVE_LINK=https://your-project2.com
VITE_PROJECT2_GITHUB=https://github.com/yourusername/project2
VITE_PROJECT3_LIVE_LINK=https://your-project3.com
VITE_PROJECT3_GITHUB=https://github.com/yourusername/project3
VITE_PROJECT4_LIVE_LINK=https://your-project4.com
VITE_PROJECT4_GITHUB=https://github.com/yourusername/project4
```

### Step 3: Start the development server

Run this command to start the local development server:

```bash
npm run dev
```

This will start both the frontend and backend servers. You should see your portfolio at `http://localhost:5173`

### Step 4: Make it your own!

Now for the fun part - customizing everything to showcase YOUR skills and projects:

#### 1. Basic Info:

* Change the title in `index.html`
* Replace the favicon in `src/assets/img/fevicon.svg`

#### 2. Hero Section:

* Open `src/Components/Hero.jsx`
* Change "Name" to your actual name
* Update your job title
* Write a brief intro about yourself
* Add your CV/resume to `src/assets/files/` and update the import path
* Replace `profilePic.jpg` with your photo and also the image 1024x1536 in size is recommended. 

#### 3. About Section:

* Open `src/Components/About.jsx`
* Update your subtitle/role
* Write your bio paragraphs
* Change your skills and experience level
* Adjust your years of experience

#### 4. Projects Section:

* Open `src/Components/Projects.jsx`
* Update the project details (title, description, technologies)
* Replace project images in `src/assets/img/`
* Make sure your project links match what you put in the .env file

#### 5. Contact Form:

* Integrate a backend email service of your choice (e.g., Nodemailer with Express)
* Update `src/Components/Contact.jsx` to POST form data to your backend API
* Ensure your backend handles sending emails securely

#### 6. Footer:

* Open `src/Components/Footer.jsx`
* Update your name and description
* Change the email address and location
* Update the copyright info

### Step 5: Customize the look and feel

Want to change colors or other styling? Check out:

* `src/assets/styles/common.css` - Main theme colors and variables
* Individual component styles in `src/assets/styles/ComponentStyles/`

The color scheme uses CSS variables, so you can easily change the entire theme by updating a few values!

### Step 6: Deploy your portfolio

#### Option 1: Vercel or Netlify (super easy)

1. Push your code to GitHub
2. Connect your repo to Vercel or Netlify
3. Set your build settings:

   * Build command: `npm run build`
   * Output directory: `dist`
4. Add your environment variables in their dashboard

#### Option 2: Traditional hosting

1. Run `npm run build`
2. Upload the contents of the `dist` folder to your web server

## Troubleshooting

**Contact form not working?**

* Check your backend email service integration
* Inspect API response and logs for error messages
* Double check your environment variables

**Images not showing up?**

* Check that your image paths are correct
* Make sure you've replaced the placeholder images

**Styling issues?**

* Try clearing your browser cache
* Check the console for any CSS errors

---

Happy coding! 🚀
