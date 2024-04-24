import { useEffect } from "react"
import style from './content.module.css'
import { MdOutlineAdd } from "react-icons/md";
import uuid from 'react-uuid'

export default function Content({displayingContent, onModify, onAddMemo}) {
    const handleChangeTitle = (event) => onModify({ ...displayingContent , title : event.target.value })
    const handleChangeContent = (event) => onModify({...displayingContent , content: event.target.value})
    const handleSubmit = (event) =>{
        event.preventDefault()
        if (displayingContent.title){
            if(displayingContent.id){
                onAddMemo(displayingContent)
            }else{
                const id = uuid()
                onModify({...displayingContent, id})
                onAddMemo({...displayingContent, id})
            }
        }
    }

    useEffect(()=>{
        console.log('changed',displayingContent)
    }, [displayingContent])

    return (
        <form className={style.form}>
            <input type="text" placeholder="제목" onChange={handleChangeTitle}  value={displayingContent.title} />
            <textarea placeholder="내용" onChange={handleChangeContent} value={displayingContent.content}></textarea>
            <button onClick={handleSubmit}><MdOutlineAdd /></button>
        </form>
    );
}

