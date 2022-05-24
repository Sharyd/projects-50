const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Marketing",
    photo: "https://Randomuser.me/api/portraits/men/47.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi suscipit. Dignissimos voluptatem voluptatibus, voluptate officiaquibusdam perspiciatis molestias hic autem fugiat sed, inventore magni consectetur",
  },
  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://Randomuser.me/api/portraits/women/44.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi suscipit. Dignissimos voluptatem voluptatibus, voluptate officiaquibusdam perspiciatis molestias hic autem fugiat sed, inventore magni consectetur",
  },
  {
    name: "Iida Niskanen",
    position: "Data Entry",
    photo: "https://Randomuser.me/api/portraits/women/68.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi suscipit. Dignissimos voluptatem voluptatibus, voluptate officiaquibusdam perspiciatis molestias hic autem fugiat sed, inventore magni consectetur",
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo: "https://Randomuser.me/api/portraits/women/65.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi suscipit. Dignissimos voluptatem voluptatibus, voluptate officiaquibusdam perspiciatis molestias hic autem fugiat sed, inventore magni consectetur",
  },
  {
    name: "Jonathan Nunfiez",
    position: "Graphic",
    photo: "https://Randomuser.me/api/portraits/men/43.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi suscipit. Dignissimos voluptatem voluptatibus, voluptate officiaquibusdam perspiciatis molestias hic autem fugiat sed, inventore magni consectetur",
  },
  {
    name: "Sasha Ho",
    position: "Accountant",
    photo: "https://Randomuser.me/api/portraits/women/20.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi suscipit. Dignissimos voluptatem voluptatibus, voluptate officiaquibusdam perspiciatis molestias hic autem fugiat sed, inventore magni consectetur",
  },
  {
    name: "Weeti Sppanen",
    position: "Director",
    photo: "https://Randomuser.me/api/portraits/women/97.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi suscipit. Dignissimos voluptatem voluptatibus, voluptate officiaquibusdam perspiciatis molestias hic autem fugiat sed, inventore magni consectetur",
  },
];

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;
  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 5000);
