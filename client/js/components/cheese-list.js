import react from 'react'
import reactDOM from 'react-dom'

let CheeseList = function(props) {
    let cheeses = props.cheeses
    let lol = props.lol
    var cheeseList = Object.keys(cheeses).map(function(cheeseId,index) {
        var cheese = cheeses[cheeseId];
        return (
            <li key={index}>
                {cheese}
            </li>
        );
    });
    
    return (
        <div>
            <ul>
            {cheeseList}
            </ul>
        </div>
    );  
};

