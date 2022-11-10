
import {Link} from 'react-router-dom';

const Public = () => {


    return (
        <div>
            <h1>This is the public page</h1>
            <Link to='/login'>Login</Link>
        </div>
    );
}

export default Public;