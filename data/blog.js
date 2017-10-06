export const blogData = [
  {
    title: "New Website",
    date: 'date',
    content: "I wanted to create a new website using react and to start a blog on the things that I explore. For my new website, I am using React, CSS Grid, and styled-components. I chose CSS Grid, because it is very intuitive to setup and it is modern and responsive. I know not all browsers and versions may be able to be compatible with CSS Grid, but adoption to include it has been increasing. I chose to use styled-components to explore how that library works vs CSS Modules/BEM/SASS. I watched Max Stoiber's presentation (insert youtube here) on the ways to style React components where he unveils styled-components and it seems to be gaining traction in the community. I chose to use a docker container to have more experience in using Docker and to use CircleCI to have more pracitce in the CICD space."
  },
  {
    title: "Exploring Docker",
    date: 'Aug 21st, 2017',
    content:
      "I have read a lot about Docker and Kubernetes and wanted to explore what all of that is about. I bought James Lee's course on Udemy. During the course, I learned about creating docker images and about DockerHub. It started out just learning simple commands such as run, info, and images. After learning how to use those commands, I learned how to create your own image and pushing it to DockerHub. I also learned about containers and how to start one and ssh into it. Apart of the course, was to deploy an app from James's Github. Just a simple app with two text fields in python. I learned how to create a Dockerfile and how to incorporate CircleCI into the build process using a yml config file and deploy the container to a Digital Ocean instance. I thought it was really cool with CircleCI and was easy to setup. After doing this course, I realized how useful Docker really is from a developer stand point and how you can quickly scale your systems."

  },
  {
    title: "Testing React Components",
    date: 'Aug 15th, 2017',
    content:
      "I have always wanted to learn how to test the front end, so I bought Stephen Grider's Advance React and Redux course. He goes over testing React front end code using Mocha, Chai, and JSDom. I have only done a little bit of the testing of the front end code. The course goes other things, such as authentication and aksdflakdsflk. "

  },
  {
    title: "First Hackathon",
    date: 'Aug 12th, 2017',
    content:
      "I took part on creating a team with co-workers to form a team and participate in the City of Peoria's first hackathon. Our team name was the Berry Battalion and we took 2nd out of 10 teams. Our goal was to create an website/app that would help inform the people of Peoria about construction projects. The prototype consisted of using Google Maps and overlaying construction project geojson data on the map. We also added the ability to add an activity, such as biking, walking, or driving so you can see if the construction will affect you. We added a date field to filter on, but only got so far. The judges liked our idea and our presentation. It was awesome to actually win 2nd in our first one! It was a great experience to challenge myself and my co-workers."

  },
  {
    title: "Tic Tac Toe - Confirm Account Email and Password Reset",
    date: 'Aug 10th, 2017',
    content: "After a lot of researching and thinking, I found a way to send an email confirmation when users sign up for an account. I found a library called nodemailer. It was very simple to wire up in the backend and send an email, but the part that was an issue was having nodemailer use a Gmail account. Google keeps thinking an unauthorized account is using the Gmail account I am using when sending an email. That is something I need to look into more where I can maybe take a look at using MailGun. After I got it working, it was awesome to actually see it work. To handle potential valid users, I created a new MongoDB collection to store the potential users when they verify through the email, the user's info is then transfered from the one DB collection to the actual user table. The next thing I did was creating a way to reset your password. Again, I use nodemailer to send an email to reset your password. It sends a link where a user clicks on it and is sent to a page to enter a new password. Both of these features (Confirm Account Email and Password Reset) use API calls that I have created on the backend. There are a couple of them that get called which handles all the processing in the back end."
  },
  {
    title: "Learning more about Webpack",
    date: 'Aug 6th, 2017',
    content: "I found Stephen Grider's Webpack2 Guide on Udemy, because I wanted to learn more about Webpack and how to configure the build process better. I've used Webpack before, but knew there was more to it. In this course, I got to learn what Webpack is actually doing from the entry point, the modules/rules about loaders, and the exit point. One thing I was excited about this course, is how to use code splitting so you can separate code when it is needed rather than loading all your code when the user first loads your site. I also learned how to use Webpack Dev Server middleware when you are already using an Express backend rather than running 'two' servers (Express and Webpack Dev Server). The other things I learned was how to store pictures locally vs request them off another url for faster loading times, and the correct way to load CSS using style-loader, css-loader, and the extract text plugin. This course helped me learn more about code splitting and more about loading in code at the right time and different ways to process CSS files (one file vs importing in each components, etc)"
  }
];
