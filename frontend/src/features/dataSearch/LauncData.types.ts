interface LaunchData {
    id: string;
    flight_number: string;
    name: string;
    details: string;
    date_utc: string;
    success: boolean;
    failures: [
        {
            time: number;
            altitude: number;
            reason: string
        }
    ]
    links: {
        patch: {
            small: string
        }
    }
}

export default LaunchData