import style from './style.module.scss'
import {useState} from "react";
import Layout from "@/layout/LayoutPage";
import Card from "@/component/card"
function Faq(){
    const [state, setState] = useState(false)
    return <Layout>
        <div className={style.container}>
            <div className={style.content}>
                <Card title={"WHAT IS"} des={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "} />
                <Card title={"How Do I BUY"} des={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "} />
                <Card title={"IS THERE A DEADLINE TO MIGRATE MY"} des={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "} />
            </div>
        </div>
    </Layout>
}
export  default  Faq