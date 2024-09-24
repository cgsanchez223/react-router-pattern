import { useParams, Link, Button } from "react-router-dom";
import data from './db.json';

export function DogDetails() {
    const params = useParams();
    const dog = data.dogs.find(e => e.name.toUpperCase() === params.name.toUpperCase());

    if (!dog) {
        return <h1>Dog not found!</h1>;
    }

    const getImageSrc = (dogName) => {
        switch (dogName.toLowerCase()) {
            case 'whiskey':
                return process.env.PUBLIC_URL + '/whiskey.jpg';
            case 'duke':
                return process.env.PUBLIC_URL + '/duke.jpg';
            case 'perry':
                return process.env.PUBLIC_URL + '/perry.jpg';
            default:
                return process.env.PUBLIC_URL + '/placeholder.jpg';
        }
    };

    return (
        <div className={"dog " + dog.name}>
            <h1>This is {dog.name}!</h1>
            <img src={getImageSrc(dog.name)} alt={dog.name} class={"dog " + dog.name}/>
            <p>{dog.name} is {dog.age} years old. Here are some fun facts about {dog.name}:</p>
            <ul>
                {dog.facts.map(fact =>
                    <li>{fact}</li>
                )}
            </ul>
            <Link to="/dogs/" ><button>Back</button></Link>
        </div>
    );
}