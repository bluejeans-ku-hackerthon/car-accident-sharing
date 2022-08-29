import { extendTheme } from "@chakra-ui/react";

export const customeTheme = extendTheme({
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },

  colors: {
    gray: "#9A9A9A",
    blue: "#3F8CFF",
  },

  styles: {
    global: {
      html: {
        fontFamily: "Roboto",
      },
      body: {
        backgroundColor: "white",
        color: "black",
      },
    },
  },
});
