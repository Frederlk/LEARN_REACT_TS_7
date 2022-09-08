import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./_pages/MainPage";
import { AuthPage } from "./_pages/AuthPage";
import { AirportPage } from "./_pages/AirportPage";
import { TheNavigation } from "./components/TheNavigation";
import { useAppDispatch } from "./hooks/redux";
import { fetchHandbooks } from "./store/ActionCreators";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchHandbooks());
    }, [dispatch]);

    return (
        <>
            <TheNavigation />
            <div className="container mx-auto pt-4">
                <Routes>
                    <Route path={"/"} element={<MainPage />} />
                    <Route path={"/auth"} element={<AuthPage />} />
                    <Route path={"/airport/:id"} element={<AirportPage />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
