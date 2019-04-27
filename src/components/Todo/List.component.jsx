import React from 'react'

export default function List({ tasks }) {
  return (
    <div>
      <ul>
        {
          tasks.length > 0
            ? tasks.map(todo => {
              return <li key={todo.id}>{todo.name}</li>
            })
            : null
        }
      </ul>
    </div>
  )
}
