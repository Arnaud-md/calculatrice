import { useState } from 'react'
import './App.css'
import Number7 from './Number7'
import Number8 from './Number8'
import Number9 from './Number9'
import Number4 from './Number4'
import Number5 from './Number5'
import Number6 from './Number6'
import Number1 from './Number1'
import Number2 from './Number2'
import Number3 from './Number3'
import Number0 from './Number0'
import Moins from './Moins'
import Plus from './Plus'
import Egal from './Egal'
import Resultat from './Resultat'
import { useCallback } from 'react'

function App() {

  let [chiffre,setChiffre] = useState(0);
  let [resultat,setResultat] = useState("");
  const handleClick7 = useCallback(
    () => {setChiffre(7);
          setResultat(resultat+"7");}
    , [resultat]
  );
  const handleClick1 = useCallback(
    () => {setChiffre(1);
          setResultat(resultat+"1");}
    , [resultat]
  );
  const handleClick2 = useCallback(
    () => {setChiffre(2);
          setResultat(resultat+"2");}
    , [resultat]
  );
  const handleClick3 = useCallback(
    () => {setChiffre(3);
          setResultat(resultat+"3");}
    , [resultat]
  );
  const handleClick4 = useCallback(
    () => {setChiffre(4);
          setResultat(resultat+"4");}
    , [resultat]
  );
  const handleClick5 = useCallback(
    () => {setChiffre(5);
          setResultat(resultat+"5");}
    , [resultat]
  );
  const handleClick6 = useCallback(
    () => {setChiffre(6);
          setResultat(resultat+"6");}
    , [resultat]
  );
  const handleClick8 = useCallback(
    () => {setChiffre(8);
          setResultat(resultat+"8");}
    , [resultat]
  );
  const handleClick9 = useCallback(
    () => {setChiffre(9);
          setResultat(resultat+"9");}
    , [resultat]
  );
  const handleClick0 = useCallback(
    () => {setChiffre(0);
          setResultat(resultat+"0");}
    , [resultat]
  );
  const handleClickMoins = useCallback(
    () => {
          setResultat(resultat+"-");}
    , [resultat]
  );
  const handleClickPlus = useCallback(
    () => {
          setResultat(resultat+"+");}
    , [resultat]
  );
  const handleClickEgal = useCallback(
    () => {
      let nombre1=0;
      let nombre2=0;
      let longueurNombre1=0;
      let trouve=false;
      for(let i=0;i<resultat.length;i++) {
        if((resultat[i]==="-"||resultat[i]==="+")&&!trouve) {
          longueurNombre1=i;
          trouve=true;
        }
      }
      for(let i=0;i<longueurNombre1;i++) {
        if(parseInt(resultat[i])) {
          nombre1+=parseInt(resultat[i])*Math.pow(10,longueurNombre1-i-1);
        } 
      }
      console.log(nombre1);
      console.log(longueurNombre1);
      console.log(resultat.length);
      for (let i=longueurNombre1+1;i<resultat.length;i++) {
        if(parseInt(resultat[i])) {
          nombre2+=parseInt(resultat[i])*Math.pow(10,resultat.length-i-1);
          console.log(resultat.length-i-longueurNombre1+1);
        }
      }
      console.log(nombre2);
      if(resultat[longueurNombre1]==="-") {
        setResultat((nombre1-nombre2).toString());
      }
      if(resultat[longueurNombre1]==="+") {
        setResultat((nombre1+nombre2).toString());
      }
    }
    , [resultat]
  );

  return (
    <>
      <div className='calculatrice'>
        <div className='resultat'><Resultat resultat={resultat} /></div>
        <div className='inline_row'>
          <div className="numbers">
            <div className="number" onClick={handleClick7}><Number7 /></div>
            <div className="number" onClick={handleClick8}><Number8 /></div>
            <div className="number" onClick={handleClick9}><Number9 /></div>
            <div className="number" onClick={handleClick4}><Number4 /></div>
            <div className="number" onClick={handleClick5}><Number5 /></div>
            <div className="number" onClick={handleClick6}><Number6 /></div>
            <div className="number" onClick={handleClick1}><Number1 /></div>
            <div className="number" onClick={handleClick2}><Number2 /></div>
            <div className="number" onClick={handleClick3}><Number3 /></div>
            <div className="number0" onClick={handleClick0}><Number0 /></div>
          </div>
          <div className='operations'>
            <div className='operation' onClick={handleClickMoins}><Moins /></div>
            <div className='operation' onClick={handleClickPlus}><Plus /></div>
            <div className='operation' onClick={handleClickEgal}><Egal /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
