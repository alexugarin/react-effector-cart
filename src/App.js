import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import "./App.css";
import ProductCard from "./ProductCard";
import ProductsList from "./mockData";

export default function App() {
  const propsMock = ProductsList;
  const ListProductCard = propsMock.map((product)=><ProductCard key={product.id} {...product}/>)
  return (
    <Container maxWidth="md">
      <Typography component="h1" variant="h3">
        {" "}
        Корзина
      </Typography>
      <Grid container spacing={2} columns={4}>
        <Grid xs={3} xl={3}>
          {ListProductCard}
        </Grid>
        <Grid xs={1} xl={1}>
          <Typography component="h2" variant="h5">
            {" "}
            Итого
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
