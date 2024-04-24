import style from './header.module.css'
import { MdList } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";

export default function Header({onChangeFlag, onModify}) {
    const handleClick = (event) =>{
        event.preventDefault()

        const newContent = {
            title : '',
            content : '',
            timestamp : new Date()
        }

        onModify(newContent)
    }
    return (
        <div className={style.base}>
            <div className="left-sided">
                <button onClick={handleClick}><IoMdRefresh /></button>
            </div>
            <div className="right-sided">
                <button onClick={onChangeFlag}><MdList /></button>
            </div>
        </div>
    );
}

