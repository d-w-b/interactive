import {useState} from 'react'
import Content from './components/Content/Content'
import Header from './components/Header/Header'
import MemoList from './components/MemoList/MemoList'
import './memoapp.css'

export default function MemoApp() {
  const [isListOpen, setIsListOpen] = useState(false)
  const [memos, setMemos] = useState([])
  const [displayingContent, setDisplayingContent] = useState({id:undefined, title:'', content:'', timestamp:new Date()})

  const handleSwitchFlag = () => setIsListOpen( !isListOpen )
  const handleAdd = (newMemo) => {
    setMemos( [newMemo, ...memos.filter( memo => memo.id !== newMemo.id )] )
  }
  const handleModify = (content) => setDisplayingContent(content)

  return (
    <div style={{width:330, border:"1px solid #eee", position:'relative'}}>
      <Header 
        onChangeFlag = {handleSwitchFlag}
        onModify = {handleModify}
      />
      <MemoList 
        isOpen = {isListOpen}
        memos = {memos}
        onModify = {handleModify}
        onSwitch = {handleSwitchFlag}
      />
      <Content 
        displayingContent = {displayingContent}
        onModify = {handleModify}
        onAddMemo = {handleAdd}
      />
    </div>
  )
}
