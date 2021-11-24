import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

// Card with info of the band
const HeroCard = ({ hero, withReturn, withDetails }) => {
  const { comics, description, events, id, name, series, thumbnail } = hero;
  return (
    <Card variant="outlined">
      <CardMedia
        component="img"
        height={withDetails ? "800" : "400"}
        image={`${thumbnail.path}.${thumbnail.extension}`}
        alt="image"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>

        {withDetails && (
          <>
            <Typography sx={{ mt: 1.5 }} color="text.secondary">
              {description}
            </Typography>
            <>
              <Typography sx={{ mt: 1.5 }} color="text.secondary">
                Comics:
              </Typography>
              {comics.items.map((comic, i) => (
                <Typography key={i} variant="body2">
                  {comic.name}
                </Typography>
              ))}
            </>
            <>
              <Typography sx={{ mt: 1.5 }} color="text.secondary">
                Events:
              </Typography>
              {events.items.map((event, i) => (
                <Typography key={i} variant="body2">
                  {event.name}
                </Typography>
              ))}
            </>
            <>
              <Typography sx={{ mt: 1.5 }} color="text.secondary">
                Series:
              </Typography>
              {series.items.map((serie, i) => (
                <Typography key={i} variant="body2">
                  {serie.name}
                </Typography>
              ))}
            </>
          </>
        )}
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        {withReturn ? (
          <Link style={{ textDecoration: "none" }} to={`/heroes`}>
            <Button size="small" variant="contained">
              Return
            </Button>
          </Link>
        ) : (
          <Link style={{ textDecoration: "none" }} to={`/heroes/${id}`}>
            <Button size="small" variant="contained">
              More Details
            </Button>
          </Link>
        )}
      </CardActions>
    </Card>
  );
};

export default HeroCard;
