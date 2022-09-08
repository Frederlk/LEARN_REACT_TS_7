import { IAirport } from "../../models/models";
import { Link } from "react-router-dom";

interface AirportCardProps {
    airport: IAirport;
}

export function AirportCard({ airport }: AirportCardProps) {
    return (
        <Link
            to={`/airport/"${airport.id}`}
            className="block border py-4 px-6 mb-2 cursor-pointer hover:shadow-lg hover:transition-all rounded-md"
        >
            <strong>
                <h4>{airport.name}</h4>
            </strong>
            <p>Country: {airport.country}</p>
            <p>Ident: {airport.ident}</p>
            <p>Type: {airport.type}</p>
            <p>Local Code: {airport.local_code}</p>
            <p>Region: {airport.region}</p>
        </Link>
    );
}
