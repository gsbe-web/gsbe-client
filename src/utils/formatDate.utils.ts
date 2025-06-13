export function formatTimestamp(timestamp: string | Date) {
	const date = new Date(timestamp);

	const formattedDate = date.toLocaleDateString("en-US", {
		weekday: "short", // Abbreviated day of the week (e.g., "Fri")
		year: "numeric",
		month: "short", // Abbreviated month (e.g., "Oct")
		day: "numeric",
	});

	// Format time with hour and minute only
	const formattedTime = date.toLocaleTimeString("en-US", {
		hour: "numeric",
		minute: "2-digit",
		hour12: true, // Set to false for 24-hour format
	});

	return {
		date: formattedDate,
		time: formattedTime,
	};
}
