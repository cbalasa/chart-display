import "@/styles/globals.css";
import { LoadingScreenProvider } from "@/context/Loading";

export default function App({ Component, pageProps }) {
	return (
		<LoadingScreenProvider>
			<Component {...pageProps} />
		</LoadingScreenProvider>
	);
}
