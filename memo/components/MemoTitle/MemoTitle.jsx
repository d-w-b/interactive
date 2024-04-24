export default function MemoTitle({memo, onModify, onSwitch}) {
    const hadleClick = () => {
        onModify(memo)
        onSwitch()
    }
    return (
        <li>
            <button onClick = {hadleClick}>
                {/* <span className='timestamp'>{memo.timestamp?.toDateString()}</span> */}
                {/* <span className="content">{content}</span> */}
                {memo.title}
            </button>
        </li>
    );
}

