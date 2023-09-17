const dateToLocaleString = (date) => {
	const newDate = new Date(date);

	const dateToLocaleString = newDate.toLocaleString("en-US", {
		timeZone: "UTC",
		day: "numeric",
		month: "short"
	});
	return dateToLocaleString;
};

export default dateToLocaleString;
