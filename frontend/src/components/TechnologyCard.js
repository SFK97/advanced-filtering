import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";

import Rating from "@material-ui/lab/Rating";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 2,
});

const TechnologyCard = ({ technology }) => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar />}
        title={<Typography variant="h6">{technology.name}</Typography>}
      />
      <CardContent>
        <Typography variant="caption">{technology.description}</Typography>
        <Typography variant="h6" gutterBottom>
          {formatter.format(technology.price)}
        </Typography>
        <Rating
          value={technology.rating}
          readOnly
          name={technology.name}
          size="small"
          precision={0.5}
        />
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" color="primary">
          Book Now
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default TechnologyCard;
