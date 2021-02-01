import React from 'react';

const style={
    background:'darkred',
    border:'5px solid darkyellow',
    marginLeft:'5px',
    fontSize:'30px',
    fontweight:'700',
    cursor:'pointer',
    outline:'none'
}


const Square=({value,onClick} )=>{
    return (
        <div>
        <button style={style} onClick={onClick}>{value}</button>
        </div>
    )

}

export default Square;