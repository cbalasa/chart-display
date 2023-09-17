import { Inter } from "next/font/google";
import DisplayChart from "@/modules/chart/Chart";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Chart Display</title>
				<meta
					name="description"
					content="Simply display of a chart using Apex Charts and NextJs"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
				/>
			</Head>{" "}
			<DisplayChart />
		</>
	);
}
