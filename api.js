
const uicreation=(data)=>{
const image1 =document.querySelector('#image')
const title1 = document.querySelector('#title')
const description1 = document.querySelector('#description')
const card = document.querySelector('.contentMain')


  

const itemsdata = data.map((item)=>{
    const singledata=`
    <div class="card"  style="width: 18rem;">
        <img src="${item.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p  class="card-text">${item.description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>`
    return singledata
})

card.innerHTML = itemsdata.join('');
}

const api=()=>{
fetch('https://fakestoreapi.com/products/')
.then(res=>res.json())
.then(function(data){
   console.log(data, "==>> my data as json")
  uicreation(data)
})}

api()
