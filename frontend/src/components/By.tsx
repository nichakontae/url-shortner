import { Typography, useTheme } from "@mui/material";

const By = () => {
  const theme = useTheme();
  return (
    <Typography
      position={"absolute"}
      bottom={"2rem"}
      color={theme.palette.text.main}
    >
      By{" "}
      <a
        href="https://www.ivelse.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: theme.palette.text.main }}
      >
        ivelse.com
      </a>
    </Typography>
  );
};

export default By;
