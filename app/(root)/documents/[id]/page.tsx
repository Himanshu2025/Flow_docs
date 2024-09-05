import React from 'react'
import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
const Document = () => {
  return (
    <div>
      <Header>
        <div>
          <p className='title'> Test Document</p>
        </div>
      </Header>
      <Editor/>
    </div>
    
  )
}

export default Document


