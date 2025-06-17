import { getLocation } from "@api/location/location.repository";
import { useQuery } from "@tanstack/react-query";

export const useUserLocation = () =>
	useQuery({
		queryKey: ["country"],
		queryFn: () => getLocation(),
	});
