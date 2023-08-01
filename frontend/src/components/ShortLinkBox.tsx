import { Box, Grid, Typography, IconButton, useTheme } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { FC } from "react";

interface ShortLinkBoxProps {
  handleCopy: Function;
  shortURL: string;
}

const ShortLinkBox: FC<ShortLinkBoxProps> = ({ handleCopy, shortURL }) => {
  const theme = useTheme();
  return (
    <Box
      bgcolor={theme.palette.background[200]}
      padding={"0.5rem 1.5rem"}
      width={"69%"}
      borderRadius={"0.5rem"}
    >
      <Grid container direction={"row"} alignItems={"center"}>
        <Grid item xs={11}>
          <Typography
            fontSize={"18px"}
            textAlign={"center"}
            color={theme.palette.text.main}
          >
            {`${import.meta.env.VITE_BACKEND_URL}/${shortURL}`}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton
            onClick={handleCopy()}
            sx={{ display: "flex", flex: "1", color: theme.palette.text.main }}
          >
            <ContentCopyIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShortLinkBox;
