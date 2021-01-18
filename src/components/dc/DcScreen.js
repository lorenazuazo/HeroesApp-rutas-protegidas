import React from 'react';
import { HeroList } from '../heroes/HeroList';


export const DcScreen = () => {
    return (
        <div>
            <h3>DC screen</h3>
            <hr />

            <HeroList 
                publisher='DC Comics'
            />

        </div>
    )
}
