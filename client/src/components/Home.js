import React from 'react';
import axios from 'axios';

export default class Home extends React.Component{
    componentDidMount(){
        axios.get('http://localhost:5000/api/players')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
    }

    render(){
        return(
            <></>
        )
    }
}