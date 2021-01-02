import { createAction, props } from '@ngrx/store';
 interface User{
   id:string,
   name:string
 }
export const increment = createAction(
  '[Counter Component] Increment',
   props<{user:any}>()
  );
