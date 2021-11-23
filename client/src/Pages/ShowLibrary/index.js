import React from "react";
import { Grid } from "@mui/material";

import { CardLinks } from "./CardLinks";

import bookImage from "../../Assets/images/book.svg";
import libraryImage from "../../Assets/images/library.svg";
import studentImage from "../../Assets/images/student.svg";

const links = [
  {
    title: "Library",
    description: "You can edit library parameters",
    image: libraryImage,
    location: "/editLib",
  },
  {
    title: "Students",
    description: "You can add and edit students",
    image: studentImage,
    location: "/editStudent",
  },
  {
    title: "Books",
    description: "You can add and edit books",
    image: bookImage,
    location: "/editBook",
  },
];

export const ShowLibrary = () => {
  const select = (location) => {
    console.log(location);
  };

  return (
    <Grid
      container
      direction="row-reverse"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: " 50vh" }}
    >
      {links.map((data) => (
        <div key={data.title} onClick={() => select(data.location)}>
          <CardLinks data={data} />
        </div>
      ))}
    </Grid>
  );
};
