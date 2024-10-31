import { Outlet, useSearchParams } from 'react-router-dom';
import './style.css';

export const Posts = () => {
    const [qs] = useSearchParams();

    return (
        <div>
            <h1>Posts {`QS: page - ${qs.get('page')} | test - ${qs.get('test')}`}</h1>

            <Outlet />
        </div>
    )
}