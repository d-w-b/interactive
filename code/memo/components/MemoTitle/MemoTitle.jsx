import { TbTrashXFilled } from "react-icons/tb";
export default function MemoTitle({memo, onModify, onSwitch, onDelete}) {
    const handleClick = () => {
        onModify(memo)
        onSwitch()
    }
    const handleDelete = () => onDelete(memo)
    return (
        <li>
            <button onClick = {handleClick}>
                {/* <span className='timestamp'>{memo.timestamp?.toDateString()}</span> */}
                {/* <span className="content">{content}</span> */}
                {memo.title}
            </button>
            <button onClick = {handleDelete}>
                <TbTrashXFilled />
            </button>
        </li>
    );
}

