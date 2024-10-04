AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Project 1",
    cardImage: "assets/images/experience-page/unamed2.jpg",
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
    place: "N/A",
    time: "N/A",
    desp: "<li>N/A</li><li>N/A</li>",
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

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
     title: "N/A",
    cardImage: "assets/images/experience-page/Imageless.png",
    description:
      "N/A",
  },
  {
    title: "N/A",
    cardImage: "assets/images/experience-page/Imageless.png",
    description:
      "N/A",
  },
  {
    title: "N/A",
    cardImage: "assets/images/experience-page/Imageless.png",
    description:
      "N/A",
  },
  {
    title: "N/A",
    cardImage: "assets/images/experience-page/Imageless.png",
    description:
      "N/A",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

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
    href: "https://ulhacks.com/",
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
