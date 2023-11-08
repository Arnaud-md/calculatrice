import { useState } from "react";
import { useCallback } from "react";

const Resultat = (props: {resultat:string}) => {

    return (
        <div>
            <div>{props.resultat}</div>
        </div>
    );
};

export default Resultat;