import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  flex: 1,

  h1: {
    fontSize: "$xxl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
  },

  a: {
    fontSize: "$lg",
    color: "$green500",
    marginTop: "5rem",
    textDecoration: "none",
    display: "block",
    fontWeight: 700,

    "&:hover, &:focus": {
      color: "$green300",
    },
  },
});

export const ImagesContainer = styled("div", {
  marginTop: "4rem",
  display: "flex",
});

export const ImageContainer = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  width: "100%",
  maxWidth: 140,
  height: 140,
  padding: "0.25rem",
  borderRadius: 99999,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.8)",

  img: {
    objectFit: "cover",
  },

  span: {
    position: "absolute",
    bottom: 0,
    left: 0,
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

    transform: "translate(50%, 0%)",
  },

  [`& + &`]: {
    marginLeft: "-2rem",
  },
});
