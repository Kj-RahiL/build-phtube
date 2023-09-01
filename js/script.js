const loadPhTube = async () =>{
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();
    const categories = data.data
    
    displayPhTube(categories)
    // console.log(arrObj[1])

    
}
const displayPhTube = (categories) =>{
    const tabContainer = document.getElementById('tab-container')
    categories.forEach(category =>{
        // console.log(category.category_id)
        const categoryTab = document.createElement('div')
        categoryTab.innerHTML = `
        <a onclick="handleTab('${category.category_id}')" class="tab bg-slate-200 mx-2 md:mx-4 lg:mx-4 mb-5">${category.category}</a>
        `
        tabContainer.appendChild(categoryTab)
    })
    
    // console.log(categories)
}
const handleTab = async (id)=>{
    
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}
    `)
    const data = await response.json()
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML=""
    data.data.forEach(card=>{
        console.log(card)
        noContent(data)
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML=`
             <div class="card bg-base-100">
                <figure class=" h-40"><img src="${card?.thumbnail}" alt="Shoes" /></figure>
                 <div class="pt-4 flex flex-row items-center ">
                    <img class="w-12 h-12 rounded-full" src="${card?.authors[0]?.profile_picture}." alt="">
                    <h2 class="font-bold pl-2">${card?.title}</h2>
                    </div>
                 <div class="text-[#171717B3]">
                    <div class="flex pl-12 items-center">
                        <h2 class="pr-3">${card?.authors[0]?.profile_name}</h2>
                        
                        </div>
                        <h3 class="pl-12 mb-4">Total views: ${card?.others?.views}</h3>
                    </div>
                  </div>
        `
        cardContainer.appendChild(cardDiv)
    })
    // noContent(false)
    // console.log('rahil')
    // console.log(data.data)
}
const noContent = (card) =>{
    console.log(card.data)
    const NoContentHere = document.getElementById('no-content')
    
}

loadPhTube()
handleTab(1000)
