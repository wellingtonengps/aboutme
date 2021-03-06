import React from "react";
import { PerfilWrapperStyles, SocialWrapperStyles } from "./styles.module";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiDiscord, SiInstagram, SiSpotify } from "react-icons/si";
import Animation from "./Animacao/Animation";

(() => {
  (async () => {
    let response = await Promise.allSettled([
      fetch("https://api.github.com/users/wellingtonengps"),
    ]);

    if (response[0].status == "fulfilled") {
      const data = await response[0].value.json();
      var avatar = data.avatar_url;
      console.log(avatar);
    }
  })();
})();

export default function Perfil() {
  return (
    <PerfilWrapperStyles>
      <img
        src="https://avatars.githubusercontent.com/u/43380060?v=4"
        alt="foto wellington"
        size="1rem"
      />
      <div>
        <h1>Wellington P. Silva</h1>
        <h2>Ciência da Computação</h2>
      </div>
      <SocialWrapperStyles>
        <ul>
          <li>
            <a href="https://github.com/wellingtonengps" target="_blank">
              <AiFillGithub size="1.5rem" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/wellingtonengps/"
              target="_blank"
            >
              <AiFillLinkedin size="1.5rem" />
            </a>
          </li>
          <li>
            <a href="https://discord.gg/s5CYPm6keN" target="_blank">
              <SiDiscord size="1.5rem" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/wells.ps/" target="_blank">
              <SiInstagram size="1.5rem" />
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/playlist/7DeyqatZJVPp7kz0rwIDJ3?si=ab4cf4a95ec44d24"
              target="_blank"
            >
              <SiSpotify size="1.5rem" />
            </a>
          </li>
        </ul>
      </SocialWrapperStyles>
      <Animation />
    </PerfilWrapperStyles>
  );
}
