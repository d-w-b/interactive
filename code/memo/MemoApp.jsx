import {useEffect, useState} from 'react'
import Content from './components/Content/Content'
import Header from './components/Header/Header'
import MemoList from './components/MemoList/MemoList'
import './memoapp.css'

export default function MemoApp() {
  const [isListOpen, setIsListOpen] = useState(false)
  const [memos, setMemos] = useState(()=>readMemos())
  const [displayingContent, setDisplayingContent] = useState({id:undefined, title:'', content:'', timestamp:new Date()})

  const handleSwitchFlag = () => setIsListOpen( !isListOpen )
  const handleAdd = (newMemo) => {
    setMemos( [newMemo, ...memos.filter( memo => memo.id !== newMemo.id )] )
  }
  const handleDelete = target => setMemos([...memos.filter(memo=> memo.id !== target.id)])
  const handleModify = (content) => setDisplayingContent(content)

  useEffect(()=>{
    console.log(memos)
    localStorage.setItem('memos', JSON.stringify(memos))
  },[memos])

  return (
    <div style={{width:330, border:"1px solid #eee", position:'relative', overflow:'hidden'}}>
      <Header 
        onChangeFlag = {handleSwitchFlag}
        onModify = {handleModify}
      />
      <MemoList 
        isOpen = {isListOpen}
        memos = {memos}
        onModify = {handleModify}
        onSwitch = {handleSwitchFlag}
        onDelete = {handleDelete}
      />
      <Content 
        displayingContent = {displayingContent}
        onModify = {handleModify}
        onAddMemo = {handleAdd}
      />
    </div>
  )
}

const readMemos = ()=>{
  console.log('read memos')
  return 'memos' in localStorage ? JSON.parse(localStorage.getItem('memos')) : [] 
}
