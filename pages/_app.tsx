import useDrawer from "@/lib/hooks/useDrawer";
import "@/styles/globals.css";
import { theme } from "@/styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { createContext } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { SessionProvider } from "next-auth/react";
import useDogId from "@/lib/hooks/useDogId";

export interface IDrawerContext {
  isDrawerOpen: boolean;
  toggleDrawer: (value: boolean) => void;
}

export const DrawerContext = createContext<IDrawerContext>({
  isDrawerOpen: false,
  toggleDrawer: () => {},
});

export interface IDogIdContext {
  dogId: string;
  setDogId: (value: string) => void;
}

export const DogIdContext = createContext<IDogIdContext>({
  dogId: "",
  setDogId: () => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const { isDrawerOpen, toggleDrawer } = useDrawer();
  const { dogId, setDogIdValue } = useDogId();
  const queryClient = new QueryClient();

  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer }}>
          <DogIdContext.Provider value={{ dogId, setDogId: setDogIdValue }}>
            <CssBaseline />
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </DogIdContext.Provider>
        </DrawerContext.Provider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
