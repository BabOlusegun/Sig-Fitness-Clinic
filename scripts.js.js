const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

// Products Data
const products = [
  {name:"Black White Pro Training Cap",price:"₦8,000",img:"https://i.postimg.cc/mgtDdZCV/Chat-GPT-Image-Nov-23-2025-12-07-40-AM.png",desc:"Premium cap with white front and black body for performance and style."},
  {name:"Black Core Training Singlet",price:"₦13,000",img:"https://i.postimg.cc/4yydrXjH/sig1.jpg",desc:"Sleek black singlet offering comfort and unrestricted movement."},
  {name:"SleekEdge Training Tank",price:"₦13,000",img:"https://i.postimg.cc/ncxLqbHw/sig2.jpg",desc:"White sleeveless tank with black shoulder edge, perfect for training."},
  {name:"Light Gray Core Training Singlet",price:"₦13,000",img:"https://i.postimg.cc/KjJCKMcj/sig3.jpg",desc:"Light gray singlet with breathable fabric and modern fit."},
  {name:"Black Training Tee",price:"₦15,000",img:"https://i.postimg.cc/NFS7PspT/sig4.jpg",desc:"Classic black T-shirt designed for comfort and performance."},
  {name:"Classic Black Sports Shorts",price:"₦9,000",img:"https://i.postimg.cc/52nGnv8Y/sig7.jpg",desc:"Lightweight black sports shorts with modern athletic fit."},
  {name:"Black Pro Training Cap",price:"₦8,000",img:"https://i.postimg.cc/SxpvG4Rg/Chat-GPT-Image-Nov-23-2025-12-09-27-AM.png",desc:"Crisp white front and black contrast body for workouts."}
];

const grid = document.getElementById('product-grid');
products.forEach(p=>{
  const card = document.createElement('div');
  card.className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300";
  card.innerHTML=`
    <div class="h-64 overflow-hidden">
      <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover">
    </div>
    <div class="p-6">
      <h3 class="text-xl font-heading font-semibold text-secondary mb-2">${p.name}</h3>
      <p class="text-gray-600 mb-4">${p.desc}</p>
      <div class="flex justify-between items-center">
        <span class="text-2xl font-bold text-primary">${p.price}</span>
        <div class="flex space-x-2">
          <button onclick="addToCart('${p.name}','${p.price}')" class="bg-secondary hover:bg-gray-800 text-white px-4 py-2 rounded-lg">Add to Cart</button>
          <button onclick="checkout('${p.name}','${p.price}')" class="bg-primary hover:bg-orange-600 text-white px-4 py-2 rounded-lg">Buy Now</button>
        </div>
      </div>
    </div>`;
  grid.appendChild(card);
});

function addToCart(name, price) {
  const toast = document.createElement('div');
  toast.className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50";
  toast.textContent=`${name} (${price}) added to cart!`;
  document.body.appendChild(toast);
  setTimeout(()=>toast.remove(),3000);
}

function checkout(name, price) {
  alert(`Redirecting to payment for ${name} (${price})`);
}
