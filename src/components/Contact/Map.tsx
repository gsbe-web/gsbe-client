// Map.tsx

// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// const mapContainerStyle = {
//   width: "100%",
//   height: "400px",
// };

const center = {
	lat: 5.537_25,
	lng: -0.240_35,
};

export const GsbeMap = () => {
	return (
		<MapContainer
			center={[center.lat, center.lng]}
			zoom={13}
			scrollWheelZoom={false}
			className="h-full w-full"
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={[center.lat, center.lng]}>
				<Popup>GSBE Headquarters</Popup>
			</Marker>
		</MapContainer>
	);
};
