import React from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./ProjectCard.css.map";
import ecommerse from "../../assets/jpgtry.jpg";
import bankingrj from "../../assets/bankingrj.jpg";
import ngowf from "../../assets/ngowf.jpg";
import keepnotes from "../../assets/keepnotes.jpg";
import quizapp from "../../assets/quizapp.jpg";
import Done from "../../assets/done.jpg";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2png.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import c5 from "../../assets/c5.png";
import c6 from "../../assets/c6.png";
import c7 from "../../assets/c7.png";
import c8 from "../../assets/c8.png";
import c9 from "../../assets/c9.png";
import c10 from "../../assets/c10.png";
import c11 from "../../assets/c11.png";
import c12 from "../../assets/c12.png";
import a1 from "../../assets/a1.png";
import a2 from "../../assets/a2.png";
import a3 from "../../assets/a3.png";
import a4 from "../../assets/a4.png";
import a5 from "../../assets/a5.png";
import a6 from "../../assets/a6.png";
import a7 from "../../assets/a7.png";
import a8 from "../../assets/a8.png";
import a9 from "../../assets/a9.png";
import a10 from "../../assets/a10.png";
import a11 from "../../assets/a11.png";
import a12 from "../../assets/a12.png";
import a13 from "../../assets/a13.png";
import a14 from "../../assets/a14.png";
import q1 from "../../assets/q1.png";
import q2 from "../../assets/q2.png";
import q3 from "../../assets/q3.png";
import q4 from "../../assets/q4.png";
import q5 from "../../assets/q5.png";
import q6 from "../../assets/q6.png";
import q7 from "../../assets/q7.png";
import q8 from "../../assets/q8.png";
import q9 from "../../assets/q9.png";

import ProjectCard from "./ProjectCard";

import { AnimatedDiv } from "../animated";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "2em",
    paddingRight: "2em",
    paddingTop: "2em",
    paddingBottom: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "1em"
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0.5em",
      paddingRight: "0.5em",
      paddingTop: "0.5em"
    }
  }
}));

const data1 = [
  [
    {
      type: "Website",
      name: "Skilling Programs",
      desc:
        "Training in areas like electrical and electronics fabrication, embedded systems design. Embedded programming, 3D printing, robotics, welding, IoT, Machine Learning, AI, bio-engineering, biomedical, etc",
      image: c1
    },
    {
      type: "Website",
      name: "Bootcamps",
      desc:
        "Training of members(including those from other institutions, spread over a few weeks, continuingat workplaces,if required)",
      image: c2
    },
    {
      type: "Website",
      name: "Ideation Workshops",
      desc:
        "To generate ideas on which students can work in the IDEA lab, including field visits",
      image: c3
    },
    {
      type: "Website",
      name: "Awareness Workshops for Industry",
      desc:
        "Publicizing IDEA Lab among industries, to encourage them to use the facilities",
      image: c4
    },
    {
      type: "Website",
      name: "Internships",
      desc:
        "For hands-on training as part of their course-work during summer and winter vacations. Internships based on industry problems should be preferred.",
      image: c5
    },
    {
      type: "Website",
      name: "Professional Skilling Programs",
      desc: "Welding,3D printing, mechanical fabrication, etc.",
      image: c6
    },
    {
      type: "Website",
      name: "School Teachers Awareness Program",
      desc: "Demonstration and providing hands-on experience to members.",
      image: c7
    },
    {
      type: "Website",
      name: "Project by School Students",
      desc: "Opportunity for student to work on Industry projects",
      image: c8
    },
    {
      type: "Website",
      name: "Open Day for school students",
      desc:
        "Exposure to facilities in IDEA Lab to ignite their minds. (On Science Day/Technology Day/ Teachers Day/ Engineers Day)",
      image: c9
    },
    {
      type: "Website",
      name: "Participation in annual technical exhibitions",
      desc:
        "Technical exhibitions etc For example, Tech FEST, Mind SPARK, etc. organized by renowned Institutes/Industries, etc to showcase activities/products/prototypes developed in IDEA labs",
      image: c10
    },
    {
      type: "Website",
      name: "Newsletter",
      desc:
        "To disseminate information to all the labs about activities of other labs,technology issues, any interesting development, etc.",
      image: c11
    },
    {
      type: "Website",
      name: "Annual conference/ symposium of all IDEA labs",
      desc:
        "To promote active interaction, showcase of lab activities, promote collaboration at national and international level labs",
      image: c12
    }
  ],
  [
    {
      type: "Website",
      name: "CENTRAL DRILL",
      desc:
        "A Centre drill is a two-fluted tool consisting of a twist drill with a 60° countersink; used to drill countersink center holes in a workpiece to be mounted between centers for turning or grinding.",
      image: a1
    },
    {
      type: "Website",
      name: "LASER CNC CUTTING",
      desc:
        "Laser cutting is a technology that uses a laser to vaporize materials, resulting in a cut edge. The laser optics and CNC (computer numerical control) are used to direct the material or the laser beam generated.",
      image: a2
    },
    {
      type: "Website",
      name: "3-D PRINTER",
      desc:
        "3D printing or additive manufacturing is a process of making three dimensional solid objects from a digital file. The creation of a 3D printed object is achieved using additive processes. In an additive process an object is created by laying down successive layers of material until the object is created. Each of these layers can be seen as a thinly sliced cross-section of the object.",
      image: a3
    },
    {
      type: "Website",
      name: "LATHE MACHINE",
      desc:
        "A lathe is a machine tool that rotates a workpiece about an axis of rotation to perform various operations such as cutting, sanding,knurling, drilling, deformation, facing and turning, with tools that are applied to the workpiece to create an object with symmetry about that axis",
      image: a4
    },
    {
      type: "Website",
      name: "SOLDERING STATION",
      desc:
        "A soldering station is a multipurpose power soldering device designed for electronic components soldering. This type of equipment is mostly used in electronics and electrical engineering",
      image: a5
    },
    {
      type: "Website",
      name: "24*7 INTERNET ACCESS",
      desc:
        "The Facility will be provided with 24 x 7 internet access to aid the young inventors",
      image: a6
    },
    {
      type: "Website",
      name: "POWER TOOLS",
      desc:
        "A power tool is a tool that is actuated by an additional power source and mechanism other than the solely manual labor used with hand tools. The most common types of power tools use electric motors. Internal combustion engines and compressed air", //"A fire extinguisher is an active fire protection device used to extinguish or control small fires, often in emergency situations. It is not intended for use on an out-of-control fire, such as one which has reached the ceiling and endangers the user",
      image: a7
    },
    {
      type: "Website",
      name: "WELDING MACHINE",
      desc:
        "Welding is a fabrication process that joins materials, usually metals or thermoplastics, by using high heat to melt the parts together and allowing them to cool, causing fusion", //"A projector or image projector is an optical device that projects an image (or moving images) onto a surface, commonly a projection screen. Most projectors create an image by shining a light through a small transparent lens, but some newer types of projectors can project the image directly, by using lasers",
      image: a8
    },
    {
      type: "Website",
      name: "OSCILLOSCOPE",
      desc:
        "An oscilloscope, previously called an oscillograph,[1][2] and informally known as a scope or o-scope, CRO (for cathode-ray oscilloscope), or DSO (for the more modern digital storage oscilloscope), is a type of electronic test instrument that graphically displays varying signal voltages, usually as a calibrated two-dimensional plot of one or more signals as a function of time", //"A microscope is a laboratory instrument used to examine objects that are too small to be seen by the naked eye. Magnification of the image is achieved by displaying the data from scanning a physically small sample area on a relatively large screen",
      image: a9
    },
    {
      type: "Website",
      name: "PROJECTOR",
      desc:
        "A projector or image projector is an optical device that projects an image (or moving images) onto a surface, commonly a projection screen. Most projectors create an image by shining a light through a small transparent lens, but some newer types of projectors can project the image directly, by using laser",
      image: a10
    },
    {
      type: "Website",
      name: "Electronic Component Receptor",
      desc:
        "An electronic component is any basic discrete device or physical entity in an electronic system used to affect electrons or their associated fields. Electronic components are mostly industrial products, available in a singular form and are not to be confused with electrical elements",
      image: a11
    },
    {
      type: "Website",
      name: "FIRE EXTINGUISHER",
      desc:
        "A fire extinguisher is an active fire protection device used to extinguish or control small fires, often in emergency situations. It is not intended for use on an out-of-control fire, such as one which has reached the ceiling and endangers the user",
      image: a12
    },
    {
      type: "Website",
      name: "FIRST AID",
      desc:
        "A projector or image projector is an optical device that projects an image (or moving images) onto a surface, commonly a projection screen. Most projectors create an image by shining a light through a small transparent lens, but some newer types of projectors can project the image directly, by using laser",
      image: a13
    },
    {
      type: "Website",
      name: "Electronic Component Receptor",
      desc:
        "A microscope is a laboratory instrument used to examine objects that are too small to be seen by the naked eye. Magnification of the image is achieved by displaying the data from scanning a physically small sample area on a relatively large screen",
      image: a14
    }
  ],
  [
    {
      type: "Website",
      name: "Centrifugal Blower",
      desc: "Centrifugal Blower",
      image: q1
    },
    {
      type: "Website",
      name: "Hot Air Gun",
      desc: "Hot Air Gun",
      image: q2
    },
    {
      type: "Website",
      name: "Allen Set Wrench",
      desc: "Allen Set Wrench",
      image: q3
    },
    {
      type: "Website",
      name: "Digital Multimeter",
      desc: "Digital Multimeter",
      image: q4
    },
    {
      type: "Website",
      name: "DC regulated power supply",
      desc: "DC regulated power supply",
      image: q5
    },
    {
      type: "Website",
      name: "Cutting Mats",
      desc: "Cutting Mats",
      image: q6
    },
    {
      type: "Website",
      name: "Battery",
      desc: "Battery",
      image: q7
    },
    {
      type: "Website",
      name: "DC and AC Clampmeters",
      desc: "DC and AC Clampmeters",
      image: q8
    },
    {
      type: "Website",
      name: "Vernier Callipers",
      desc: "Vernier Callipers",
      image: q9
    },
    {
      type: "Website",
      name: "Non-contact Voltage Testers",
      desc: "Non-contact Voltage Testers",
      image: q10
    }
  ]
];

function Project(props) {
  const theme = useTheme();
  const classes = useStyles();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const { index } = props;

  const head = [
    "AICTE | Lab Activities",
    "Major Facilities",
    "Electrical Facilities"
  ];
  return (
    <AnimatedDiv
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.3, type: "spring" }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={classes.rowContainer}
      >
        <Grid item style={{ marginBottom: "4em", marginTop: "4em" }}>
          <Typography variant="h2" align="center">
            {head[index]}
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems="center"
          justifyContent="center"
          spacing={4}
        >
          {data1[index] &&
            data1[index].map((item, id) => (
              <Grid
                item
                key={id}
                style={{ marginTop: "2em", marginBottom: "2em" }}
              >
                <ProjectCard
                  key={item.name}
                  image={item.image}
                  type={item.type}
                  name={item.name}
                  desc={item.desc}
                  // gitLink={item.gitLink}
                  // appLink={item.appLink}
                />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </AnimatedDiv>
  );
}

export default Project;
