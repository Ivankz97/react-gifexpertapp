

import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export function GifExpertApp() {

    const [categories, setCategories] = useState(['Dragon Ball']);

    /*const handleAdd = () => {
        //setcategories([...categories, 'HunterXHunter']);
        setCategories(cats => [...categories, 'HunterXHunter']);
    }*/
    

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                { 
                    categories.map( category => (
                        <GifGrid 
                        key={category}
                        category={ category }/>
                    ))
                }
                
            </ol>
        </>
    )
}


