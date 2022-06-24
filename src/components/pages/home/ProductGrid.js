import Grid from "@mui/material/Grid";
import { Stack, Typography, Divider, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CategoryGrid({
  title,
  list,
  styles,
  showTitle,
  gridCol,
  viewAllLink,
}) {
  const navigate = useNavigate();

  const handleClick = (name, id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <Box sx={{ display: "flex", padding: "5px 10px" }}>
        <Typography
          sx={{
            fontSize: 22,
            fontWeight: 600,
            lineHeight: "32px",
            marginRight: 2,
          }}
        >
          {title}
        </Typography>
        {viewAllLink && (
          <Button
            variant="contained"
            color="primary"
            sx={{
              marginLeft: "auto",
              backgroundColor: "#2874f0",
              borderRadius: 2,
              fontSize: 13,
            }}
          >
            View All
          </Button>
        )}
      </Box>

      <Divider sx={{ my: 2 }} />

      <Grid container spacing={1} justifyContent="center">
        {list.map((category, index) => (
          <Grid
            item
            xs={2}
            key={index}
            sx={{ cursor: "pointer" }}
            onClick={() => handleClick(category.name, category.id)}
          >
            <Stack>
              {category?.poster_urls[0] && (
                <img
                  src={category.poster_urls[0]}
                  alt="category img"
                  style={styles}
                />
              )}

              {showTitle && (
                <p style={{ textAlign: "center" }}>{category.name}</p>
              )}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
