function create(event){
  event.preventDefault()
  let expense=event.target.expense.value;
  let description=event.target.description.value;
  let catogary=event.target.cate.value;
  console.log(expense,description,catogary);
  let list=document.getElementById("list");
  let li=document.createElement("li");
  li.innerHTML=expense+" -"+description+" -"+catogary;
  t={
    expense:expense,
    description:description,
    catogary:catogary
  }
  d=JSON.stringify(t)
  localStorage.setItem(description,d);
  list.appendChild(li);
  btn1=document.createElement('button');
  btn1.innerHTML="Delete";
  btn1.addEventListener('click',(event)=>{
    list.removeChild(li)
    localStorage.removeItem(description);
  })

  btn2=document.createElement('button');
  btn2.innerHTML="Edit";
  btn2.addEventListener('click',(event)=>{
    document.getElementById('exp').value=expense;
    document.getElementById('des').value=description;
    document.getElementById('category').value=catogary;
    localStorage.removeItem(description);

  })
  li.appendChild(btn2)
  li.appendChild(btn1)


}