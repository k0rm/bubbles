import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const ReviewCustomer = ({ customer }) => {

    return (
        customer[0] === "Delivery"
            ?
        <div className="rcContainer">
            <div>
                <span className='rcPrefix'>Method<span className='rcSuffix'>:</span></span>
                <span className='rcInfo'>{customer[0]}</span>
            </div>
            <div>
                <span className='rcPrefix'>Name<span className='rcSuffix'>:</span></span>
                <span className='rcInfo'>{customer[1]}</span>
            </div>
            <div>
                <span className='rcPrefix'>Address<span className='rcSuffix'>:</span></span>
                <span className='rcInfo'>{customer[2]}</span>
            </div>
            <div>
                <span className='rcPrefix'>City<span className='rcSuffix'>:</span></span>
                <span className='rcInfo'>{customer[3]}</span>
            </div>
            <div>
                <span className='rcPrefix'>Telephone<span className='rcSuffix'>:</span></span>
                <span className='rcInfo'>{customer[4]}</span>
            </div>
            <div>
                <span className='rcPrefix'>Postal Code<span className='rcSuffix'>:</span></span> 
                <span className='rcInfo'>{customer[5]}</span>
            </div>
            
        </div>
            :
        <div className="rcContainer">
            <div>
                <span className='rcPrefix'>Method<span className='rcSuffix'>:</span></span>
                <span className='rcInfo'>{customer[0]}</span>
            </div>
            <div>
                <span className='rcPrefix'>Name<span className='rcSuffix'>:</span></span>
                <span className='rcInfo'>{customer[1]}</span>
            </div>
            <div>
                <span className='rcPrefix'>Telephone<span className='rcSuffix'>:</span></span>
                <span className='rcInfo'>{customer[2]}</span>
            </div>
        </div>
    )
}

ReviewCustomer.propTypes = {
    // Customer from localStorage should be a list of strings or integers
    customer: PropTypes.arrayOf(PropTypes.string, PropTypes.number).isRequired
}

export default ReviewCustomer;