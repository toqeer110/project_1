import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillLinkedin,
  AiFillAmazonCircle,
  AiFillYoutube,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home1">
        <main>
          <h1>Techy Dev</h1>
          <p>Innovate | Lead | Vision</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="graphics" />

        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
            quae enim a quis cumque neque aliquam voluptatum facilis incidunt,
            tempore modi quas itaque! Earum laudantium ipsum pariatur molestias
            quos officiis! Saepe nostrum pariatur, vel eveniet laboriosam iusto
            voluptas dolores tempora untur ad?
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nobis
            dolores natus architecto velit repudiandae sequi quasi! Sit aliquid
            aliquam odit qui ipsam provident. Quo sint explicabo architecto
            dignissimos! Modi hic, dolorum quam aspernatur quisquam ex dolore,
            minima nulla amet maxime libero corporis! Perspiciatis, facilis?
            Asperiores, at pariatur quae totam expedita excepturi iste, iusto
            maiores dolorem quia architecto numquam nemo? Ex, voluptatum alias
            perferendis non exercitationem, repellendus reprehenderit expedita
            voluptatibus neque a nulla aperiam mollitia aliquam minus et
            consequatur odit repellat amet reiciendis at quis ad. Laborum
            architecto praesentium, vitae delectus molestiae quos mollitia
            dignissimos cum aliquam fugit ullam! Neque, voluptatibus quaerat?
            Tempora maxime similique quaerat adipisci repudiandae ipsa quod
            necessitatibus dolorum, fuga esse corporis magni voluptatibus itaque
            voluptas commodi porro! Maiores sed quam, dolorum asperiores in
            doloribus aspernatur hic rerum quia quo eveniet! Similique expedita
            nostrum sapiente modi aut rerum neque quam provident, dolorem
            praesentium, architecto itaque quidem iusto.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <a href="https://www.google.com" target="_blank" rel="noreferrer">Google</a>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <a href="https://www.amazon.com" target="_blank" rel="noreferrer">Amazon</a>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer">Youtube</a>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillLinkedin />
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
