import axios from "axios";
import { useLoadingScreen } from "@/context/Loading";

const useGetChartData = () => {
	const { setLoading } = useLoadingScreen();
	const getChartData = async ({ url }) => {
		try {
			if (url) {
				setLoading(true);
				const {
					data: { data }
				} = await axios.get(url);
				setLoading(false);

				return data;
			} else {
				return null;
			}
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	return { getChartData };
};

export default useGetChartData;
