export const blogData = [
  {
    title: "Truffle cont...",
    date: 'June 17th, 2018',
    content: "Back in March, I tried helping out Truffle. I haven't gotten to work on that PR in some months. Partly it may be beyond my skills set but a good stretch! I really want to help Truffle. During this time from March until now, my goal was to learn how to create a front end app that interacts with the Ethereum network by using Truffle. So, I follow the Pet Shop challenge and created a front end that interacts with the blockchain. Truffle made it really easy to compile, migrate, deploy, and test your smart contracts. After that, I looked at the repo again and it is now a monorepo. I think switching to a monorepo makes it a lot easier to contribute and make changes. At the beginning of March, it was very hard to understand what was going on and what to do. You had to use Meta and Git together and fork multiple repos to contribute. Now you use Lerna and have one folder with all packages. It was very easy! I started adding my code back into my branch I was working on and got it halfway working of being able to tell Truffle which folder of contracts to compile. It worked! Now I just have to keep working on it."
  },
  {
    title: "Advanced CSS with SASS",
    date: 'May 20th, 2018',
    content: "I was tired of my poor CSS skills and wanted to make them better. I bought this Udemy course to learn more advanced techniques, cover Flexbox, CSS Grid, and other techniques for layouts and making cool animations. I felt like my CSS skills were lacking and needed more of a structured course of action. I have learned a lot! It is a long course (28hrs)! The first half is designing a website with SASS and using rem, em, and % for styling. In the course, media queries are covered and some responsive images too. The second half includes using Flexbox and CSS Grid more. I am excited for this course!"
  },
  {
    title: "Weather App Challenge",
    date: 'April 18th, 2018',
    content: "I took on a challenge to create a simple weather app. The idea is to enter a city and get the next 5 days of weather. It presents a temperature, type of weather (sunny, cloudy, rain, etc), and give you a little simple graph of the temperature over the course of the day. I used React, Jest, Enzyme, Docker, TravisCI, and more. This was a good challenge as it made me understand more about testing components and looking at the docs for Enzyme. I learned about shallow vs mount render. It is confusing at first, but then over time, I got used to it a little more."
  },
  {
    title: "Open Source - Truffle",
    date: 'March 11th, 2018',
    content: "This month, I got looking more at decentralized Apps and Truffle. I have always wanted to contribute to open source projects and get better at coding. Truffle is a development environment, testing framework and asset pipeline for Ethereum, aiming to make life as an Ethereum developer easier. It uses JavaScript to create a command line interface. Looking at the code is really cool! I saw an opportunity and commented on a PR issue to add more functionality. It is a little ambitious, but a good challenge! Perhaps too ambitious at first..."
  },
  {
    title: "The start of the Crypto-Calculator Project",
    date: 'February 11th, 2018',
    content: "In January, I had this idea to make a React app to be more of a calculator for totaling up your cryptocurrencies in USD. The goal was to be able to explore Jest and testing more, but also create something useful. It uses Coinmarketcap APIs and SemanticUI."
  },
  {
    title: "Advanced React and Redux",
    date: 'Janurary 20th, 2018',
    content: "If you have not noticed, I really love taking Udemy courses to gain skills with some guidance. One of my favorite instructors is Stephen Grider. In January, I started his Advanced React and Redux course. It covers how to create tests for React components using JSDOM and Mocha. After that module, he goes into creating Higher-Order Components, which is great for stuff like creating a protected route or understanding what the connect() function is doing. The last learning module is covering middlewares for Redux. After all three of these, you get to go over a project that involved using these techniques to develop an application."
  },
  {
    title: "Email Service for Tic Tac Toe - UPDATE",
    date: "January 9th, 2018",
    content: "After brushing off the dust and getting back into the groove with my Tic Tac Toe codebase, I created a Mailgun Service that can be reused through my app. I did some testing with it and got an email to send with my new service. I included this in my account controller, got rid of the nodemailer logic, and wired-up Mailgun to be used. I did some final testing through the UI by creating a new account rather than using Postman to test faster and it worked! Next, was to push my changes to master and deploy to production. Deploying to production was a little rusty, because of the cleaning up of links and variables for production. Yes, this is a part I can refactor as I have learned so much more between then and now. I have some ideas that I can do to make deploying to prod much easier. After, some attempts to production, I got a final version and then did one last test. MailgunService failed was the message. NOOO! It didn't work... but after some research, I think I need a custom domain to be able to send emails to any email entered. With the free Mailgun version, I can send up to 5 authorized recipients by manually typing in their emails, but if I get a custom domain and verify, then I can send emails to everyone. Til then, this is still an issue. The good part though is the error says 'MailgunService failed' instead of 'Invalid email'."
  },
  {
    title: "Node.js Course COMPLETED",
    date: "January 2nd, 2018",
    content: "About a year ago, I purchased some of my first Udemy courses. That is when an addiction occurred with using Udemy to learn. I love buying 10 dollar courses! One of those courses was Node.js with Anthony Alicea. He goes in deep with node. Not just how to create a node server, but what node is actually doing when you use module.exports and what the require function is doing. I got to learn about the V8 engine, about Joyent, and it is written in C and C++, etc. He went over how Node handles asynchronous code and the event emitter. I also learned about streams, buffers, and chunks, which is something I was never taught, just something that was glossed over. He covered a couple of ways to connect to databases and npm. I also got to go over Express.js again and code along with Anthony by creating a MEAN stack app. This course taught me more about how Node.js works under the hood more than utilizing it to create a backend. Now I totally understand what require is actually doing and it isn't some black magic."
  },  
  {
    title: "A New Email Service for Tic Tac Toe",
    date: "December 26th, 2017",
    content: "This issue has been on my list to do for a LONG time. Every time the Tic Tac Toe app tries to send an email, I get an email from Gmail saying 'Someone is trying to use your account!' What really is happening is I am using nodemailer to use a Gmail account and using SMTP through google to send an email. This is important for my app because it sends verification emails to verify that you created your account, but it fails every time because of this stupid message. So I Googled around and I found SendGrid, which after some time, they said my account was marked as spam and I had issues creating a new account. The next option was Mailgun. I created an account and found an npm package 'mailgun-js' and FINALLY got some email sent. That was an awesome turning point, but I needed to get it in production, but it was late so I went to bed. I finally felt I found a solution."
  },
  {
    title: "Angular 4 Tour of Heroes Tutorial",
    date: "December 12th, 2017",
    content: "After a couple of weeks, I finally completed the Angular Tour of Heroes Tutorial. I learned more about the angular-cli, components in typescript, the Ng-Module, and what are observables with RxJS. I still don't completely understand how observables work, but I have a better idea now. I enjoy this tutorial, as it made it easy to follow along and start off with simple concepts and get into more complex concepts with the observables and network requests. One thing that I liked about doing this tutorial was thinking more about services. One part of this tutorial is creating the hero service so you can fetch the hero data. This approach turned on a light bulb in my head to think more about services and how you can create them in ANY application. I am going to try and be more service oriented so I can create more modular services that can be reused and easily updated. Overall, Angular 4 wasn't bad and typescript was cool, but I still really enjoy React."
  },
  {
    title: "React Portfolio Website is Live!",
    date: "November 27th, 2017",
    content: "After some time, multitasking projects, and changing priorities, I finally felt good about my latest website that showcases my blog and my apps. This new website was fun to build because I learned more about CircleCI, practice creating more modular components, practice more React, use styled-components, and much more. During this project, I really got deep into figuring out CircleCI and a bit of Docker. I made a continuous deployment pipeline where it runs tests on the development branch when pushed to GitHub or when development is merged into master and master is pushed, CircleCI runs tests, builds a Docker image, pushes that to DockerHub, and then also pushes that image to Heroku. That is my favorite part of this website is creating that pipeline. I am very proud of it. Lastly, I want to improve on writing tests, because a hello world test doesn't count as testing. That is my next goal I would like to improve other user experiences on my website."
  },
  {
    title: "Robot App with Ionic and Angular",
    date: 'November 3rd, 2017',
    content: "One of our projects with Dev Jams, is to create a mobile app that controls a robot. It is just a simple app for us to explore a fun way of creating something rather than teach each other. The mobile app will feature some directional arrows that will control a robot with wheels to move forward, backward, and turn. It is a very simple idea but can be complex when exploring new technology. For the robot, it has a Raspberry Pi that controls it and will use Python. The mobile app is built using Ionic and Angular. Front and backend will communicate via BluetoothSerial. Right away, we had a challenge because a limited amount of us has experience with controlling a robot via Raspberry Pi and using Ionic and Angular. Prior to starting, I installed the dependencies and follow some simple tutorials on Ionic. I haven't done Angular 2 and above so that was my first challenge. After I got the gist of Angular, I finally created a 4th Tab called 'Settings', but I still didn't fully understand Typescript and how Angular wired everything together. I also ended up finding a Bluetooth tutorial using Angular and BluetoothSerial, where it sets up events such as finding a Bluetooth device and connecting to it as well as the UI with a list of devices and modals. I haven't got to test on an actual phone because I am missing a USB to a USB-C chord to push it to my phone. After doing all this, I realized I need to explore Angular with Angular's Tour of Heroes tutorial."
  },
  {
    title: "CircleCI and Heroku",
    date: 'Oct 6th, 2017',
    content: "At work, we have a thing called Dev Jams, where a group of us explore new technologies or someone teaches a topic. Some topics include React, Node, Arduino's/Raspberry Pi's, etc. Any topic is free game. What I covered was how to use CircleCI and hopefully deploy the app to Heroku. I didn't know how to deploy the app to Heroku so that part was going to be a group effort. What I went over is how apps were traditionally deployed and went over why you should use CircleCI in your development. I got the group signed up for both CircleCI and Heroku and then had them fork a hello world repo. Everyone got it all set up and we went through the process of how to configure the yml file, what the yml file is doing, what CircleCI is doing, etc. After everyone got their configs working, one test working, and green builds, we moved on to the deployment part. Our goal was to deploy the app to Heroku. What I read before, was a simple addition to the config file, but it turns out that wasn't supported. I had to do a hack via Heroku and CirlceCI documentation. I had to generate SSH keys for CircleCI and Heroku, set up some environmental variables in CircleCI, and add in some commands to automate deploying to Heroku via command line. The hard part was understanding why I had to do this and explain to my co-workers what was going on, but after some determination, it finally got to the stage of actually deploying to Heroku. It didn't fully deploy the app. It was having an error in the source code, but we called it for a day. I was proud I got something deploying to Heroku, even if it failed on that side."
  },
  {
    title: "Testing Jenkins",
    date: 'Oct 3rd, 2017',
    content: "During a Udemy course, I got to experience CircleCI and it was eye-opening. It made me understand what continuous integration is about. So at work, the topic of Jenkins came up, so I started exploring how Jenkins works compared to CircleCI. Creating an instance of Jenkins was pretty easy. I used Docker to pull a docker image and run it locally. It was pretty straightforward to create an account and set up a job. While that part was easy, the next part was a little bit of a challenge. I didn't understand how to create a pipeline efficiently. After reading the documentation and going through a tutorial, it finally clicked in my mind how to configure Jenkins. I was trying to use the console to create tasks and such, but what helped was the Jenkinsfile. Now that made sense compared to a CircleCI yml file. With a little bit of tinkering, I finally got a green build. I haven't deployed any application, but what I learned is using CI/CD in the development workflow helps tremendously to improve quality and fast iterations. I also like seeing them work and deploy the app. It is so cool!"
  },
  {
    title: "New React Website",
    date: 'Sept 29th, 2017',
    content: "I wanted to create a new website using react and to start a blog on the things that I explore. For my new website, I am using React, CSS Grid, and styled-components. I chose CSS Grid because it is very intuitive to set up and it is modern and responsive. I know not all browsers and versions may be able to be compatible with CSS Grid, but adoption to include it has been increasing. I chose to use styled-components to explore how that library works vs CSS Modules/BEM/SASS. I watched Max Stoiber's presentation (insert youtube here) on the ways to style React components where he unveils styled-components and it seems to be gaining traction in the community. I chose to use a Docker container to have more experience in using Docker and to use CircleCI to have more practice in the CI/CD space."
  },
  {
    title: "Styled-Components",
    date: 'Sept 3rd, 2017',
    content:
      "When I was planning out my website, one of the topics I thought about was, how am I going to style my components? I thought about using SASS, CSS in JSS, CSS Modules, BEM, etc. While researching, I came across a video of Max Stoiber at ReactNL presenting on these same topics. It was awesome to watch him present and discuss the different possibilities, as well as the tradeoffs of each. As he talks, there are specific criteria he laid out for each strategy to meet. Some of those included criteria like there should be no build reqs, support all of CSS functionalities, CSS is isolated but also not coupled to the component, theming support, no component wrappers, etc. You can watch the video here (https://www.youtube.com/watch?v=19gqsBc_Cx0). His conclusion was to use Styled-Components. The founder of Styled-Components came to Max to try it and Max loved it so much, he helped contribute to it. Styled-Components doesn't need any build reqs, supports all CSS, able to use global CSS, theming support, isolated, and colocated. The downside is you need a wrapper component. It is very easy to set it all up. You import the library. Create a component with the CSS syntax, and then wrap that around your content. In the CSS syntax, you use template strings and you can pass props to control the CSS. A lot of people are using this approach and it is easy to use. I really liked how you implement the Styled-Components so that is what I went with to get some experience."
  },
  {
    title: "Exploring Docker",
    date: 'Aug 21st, 2017',
    content:
      "I have read a lot about Docker and Kubernetes and wanted to explore what all of that is about. I bought James Lee's course on Udemy. During the course, I learned about creating docker images and about DockerHub. It started out just learning simple commands such as run, info, and images. After learning how to use those commands, I learned how to create your own image and pushing it to DockerHub. I also learned about containers and how to start one and ssh into it. A section of the course was to deploy an app using Docker from James's Github and deploy it to different cloud providers. Just a simple app with two text fields in python. I learned how to create a Dockerfile and how to incorporate CircleCI into the build process using a yml config file and deploy the container to a Digital Ocean instance. I thought it was really cool with CircleCI and was easy to set up. After doing this course, I realized how useful Docker really is from a developer standpoint and how you can quickly scale your systems."

  },
  {
    title: "Testing React Components",
    date: 'Aug 15th, 2017',
    content:
      "I have always wanted to learn how to test the front end, so I bought Stephen Grider's Advance React and Redux course. He goes over testing React front end code using Mocha, Chai, and JSDom. I have only done a little bit of the testing. The course goes into other things, such as authentication, higher order components, and middleware. I have also explored other ways of testing components, such as Jest with Enzyme. I prefer this way because Jest runs beautifully out of the box and Enzyme makes it easy to access DOM elements with shallow rendering. This is an area I want to practice more, as I think it is important during regression tests and integration tests if something breaks. I also find it fun seeing all the tests pass."

  },
  {
    title: "First Hackathon",
    date: 'Aug 12th, 2017',
    content:
      "I took part in creating a team with co-workers to form a team and participate in the City of Peoria's first hackathon. Our team name was the Berry Battalion and we took 2nd out of 10 teams. Our goal was to create a website/app that would help inform the people of Peoria about construction projects. The prototype consisted of using Google Maps and overlaying construction project GeoJSON data on the map. We also added the ability to add an activity, such as biking, walking, or driving so you can see if the construction will affect you. We added a date field to filter on, but only got so far. The judges liked our idea and our presentation. It was awesome to actually win 2nd in our first one! It was a great experience to challenge myself and my co-workers."

  },
  {
    title: "Tic Tac Toe - Confirm Account Email and Password Reset",
    date: 'Aug 10th, 2017',
    content: "After a lot of researching and thinking, I found a way to send an email confirmation when users sign up for an account. I found a library called nodemailer. It was very simple to wire up in the back end and send an email, but the part that was an issue was having nodemailer use a Gmail account. Google keeps thinking an unauthorized user is using the Gmail account. That is something I need to look into more where I can maybe take a look at using MailGun. After I got it working, it was awesome to actually see it work. The next steps were to create a new database collection to hold potential users data and their associated token for validation. After I created the model and collection, I then developed the API and logic to handle transferring the user's info from the temp user's table to the actual user table. Another functionality I wanted to add was the ability to reset your password. Again, I used nodemailer to send an email to reset your password. It sends a link where a user clicks on it and is sent to a page to enter a new password. Both of these features (Confirm Account Email and Password Reset) use API calls that I have created on the back end. There are a couple of them that get called which handles all the processing in the back end. Both of these functionalities are probably the most complex so far in my app, but it was fun to implement. The only part that frustrated me is the whole Google thinking an unauthorized user is accessing my account, but it is for the best. Future plans are to switch to Mailgun to handle emails."
  },
  {
    title: "Learning more about Webpack",
    date: 'Aug 6th, 2017',
    content: "I found Stephen Grider's Webpack2 Guide on Udemy, because I wanted to learn more about Webpack and how to configure the build process better. I've used Webpack before but knew there was more to it. In this course, I got to learn what Webpack is actually doing from the entry point, the modules/rules about loaders, and the exit point. One thing I was excited about this course, is how to use code splitting so you can separate code when it is needed rather than loading all your code when the user first loads your site. I also learned how to use Webpack Dev Server middleware when you are already using an Express backend rather than running 'two' servers (Express and Webpack Dev Server). The other things I learned was how to store pictures locally vs request them off another URL for faster loading times, and the correct way to load CSS using style-loader, css-loader, and the extract text plugin. This course helped me learn more about code splitting and more about loading in code at the right time and different ways to process CSS files (one file vs importing in each component, etc)."
  }
];
