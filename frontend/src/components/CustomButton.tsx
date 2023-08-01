import { Button } from "@mui/material";

const CustomButton = () => {
  return (
    <Button
      variant="contained"
      type="submit"
      sx={{
        textTransform: "none",
        fontSize: "18px",
        borderRadius: "0rem 0.5rem 0.5rem 0rem",
      }}
    >
      Shorten!
    </Button>
  );
};

export default CustomButton;
