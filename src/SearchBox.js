import React from 'react';

const SearchBox=({searchfield,searchChange})=>{
    return(
        <div className='pa2 tc'>
        <input 
        className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5' 
        type='search' 
        placeholder='search robots'
        onChange={searchChange}
        />
        </div>
    )
}


export default SearchBox;