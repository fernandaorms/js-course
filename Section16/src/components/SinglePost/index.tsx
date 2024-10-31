import { useParams } from 'react-router-dom';
import './style.css';

export const SinglePost = () => {
    const params = useParams();
    const { id } = params;

    return (
        <div>
            <h2>Single Post {id}</h2>
        </div>
    )
}