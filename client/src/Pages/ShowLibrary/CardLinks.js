import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/system";

const MyCard = styled(Card)(({ theme }) => ({
  maxWidth: 340,
  cursor: "pointer",
  padding: "0.75em",
  margin: "0.75em",
  animation: "all 300ms",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 0px 5px rgba(200,200,200,0.9), " + theme.shadows[9],
  },
}));

export const CardLinks = ({ data }) => {
  const { image, title, description } = data;
  return (
    <MyCard sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {description}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={image}
        alt="Card image not present"
      />
    </MyCard>
  );
};
