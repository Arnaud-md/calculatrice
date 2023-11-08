import { useState } from "react";
import { useCallback } from "react";

const Calculatrice = (props:{ onRollPlus: () => void, onRollMoins: () => void, cpt:number}) => {

    const handleIncrement = useCallback(() => props.onRollPlus(), [])

    return (
        <div>
            <div>Résultat : {props.cpt}</div>
            <div className="numbers"
            <button onClick={handleIncrement}>+</button>
            <button onClick={props.onRollMoins}>-</button>
        </div>
    );
};

export default Calculatrice;