import type {
  MantineThemeOverride,
  Tuple,
  DefaultMantineColor,
} from "@mantine/core";

const theme: MantineThemeOverride = {
  colors: {
    primary: [
      "#FFB0D7",
      "#FF7BBD",
      "#FF4DA6",
      "#FF2492",
      "#FF0080",
      "#DB006E",
      "#BC005F",
      "#A20052",
      "#8B0047",
    ],
    secondary: [
      "#1B155A",
      "#191353",
      "#17114C",
      "#151046",
      "#130F40",
      "#110E3A",
      "#0F0D35",
      "#0E0C30",
      "#0D0B2C",
    ],
  },
  primaryColor: "primary",
  defaultRadius: "xl",
  colorScheme: "dark",
  defaultGradient: { deg: 90, from: "secondary.1", to: "primary.3" },
  fontFamily: "Poppins",
  headings: { fontFamily: "Poppins", fontWeight: "bold" },
  globalStyles: (themeObj) => ({
    body: {
      ...themeObj.fn.fontStyles(),
      backgroundColor: "rgb(7, 8, 24)",
    },
  }),
};

export default theme;

type ExtendedCustomColors = "primary" | "secondary" | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}
