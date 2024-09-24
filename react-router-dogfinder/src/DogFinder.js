import { Route, Routes, Link, Navigate, useLocation } from "react-router-dom";
import { DogDetails } from './routesList';
import './DogFinder.css';

function DogFinder() {
    const location = useLocation();
    return (
        <div className="DogPick">
            {location.pathname === '/dogs' &&
                <h1 classname="ChooseDog">Choose a dog</h1>}
            <Routes>
                <Route exact path='/dogs/:name' element={<DogDetails />} />
                <Route path="*" element={<Navigate to="/dogs" />} />
            </Routes>

            {location.pathname == '/dogs' &&
            <div className="dogs">
                <Link to="/dogs/whiskey" ><img src={process.env.PUBLIC_URL + '/whiskey.jpg'} /></Link>
                <Link to="/dogs/duke" ><img src={process.env.PUBLIC_URL + '/duke.jpg'} /></Link>
                <Link to="/dogs/perry" ><img src={process.env.PUBLIC_URL + '/perry.jpg'} /></Link>
        </div>
            }
        </div>
    )
}

export default DogFinder;