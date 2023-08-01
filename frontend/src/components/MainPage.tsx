import {
  Container,
  Stack,
  Box,
  Snackbar,
  useTheme,
  Typography,
  alpha,
} from "@mui/material";
import React, { FormEvent, useState } from "react";
import API from "../function/API";
import Header from "./Header";
import ShortLinkBox from "./ShortLinkBox";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [url, setURL] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    console.log(event);
    setOpen(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("before");
      const response = await API.post<ResponseInfo>("/shorten", {
        url: url,
      });
      setShortURL(response.data.data.short_url);
    } catch (e) {
      setErrorMessage("cannot create shortURL, try again");
      setOpen(true);
    }
  };

  const handleCopy = () => {
    if (shortURL) {
      setErrorMessage("Copied!");
      setOpen(true);
      navigator.clipboard.writeText(
        `${import.meta.env.VITE_BACKEND_URL}/${shortURL}`
      );
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
                width={"60%"}
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
          <Typography>
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
        </Stack>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message={errorMessage}
        />
      </Container>
    </Box>
  );
};

export default MainPage;
