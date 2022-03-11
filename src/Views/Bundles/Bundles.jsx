import React, { useEffect, useState} from 'react';
import './styles.scss';

const Bundles = () => {
    const [Bundles, setBundles] = useState([]);
    const [Ready, setReady] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3500/api/bundles")
            .then((res) => res.json())
            .then((json) => {
                setBundles(json);
                setReady(true);
            })
    }, []);

   return (
       <div className='bundleContainer'>
           <h3>Bundles</h3>
       </div>
   )
}

export default Bundles;