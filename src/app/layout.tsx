import { ReactNode } from "react";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

type LayoutPropsType = Readonly<{
  children: ReactNode;
}>;

const RootLayout = ({ children }: LayoutPropsType) => {
  return (
    <html
      lang="en"
      className={roboto.variable}>
      <body className="">
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};
export default RootLayout;
