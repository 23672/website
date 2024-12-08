AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Project 1",
    cardImage: "assets/images/experience-page/unnamed.jpg",
    place: "Shapes & Hangout",
    time: "(Aug, 22 - Aug, 26)",
    desp: "<li>Shapes: Worked with our robotics kit to create an assortment of different shapes</li> <li>Worked with our kits and parts around the room to create a robot that can hang as far off the table as possible</li> <li>Learned how to innotvatively use different pieces and screws to tighten the shape along with learning how to balance the weight of our builds</li>",
  },
  {
    title: "Project 2",
    cardImage: "assets/images/experience-page/Imageless.png",
    place: "Speed Bot",
    time: "(Sep, 2 - Sep, 26)",
    desp: "<li>Worked with our kits to create a bot that could go as fast as possible</li><li>Learned how different parts and wheels can effect the speed of a cart and different practices to make it go faster</li><li>Also went around the school driving the bot to test different things with it</li>",
  },
  {
    title: "Project 3",
    cardImage: "assets/images/experience-page/Imageless.png",
    place: "Coding And Sensors",
    time: "(October 1, - October 16)",
    desp: "<li>Created a robot fully reliant on code instead of a controller as the previous challenges have asked for and we had it traverse different obstacles such as going around a square, going around the classroom and going to different parts in the school</li><li>N/A</li>",
  },
{
    title: "Project 4",
    cardImage: "assets/images/experience-page/Imageless.png",
    place: "Health bot",
    time: "(November 25th, - December 5th)",
    desp: "<li>In the Med-Bot Challenge there is a hospital setup with 6 different rooms, we were tasked to code the robot to go to each of the rooms go to an elevator and then go back to the starting area.</li><li>The work with my partner went well as we both understood our roles along with knowing we were tasked with building this due to the real world applications</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Shapes",
    subtitle: "Triangle",
    image: "assets/images/experience-page/unnamed.jpg",
    desp: "Created a triangle for Project: Shapes ",
    href: "https://roboticshs.netlify.app/experience.html",
  },
  {
    title: "Hang Out",
    subtitle: "Progress Picture",
    image: "assets/images/experience-page/Imageless.png",
    desp: "Process of creating the hangout design (waiting on gaop for image)",
    href: "https://roboticshs.netlify.app/experience.html",
  },
  {
    title: "N/A",
    subtitle: "N/A",
    image: "assets/images/experience-page/Imageless.png",
    desp: "N/A",
    href: "",
  },
  {
    title: "N/A",
    subtitle: "N/A",
    image: "assets/images/experience-page/Imageless.png",
    desp: "N/A",
    href: "",
  },
  {
    title: "N/A",
    subtitle: "N/A",
    image: "assets/images/experience-page/Imageless.png",
    desp: "N/A",
    href: "",
  },
  {
   title: "N/A",
    subtitle: "N/A",
    image: "assets/images/experience-page/Imageless.png",
    desp: "N/A",
    href: "",
  },
  {
    title: "N/A",
    subtitle: "N/A",
    image: "assets/images/experience-page/Imageless.png",
    desp: "N/A",
    href: "",
  },
  {
    title: "N/A",
    subtitle: "N/A",
    image: "assets/images/experience-page/Imageless.png",
    desp: "N/A",
    href: "",
  },
  {
    title: "N/A",
    subtitle: "N/A",
    image: "assets/images/experience-page/Imageless.png",
    desp: "N/A",
    href: "",
  },
  {
    title: "N/A",
    subtitle: "N/A",
    image: "assets/images/experience-page/Imageless.png",
    desp: "N/A",
    href: "",
  },
  {
    title: "N/A",
    subtitle: "N/A",
    image: "assets/images/experience-page/Imageless.png",
    desp: "N/A",
    href: "",
  },
  {
   title: "N/A",
    subtitle: "N/A",
    image: "assets/images/experience-page/Imageless.png",
    desp: "N/A",
    href: "",
  },
  {
    title: "N/A",
    subtitle: "N/A",
    image: "assets/images/experience-page/Imageless.png",
    desp: "N/A",
    href: "",
  },
  {
   title: "N/A",
    subtitle: "N/A",
    image: "assets/images/experience-page/Imageless.png",
    desp: "N/A",
    href: "",
  },
  {
    title: "N/A",
    subtitle: "N/A",
    image: "assets/images/experience-page/Imageless.png",
    desp: "N/A",
    href: "",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
