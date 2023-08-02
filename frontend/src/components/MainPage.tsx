import {
  Container,
  Stack,
  Box,
  useTheme,
  alpha,
  useMediaQuery,
} from "@mui/material";
import { FormEvent, useState } from "react";
import API from "../function/API";
import Header from "./Header";
import ShortLinkBox from "./ShortLinkBox";
import CustomButton from "./CustomButton";
import By from "./By";
import { VariantType, useSnackbar } from "notistack";

const MainPage = () => {
  const [url, setURL] = useState("");
  const [shortURL, setShortURL] = useState("");
  const theme = useTheme();
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant: VariantType, message: string) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await API.post<ResponseInfo>("/shorten", {
        url: url,
      });
      handleClickVariant("success", "Create ShortURL successfully!")();
      setShortURL(response.data.data.short_url);
    } catch (e) {
      handleClickVariant("error", "Cannot create shortURL, try again")();
    }
  };

  const handleCopy = () => {
    if (shortURL) {
      navigator.clipboard
        .writeText(`${import.meta.env.VITE_BACKEND_URL}/${shortURL}`)
        .then(() => {
          handleClickVariant("success", "Copied")();
        });
    }
  };

  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      sx={{
        backgroundColor: alpha(`${theme.palette.background.main}`, 0.5),
        backdropFilter: "blur(100px)",
      }}
    >
      <Container sx={{ height: "100vh" }}>
        <Stack justifyContent={"center"} alignItems={"center"} height={"100%"}>
          <Header />
          <Stack
            width={"100%"}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            paddingY={"2rem"}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                width={isExtraSmallScreen ? "100%" : "60%"}
                border={"1px solid black"}
                sx={{
                  borderRadius: "0.5rem 0rem 0rem 0.5rem",
                  overflow: "hidden",
                  borderRightWidth: "0px",
                }}
              >
                <input
                  type="text"
                  name="long-url"
                  id="long-url"
                  placeholder="enter long url"
                  style={{
                    padding: "1rem 1.5rem",
                    fontSize: "18px",
                    width: "100%",
                  }}
                  onChange={(e) => setURL(e.target.value)}
                />
              </Box>
              <CustomButton />
            </form>
          </Stack>
          {shortURL && (
            <ShortLinkBox handleCopy={handleCopy} shortURL={shortURL} />
          )}
          <By />
        </Stack>
      </Container>
    </Box>
  );
};

export default MainPage;
