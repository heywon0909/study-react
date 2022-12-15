import React from 'react';

export default function Profile({image,name,title,isNew}) {
    return (
        <div className='profile'>
            <div style={isNew==="true" ? { background: 'green', width: '40px',textAlign:'center',borderRadius:'20px',color:'white',float:'right' }:{display:'none'}}>new</div>
            <img className="photo" src={image} alt="avatar" />
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
}

