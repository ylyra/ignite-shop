import { styled } from "../../styles";

export const ProductContainer = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  //padding: "0.25rem",
  position: "relative",
  overflow: "hidden",
  minWidth: 540,
  flexShrink: 0,
  color: "$gray100",
  height: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",
    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0, 0, 0, 0.6)",

    strong: {
      fontSize: "$lg",
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },
  },

  "&:hover, &:focus": {
    footer: {
      opacity: 1,
      transform: "translateY(0%)",
    },
  },
});
