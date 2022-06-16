import Grid from "@mui/material/Grid";
import { Stack, Typography, Divider } from "@mui/material";
import GridCom from "./sub-component/GridCom";

export default function CategoryGrid({
  title,
  list,
  styles,
  showTitle,
  gridCol,
}) {
  return (
    <>
      <Typography
        sx={{
          fontSize: 22,
          fontWeight: 600,
          lineHeight: "32px",
          marginRight: 2,
          mt: 8,
        }}
      >
        {title}
      </Typography>
      <Divider />

      <GridCom columns={gridCol}>
        {list.map((category, index) => (
          <Grid item xs={1} key={index}>
            <Stack>
              <img
                src={category.url}
                alt="category img"
                style={styles}
              />
              {showTitle && (
                <p style={{ textAlign: "center" }}>{category.id}</p>
              )}
            </Stack>
          </Grid>
        ))}
      </GridCom>
    </>
  );
}
