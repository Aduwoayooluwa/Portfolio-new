import React from 'react'
import {useSelector, useDispatch} from 'react-redux';

const Footer = () => {
    const {theme}  = useSelector((state) => state.theme)
    // style={{color: theme ? '#212121' : '#ffff'}}
    return (
        <div className="footer">

            <p style={{textAlign: 'center', color: theme ? '#212121' : '#ffff'}}>Made with <span style={{color: 'red'}}>❤</span> By me Ayo Aduwo</p>
        </div>
    )
}

export default Footer