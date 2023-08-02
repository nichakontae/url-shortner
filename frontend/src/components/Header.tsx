import { Stack, Typography, useTheme } from "@mui/material";

const Header = () => {
  const theme = useTheme();
  return (
    <Stack alignItems={"center"}>
      <Typography
        fontWeight={900}
        variant="h3"
        color={theme.palette.text[200]}
      >
        Shorten URL
      </Typography>
      <Typography textAlign={"center"}>
        Use our URL Shortener to create a rememberable and easy-to-share URL
      </Typography>
    </Stack>
  );
};

export default Header;
