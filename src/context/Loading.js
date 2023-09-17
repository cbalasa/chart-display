import React, { createContext, useContext, useState } from "react";
import Spinner from "@/components/Spinner/Spinner";

export const LoadingScreenContext = createContext({
	loading: false,
	setLoading: () => {}
});
export const useLoadingScreen = () => useContext(LoadingScreenContext);

export const LoadingScreenProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);

	return (
		<LoadingScreenContext.Provider value={{ loading, setLoading }}>
			{loading && <Spinner />}
			{children}
		</LoadingScreenContext.Provider>
	);
};
