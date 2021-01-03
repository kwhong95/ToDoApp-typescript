import React, { useReducer, useContext, createContext, Dispatch } from 'react';

// State Type
type Todo = {
  id: number;
  title: string;
};

// Action Type
type Action =
  | { type: 'CREATE_TODO'; id: number; title: string;}
  | { type: 'DELETE_TODO'; id: number; }

// Dispatch를 위한 타입 (Dispatch를 리액트에서 호출), 액션들의 타입을 Distpatch 의 Generics로 설정
type ActionDispatch = Dispatch<Action>;

// Create Context
const TodoContext = createContext<Todo | null>(null);
const DispatchContext = createContext<ActionDispatch | null>(null);

// Reducer
function reducer(state: Todo, action: Action): any {
  switch (action.type) {
    case 'CREATE_TODO':
      return {
        ...state,
        id: action.id,
        title: action.title
      };
    case 'DELETE_TODO':
      return {
        ...state,
        id: action.id
      };
    default:
      throw new Error('Unhandled Action');
  }
}

// ContextProvider 에서 useReducer를 사용하고
// TodoContext.Provider 와 DispatchContext.Provider로 children을 감싸서 반환
export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    id: 0,
    title: '코딩 공부하기',
  });

  return (
    <TodoContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TodoContext.Provider>
  );
}

// state 와 dispatch를 쉽게 사용하기 위한 커스텀 Hooks
export function useTodoState() {
  const state = useContext(TodoContext);
  if(!state) throw new Error('Cannot find TodoProvider');
  return state;
}

export function useDispatch() {
  const dispatch = useContext(DispatchContext);
  if(!dispatch) throw new Error('Cannot find DispatchProvider');
  return dispatch;
}