import type { Country } from "react-phone-number-input";

export interface LocationData {
	ip: string;
	network: string;
	version: string;
	city: string;
	region: string;
	regionCode: string;
	country: Country;
	countryName: string;
	countryCode: Country;
	countryCodeIso3: string;
	countryCapital: string;
	countryTld: string;
	continentCode: string;
	inEu: boolean;
	postal: string | null;
	latitude: number;
	longitude: number;
	timezone: string;
	utcOffset: string;
	countryCallingCode: string;
	currency: string;
	currencyName: string;
	languages: string;
	countryArea: number;
	countryPopulation: number;
	asn: string;
	org: string;
}
