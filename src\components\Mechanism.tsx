import type { LevelKind } from '../lib/game';
const icons:Record<LevelKind,string>={process:'⚙',safety:'✦',inventory:'▦',bottleneck:'⇥',mass:'Σ',blend:'%',thermal:'♨',quality:'⌁',efficiency:'↗',decision:'✓'};
const labels:Record<LevelKind,string>={process:'FLUJO DE PROCESO',safety:'INOCUIDAD',inventory:'TRAZABILIDAD',bottleneck:'CAPACIDAD',mass:'BALANCE DE MASA',blend:'FORMULACIÓN',thermal:'TIEMPO + TEMPERATURA',quality:'CONTROL ESTADÍSTICO',efficiency:'DESEMPEÑO',decision:'DECISIÓN INTEGRADA'};
export function Mechanism({kind,value=0,reduced=false}:{kind:LevelKind;value?:number;reduced?:boolean}){return <div className={`mechanism food-visual ${reduced?'reduced':''}`} aria-hidden="true"><div className="visual-ring"><span>{icons[kind]}</span></div><div className="visual-label">{labels[kind]}</div>{['mass','blend','efficiency'].includes(kind)&&<div className="visual-value">{value||'—'}{kind==='mass'?' kg':'%'}</div>}<div className="process-dots"><i/><i/><i/><i/><i/></div></div>}

