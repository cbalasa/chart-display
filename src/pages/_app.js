import "@/styles/globals.css";
import { LoadingScreenProvider } from "@/context/Loading";
import { store } from "@/store";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<LoadingScreenProvider>
				<Component {...pageProps} />
			</LoadingScreenProvider>
		</Provider>
	);
}
