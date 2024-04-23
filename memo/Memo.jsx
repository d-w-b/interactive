import React from 'react'
import Content from './components/Content/Content'
import Header from './components/Header/Header'
import MemoList from './components/MemoList/MemoList'

export default function Memo() {
  return (
    <div>
      <Header />
      <MemoList />
      <Content />
    </div>
  )
}
