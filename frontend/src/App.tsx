import { Button, Snackbar, Stack, TextField, Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import API from "./function/API";

function App() {
  const [url, setURL] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

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
  return (
    <>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Typography fontWeight={900} variant="h3">
          Shorten URL
        </Typography>
        <Stack direction={"row"}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="URL"
              variant="outlined"
              onChange={(e) => setURL(e.target.value)}
            />
            <Button variant="contained" type="submit">
              Shorten
            </Button>
          </form>
        </Stack>
      </Stack>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={errorMessage}
      />
      {shortURL && (
        <Typography>
          ShortURL:{" "}
          <a href={`${import.meta.env.VITE_BACKEND_URL}/${shortURL}`}>{`${
            import.meta.env.VITE_BACKEND_URL
          }/${shortURL}`}</a>
        </Typography>
      )}
    </>
  );
}

export default App;
