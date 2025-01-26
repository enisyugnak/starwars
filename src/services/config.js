// config.js
import { FaFilm } from "react-icons/fa6";
import { PiPlanet } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiSpaceShipFill } from "react-icons/ri";
import { FaTruckMonster } from "react-icons/fa";
import { RiRobot3Fill } from "react-icons/ri";
import { RiRobot3Line } from "react-icons/ri";

const config = {
  apiUrl: "https://swapi.py4e.com/api",
  menu: [
    { title: "Movies", link: "/movies", icon: FaFilm },
    { title: "People", link: "/people", icon: FaPeopleGroup },
    { title: "Planets", link: "/planets", icon: PiPlanet },
    { title: "Species", link: "/species", icon: RiRobot3Line },
    { title: "Starships", link: "/starships", icon: RiSpaceShipFill },
    { title: "Vehicles", link: "/vehicles", icon: FaTruckMonster },
    { title: "Playground", link: "/playground", icon: FaFilm },
  ],
};
export default config;
