import * as DialogPrimitive from "@radix-ui/react-dialog";
import { keyframes, styled } from "../../styles";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const Root = styled(DialogPrimitive.Root, {});
export const Portal = styled(DialogPrimitive.Portal, {});

export const Overlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  position: "fixed",
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

export const Content = styled(DialogPrimitive.Content, {
  overflowY: "scroll",

  position: "fixed",
  top: 0,
  bottom: 0,
  right: 0,
  maxWidth: 480,
  width: "100%",
  backgroundColor: "$gray800",
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",
  padding: "1.5rem",

  display: "flex",
  flexDirection: "column",

  footer: {
    paddingTop: "1rem",
    ".quantity": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: "1rem",
      color: "$gray100",
      marginBottom: "0.5rem",

      span: {
        fontSize: "$md",
        color: "$gray300",
      },
    },

    ".total": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: "$md",
      fontWeight: 700,
      color: "$gray100",
      marginBottom: "0.5rem",

      strong: {
        fontSize: "$md",
        color: "$gray300",
      },
    },
  },
});

export const Title = styled(DialogPrimitive.Title, {
  fontSize: "$lg",
  lineHeight: "1.6",
  color: "$gray100",
  fontWeight: 700,
  marginBottom: "2rem",
});

export const Close = styled(DialogPrimitive.Close, {
  marginLeft: "auto",
  marginBottom: "1.5rem",
  border: 0,
  backgroundColor: "transparent",
  display: "block",
  color: "$gray600",
  transition: "all 0.25s",

  "&:hover": {
    color: "$gray900",
  },
});

export const CartItensWrapper = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  minHeight: "300px",
});

export const CartItem = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1.25rem",

  strong: {
    display: "block",
    fontSize: "$md",
    lineHeight: "1.6",
    color: "$gray100",
    fontWeight: 700,
    marginBottom: "0.5rem",
  },

  button: {
    display: "block",
    color: "$green500",
    fontWeight: 700,
    fontSize: "1rem",
    transition: "all 0.25s",
    background: "transparent",
    border: 0,

    "&:hover": {
      color: "$green300",
    },
  },
});

export const CartItemImageContainer = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",

  width: 100,
  height: 100,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const CartItemContentContainer = styled("div", {
  flex: 1,
});

export const CartItemHeadingContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.75rem",
  marginBottom: 2,

  h4: {
    fontSize: "$md",
    fontWeight: "400",
    color: "$gray300",
  },

  small: {
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "$gray600",
  },
});

export const BuyButton = styled("button", {
  background: "$green500",
  border: 0,
  color: "$white",
  borderRadius: 8,
  padding: "1.25rem",
  fontWeight: "bold",
  fontSize: "$md",
  transition: "background 0.25s",
  width: "100%",
  marginTop: "3.375rem",

  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },

  "&:hover:not(:disabled), &:focus:not(:disabled)": {
    background: "$green300",
  },
});
