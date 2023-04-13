import style from './card.module.scss'
import {useState} from "react";
import Image from "next/image";

function Card(prop){
    const [state , setState] = useState(false)
    return <div className={style.cardElement}>
        <div className={style.card} onClick={()=> setState(!state)}>
            <span className={style.title}>{prop.title}</span>
            <Image src={"/LIKEC.png"} width={32} height={32}  />
            <div className={style.show}>
                <span className={style.vertical} />
                <span className={`${state ? style.dump  : style.horizon}`}/>
            </div>
        </div>
        {state ?  <div className={style.des}>{prop.des}</div> : null}


    </div>
}
export  default Card