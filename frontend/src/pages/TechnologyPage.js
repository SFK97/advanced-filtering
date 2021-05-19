import {
  CircularProgress,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  makeStyles,
  Paper,
  Radio,
  RadioGroup,
  Slider,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState, useEffect } from "react";

import axios from "axios";
import TechnologyCard from "../components/TechnologyCard";

const useStyles = makeStyles({
  root: {
    marginTop: 20,
  },
  loader: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Paper: {
    marginBottom: "1rem",
    padding: "13px",
  },
  filters: {
    padding: "0 1.5rem",
  },
  priceRangeInputs: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const TechnologyPage = () => {
  //Material UI Styles
  const classes = useStyles();
  //Component State
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(false);

  //Side Effects
  useEffect(() => {
    let cancel;

    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios({
          method: "GET",
          url: `/api/v1/technologytypes`,
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });

        setTechnologies(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchData();
  }, []);
  return (
    <Container className={classes.root}>
      {/* Filtering section */}
      <Paper className={classes.Paper}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Filters</Typography>

            <div className={classes.filters}>
              <Slider min={0} max={100} />
              <div className={classes.priceRangeInputs}>
                <TextField
                  size="small"
                  id="lower"
                  label="Min Price"
                  variant="outlined"
                  type="number"
                  disabled={loading}
                  value={0}
                />
                <TextField
                  size="small"
                  id="upper"
                  label="Max Price"
                  variant="outlined"
                  type="number"
                  disabled={loading}
                  value={75}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Sort By</Typography>
            <FormControl component="fieldset" className={classes.filters}>
              <RadioGroup aria-label="price-order" name="price-order">
                <FormControlLabel
                  disabled={loading}
                  control={<Radio />}
                  label="Price: Highest - Lowest"
                />
                <FormControlLabel
                  disabled={loading}
                  control={<Radio />}
                  label="Price: Lowest - Highest"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
      {/* Technology List */}
      <Grid container spacing={2}>
        {loading ? (
          <div className={classes.loader}>
            <CircularProgress size="3rem" thickness={5} />
          </div>
        ) : (
          technologies.map((technology) => (
            <Grid item key={technology._id} xs={12} sm={6} md={4} lg={3}>
              <TechnologyCard technology={technology} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default TechnologyPage;
