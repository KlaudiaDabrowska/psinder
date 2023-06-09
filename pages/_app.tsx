import useDrawer from "@/lib/hooks/useDrawer";
import "@/styles/globals.css";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { createContext } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { SessionProvider } from "next-auth/react";

export interface IDrawerContext {
  isDrawerOpen: boolean;
  toggleDrawer: (value: boolean) => void;
}

export const DrawerContext = createContext<IDrawerContext>({
  isDrawerOpen: false,
  toggleDrawer: () => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const { isDrawerOpen, toggleDrawer } = useDrawer();
  const queryClient = new QueryClient();

  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer }}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </DrawerContext.Provider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
