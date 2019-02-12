import React, { useState, useCallback } from 'react'
import { useUsers } from './users'
import { addPost } from './api'

export function useInputValue (initialValue) {
  const [ value, setValue ] = useState(initialValue)
  const onChange = useCallback(event => {
    setValue(event.currentTarget.value)
  }, [])

  return {
    value,
    onChange
  }
}

export default function AddPost () {
  const title = useInputValue('测试标题')
  const content = useInputValue('测试内容')
  const userId = useInputValue('')
  const users = useUsers()

  return (
    <div>
      <h1>添加文章</h1>
      <input {...title} placeholder='输入标题' />
      <br />
      <textarea {...content} placeholder='输入内容' />
      <br />
      <select {...userId}>
        {
          users.map(user => (
            <option key={user.id} value={user.id}>{user.nickname}</option>
          ))
        }
      </select>
      <br />
      <button onClick={() => {
        addPost({
          title: title.value,
          content: content.value,
          userId: Number(userId.value || 1)
        }).then(({ data }) => {
            if (data.addPost.code === 0) {
              history.back()
            }
          })
      }}>提交</button>
    </div>
  )
}