import MemoTitle from '../MemoTitle/MemoTitle';
import style from './memolist.module.css'

export default function MemoList({memos, isOpen, onModify, onSwitch, onDelete}) {
    return (
        <div className={[style.list , isOpen ? style.open : style.closed].join(' ')}>
            <ul>
                {memos.map( memo =>{
                    return ( 
                        <MemoTitle
                            key = {memo.id} 
                            memo = {memo}
                            onModify = {onModify}
                            onSwitch = {onSwitch}
                            onDelete = {onDelete} 
                        />
                        
                    )
                })}
            </ul>
        </div>
    );
}

