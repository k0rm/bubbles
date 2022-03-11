import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBundles } from '../../Actions/bundleAction';
import './styles.scss';

const Bundles = () => {
    const dispatch = useDispatch();
    const bundles = useSelector((state) => state.bundles);

    bundles.forEach((item) => {
        console.log(item);
    })

    useEffect(() => {
        dispatch(getAllBundles());
    }, [dispatch]);

   if (bundles.length > 1) {
       return (
           <div className="bundleContainer">
               <h3>
                   herlOooo
               </h3>
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