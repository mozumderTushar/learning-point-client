import React from "react";
import "./Faq.css";
const Faq = () => {
  return (
    <div className="shu_Box">
      <div class="card_s">
        <img
          class="card-header_s"
          src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg"
          alt="Woman typing on keyboard with glowing keys"
        />
        <article class="card-body_s">
          <h2 class="card-title_s">Get Verified Badge</h2>
          <p class="card-text_s">
            If you buy premium subscription, you'll get verified badge. And
            students will be able to contact you directly. They will see your
            contact info on your profile.
            <br />
            That means more students for you.
          </p>
          <div class="cardcta_s">
            <p class="cardmeta-info_s">
              <span>200tk</span> per month
            </p>
            <a href="#" class="cardbutton_s">
              Buy Premium
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Faq;
