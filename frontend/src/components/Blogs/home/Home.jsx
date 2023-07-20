import { Grid } from "@material-ui/core";

//components
import Banner from "../sliders/Banner";
import Categories from "./blog-tabs";

import Posts from "./blog/blogs";
import "./blogstabs.css";

const Home = () => {
  return (
    <>
      <Banner />
      <Grid container>
        <Categories />

        <Grid
         className="gridding"
          container
          // item
          xs={12}
          sm={10}
          lg={11}
         
        >
          <Posts />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
