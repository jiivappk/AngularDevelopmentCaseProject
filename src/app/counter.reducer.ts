import { createReducer, on } from '@ngrx/store';

import { increment} from './counter.actions';

export const initialState:any = [];

const _counterReducer = createReducer(
  initialState,
  on(increment, (state,action) =>{
    let match=state.find((value:any)=>{
      return value.id==action.user.id;
    });
    if(!!match){
        let editedState = [
          ...state
        ]
        let editedUSer={
         id:match.id,
         created_at:match.created_at,
         email:match.email,
         gender:match.gender,
         name:match.name,
         status:match.status,
         updated_at:match.updated_at,
         visitedCount:match.visitedCount+1
        };
        let index=editedState.findIndex((value:any)=>value==match);
        editedState.fill(editedUSer,index,index+1)
        return [
          ...editedState
        ]
    }
    else{
        let editedAction={
          ...action.user,
          visitedCount:0
        };
        return [
          ...state,
          editedAction
        ]
    }
  })
);

export function counterReducer(state:any, action:any) {
  return _counterReducer(state, action);
}
