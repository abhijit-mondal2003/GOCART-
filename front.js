document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector('.menu-icon');
  const nav = document.querySelector('nav');

  menuIcon.addEventListener('click', function () {
    nav.classList.toggle('show');
  });
});
// background change
document.addEventListener("DOMContentLoaded", function () {

const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 100;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = Math.random() * 2 - 1;
    this.vy = Math.random() * 2 - 1;
    this.radius = Math.random() * 2;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width) {
      this.vx *= -1;
    }

    if (this.y < 0 || this.y > canvas.height) {
      this.vy *= -1;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.fill();
  }
}

function init() {
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });
}

init();
animate();
});


//product 1
document.addEventListener('DOMContentLoaded', function () {
  // Sample product data
  const products = [
    { id: 1, name: 'OPPO Reno11 5G ', price:'₹29,999',description: '8 GB RAM | 128 GB ROM | Expandable Upto 2 TB', imageUrl: 'https://rukminim2.flixcart.com/image/695/695/xif0q/mobile/6/4/r/-original-imagwxvqs6f88zjh.jpeg?q=70' },
    { id: 2, name: 'MOTOROLA g54 5G',price:'₹13,990', description: '8 GB RAM | 128 GB ROM | Expandable Upto 1 TB', imageUrl: 'https://rukminim2.flixcart.com/image/695/695/xif0q/mobile/z/1/c/-original-imagt5uhcnfy66wa.jpeg?q=70' },
    { id: 3, name: 'POCO M6 5G (Orion Blue, 128 GB)',price:'₹9,990', description: ' 4 GB RAM | 128 GB ROM | Expandable Upto 1 TB', imageUrl: 'https://rukminim2.flixcart.com/image/695/695/xif0q/mobile/t/o/1/-original-imagx4dpnqkcz5yc.jpeg?q=70' },
    { id: 4, name: 'SAMSUNG Galaxy F04 ',price:'₹9,100', description: '4 GB RAM | 64 GB ROM | Expandable Upto 1 TB', imageUrl: 'https://rukminim2.flixcart.com/image/695/695/xif0q/mobile/g/p/2/-original-imaguechhujc7ujh.jpeg?q=70' },
    { id: 5, name: 'realme C53 (Champion Black, 64 GB)', price:'₹8,990',description: '6 GB RAM | 64 GB ROM | Expandable Upto 2 TB', imageUrl: 'https://rukminim2.flixcart.com/image/695/695/xif0q/mobile/5/q/6/-original-imags487ftf3g2s7.jpeg?q=70' },
    { id: 6, name: 'Infinix SMART 8 HD (Crystal Green, 64 GB)',price:'₹6,990', description: '3 GB RAM | 64 GB ROM | Expandable Upto 2 TB', imageUrl: 'https://rukminim2.flixcart.com/image/695/695/xif0q/mobile/q/k/r/-original-imagwfffv4dj3x4y.jpeg?q=70' },
    // Add more products as needed
  ];

  // Reference to the products slider container
  const productsSlider = document.getElementById('products-slider');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  // Dynamically populate products
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <h4>${product.price}</h4>
        <p>${product.description}</p>
        <button>Add to Cart</button>
      `;

    productsSlider.appendChild(productCard);
  });

  
  setInterval(() => {
    const firstProduct = productsSlider.firstElementChild;
    productsSlider.style.transition = 'transform 0.5s ease-in-out';
    productsSlider.style.transform = `translateX(-${firstProduct.offsetWidth}px)`;

    setTimeout(() => {
      productsSlider.appendChild(firstProduct);
      productsSlider.style.transition = 'none';
      productsSlider.style.transform = 'translateX(0)';
    }, 500);
  }, 5000);

  prevBtn.addEventListener('click', () => {
    const lastProduct = productsSlider.lastElementChild;
    productsSlider.style.transition = 'transform 0.5s ease-in-out';
    productsSlider.style.transform = `translateX(${lastProduct.offsetWidth}px)`;

    setTimeout(() => {
      productsSlider.prepend(lastProduct);
      productsSlider.style.transition = 'none';
      productsSlider.style.transform = 'translateX(0)';
    }, 500);
  });

  // Next button functionality
  nextBtn.addEventListener('click', () => {
    const firstProduct = productsSlider.firstElementChild;
    productsSlider.style.transition = 'transform 0.5s ease-in-out';
    productsSlider.style.transform = `translateX(-${firstProduct.offsetWidth}px)`;

    setTimeout(() => {
      productsSlider.appendChild(firstProduct);
      productsSlider.style.transition = 'none';
      productsSlider.style.transform = 'translateX(0)';
    }, 500);
  });

  // Update slider on window resize for responsiveness
  window.addEventListener('resize', () => {
    productsSlider.style.transition = 'none';
    productsSlider.style.transform = 'translateX(0)';
  });
});
// product without
document.addEventListener('DOMContentLoaded', function() {
  // Sample unique find data
  const uniqueFinds = [
    { id: 1, name: 'BLIVE ', price: '₹289', description: 'Men Graphic Print Round Neck Cotton Blend Black T-Shirt', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/5/z/m/m-bblrnfull-mz104-blive-original-imagrw9qkgzmk8z6.jpeg?q=70' },
    { id: 2, name: 'PUMA', price: '₹2,820', description: 'Extend Lite Trail Running Shoes For Men  (Blue)', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/u/7/3/6-379538-6-puma-navy-clementine-original-imagw6rseb3dh7ke.jpeg?q=70' },
    { id: 3, name: 'FOSSIL', price: '₹4,617', description: 'RHETT Analog Watch - For Men BQ1009', imageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/watch/y/r/z/-original-imagphkzsajh8rjf.jpeg?q=70&crop=false' },
    { id: 5, name: 'KILLER ', price: '₹1,124', description: 'Men Skinny Mid Rise Dark Blue Jeans', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/kuef2q80/jean/y/j/v/32-8267-sk-killer-original-imag7jg4wxdzqz9t.jpeg?q=70' },
    { id: 6, name: 'Banaras silk palace ', price: '₹617', description: 'Solid/Plain Mysore Silk Blend Saree  (Dark Green)', imageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/sari/g/u/a/free-pipo0a-sarees-saree-cotton-saree-sarees-for-wedding-silk-original-imags4wktv9fhq89.jpeg?q=70&crop=false' },
    { id: 7, name: 'LG 7 kg 5 Star', price: '₹17,490', description: 'TurboDrum and Smart Diagnosis Fully Automatic Top Load Washing Machine Silver(T70SKSF1Z)', imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/k/c/l/-original-imagx7qhzg4f3bca.jpeg?q=70' },
    { id: 8, name: 'Apple iPhone 15 (Blue, 128 GB)', price: '₹71,999', description: '15.49 cm (6.1 inch),A16 Bionic Chip,6 Core Processor Processor', imageUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70&crop=false' },
    { id: 9, name: 'Fastrack ', price: '₹539', description: 'UV Protection Rectangular Sunglasses (Free Size)  (For Men, Grey)', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/ktg4ia80/sunglass/d/h/g/nbp357bk1-free-size-fastrack-original-imag6sb2uygbavu2.jpeg?q=70' },


    // Add more unique finds as needed
  ];

  // Reference to the unique finds container
  const uniqueFindsContainer = document.querySelector('.unique-finds');

  // Dynamically populate unique finds
  uniqueFinds.forEach(find => {
    const findCard = document.createElement('div');
    findCard.classList.add('find-card');
    
    findCard.innerHTML = `
      <img src="${find.imageUrl}" alt="${find.name}">
      <h3>${find.name}</h3>
      <h4>${find.price}</h4>
      <p>${find.description}</p>
      <a href="#" class="add-to-cart">Add to Cart</a>
    `;

    uniqueFindsContainer.appendChild(findCard);
  });
});





//product 2
document.addEventListener('DOMContentLoaded', function () {
  // Sample product data
  const product2 = [
    { id: 1, name: 'ASUS Vivobook 15',price:'₹29,990', description: 'Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5...', imageUrl: 'https://rukminim2.flixcart.com/image/695/695/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70' },
    { id: 2, name: ' Lenovo IdeaPad Slim 3', price:'₹32,990',description: ' Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) Ideapad 3 15IT...', imageUrl: 'https://rukminim2.flixcart.com/image/695/695/xif0q/computer/0/f/v/-original-imaguyhzwj4tqwqu.jpeg?q=70' },
    { id: 3, name: ' WINGS Nuvobook S2',price:'₹31,990', description: 'Aluminium Alloy Metal Body Intel Intel Core i3 11th Gen 1125G4 - (8 GB/512 GB SSD/Wi...', imageUrl: 'https://rukminim2.flixcart.com/image/695/695/xif0q/computer/d/8/7/-original-imagtq45ssu3azfa.jpeg?q=70' },
    { id: 3, name: 'DELL', price:'₹35,380',description: ' Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) New Inspiron 15 Laptop Thin and ...', imageUrl: 'https://rukminim2.flixcart.com/image/695/695/l1fc0i80/computer/9/5/r/inspiron-3525-thin-and-light-laptop-dell-original-imagczzfezyd7tqs.jpeg?q=70' },
    { id: 3, name: 'HP 14s', price:'₹34,910',description: 'Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) 14s - dy2508TU Thin and Light...', imageUrl: 'https://rukminim2.flixcart.com/image/695/695/xif0q/computer/e/y/j/-original-imagwzwcxf5ffarf.jpeg?q=70' },
    { id: 3, name: 'Lenovo IdeaPad Gaming 3 AMD',price:'₹47,990', description: ' Ryzen 5 Hexa Core 5500H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/N...', imageUrl: 'https://rukminim2.flixcart.com/image/695/695/xif0q/computer/j/k/h/-original-imagufyhp8btjhjc.jpeg?q=70' },
    // Add more products as needed
  ];

  // Reference to the products slider container
  const productSlider = document.getElementById('product2-slider');
  const preBtn = document.getElementById('pre-btn');
  const nexBtn = document.getElementById('nex-btn');
  // Dynamically populate products
  product2.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <h4>${product.price}</h4>
        <p>${product.description}</p>
        <button>Add to Cart</button>
      `;

    productSlider.appendChild(productCard);
  });

  // Automatic slider rotation every 3 seconds
  setInterval(() => {
    const firstProduct = productSlider.firstElementChild;
    productSlider.style.transition = 'transform 0.5s ease-in-out';
    productSlider.style.transform = `translateX(-${firstProduct.offsetWidth}px)`;

    setTimeout(() => {
      productSlider.appendChild(firstProduct);
      productSlider.style.transition = 'none';
      productSlider.style.transform = 'translateX(0)';
    }, 500);
  }, 4500);

  preBtn.addEventListener('click', () => {
    const lastProduct = productSlider.lastElementChild;
    productSlider.style.transition = 'transform 0.5s ease-in-out';
    productSlider.style.transform = `translateX(${lastProduct.offsetWidth}px)`;

    setTimeout(() => {
      productSlider.prepend(lastProduct);
      productSlider.style.transition = 'none';
      productSlider.style.transform = 'translateX(0)';
    }, 500);
  });

  nexBtn.addEventListener('click', () => {
    const firstProduct = productSlider.firstElementChild;
    productSlider.style.transition = 'transform 0.5s ease-in-out';
    productSlider.style.transform = `translateX(-${firstProduct.offsetWidth}px)`;

    setTimeout(() => {
      productSlider.appendChild(firstProduct);
      productSlider.style.transition = 'none';
      productSlider.style.transform = 'translateX(0)';
    }, 500);
  });

  // Update slider on window resize for responsiveness
  window.addEventListener('resize', () => {
    productSlider.style.transition = 'none';
    productSlider.style.transform = 'translateX(0)';
  });
});


//special offer

document.addEventListener('DOMContentLoaded', function() {
  // Sample special offer data
  const specialOffers = [
    { id: 1, title: 'True Wireless', description: 'MIN. 50% Off', imageUrl: 'https://rukminim2.flixcart.com/image/690/690/xif0q/headphone/t/j/u/-original-imagqre8hcncxaxk.jpeg?q=80' },
    { id: 2, title: 'DSLR & Cameras', description: 'MIN. 30% Off', imageUrl: 'https://rukminim2.flixcart.com/image/690/690/kk01pjk0/dslr-camera/f/v/o/eos-1500d-canon-original-imafzfugydh2mjgf.jpeg?q=80' },
    { id: 3, title: 'Smart Watches', description: 'MIN. 70% Off', imageUrl: 'https://rukminim1.flixcart.com/image/690/690/xif0q/smartwatch/k/4/n/-original-imagmfxzaxmfha4j.jpeg?q=80' },
    { id: 4, title: 'Men`s Jackets', description: 'MIN. 25% Off', imageUrl: 'https://rukminim1.flixcart.com/image/690/690/xif0q/jacket/h/o/e/m-1-no-multicolor-part-3-azmani-original-imaguubfzcf8ne7m.jpeg?q=80' },
    { id: 5, title: 'Men’s Sandals & Floaters', description: 'MIN. 75% Off', imageUrl: 'https://rukminim2.flixcart.com/image/500/500/xif0q/sandal/i/b/b/6-192-sndl-black-40-bruton-black-original-image3x2hha3cjuz-bb.jpeg?q=70' },
    { id: 6, title: 'Jewellery', description: 'MIN. 50% Off', imageUrl: 'https://rukminim2.flixcart.com/image/500/500/l47cu4w0/necklace-chain/y/h/s/2-combopattachian-flatptta05-chain-rv-jewels-original-imagemmhqz8nzsfr.jpeg?q=70' },
    { id: 7, title: 'Shoes', description: 'MIN. 55% Off', imageUrl: 'https://rukminim2.flixcart.com/image/400/400/xif0q/shoe/s/c/x/-original-imagn9na9ysruzgs.jpeg?q=70' },
    { id: 8, title: 'Laptop Bags', description: 'MIN. 40% Off', imageUrl: 'https://rukminim2.flixcart.com/image/500/500/xif0q/camera-bag/backpack/d/l/6/dslr-slr-camera-lens-shoulder-backpack-case-for-canon-nikon-original-imagszaejyw6nhvk.jpeg?q=70' },
    { id: 9, title: 'Women`s Sarees', description: 'MIN. 35% Off', imageUrl: 'https://rukminim1.flixcart.com/image/690/690/xif0q/sari/e/j/k/free-latest-georgette-saree-omicron-fab-unstitched-original-imagp6qptqnvb62g.jpeg?q=80' },
    { id: 10, title: 'Sweatshirts', description: 'MIN. 50% Off', imageUrl: 'https://rukminim1.flixcart.com/image/350/350/k2z1t3k0/jacket/z/v/x/m-9298233-mast-harbour-original-imafm78vbfvdzph7.jpeg?q=80' },
    { id: 11, title: 'Laptops', description: 'MIN. 45% Off', imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70' },

    // Add more special offers as needed
  ];

  // Reference to the special offers container
  const specialOffersContainer = document.querySelector('.special-offers');

  // Dynamically populate special offers
  specialOffers.forEach(offer => {
    const offerCard = document.createElement('div');
    offerCard.classList.add('offer-card');
    
    offerCard.innerHTML = `
      <img src="${offer.imageUrl}" alt="${offer.title}">
      <h3>${offer.title}</h3>
      <p>${offer.description}</p>
      <button>Get Offer</button>
    `;

    specialOffersContainer.appendChild(offerCard);
  });
  setInterval(() => {
    const firstOffer = specialOffersContainer.firstElementChild;
    specialOffersContainer.style.transition = 'transform 0.5s ease-in-out';
    specialOffersContainer.style.transform = `translateX(-${firstOffer.offsetWidth}px)`;

    setTimeout(() => {
      specialOffersContainer.appendChild(firstOffer);
      specialOffersContainer.style.transition = 'none';
      specialOffersContainer.style.transform = 'translateX(0)';
    }, 500);
  }, 3000);
});
//featured categories
document.addEventListener('DOMContentLoaded', function() {
  // Sample category data
  const featuredCategories = [
    { id: 1, name: 'Electronics', imageUrl: 'https://rukminim2.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70' },
    { id: 2, name: 'Fashion', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/d/m/q/3xl-flowerskt-seakart-original-imagg8rct6hyjrgy.jpeg?q=70' },
    { id: 3, name: 'Home & Kitchen', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/gas-stove/u/v/q/4-8-6-jasper-4b-auto-blowhot-14-automatic-original-imaguyvkyvju7ube.jpeg?q=70' },
    { id: 4, name: 'Grocery', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/nut-dry-fruit/x/8/t/1000-combo-pack-of-cashews-almonds-pistachios-walnuts-badam-original-imaghdttmzyhhnaz.jpeg?q=70' },
    { id: 5, name: 'Mobiles', imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/s/x/-original-imagzjhwaaewgj8r.jpeg?q=70' },
    { id: 6, name: 'Cameras', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/k3q76a80/camera/a/9/y/sony-apsc-ilce-6100l-b-in5-mirrorless-original-imafm6msv5uzrmgt.jpeg?q=70' },
    { id: 7, name: 'Toys', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/kwl0akw0/musical-toy/w/z/n/dancing-cactus-repeats-what-you-say-electronic-plush-toy-with-original-imag98fhwzu3thwv.jpeg?q=70' },
    { id: 8, name: 'Beauty Products', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/k6l2vm80/perfume/v/q/u/30-efferus-edt-eau-de-toilette-the-man-company-men-original-imafzztdrygffyyd.jpeg?q=70' },

    // Add more categories as needed
  ];

  // Reference to the featured categories slider
  const featuredCategoriesSlider = document.getElementById('featured-categories-slider');

  // Dynamically populate featured categories
  featuredCategories.forEach(category => {
    const categoryCard = document.createElement('div');
    categoryCard.classList.add('category-card');
    
    categoryCard.innerHTML = `
      <img src="${category.imageUrl}" alt="${category.name}">
      <h3>${category.name}</h3>
    `;

    featuredCategoriesSlider.appendChild(categoryCard);
  });

  // Automatic scaling and opacity animation every 5 seconds
  setInterval(() => {
    const firstCategory = featuredCategoriesSlider.firstElementChild;
    firstCategory.style.transition = 'none';
    firstCategory.style.transform = 'scale(0.8)';
    firstCategory.style.opacity = '0';

    setTimeout(() => {
      firstCategory.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
      firstCategory.style.transform = 'scale(1)';
      firstCategory.style.opacity = '1';
    }, 100);

    featuredCategoriesSlider.appendChild(firstCategory);
  },3000);
});


//arival

document.addEventListener('DOMContentLoaded', function() {
  // Sample new arrival data
  const newArrivals = [
    { id: 1, name: 'Infinix SMART 8 (Rainbow Blue, 64 GB)', imageUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/9/s/g/smart-8-x6525b-infinix-original-imagxfsd6wdsz2mx.jpeg?q=70&crop=false' },
    { id: 2, name: 'MSI GF63 Intel Core i7 11th Gen 11800H - (16 GB/1 TB HDD/256 GB SSD/Windows 11 Home/4 GB Graphics/NVID', imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/i/x/n/-original-imagt8bbf6qgeaha.jpeg?q=70' },
    { id: 3, name: 'OnePlus Y1 80 cm (32 inch) HD Ready LED Smart Android TV with Dolby Audio  ', imageUrl: 'https://rukminim2.flixcart.com/image/150/150/kqidx8w0/television/m/1/v/32ha0a00-oneplus-original-imag4gy8yezxdhen.jpeg?q=70' },
    { id: 4, name: 'Acer 23.8 inch Full HD IPS Panel with Acer Visioncare, VGA, HDMI, Ergonomic Stand', imageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/b/m/o/ek240ye-full-hd-23-8-2024-um-qe1si-e02-acer-original-imagxftkeypr4eda.jpeg?q=70&crop=false' },
    { id: 5, name: 'Canon EOS M50 Mark II Mirrorless Camera EF-M15-45mm is STM Lens', imageUrl: 'https://rukminim2.flixcart.com/image/312/312/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70' },
    { id: 6, name: 'ASUS TUF Gaming F15 - AI Powered Gaming Intel Core i5 11th Gen 11260H - (16 GB/512 GB SSD/Windows 11 H', imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/v/y/z/-original-imagtucnqsqpbvk6.jpeg?q=70' },
    { id: 7, name: 'SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray, 1 TB)', imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/n/u/-original-imagx9egm9mgmvab.jpeg?q=70' },
    // Add more new arrivals as needed
  ];

  // Reference to the new arrivals slider
  const newArrivalsSlider = document.getElementById('new-arrivals-slider');

  // Dynamically populate new arrivals
  newArrivals.forEach(product => {
    const newArrivalCard = document.createElement('div');
    newArrivalCard.classList.add('new-arrival-card');
    
    newArrivalCard.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}">
      <h3>${product.name}</h3>
    `;

    newArrivalsSlider.appendChild(newArrivalCard);
  });

  // Automatic scaling and opacity animation every 5 seconds
  setInterval(() => {
    const firstNewArrival = newArrivalsSlider.firstElementChild;
    firstNewArrival.style.transition = 'none';
    firstNewArrival.style.transform = 'scale(0.8)';
    firstNewArrival.style.opacity = '0';

    setTimeout(() => {
      firstNewArrival.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
      firstNewArrival.style.transform = 'scale(1)';
      firstNewArrival.style.opacity = '1';
    }, 50);

    newArrivalsSlider.appendChild(firstNewArrival);
  }, 3000);
  
});


//product 3
document.addEventListener('DOMContentLoaded', function () {
  // Sample product data
  const product3= [
    { id: 1, name: 'CAMPUS',price:'₹650', description: 'FIRST Running Shoes For Men', imageUrl: 'https://rukminim2.flixcart.com/image/695/695/xif0q/shoe/m/o/q/6-11g-787-6-campus-l-gry-blk-original-imagr4hfdzjjupaq.jpeg?q=70' },
    { id: 2, name: 'REEBOK', price:'₹799',description: 'Fusion Lux 2.0 M Walking Shoes For Men(Black)', imageUrl: 'https://rukminim2.flixcart.com/image/695/695/xif0q/shoe/n/5/t/9-iq6767-10-reebok-black-white-original-imagvgcaysjan9ae.jpeg?q=70' },
    { id: 3, name: 'PUMA',price:'₹990', description: 'Swing Slipon Walking Shoes For Men  (Grey)', imageUrl: 'https://rukminim2.flixcart.com/image/695/695/ktaeqvk0/shoe/x/h/z/6-5-376757-6-5-puma-asphalt-black-original-imag6z3zkstapqnv.jpeg?q=70' },
    { id: 4, name: 'asian', price:'₹769',description: 'Casual Sneaker Shoes| Enhanced Comfort with Cushioned Insole High Tops For Men  (White, Blue)', imageUrl: 'https://rukminim2.flixcart.com/image/695/695/xif0q/shoe/o/t/i/-original-imagt73g8uzfstcw.jpeg?q=70' },
    { id: 5, name: 'BIG FOX',price:'₹891', description: 'Boots For Men  (Black)', imageUrl: 'https://rukminim2.flixcart.com/image/695/695/xif0q/shoe/j/p/v/8-a5-8-big-fox-black-original-imagmg64yqghdzyb.jpeg?q=70' },
    { id: 6, name: 'BIRDE',price:'₹427', description: 'Premium Comfortable Regular Wear Walking Shoes For Men  (Black)', imageUrl: 'https://rukminim2.flixcart.com/image/695/695/xif0q/shoe/l/a/a/8-na-brd-979-8-birde-black-original-imagzh3mgeh7ygda.jpeg?q=70' },
    { id: 7, name: 'BATA', price:'₹622',description: 'Slip On For Men  (Black)', imageUrl: 'https://rukminim2.flixcart.com/image/695/695/xif0q/shoe/j/i/y/-original-imagsfdwgh8xdjzv.jpeg?q=70' },
    { id: 8, name: 'Robbie jones',price:'₹689', description: 'Casual Sneakers Colour Blocked Shoes For Boys And Men Sneakers For Men(Brown, White)', imageUrl: 'https://rukminim2.flixcart.com/image/695/695/xif0q/shoe/a/v/s/6-786-labbin-brown-original-imagngj4ybkhsk7w.jpeg?q=70' },
    // Add more products as needed
  ];

  // Reference to the products slider container
  const productSlider = document.getElementById('product3-slider');
  const preBtn = document.getElementById('pree-btn');
  const nexBtn = document.getElementById('nexte-btn');
  // Dynamically populate products
  product3.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <h4>${product.price}</h4>
        <p>${product.description}</p>
        <button>Add to Cart</button>
      `;

    productSlider.appendChild(productCard);
  });

  // Automatic slider rotation every 3 seconds
  setInterval(() => {
    const firstProduct = productSlider.firstElementChild;
    productSlider.style.transition = 'transform 0.5s ease-in-out';
    productSlider.style.transform = `translateX(-${firstProduct.offsetWidth}px)`;

    setTimeout(() => {
      productSlider.appendChild(firstProduct);
      productSlider.style.transition = 'none';
      productSlider.style.transform = 'translateX(0)';
    }, 500);
  }, 4500);

  preBtn.addEventListener('click', () => {
    const lastProduct = productSlider.lastElementChild;
    productSlider.style.transition = 'transform 0.5s ease-in-out';
    productSlider.style.transform = `translateX(${lastProduct.offsetWidth}px)`;

    setTimeout(() => {
      productSlider.prepend(lastProduct);
      productSlider.style.transition = 'none';
      productSlider.style.transform = 'translateX(0)';
    }, 500);
  });

  nexBtn.addEventListener('click', () => {
    const firstProduct = productSlider.firstElementChild;
    productSlider.style.transition = 'transform 0.5s ease-in-out';
    productSlider.style.transform = `translateX(-${firstProduct.offsetWidth}px)`;

    setTimeout(() => {
      productSlider.appendChild(firstProduct);
      productSlider.style.transition = 'none';
      productSlider.style.transform = 'translateX(0)';
    }, 500);
  });

  // Update slider on window resize for responsiveness
  window.addEventListener('resize', () => {
    productSlider.style.transition = 'none';
    productSlider.style.transform = 'translateX(0)';
  });
});

//product 4
document.addEventListener('DOMContentLoaded', function () {
  // Sample product data
  const product4= [
    { id: 1, name: 'VeBNoR',price:'₹349', description: 'Men Solid Sports Jacket', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/t/q/e/xxl-1-no-jkt1-vebnor-original-imagt8cf3nykvnes.jpeg?q=70' },
    { id: 2, name: 'Leather Retail ',price:'₹1897', description: 'Men Solid Leather Jacket', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/kgjqefk0/jacket/j/e/x/xs-lrmpchxs002-leather-retail-original-imafwrj4gx4p3hfg.jpeg?q=70' },
    { id: 3, name: 'Blaq Ash',price:'₹1999', description: 'Men Solid Biker/Riding Jacket', imageUrl: 'https://rukminim2.flixcart.com/image/1058/1058/xif0q/jacket/v/a/b/l-no-11bq-blaq-ash-original-imagubfwyyvpwghu.jpeg?q=70&crop=false' },
    { id: 3, name: 'Roadster',price:'₹666', description: 'Men Washed Jacket', imageUrl: 'https://rukminim2.flixcart.com/image/832/832/kjhgzgw0-0/jacket/n/g/t/xxl-12288660-roadster-original-imafzfnjresfydba.jpeg?q=70&crop=false' },
    { id: 3, name: 'KOTTY',price:'₹799', description: 'Men Solid Puffer Jacket', imageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/v/h/c/xl-no-kttmenspufferjacket30-kotty-original-imagkrp4gz9zfctr.jpeg?q=70&crop=false' },
    { id: 3, name: 'TRIPR',price:'₹650', description: 'Men Printed Casual Jacket', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/u/m/o/s-no-tblhdfuljacket-k36-tripr-original-imagthzxrsebzhzq.jpeg?q=70' },
    // Add more products as needed
  ];

  // Reference to the products slider container
  const productSlider = document.getElementById('product4-slider');
  const preBtnn = document.getElementById('prev-btnn');
  const nexBtnn = document.getElementById('nextev-btn');
  // Dynamically populate products
  product4.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <h4>${product.price}</h4>
        <p>${product.description}</p>
        <button>Add to Cart</button>
      `;

    productSlider.appendChild(productCard);
  });

  // Automatic slider rotation every 3 seconds
  setInterval(() => {
    const firstProduct = productSlider.firstElementChild;
    productSlider.style.transition = 'transform 0.5s ease-in-out';
    productSlider.style.transform = `translateX(-${firstProduct.offsetWidth}px)`;

    setTimeout(() => {
      productSlider.appendChild(firstProduct);
      productSlider.style.transition = 'none';
      productSlider.style.transform = 'translateX(0)';
    }, 500);
  }, 4000);

  preBtnn.addEventListener('click', () => {
    const lastProduct = productSlider.lastElementChild;
    productSlider.style.transition = 'transform 0.5s ease-in-out';
    productSlider.style.transform = `translateX(${lastProduct.offsetWidth}px)`;

    setTimeout(() => {
      productSlider.prepend(lastProduct);
      productSlider.style.transition = 'none';
      productSlider.style.transform = 'translateX(0)';
    }, 500);
  });

  nexBtnn.addEventListener('click', () => {
    const firstProduct = productSlider.firstElementChild;
    productSlider.style.transition = 'transform 0.5s ease-in-out';
    productSlider.style.transform = `translateX(-${firstProduct.offsetWidth}px)`;

    setTimeout(() => {
      productSlider.appendChild(firstProduct);
      productSlider.style.transition = 'none';
      productSlider.style.transform = 'translateX(0)';
    }, 500);
  });

  // Update slider on window resize for responsiveness
  window.addEventListener('resize', () => {
    productSlider.style.transition = 'none';
    productSlider.style.transform = 'translateX(0)';
  });
});

//featured deals
