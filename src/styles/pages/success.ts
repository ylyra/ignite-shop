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

    "&:hover, &:focus": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  width: "100%",
  maxWidth: 130,
  height: 145,
  borderRadius: 8,
  padding: "0.25rem",
  marginTop: "4rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});
