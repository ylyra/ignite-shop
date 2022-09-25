import { styled } from "../../styles";

export const Header = styled("header", {
  padding: "2rem 1.5rem",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  button: {
    background: "$gray800",
    border: "none",
    borderRadius: 6,
    transition: "all 0.25s",
    position: "relative",
    padding: "0.75rem",
    color: "$gray600",

    "&:hover": {
      filter: "brightness(0.75)",
    },

    span: {
      position: "absolute",
      top: "-50%",
      right: "-50%",
      background: "$green500",
      borderRadius: 1000,
      border: "3px solid $gray900",
      color: "$white",
      fontSize: "0.75rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 24,
      height: 24,

      transform: "translate(-70%, 80%)",
    },
  },
});
