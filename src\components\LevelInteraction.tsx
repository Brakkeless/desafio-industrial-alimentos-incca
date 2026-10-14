import { useEffect } from 'react';
import type { Level } from '../lib/game';
import { Mechanism } from './Mechanism';
export function LevelInteraction({level,value,onChange,disabled,reduced}:{level:Level;value:string;onChange:(v:string)=>void;disabled:boolean;reduced:boolean}){
  const numeric=Number(value)||0;
  useEffect(()=>{if(value)return;const defaults:Partial<Record<Level['kind'],string>>={mass:'60',blend:'10',efficiency:'50'};if(defaults[level.kind])onChange(defaults[level.kind]!)},[level.kind,value,onChange]);
  const slider=level.kind==='mass'?{id:'mass',min:60,max:140,step:10,unit:'kg',formula:'80 kg + 20 kg'}:level.kind==='blend'?{id:'blend',min:10,max:30,step:5,unit:'%',formula:'Partes iguales: 10 % y 30 %'}:level.kind==='efficiency'?{id:'efficiency',min:50,max:100,step:5,unit:'%',formula:`${numeric||50} unidades buenas por cada 100 de meta`}:null;
  return <><Mechanism kind={level.kind} value={numeric} reduced={reduced}/>{slider?<div className="control-card"><label htmlFor={slider.id}>Valor seleccionado: <b>{value||slider.min} {slider.unit}</b></label><input id={slider.id} type="range" min={slider.min} max={slider.max} step={slider.step} value={value||slider.min} disabled={disabled} onChange={e=>onChange(e.target.value)}/><p className="formula">{slider.formula}</p></div>:<div className="option-grid">{level.options?.map((option,i)=><button key={option} disabled={disabled} aria-pressed={value===option} className={value===option?'selected':''} onClick={()=>onChange(option)}><span>{String.fromCharCode(65+i)}</span>{option}</button>)}</div>}</>;
}

