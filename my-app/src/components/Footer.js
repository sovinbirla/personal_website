import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsSpotify,
} from "react-icons/bs";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <div class="footer__container">
      <div class="social__media">
        <div class="social__media--wrap">
          <div class="footer__logo">
            <Link to="/" id="footer__logo">
              Sovin Birla
            </Link>
          </div>
          <div class="social__icons">
            <IconContext.Provider value={{ className: "social__icon--link" }}>
              <Link to="https://www.facebook.com/profile.php?id=100008394522359">
                <BsFacebook />
              </Link>
              <Link to="https://github.com/sovinbirla">
                <BsGithub />
              </Link>
              <Link to="https://www.instagram.com/sovin_birla/">
                <BsInstagram />
              </Link>
              <Link to="https://www.linkedin.com/in/sovin-birla-421416148/">
                <BsLinkedin />
              </Link>
              <Link to="https://twitter.com/SovinBirla">
                <BsTwitter />
              </Link>
              <Link to="https://open.spotify.com/user/32tspal6zzctn2sl91ssm790t">
                <BsSpotify />
              </Link>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
