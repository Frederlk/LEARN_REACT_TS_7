import { ChangeEvent, useEffect, useState, MouseEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { IFilter } from "../../models/models";
import { airportSlice } from "../../store/slices/AirportSlice";

interface FilterSelectProps {
    changeHandler: (e: any) => void;
    value: string;
    name: string;
    array: any[];
}

export const FilterSelect = ({ changeHandler, value, name, array }: FilterSelectProps) => {
    return (
        <select className="px-2 py-1 border mr-2" onChange={changeHandler} value={value} name={name}>
            <option disabled className="text-gray-500" value="">
                {name}
            </option>
            {array.map((item) => (
                <option key={item} value={item}>
                    {item}
                </option>
            ))}
        </select>
    );
};

export function AirportFilter() {
    const { types, countries, regions, loading } = useAppSelector((state) => state.handbookReducer);
    const dispatch = useAppDispatch();
    const [filter, setFilter] = useState<IFilter>({
        type: "",
        region: "",
        country: "",
    });

    const hasFilter = () => {
        return filter.type || filter.region || filter.country;
    };

    useEffect(() => {
        dispatch(airportSlice.actions.airportFilter(filter));
    }, [filter, dispatch]);

    const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setFilter((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const clearHandler = (event: MouseEvent<HTMLButtonElement>) => {
        setFilter({
            type: "",
            region: "",
            country: "",
        });
    };

    if (loading) return <p className="text-center">Loading...</p>;

    return (
        <div className="border mb-2 p-2">
            <span className="mr-2">Filter</span>
            <FilterSelect changeHandler={changeHandler} value={filter.type} name="type" array={types} />

            <FilterSelect
                changeHandler={changeHandler}
                value={filter.country}
                name="country"
                array={countries}
            />

            <FilterSelect changeHandler={changeHandler} value={filter.region} name="region" array={regions} />

            {hasFilter() && (
                <button className="py-1 px-4 border bg-red-800 text-white rounded" onClick={clearHandler}>
                    &times;
                </button>
            )}
        </div>
    );
}
