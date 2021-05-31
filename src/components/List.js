import { Link } from 'react-router-dom';

export default ({animaux}) => {
    return(
        <ul>
            { animaux && animaux.map((animal, index) => (
                <li key={index}><Link to={`/animaux/${animal}`}>{animal}</Link></li>
            )) }
        </ul>
    )
}