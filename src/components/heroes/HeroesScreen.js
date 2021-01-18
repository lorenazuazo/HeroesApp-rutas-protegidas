import React,{ useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroeById } from '../../selectors/getHeroeById';

export const HeroesScreen = ( {history} ) => {

    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroeById(heroeId), [heroeId]);
      
    if(!hero){
        return <Redirect to="/" />;
    }
    const {superhero,publisher,alter_ego,first_appearance,characters } = hero;
    
    const handleReturn = () =>{
        if(history.length <= 2){
            history.push('/');
        }else{
            history.goBack();
        }
    }


    return (
        <div className="row mt-">
            <div className="col-4">
                <img
                    src={`../assets/heroes/${heroeId}.jpg`}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b> Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b> Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b> First appearence: </b>{first_appearance}</li>
                </ul>

                <h5> Characters </h5>
                <p>{ characters }</p>

                <button 
                    className="btn btn-primary m-5"
                    onClick={ handleReturn }
                >
                    Return
                </button>
            </div>
        </div>
    )
}
