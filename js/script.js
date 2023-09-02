const loadPhTube = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();
    const categories = data.data

    displayPhTube(categories)
    // console.log(categories)


}
const displayPhTube = (categories) => {
    const tabContainer = document.getElementById('tab-container')
    categories.forEach(category => {
        // console.log(category)
        const categoryTab = document.createElement('div')
        categoryTab.innerHTML = `
        <a onclick="handleTab('${category.category_id}')" class="tab px-4 bg-slate-200 mx-2 md:mx-4 lg:mx-4 mb-5 hover:bg-[#FF1F3D] hover:text-white">${category.category}</a>
        `
        tabContainer.appendChild(categoryTab)
    })

    // console.log(categories)
}

let item;
const handleTab = async (id) => {
    item = id;
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await response.json();
    visibleData(data.data)
}

function visibleData(value){
    const NoContentHere = document.getElementById('no-content')
    if (0 === value.length) {
        NoContentHere.classList.remove('hidden')
    }
    else {
        NoContentHere.classList.add('hidden')
    }

    const cardContainer = document.getElementById('card-container')

    cardContainer.innerHTML = ""

    value.forEach(card => {

        const total = secMinHrs(card.others.posted_date);
        // console.log(total)

        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = `
             <div class="card bg-base-100">
                <figure class=" h-40">
                <img src="${card?.thumbnail}" alt="Shoes" />
                <h2 class="absolute mt-32 ml-36 rounded-md bg-black text-white text-xs px-2">
                ${card.others.posted_date ? total : ''}</h2>
                </figure>
                 <div class="pt-4 flex flex-row items-center ">
                    <img class="w-12 h-12 rounded-full" src="${card?.authors[0]?.profile_picture}." alt="">
                    <h2 class="font-bold pl-2">${card?.title}</h2>
                    </div>
                 <div class="text-[#171717B3]">
                    <div class="flex pl-12 items-center">
                        <h2 class="pr-3">${card?.authors[0]?.profile_name}</h2>
                        <img src="${card.authors[0].verified === true ? './logo/blue-tick.svg' : ''}">  
                    </div>
                        <h3 class="pl-12 mb-4">Total views: ${card.others.views ? card.others.views : 'no views'}</h3>
                </div>
            </div>
        `
        cardContainer.appendChild(cardDiv)

    })
    
}

// const noContent = (to) => {
//     // console.log(to.length)
//     const NoContentHere = document.getElementById('no-content')
//     if (0 === to.length) {
//         NoContentHere.classList.remove('hidden')
//     }
//     else {
//         NoContentHere.classList.add('hidden')
//     }


// }

const secMinHrs = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    // const second = seconds % 60;
    const result = hours + 'hrs ' + minutes + 'min ' + 'ago';
    // console.log(result)
    return result;
}

// sort
const sorting = async () => {

    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${item}`)
    const data = await response.json()
    const sortData = data.data.sort((a, b)=>{
        let A = parseInt(a.others.views)
        let B = parseInt(b.others.views)
        console.log(B - A)
        return B - A;
  });
  visibleData(sortData)

}



loadPhTube()
handleTab(1000)
// sorting()
