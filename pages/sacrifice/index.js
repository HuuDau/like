import style from './style.module.scss'
import Layout from "@/layout/LayoutPage";
import Image from "next/image";
import { injected } from '@/utils/connectorWallet';
import { useWeb3React } from '@web3-react/core';
import {useEffect, useMemo, useState} from "react";
function Sacrifice(){
    const [state,setState] = useState(false)
    const [address,setAddress] = useState('')
    const {
        active: networkActive,
        error: networkError,
        activate: activateNetwork,
        account: accountActive,
    } = useWeb3React();

    const onConnectWallet = async () => {
        try {
            await activateNetwork(injected);
            setState(false)
        } catch (err) {
            console.log(err, 'error connect');
        } finally {
            console.log('finished connect wallet');
        }
    };
useEffect(()=>{
    if(networkActive){
        setAddress(accountActive)
    }
},[])
    const connectWallet = useMemo(()=>{
        if(state){
            return <div className={style.modal} onClick={()=> setState(false)}>
                <div className={style.content} onClick={(e)=> e.stopPropagation()}>
                    <div className={style.cancel} onClick={()=> setState(false)}><Image src={"/x.png"} width={24} height={24} alt={""} /> </div>
                    <span className={style.title}>Connect to a Wallet</span>
                    <span className={style.text}>Please connect with one of our available wallet providers to continue</span>
                    <div className={style.bot}>
                        <button className={style.btn} onClick={onConnectWallet}>Metamask <Image alt={''} src={"/mask.png"} width={24} height={24}  /></button>
                        <button className={style.btn}>Metamask <Image alt={''} src={"/walletConnect.png"} width={24} height={24}  /></button>
                    </div>
                </div>
            </div>
        }
        return null
    },[state])
    return <Layout>
        {connectWallet}
        <div className={style.burn}>
            <div className={style.box}>
                <Image src={"/sac.png"} className={style.logo} alt={""} width={314} height={248} />
                <span>IN IT FOR THE ART? SACRIFICE A TOKEN TO COPY ITS VISUAL INTO ANOTHER TOKEN AT THE SAME CHECK LEVEL.
                    TO PROCEED PLEASE CONNECT YOUR WALLET.</span>
                <button className={style.connect} onClick={()=> setState(true)}>connect</button>
            </div>
        </div>
    </Layout>

}
export  default  Sacrifice