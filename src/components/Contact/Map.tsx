// Map.tsx

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
	width: "100%",
	height: "400px",
};

const center = {
	lat: 5.537_25,
	lng: -0.240_35,
};

export const GoogleMaps = () => {
	return (
		<LoadScript
			googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""}
		>
			<GoogleMap
				center={center}
				mapContainerStyle={mapContainerStyle}
				zoom={12}
			>
				<Marker position={center} />
			</GoogleMap>
		</LoadScript>
	);
};
