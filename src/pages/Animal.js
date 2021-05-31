import { useParams } from 'react-router-dom';

export default () => {
    let { animal } = useParams();
    
    return (
        <h1>{ animal }</h1>
    )
}