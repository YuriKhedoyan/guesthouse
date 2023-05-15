import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
	colors: {
		primary: "#007bff",
		secondary: "#6c757d",
		black: "black",
	},
	fonts: {
		body: "Helvetica, Arial, sans-serif",
		heading: "Helvetica, Arial, sans-serif",
	},
	fontSizes: {
		small: "1em",
		medium: "2em",
		large: "3em",
	},
});