import React, { useReducer, useState } from 'react';
const defaultState = [];

// { type: '' }

function reducer(state, action) {
  switch (action.type) {
    case 'add_todo':
      return [
        ...state,
        action.payload
      ];
    case 'remove_todo':
      return state.filter((todo) => todo !== action.payload);
    case 'delete_all_todos':
      window.alert('WARNING deleting all todos');
      return [];
    default:
      throw new Error('Invalid action');
  }
}

export const ReducerPage = () => {
  const [currentTodo, setCurrentTodo] = useState('');
  const [todos, dispatch] = useReducer(reducer, defaultState);
  return (
    <form>
      
      <label>
        Add todo 
        <input onChange={(e) => setCurrentTodo(e.target.value)} />
      </label>
      <button onClick={(e) => {
        e.preventDefault();
        dispatch({
          type: 'add_todo',
          payload: currentTodo
        })
      }}>
        Add Todo
      </button>
      { todos.map((todo, index) => (
        <div key={index}>
          <button onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: 'remove_todo',
              payload: todo
            })
          }}>
            Delete all with same name
          </button>
          {
            todo
          }
        </div>
      ))
      }
      <button onClick={(e) => {
        e.preventDefault()
        dispatch({
          type: 'delete_all_todos'
        })
      }}>
        Delete all todos: DANGEROUS
      </button>
    </form>
  )
};

