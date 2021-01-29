const proPrice = document.getElementById('proPrice');
const proName = document.getElementById('proName');
const buy = document.getElementById('buy');

buy.addEventListener('click', (e) =>{
    e.preventDefault();

    //content.style.display = "none";
    content.classList.add('d-none');

    const html = ` <div class="container">
                        <div class="card-container">
                            <div class="cards">
                                <figure class="front">
                                    <h1>SRI PRODUCTS</h1>
                                    <p>Sri Lankan Foods, Products and Spices</p>
                                </figure>
                                <figure class="back">
                                    <h1>PRICE: Rs.100/= </h1>
                                    <button>BUY</button>
                                </figure>
                            </div>
                        </div>
                 </div> `

});