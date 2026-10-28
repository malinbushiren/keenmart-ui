import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import 'keenmart-ui-kit/styles.css';
import 'keenmart-ui-kit/fonts.css';
import {Page,ProductCard,OrderStageProgress,TabBar,ProductSupplierTag} from 'keenmart-ui-kit';
function App(){const [quantity,setQuantity]=useState(0);const [tab,setTab]=useState('home');return <Page background="gray" footer={<TabBar options={[{value:'home',label:'Home'},{value:'category',label:'Category'},{value:'cart',label:'Cart',badge:3},{value:'account',label:'Account'}]} value={tab} onChange={setTab}/>}><OrderStageProgress current={1}/><ProductSupplierTag name="Foodmax"/><ProductCard product={{id:'test',name:'Test product',image:'/assets/0933d.png',amount:'38.76',weight:'500g'}} variant="grid" quantity={quantity} onAdd={()=>setQuantity(quantity+1)} onQuantity={setQuantity}/><output data-testid="quantity">{quantity}</output><output data-testid="tab">{tab}</output></Page>}
createRoot(document.getElementById('root')!).render(<App/>);
