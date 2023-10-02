interface LaunchData {
    id: string;
    flight_number: string;
    name: string;
    details: string;
    date_utc: string;
    success: boolean;
    links: {
        patch: {
            small: string
        }
    }
}

export default LaunchData