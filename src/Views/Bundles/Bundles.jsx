import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBundles } from '../../Actions/bundleAction';
import './styles.scss';

import BundleCard from '../../Components/BundleCard/BundleCard';

const Bundles = () => {
    const dispatch = useDispatch();
    const bundles = useSelector((state) => state.bundles);

    useEffect(() => {
        dispatch(getAllBundles());
    }, [dispatch]);

   if (bundles.length > 1) {
       return (
           <div className="bundleContainer">
               {bundles.map((bundle) => {
                    return (
                        <BundleCard
                            key={bundle.id}
                            id={bundle.id}
                            items={bundle.items}
                            name={bundle.name}
                        />
                    )
               })}
           </div>
       )
   } else {
       return (
           <div className="bundleContainer">
               <h3>
                   SMErlrororo
               </h3>
           </div>
       )
   }
}

export default Bundles;