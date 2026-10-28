import React,{createContext,useContext,useMemo} from 'react';
import zhMessages from './locale-messages.json';
export type KeenLocale = 'en' | 'zh-CN';
export type KeenMessages = Record<string,string>;
type LocaleValue = {locale:KeenLocale;t:(text:string)=>string};
const LocaleContext=createContext<LocaleValue>({locale:'en',t:text=>text});
/** UI copy only. Product names, prices and page data stay caller-owned. */
export function LocaleProvider({locale='en',messages,children}:{locale?:KeenLocale;messages?:KeenMessages;children:React.ReactNode}){
 const value=useMemo<LocaleValue>(()=>({locale,t:text=>messages?.[text]??(locale==='zh-CN'?(zhMessages as KeenMessages)[text]:undefined)??text}),[locale,messages]);
 return <LocaleContext.Provider value={value}><div className="km-system" lang={locale} style={{display:'contents'}}>{children}</div></LocaleContext.Provider>;
}
export function useKeenLocale(){return useContext(LocaleContext)}
