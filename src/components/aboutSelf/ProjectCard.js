import React, { useContext } from "react";

import "./ProjectCard1.scss";
import "./ProjectCard1.css";
import "./ProjectCard1.css.map";
import { Typography } from "@mui/material";
import PreviewIcon from "@mui/icons-material/Preview";
import Colors from "../../colors/Colors";
import { DarkThemeContext } from "../../context/DarkThemeContext";
import { useTheme, useMediaQuery } from "@mui/material";

// const  ProjectCard = ({name,desc,image,gitLink,appLink}) => {
const ProjectCard = ({ name, desc, image }) => {
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const { dt } = useContext(DarkThemeContext);
  const [darkTheme] = dt;

  return (
    <div
      style={{ width: matchesSM ? "17.2em" : "22em" }}
      className="card-wrapper"
    >
      <div
        className="card"
        style={{
          //   backgroundColor: `rgba(255, 255, 255, 0.1)`,
          padding: "2em",
          elevation: "10em",
          overflow: " hidden"
        }}
      >
        <div className="card-image">
          <img src={image} alt={name} style={{backgroundSize:'cover'}} />

          <div className="card-title" style={{ backgroundColor: Colors.blue }}>
            <Typography
              align="center"
              variant="h6"
              style={{
                color: Colors.white.replace,
                textAlign: "center",
             
                fontWeight: "600",
                alignItems:'center',
                alignSelf:'center',
                padding:'0.6em'
      
              }}
            >
              {name}
            </Typography>
          </div>
        </div>
        
        <div
          className="details"
          // style={{ backgroundColor: darkTheme ? Colors.white : Colors.BDark }}
        >
          {/* <h2>  */}
          <Typography
            variant="h6"
            style={{
              marginTop: 25,
              textAlign: "center",
              fontSize: "1rem",
              paddingRight: "1em",
              paddingLeft: "1em",
              color: darkTheme ? Colors.white : Colors.Black
            }}
          >
            {desc}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
