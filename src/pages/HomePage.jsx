import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

// import { GITHUB_LINK, LINKEDIN_LINK } from '../components/SocialLinks';

// export default function Home() {
//     return (
//       <div>
//         <Header />
//         <Navigation />
//         <section id="home">
//           <h2>Home</h2>
//           <p>This is the Home section where you can add information about yourself.</p>
//         </section>
//         <section id="about">
//           <h2>About Me</h2>
//           <p>This is the About Me section where you can add information about yourself. A Colombia Bootcamp trained software developer with a Growth Mindset.</p>
//         </section>
//         <section id="portfolio">
//           <h2>Portfolio</h2>
//           <p>This is the Portfolio section where you can showcase your work.</p>
//           <h3>Project 1</h3>
//           <p>Description of Project 1 My projects include a dynamic Vehicle Builder in TypeScript with a README Generator using Node.js and a Weather Dashboard using OpenWeather API.</p> 
//           <h3>Project 2</h3>
//           <p>Description of Project 2</p>
//           <h3>Project 3</h3>
//           <p>Description of Project 3</p>
//         </section>
//         <section id="contact">
//           <h2>Contact</h2>
//           <p>This is the Contact section where you can add contact information.</p>
//         </section>
//         <section id="resume">
//           <h2>Resume</h2>
//           <p>This is the Resume section where you can add your resume.</p>
//         </section>
//         <Footer />
//       </div>
//     );
//   }

  export default function Home() {
// const Home = () => {
    return (
        <div>
          
            <Header />
            <Navigation />
            <h1>Welcome to My Portfolio</h1>
            <p>This is the homepage. A Colombia Bootcamp trained software developer with a Growth Mindset</p>
            <Footer />
            
        </div>
    );
};
// export default Home;


const styles = {
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  footer: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 0',
    textAlign: 'center',
  },
};

function Header() {
  return (
    <header>
      <h1>Sean Dolan</h1>
      <p>Welcome to my portfolio site!</p>
    </header>
  );
}

function Navigation() {
  return (
    <nav>
      <a href="/" style={styles.link}>Home</a>
      <a href="/about" style={styles.link}>About Me</a>
      <a href="/portfolio" style={styles.link}>Portfolio</a>
      {/* <a href="/projects" style={styles.link}>Projects</a> */}
      <a href="/contact" style={styles.link}>Contact</a>
      <a href="/resume" style={styles.link}>Resume</a>
    </nav>
  );
}

// function Navigation() {
//     return (
//         <nav>
//             <a href="/">Home</a>
//                 <Link to="/">Home</Link>
//                     <Typography
//                         onClick={() => history.push('/')}
//                         sx={{ cursor: 'pointer' }}
//                      >'Home'</Typography>
//             <a href="/about">About Me</a>
//                 <Link to="/about">About Me</Link>
//                     {/* <Typography variant="h6" color="inherit" noWrap> */}
//                     <Typography 
//                         onClick={() => history.push('/about')}
//                         sx={{ cursor: 'pointer' }}
//                     >'About Me'</Typography>
//             <a href="/portfolio">Portfolio</a>
//                 <Link to="/portfolio">Portfolio</Link>
//                     {/* <Typography variant="h6" color="inherit" noWrap> */}
//                     <Typography 
//                         onClick={() => history.push('/portfolio')}
//                         sx={{ cursor: 'pointer' }}
//                     >'Portfolio'</Typography>
//             <a href="/projects">Projects</a>
//             <a href="/contact">Contact</a>
//                 <Link to="/contact">Contact</Link>
//                     {/* <Typography variant="h6" color="inherit" noWrap> */}
//                     <Typography 
//                         onClick={() => history.push('/contact')}
//                         sx={{ cursor: 'pointer' }}
//                     >'Contact'</Typography>
//             <a href="resume">Resume</a>
//                 <Link to="resume">Resume</Link>
//                     {/* <Typography variant="h6" color="inherit" noWrap> */}
//                     <Typography 
//                         onClick={() => history.push('/resume')}
//                         sx={{ cursor: 'pointer' }}
//                     >'Resume'</Typography>
//         </nav>
//     );
//   } 

function Footer() {
  return (
    <footer style={styles.footer}>
      <h5>Footer Thanks for checking out my page.</h5>
      <div>
        <a href="https://github.com/seanfdolan" style={styles.link}>GitHub</a>
        <span> | </span>
        <a href="https://www.linkedin.com/in/sean-dolan-564201211/" style={styles.link}>LinkedIn</a>
        <span> | </span>
        <a href="https://www.stackoverflow.com/users/25668217/seanfdolan" style={styles.link}>Stack Overflow</a>
        <span> | </span>
        <a href="mailto:seanfdolan@gmail.com" style={styles.link}>Email</a>
      </div>
  
    </footer>
  );
}


