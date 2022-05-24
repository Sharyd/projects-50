const header = document.getElementById("header");
const card = document.querySelector(".card");
window.addEventListener("load", function () {
  setTimeout(
    () =>
      (card.innerHTML = `<img
          src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
          alt=""
        />
      </div>
    
      <div class="card-content">
        <h3 class="card-title animated-bg animated-bg-text" id="title">
          Lorem ipsum dolor sit amet.
        </h3>
        <p class="card-except" id="except">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          perferendis esse sunt! Corrupti, sunt repellat? 
          <div class="span animated-bg animated-bg-text"></div>
          <div class="span animated-bg animated-bg-text"></div>
          <div class="span animated-bg animated-bg-text"></div>
        </p>
        <div class="author">
            <div class="profile-img animated-bg" id="profile_img">
                <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">
            </div>
            <div class="author-info">
                <strong class="animated-bg animated-bg-text" id="name">John Doe</strong>
                <small class="animated-bg animated-bg-text" id="date">Oct 08, 2020</small>
            </div>
        </div>`),
    1500
  );
});
