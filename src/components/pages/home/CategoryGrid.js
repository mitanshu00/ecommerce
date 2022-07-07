import Grid from "@mui/material/Grid";
import { Stack, Typography, Divider, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CategoryGrid ({
  title,
  list,
  styles,
  showTitle,
  viewAllLink
}) {
  const navigate = useNavigate();

  const handleClick = (name, id) => {
    navigate(`/c/${name}`);
  };

  return (
    <>
      <Box sx={{ display: "flex", padding: "5px 10px" }}>
        <Typography
          sx={{
            fontSize: 22,
            fontWeight: 600,
            lineHeight: "32px",
            marginRight: 2
          }}
        >
          {title}
        </Typography>
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
              <img src={category.img_url} alt="category img" style={styles} />
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
