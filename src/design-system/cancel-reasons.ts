import type {Option} from './foundations';
export const cancelReasons:Option[]=[
 {value:'address',label:'Choosing the wrong address'},
 {value:'time',label:'Choosing the wrong time'},
 {value:'products',label:'Multiple selection/omission of products'},
 {value:'coupon',label:'Forgot to use the coupon'},
 {value:'duplicate',label:'Double booking'},
 {value:'changed-mind',label:"I don't want to buy anymore"},
 {value:'other',label:'Other reasons'}
];
