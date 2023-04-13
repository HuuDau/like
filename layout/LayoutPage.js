import style from "./style.module.scss";
import Image from "next/image";
import {listMenu} from '@/component/constant'
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

const Layout = ({ children }) => {
    const router = useRouter()
    const [active , setActive] = useState( '')
    const [state , setState] = useState(router.pathname.includes("burn"))
    console.log(state ,'state')


    useEffect(()=>{
        if(router.pathname.includes("burn")){
            setState(true)
            setActive('burn')
        }
    },[])
    return <div className={style.container}>
        <div className={style.option}>
            <Image src={'/like.png'} width={48} height={48} alt={'like'} />
            <div className={`${style.select} ${state ? style.reSize : ""}`}>
                <div className={`${state ? style.run : style.menuInner} `}>
                    {listMenu.map(ele => <span key={ele.label}  onClick={()=> {
                            if(ele.name==="burn"){
                                setState(!state)
                            }
                            setActive(ele.name)
                            router.push(`/${ele.name}`)
                    }} className={`${style.element}  ${active === ele.name || router.pathname.includes(ele.name) ? style.active : ''}`} >
                    {ele.name}</span>)}
                    {state ? <button className={style.connect}>CONNECT</button> : null}
                </div>

            </div>
        </div>
        {children}

        <div className={style.bottom}>
            <a href={'#'} target={'_blank'} className={`${style.ichi} ${style.link}`} />
            <a href={'#'} target={'_blank'} className={`${style.ni} ${style.link}`} />
            <a href={'#'} target={'_blank'} className={`${style.san} ${style.link}`} />
        </div>
    </div>
};

export default Layout;
