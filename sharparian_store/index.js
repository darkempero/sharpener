let list=document.getElementById('list_of_items');
let btn =document.getElementById('btn');
let form =document.getElementById('form');
window.addEventListener('DOMContentLoaded',()=>{
  axios.get('https://crudcrud.com/api/e7b17e7a673a4f9da3bbbdba78a57786/store').then((res)=>{
    for(let i=0;i<res.data.length;i++){
      let li=document.createElement('li');
      console.log(res)
      li.innerHTML="item-name-"+res.data[i].item_name+"-description-"+res.data[i].item_description+"-price-"+res.data[i].item_price+'-quantity-'+res.data[i].item_quantity;
      list.appendChild(li);
      const btn1=document.createElement('button');
      btn1.innerHTML='Buy1';
      btn1.id='btn1';
      const btn2=document.createElement('button');
      btn2.innerHTML='Buy2';
      btn2.id='btn2';
      const btn3=document.createElement('button');
      btn3.innerHTML='Buy3';
      btn3.id='btn3';
      li.appendChild(btn1);
      li.appendChild(btn2);
      li.appendChild(btn3);
      btn1.addEventListener('click',()=>{
        buyItem(res.data[i],1);
      })
      btn2.addEventListener('click',()=>{
        buyItem(res.data[i],2);
      })
      btn3.addEventListener('click',()=>{
        buyItem(res.data[i],3);
      })


      
    
    }

  }).catch((err)=>{
    console.log(err);
  })
})
form.addEventListener('submit',(event)=>{
  event.preventDefault();
  let item_name=document.getElementById('item_name').value;
  let description=event.target.item_des.value;
  let  price=event.target.item_price.value;
  let quantity=event.target.item_qunt.value;
  let item={
    item_name:item_name,
    item_description:description,
    item_price:price,
    item_quantity:quantity
  }
  let li=document.createElement('li');
  li.innerHTML="item-name"+item_name+"-description"+description+"-price"+price+'-quantity'+quantity;
  list.appendChild(li);

  
  
  
  axios.post("https://crudcrud.com/api/e7b17e7a673a4f9da3bbbdba78a57786/store",item).then((res)=>console.log(res)).catch((err)=>console.log(err));
  const btn1=document.createElement('button');
  btn1.innerHTML='Buy1';
  btn1.id='btn1';
  const btn2=document.createElement('button');
  btn2.innerHTML='Buy2';
  btn2.id='btn2';
  const btn3=document.createElement('button');
  btn3.innerHTML='Buy3';
  btn3.id='btn3';
  console.log(btn1)
  li.appendChild(btn1);
  li.appendChild(btn2);
  li.appendChild(btn3);

  btn1.addEventListener('click',()=>{
    buyItem(item,1);
  })
  btn2.addEventListener('click',()=>{
    buyItem(item,2);
  })
  btn3.addEventListener('click',()=>{
    buyItem(item,3);
  })


  
})

function buyItem(item,val){
  ite=item.item_quantity-val;
  axios.put(`https://crudcrud.com/api/e7b17e7a673a4f9da3bbbdba78a57786/store/${item._id}`,
    {
      item_name:item.item_name,
      item_description:item.item_description,
      item_price:item.item_price,
      item_quantity:ite
    }
  )

}


