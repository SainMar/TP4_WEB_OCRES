import React from 'react';

class BouttonNom extends React.Component{
    constructor(){
        super();
        this.state={
            date: new Date(),
            img: null,
            nom: null,
            prenom: null
          };
    }
}

export default BouttonNom;