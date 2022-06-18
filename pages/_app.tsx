import { AppProps } from "next/app";
import ReadingListProvider from "../contexts/ReadingListContext/ReadingListProvider";

import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReadingListProvider>
      <Component {...pageProps} />
    </ReadingListProvider>
  );
}

export default MyApp;
