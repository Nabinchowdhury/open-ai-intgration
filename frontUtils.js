// const slug =  window.location.pathname.split('products/').pop()
// let string = ``;
// for (const [key, value] of Object.entries(data.data.product.specifications)) {
//   string += `${key} - ${value}`
// }

// {"prompt": "You are a product content writer for Grover, a tech rental platform that makes it easy to access the latest technology without the commitment of buying.\n\nWrite a list of 2–3 Pros and 1–2 Cons for the following product: [Apple iPhone 16 Pro Max - 256GB - Dual SIM ,Memory - 8GB,Battery - 4676 mAh,Display - 6.9-inch OLED Super Retina XDR (2868 x 1320),Storage - 256GB,Processor - ,Dimensions - ,Rear Camera - 48MP + 12MP + 48MP,Connectivity - 5G,Front Camera - 12MP,Operating System - iOS 18].\n\n✅ Keep these rules in mind:\n\nTone: Clear, helpful, modern. Avoid exaggeration or hype.\nAudience: Young, price-conscious, open to innovation, but skeptical and risk-sensitive (especially about trust, flexibility, and quality).\nPros: Highlight what makes this product great for renters — performance, flexibility, trendiness, compatibility with Grover’s rental model (e.g., fast upgrade cycle, no upfront cost, etc.).\nCons: Be honest about minor downsides, but keep the tone constructive. Avoid harsh or overly critical language. Use softening phrases like “may not suit…” or “some users might find…”. Never mention product defects or broken items.\n\n🎯 Frame cons in ways that support decision clarity — not doubt. The goal is to help users understand if this rental suits their needs.\n\nExample Output:\nPros:\n\nTop-tier camera system with cinematic video recording\n\nSleek, modern design that feels premium\n\nIdeal for users wanting the latest iOS updates without long-term commitment\n\nCons:\n\nHigher monthly rental than older models\n\nMay feel large in smaller hands"}

async function getProductData(slug) {
  // const slug =  window.location.pathname.split('products/').pop()
  return fetch('https://supergraph-edge.grover.com/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-grover-store': 'de-en',
    'x-grover-language': 'en'
  },
  body: JSON.stringify({
    query: `
      query GetProductData($where: ProductWhereInput) {
        product(where: $where) {
        name
        specifications
        }
      }
    `,
    variables: {
      where: {
        slug: { _eq: slug }
      }
    },
    operationName: "GetProductData"
  })
})
.then(response => response.json())
.then(data => {
   console.log(data)
    let string = `${data.data.product.name}, `;
    for (const [key, value] of Object.entries(data.data.product.specifications)) {
      string += `${key} - ${value}, `
    }

    // console.log(string)
    return string
});
}


async function getProductsList(){
  return fetch("https://supergraph-edge.grover.com/graphql", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/json",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Not;A=Brand\";v=\"99\", \"Google Chrome\";v=\"139\", \"Chromium\";v=\"139\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-graphql-client-name": "catalog-ui-browser",
      "x-graphql-client-version": "production-v0.83.0",
      "x-grover-device-id": "KmEKGF3NGjMN17F8bVKSF",
      "x-grover-language": "de",
      "x-grover-store": "de"
    },
    "referrer": "https://www.grover.com/",
    "body": "{\"query\":\"query searchProductsFull($query: String, $filters: FilterArgs, $resultsPerPage: Int, $page: Int, $sort: Sort) {\\n  searchProducts(\\n    query: $query\\n    filters: $filters\\n    resultsPerPage: $resultsPerPage\\n    page: $page\\n    sort: $sort\\n  ) {\\n    products {\\n      ...ProductCard\\n    }\\n    facets {\\n      name\\n      __typename\\n      ... on MatchFacet {\\n        values {\\n          value\\n          count\\n        }\\n      }\\n      ... on RangeFacet {\\n        min\\n        max\\n      }\\n      ... on SpecFacet {\\n        name\\n        label\\n        values {\\n          min\\n          max\\n          value\\n          count\\n        }\\n      }\\n    }\\n    pagination {\\n      currentPage\\n      nextPage\\n      prevPage\\n      totalPages\\n      totalItems\\n    }\\n  }\\n}\\n\\nfragment ProductCard on Product {\\n  slug\\n}\",\"variables\":{\"filters\":{},\"sort\":\"RANK\",\"resultsPerPage\":100,\"page\":1}}",
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  }).then(data => data.json()).then(res => res.data.searchProducts.products);
}
// query searchProductsFull($query: String, $filters: FilterArgs, $resultsPerPage: Int, $page: Int, $sort: Sort) {
//   searchProducts(
//     query: $query
//     filters: $filters
//     resultsPerPage: $resultsPerPage
//     page: $page
//     sort: $sort
//   ) {
//     products {
//       ...ProductCard
//     }
//     facets {
//       name
//       __typename
//       ... on MatchFacet {
//         values {
//           value
//           count
//         }
//       }
//       ... on RangeFacet {
//         min
//         max
//       }
//       ... on SpecFacet {
//         name
//         label
//         values {
//           min
//           max
//           value
//           count
//         }
//       }
//     }
//     pagination {
//       currentPage
//       nextPage
//       prevPage
//       totalPages
//       totalItems
//     }
//   }
// }

// fragment ProductCard on Product {
//   id
//   brandName
//   slug
// }

// {
//   "filters": {},
//   "sort": "RANK",
//   "resultsPerPage": 24,
//   "page": 2
// }

// fetch("https://supergraph-edge.grover.com/graphql", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "en-US,en;q=0.9",
//     "content-type": "application/json",
//     "priority": "u=1, i",
//     "sec-ch-ua": "\"Not;A=Brand\";v=\"99\", \"Google Chrome\";v=\"139\", \"Chromium\";v=\"139\"",
//     "sec-ch-ua-mobile": "?1",
//     "sec-ch-ua-platform": "\"Android\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-site",
//     "x-graphql-client-name": "catalog-ui-browser",
//     "x-graphql-client-version": "production-v0.83.0",
//     "x-grover-device-id": "KmEKGF3NGjMN17F8bVKSF",
//     "x-grover-language": "de",
//     "x-grover-store": "de"
//   },
//   "referrer": "https://www.grover.com/",
//   "body": "{\"query\":\"query GetProductsWidgets($where: ProductsWidgetWhereInput, $limit: Int, $offset: Int) {\\n  productsWidgets(\\n    where: $where\\n    limit: $limit\\n    offset: $offset\\n    orderBy: {id: desc}\\n  ) {\\n    totalCount\\n    rows {\\n      ...ProductsWidgets\\n    }\\n  }\\n}\\n\\nfragment ProductsWidgets on ProductsWidget {\\n  type\\n  id\\n  name\\n  properties\\n  url\\n  products {\\n    ...ProductCard\\n  }\\n}\\n\\nfragment ProductCard on Product {\\n  id\\n  brandName\\n  available\\n  cheapestRentalPlan {\\n    id\\n    length {\\n      unit\\n      value\\n    }\\n    oldPrice {\\n      currency\\n      inCents\\n    }\\n    price {\\n      inCents\\n      currency\\n    }\\n  }\\n  coreAttribute\\n  name\\n  originalImageUrl\\n  rentalPlans {\\n    id\\n    length {\\n      unit\\n      value\\n    }\\n    oldPrice {\\n      currency\\n      inCents\\n    }\\n    price {\\n      inCents\\n      currency\\n    }\\n  }\\n  sku\\n  slug\\n  recommendedForId\\n  recommendedForSku\\n}\",\"variables\":{\"where\":{\"active\":true,\"storeCode\":\"de\"},\"limit\":20}}",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "omit"
// });

function generateProductsByCountLimit(start, limit){
  const end = start + limit;
  let output = ``;
  let count = 1;
  for(let i = start; i < end; i++){
    const text = products[i].text;
    output += `${count}. ${text}`;
    count++;
  }
  return output;
}

// async function fetchData(endpoint, data) {
//   try {
//     const response = await fetch(`http://localhost:3000/openAi-integration/api/chat`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({prompt: `You are a product content writer for Grover, a tech rental platform that makes it easy to access the latest technology without the commitment of buying.Write a list of 2–3 Pros and 1–2 Cons for the following products: [${data}].✅ Keep these rules in mind:Tone: Clear, helpful, modern. Avoid exaggeration or hype. Audience: Young, price-conscious, open to innovation, but skeptical and risk-sensitive (especially about trust, flexibility, and quality). Pros: Highlight what makes this product great for renters — performance, flexibility, trendiness. Cons: Be honest about minor downsides, but keep the tone constructive. Avoid harsh or overly critical language. Use softening phrases like “may not suit…” or “some users might find…”. Never mention product defects or broken items.🎯 Frame cons in ways that support decision clarity — not doubt. The goal is to help users understand if this rental suits their needs.`})
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error('Fetch error:', error);
//     throw error;
//   }
// }

function addDataInAsset(start, fetchdata){
  fetchdata.split(`\n\n`).forEach( (item, index) => {
    console.log(item.split(`\n-`), index);
      products[start + index].name = item.split(`\n-`)[0];
    products[start + index].pros = item.split(`\n-`)[1];
    products[start + index].cons = item.split(`\n-`)[2];
  });

}


// You are a product content writer for Grover, a tech rental platform that makes it easy to access the latest technology without the commitment of buying.
// Write a list of 2–3 Pros and 1–2 Cons for the following product: [INSERT PRODUCT NAME AND DESCRIPTION HERE — e.g., iPhone 15 Pro, 128GB, Space Black].
// ✅ Keep these rules in mind:
// Tone: Clear, helpful, modern. Avoid exaggeration or hype.
// Audience: Young, price-conscious, open to innovation, but skeptical and risk-sensitive (especially about trust, flexibility, and quality).
// Pros: Highlight what makes this product great for renters — performance, flexibility, trendiness
// Cons: Be honest about minor downsides, but keep the tone constructive. Avoid harsh or overly critical language. Use softening phrases like “may not suit…” or “some users might find…”. Never mention product defects or broken items.
// 🎯 Frame cons in ways that support decision clarity — not doubt. The goal is to help users understand if this rental suits their needs.

const products = [
  {
      "slug": "sony-console-playstation-5-pro",
      "text": "Sony PlayStation 5 Pro Console, HDR - Yes, Type - PlayStation 5 Pro, WiFi - Built-in WiFi 7, Color - White & black, Memory - 16 GB GDDR6, Weight - 2.6 kg, 3D audio - Puts you in the thick of the action, whether you're using a headset or TV speakers, Ethernet - Yes, Graphics - 4K, Bluetooth - 5.1, Dimensions - 390 x 104 x 260 mm (H x W x D), Connectivity - HDMI x 1, USB Type-C x 2, USB Type-A x 2, Refresh Rate - 60Hz or 120Hz, Native Resolution - 1440p, Scope of Delivery - Console, DualSense wireless controller, 2 TB SSD (internal storage), 2 Horizontal stand feet, HDMI cable, AC power cord, Optical Disc Drive - No, Hard Drive Capacity - 2 TB SSD, Backwards Compatibility - Compatible with PlayStation 4 games, "
  },
  {
      "slug": "apple-tablet-ipad-2025-wifi-6gb-128gb",
      "text": "Apple iPad (2025) - WIFI - iOS - 128GB, Memory - 6GB, Battery - 28.93 Wh, Display - 11-inch Liquid Retina IPS LCD (2360 x 1640), Storage - 128GB, Processor - Apple A16 Bionic, Dimensions - 19.2 x 26.2 x 3.3 cm (0.773kg), Rear Camera - 12MP, Connectivity - WIFI, Front Camera - 12MP, Operating System - iOS, "
  },
  {
      "slug": "samsung-smartphone-galaxy-s25-ultra-12gb-256-gb",
      "text": "Samsung Galaxy S25 Ultra Smartphone  - 256 GB - Dual SIM, Memory - 12GB, Battery - 4855 mAh, Display - 6.9-inch Dynamic AMOLED 2X (3120 x 1440), Storage - 256 GB, Processor - , Dimensions - , Rear Camera - 200 MP + 50 MP + 50 MP + 10 MP, Connectivity - 5G, Front Camera - 12 MP, Operating System - Android 15, "
  },
  {
      "slug": "apple-smartphone-iphone-16-pro-max-8gb-256gb",
      "text": "Apple iPhone 16 Pro Max - 256GB - Dual SIM, Memory - 8GB, Battery - 4676 mAh, Display - 6.9-inch OLED Super Retina XDR (2868 x 1320), Storage - 256GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP + 48MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 18, "
  },
  {
      "slug": "apple-smartphone-iphone-16-pro-8gb-128gb",
      "text": "Apple iPhone 16 Pro - 128GB - Dual SIM, Memory - 8GB, Battery - 3577 mAh, Display - 6.3-inch OLED Super Retina XDR (2622 x 1206), Storage - 128GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP + 48MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 18, "
  },
  {
      "slug": "apple-macbook-air-13-m4-10cpu-16gb-512gb-10gpu",
      "text": "MacBook Air 13\" - Apple M4 Chip 16GB Memory  512GB SSD Integrated 10-core GPU, Model - MW133D/A, Memory - 16GB, Display - 13.6 inches (2560 x 1664), Storage - 512GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M4, Dimensions - 30.41 x 21.5 x 1.13 cm • 1.24 kg, Operating System - macOS, Keyboard Language - German, "
  },
  {
      "slug": "apple-headphones-apple-airpods-pro-2-with-usb-c-noise-cancelling-in-ear-bluetooth-headphones",
      "text": "Apple Airpods Pro 2 with USB-C In-ear Bluetooth Headphones, Type - In-ear Bluetooth Headphones, Codecs - AAC, Battery - Up to 6h (with ANC), 30h (with charging case), Sensors - Two beamforming microphones, Touch Control, Voice Control, Auto Pause/​Play, Connections - USB-C, Key features - Developed by Apple. Easy setup for all your Apple devices. H2 Apple Chip. Adaptive EQ. Personalized 3D Audio with dynamic head tracking. Improved ANC. 4 sizes for silicone tips. IPX4 wate, dust and sweat proof. MagSafe charging case with USB-C port, Technologies - Adaptive Audio, transparency mode, Personalized 3D audio with dynamicHead tracking,Conversation Recognition, Personalized volume, Adaptive EQ, Special high-excursion Apple woofer, Noise cancelling - ANC, Wireless charging - Magsafe charging case via the USB-C port,, works with Apple Watch chager or the Magsafe charger, wireless charging (Qi)., Integrated microphone - Yes, Water/splash resistant - IPx4 waterproof, sweatproof & dustproof, "
  },
  {
      "slug": "meta-mixed-reality-meta-quest-3-512gb",
      "text": "Meta Quest 3 512 GB VR Headset, DRAM - 8 GB (33% more than Quest 2), Audio - Integrated stereo speakers with 3D spatial audio, enhanced bass, Power - Snapdragon XR2 Gen 2 chipset (double GPU processing power), Wi-Fi - Wi-Fi 6E enabled (region permitting), Weight - 515g, Display - 4K+ Infinite Display (25PPD, 1218 PPI), Privacy - External LED signal for camera usage notification, Storage - 512 GB, Ergonomics - Soft adjustable strap, depth adjustment, Resolution - 2064x2208 pixels per eye (30% better than Quest 2), Charge time - Approximately 2.3 hours with 18 W power adapter, Battery life - Up to 2.4 hours for gaming, Eye Tracking - Not featured, Refresh rate - 90 Hz, 120 Hz, Field of view - 110 degrees horizontal, 96 degrees vertical, pancake lens, Mixed Reality - Two RGB cameras (18 PPD), 10X Quest 2 resolution in Pass-through, depth projection, and room mapping, Lens Adjustment - Inter Pupillary Distance (IPD) ranges from 58 mm-71 mm, Scope of Delivery - Headset, headset insert, 2 x Meta Quest Touch Plus Controllers (AA batteries included), Power supply, Charging cable, Xbox Cloud Gaming - Stream hundreds of Xbox games on Meta Quest with Game Pass Ultimate, Backwards compatibility - PC support with Meta Quest Link cable and Air Link, Officially Supported Controller - Xbox Wireless Controller, Xbox Elite Wireless Controller Series 2, Xbox Adaptive Controller, Sony DualShock 4 Wireless Controller, Nintendo Switch Pro Controller, Meta Quest Touch Plus Controllers - Streamlined, ring-free design, TruTouch variable haptics, mixed-reality pass-through, Direct Touch hand tracking, "
  },
  {
      "slug": "sony-console-sony-playstation-5-slim",
      "text": "Sony PlayStation 5 Slim Console, CPU - x86-64-AMD Ryzen “Zen 2”, 8 Cores / 16 Threads, Variable frequency, up to 3.5 GHz, GPU - AMD Radeon RDNA 2-based graphics engine, Ray Tracing Acceleration, Variable frequency, up to 2.23 GHz, Memory - 16GB, 448GB/s Bandwidth, Weight - 3.2kg, USB Ports - USB Type-C (Super-Speed USB 10Gbps), USB Type-C (Hi-Speed USB), USB Type-A port (Super-Speed USB 10Gbps) x2, Dimensions - 96mm x 358mm x 216mm, Performance - 4K @ 60 FPS, Up to 120 FPS and 8K, Storage Type - 1TB Custom NVME SSD, Optical Drive - 4K UHD Blu-ray Player, Vertical Stand - Not included, Scope of Delivery - PlayStation®5 console, DualSense™ Wireless Controller, 1TB SSD, 2 Horizontal stand feet, HDMI® cable, AC power cord, USB cable, Printed materials, Expandable Storage - NVMe SSD Slot, Number of USB Ports - 4, "
  },
  {
      "slug": "sony-console-sony-playstation-5-slim-digital",
      "text": "Sony PlayStation 5 Slim Digital Console, CPU - x86-64-AMD Ryzen “Zen 2”, 8 Cores / 16 Threads, Variable frequency, up to 3.5 GHz, GPU - AMD Radeon RDNA 2-based graphics engine, Ray Tracing Acceleration, Variable frequency, up to 2.23 GHz, Memory - 16GB, 448GB/s Bandwidth, Weight - 2.6kg, USB Ports - USB Type-C (Super-Speed USB 10Gbps), USB Type-C (Hi-Speed USB), USB Type-A port (Super-Speed USB 10Gbps) x2, Dimensions - 80mm x 358mm x 216mm, Performance - 4K @ 60 FPS, Up to 120 FPS and 8K, Storage Type - 1TB Custom NVME SSD, Optical Drive - all-digital version without a disc drive, Vertical Stand - Not included, Scope of Delivery - PlayStation®5 console, DualSense™ Wireless Controller, 1TB SSD, 2 Horizontal stand feet, HDMI® cable, AC power cord, USB cable, Printed materials, Expandable Storage - NVMe SSD Slot, Number of USB Ports - 4, "
  },
  {
      "slug": "canon-eos-r50-rf-s-18-45mm-rf-s-55-210mm-camera-kit",
      "text": "Canon EOS R50 Camera Kit with RF-S 18-45mm f/4.5-6.3 IS STM + RF-S 55-210mm f/5-7.1 IS STM Lens, ISO - 100 - 32,000, Video - Uncropped 4K 30fps, Storage - Single-slot SD card, Auto-Focus - 651-point Phase Detect Dual Pixel CMOS AF II, Mount Type - Canon RF, Viewfinder - 3.69 million dots OLED, Screen Type - 3\" 1.62 Million-dot clear View LCD ii Variable Angle Touchscreen, Connectivity - WLAN, Bluetooth, Fast shooting - Up to 12FPS continuous shooting, Scope of delivery - Canon EOS R50, RF-S 18-45mm, RF-S 55-210mm, Lens cover, camera cover, Battery LP-E17, Power cable, Dimensions & Weight - 116.3 x 85.5 x 68.8 mm • 375g, "
  },
  {
      "slug": "sony-alpha-ilce-7-iv-body",
      "text": "Sony Alpha 7 IV Mirrorless Camera Body, ISO - 100 to 51,200, Video - 4K60p in 10-bit, S-Cinetone Photo: JPEG, RAW, HEIF, Storage - Slot 1 CFexpress type A / SD (UHS-II), Slot 2 SD UHS-II, Mount Type - Sony E, Screen Type - 3” 1,036800 Dot Free-Angle Tilting Touchscreen LCD, View Finder - 3,680,000 Dot OLED EVF, Connectivity - 1x HDMI output / 2 x 3.5mm TRS Stereo headphone Input + output / USB micro-B / USB Type-C / Bluetooth / Wi-Fi, Image Sensor - 33mp Full Frame CMOS sensor, Shutter Speed - 1/8000 to 30s, Stabilisation - 5-Axis Sensor-Shift, Max Resolution - 7008 x 4672, Auto-Focus Points - 759-point Phase Detection / 425-point Contrast Detection, Scope of delivery - Sony A7 IV camera, Sony NP-FZ100 Lithium Ion Battery (2280mAh), Ac Adapter and Power cord, Shoulder Strap, USB Type-C to Type-A cable, "
  },
  {
      "slug": "sony-alpha-7-iv-sel-fe-28-70mm",
      "text": "Sony Alpha 7 IV Camera Kit with FE 28-70 mm f/3.5–5.6 OSS Lens, ISO - 100 to 51,200, Lens - Sony FE 28-70mm f/3.5-5.6 OSS, Video - 4K60p in 10-bit, S-Cinetone Photo: JPEG, RAW, HEIF, Storage - Slot 1 CFexpress type A / SD (UHS-II), Slot 2 SD UHS-II, Mount Type - Sony E, Screen Type - 3” 1,036800 Dot Free-Angle Tilting Touchscreen LCD, View Finder - 3,680,000 Dot OLED EVF, Connectivity - 1x HDMI output / 2 x 3.5mm TRS Stereo headphone Input + output / USB micro-B / USB Type-C / Bluetooth / Wi-Fi, Image Sensor - 33mp Full Frame CMOS sensor, Shutter Speed - 1/8000 to 30s, Stabilisation - 5-Axis Sensor-Shift, Max Resolution - 7008 x 4672, Auto-Focus Points - 759-point Phase Detection / 425-point Contrast Detection, Scope of delivery - Sony A7 IV camera, Sony NP-FZ100 Lithium Ion Battery (2280mAh), Ac Adapter and Power cord, Shoulder Strap, USB Type-C to Type-A cable, "
  },
  {
      "slug": "apple-smartphone-galaxy-s25-12gb-128-gb",
      "text": "Samsung Galaxy S25 Smartphone  - 128 GB - Dual SIM, Memory - 12GB, Battery - 3885 mAh, Display - 6.2-inch Dynamic AMOLED 2X (1080 x 2340), Storage - 128 GB, Processor - , Dimensions - , Rear Camera - 12 MP + 50 MP + 10 MP, Connectivity - 5G, Front Camera - 12 MP, Operating System - Android 15, "
  },
  {
      "slug": "apple-smartphone-iphone-16-8gb-128gb",
      "text": "Apple iPhone 16 - 128GB - Dual SIM, Memory - 8GB, Battery - 3561 mAh, Display - 6.1-inch OLED Super Retina XDR (2556 x 1179), Storage - 128GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 18, "
  },
  {
      "slug": "apple-macbook-pro-16-m4-pro-14cpu-24gb-512gb-20gpu",
      "text": "MacBook Pro 16\" - Apple M4 Pro Chip 24GB Memory 512GB SSD - Integrated 20-core GPU, Model - MX2X3D/A, Memory - 24GB, Display - 16.2 inches (3024 x 1964), Storage - 512GB SSD, Graphics - Apple Integrated 20-core GPU, Processor - Apple M4 Pro, Dimensions - 35.57 x 35.57 x 1.68 cm • 2.14 kg, Operating System - macOS, Keyboard Language - German, "
  },
  {
      "slug": "apple-airpods-4-with-active-noise-cancellation-in-ear-bluetooth-headphones",
      "text": "Apple Airpods 4 with Active Noise Cancellation In-ear Bluetooth Headphones, Type - In-ear Bluetooth Headphones, Battery - Up to 20h battery with ANC enabled, Sensors - Two beamforming microphones, Inward-facing microphone, Optical in-ear sensor, Accelerometer with motion detection, Accelerometer with speech recognition, Pressure sensor, Connections - USB-C, Key features - Bluetooth 5.3, H2 headphone chip, Personalized 3D audio with dynamic head tracking, Adaptive EQ automatically tunes music to your ears, Voice isolation, special high-excursion Apple woofer and amplifier with dynamic range, Ventilation for pressure equalization, Active Noise Cancellation, Transparency mode, Conversation Recognition,, Noise canceling - ANC, Scope of Delivery - Airpods 4 with ANC , Charging case (USB-C), Wireless charging - Qi-certified chargers or Apple watch charger, Integrated microphone - Yes, Water/splash resistant - IP54, "
  },
  {
      "slug": "apple-airpods-max-with-usb-c-over-ear-bluetooth-headphones",
      "text": "Apple Airpods Max with USB-C Over-ear Bluetooth Headphones, Type - Over-ear headphones, Battery - Up to 20h with ANC & 3D audio, Sensors - Optical sensor (in each earpiece), Position sensor (in each earpiece), Case detection sensor (in each earpiece), Accelerometer (in each earcup), Gyro sensor (left earcup), Connections - USB-C, Key features - Dynamic driver developed by Apple provides rich, deep bass, accurate mid-ranges, and crisp, clean high-frequency extension so every note can be heard. Transparency mode, Adaptive EQ, 3D audio with dynamic head tracking, digital crown control, Storage in the smart case extends the battery life through extremely low energy consumption, multi-connect allows automatic device switching., Noise canceling - ANC, Scope of Delivery - Airpods Max, Smartcase, USB-C charging cable, Wireless charging - No, Integrated microphone - 9x microphones for noise cancellation and voice capture, Intelligent functions - Voice control with Siri, smart case, wear detection, "
  },
  {
      "slug": "dji-mini-3-pro-dji-rc",
      "text": "DJI Mini 3 Pro with DJI RC Smart Controller, Drone, Video - 4K60fps , 1080p 120fps, Camera - 48MP  1/1.3’- type CMOS sensor, Gimbal - 3 axis with vertical framing, Storage - microSD, Aperture - F/1.7, Performance - 16 m/s (S-mode), 10 m/s (N-mode), 6 m/s (C-mode), Flight Ceiling - 4000 m, Wind resistance - 10.7 m/s, Remote Controller - DJI RC smart controller, Scope of Delivery - 1x Battery, 1x Drone, Gimbal protector, DJI RC smart controller, Spare propellers, propeller screws & screwdriver, USB-C cable (for charging), Maximum Flight time - 34 minutes, Still image support - DNG / JPEG / RAW, Maximum Ascent speed - 5 m/s, Maximum Descent Speed - 5 m/s, "
  },
  {
      "slug": "valve-console-valve-steam-deck-512gb-oled",
      "text": "Valve Steam Deck OLED 512GB Console, CPU - Zen 2 4c/8t, 2.4-3.5GHz (up to 448 GFlops FP32), GPU - 8 RDNA 2 CUs, 1.6GHz (1.6 TFlops FP32), RAM - 16 GB LPDDR5 on-board RAM (6400 MT/s quad 32-bit channels), Gyro - 6-Axis IMU, Size - 298mm x 117mm x 49mm, Input - PD3.0 Type C power supply, Wi-Fi - Tri-band Wi-Fi 6E, Weight - Approx. 640 grams, Battery - 50Whr battery 3-12 hours of gameplay, Desktop - KDE Plasma, Display - 1280 x 800 HDR OLED, Haptics - HD haptics, Sensors - Light: Dual ambient light sensor ALS, Storage - Steam Deck 512GB NVMe SSD with high-speed microSD card slot, microSD - UHS-I supports SD, SDXC and SDHC, Channels - Stereo with embedded DSP for an immersive listening experience, APU power - 4-15W, Expansion - , Processor - 6nm AMD APU, Microphones - Dual microphone array, Screen Size - 7.4” diagonal, Connectivity - Bluetooth 5.3, Refresh Rate - 90Hz, Operating System - SteamOS 3 (Arch-based), Maximum brightness - 1,000 nits peak brightness (HDR), 600 nits (SDR), Headphone / mic jack - 3.5mm stereo headphone jack, "
  },
  {
      "slug": "soundboks-gen-4-party-bluetooth-speaker",
      "text": "SOUNDBOKS Gen 4, Type - Bluetooth Speaker, Model - Soundboks 4, Output - 126 dB (A), Battery - Up to 40h battery, Frequency - 40-20 KHz, Durability - IP65 water resistant, Connections - 2 × combined microphone / instrument inputs (XLR, 1/4 ”), 1 × 3.5mm stereo input, 1 × 3.5mm stereo output, Connectivity - Bluetooth 5.0, No of Speakers - 2 x 10” 96 dB woofers and 1 x 1” 104 dB compression driver tweeter (CD), Special Features - Experience unparalleled audio clarity, depth, and detail with the Adaptive EQ Technology of the Soundboks Gen 4, whether you're blasting music at a lively outdoor event or enjoying quieter tunes indoors. Bid farewell to manual adjustments and revel in pristine sound quality wherever your adventures take you, courtesy of this innovative feature. Additionally, the Soundboks Gen 4 boasts an integrated LED lighting system that syncs with your music, creating a dynamic visual accompaniment to enhance your listening experience. Control the energy-efficient LED lights via the Soundboks app, allowing you to customize the lighting effects to suit any occasion. With 20% longer battery life, a quick-fit detachable grill, robust construction, and enhanced audio immersion, the Soundboks Gen 4 offers a comprehensive audiovisual solution. Experience wireless control over multiple speakers, enabling you to build a complete stereo system with precise frequency control and selectable modes for optimized bass, power, and indoor settings., "
  },
  {
      "slug": "samsung-galaxy-watch-ultra-lte-2025-47mm",
      "text": "Samsung Galaxy Watch Ultra (2025) LTE Smartwatch, Titanium Case, 47mm, Type - Smartwatch, Features - Designed for tough environments and outdoor use, Powered by Galaxy AI, Integrated Google Gemini on the watch, Dual-GPS for high-precision tracking, SOS and Track Back functions for outdoor safety, Intelligent fitness features and goal tracking, Battery Life - Up to 100h, Connectivity - LTE, Bluetooth® 5.3, WLAN 2,4 GHz & 5 GHz, NFC, Dual-GPS (L1+L5), Compatibility - Android, Build Material - Titanium Case and Marine Band, Music playback - Yes, Water/Dust proof - IP6816, 10 ATM17, MIL-STD-810H18, Activity Tracking - ECG measurement, Blood pressure monitoring, Heart rate monitoring, Blood oxygen (SpO2) measurement, Sleep apnea monitoring, Bioelectrical Impedance Analysis (body composition), Global Positioning - Glonass, Beidou, Galileo, "
  },
  {
      "slug": "apple-ultra-2-gps-cellular-titanium-case-and-ocean-band",
      "text": "Apple Watch Ultra 2 GPS + Cellular, Titanium Case, 49mm, Type - Apple Watch, Features - Powered by new S9 SiP, Double Tap Gesture (answer a call, open a notification, play and pause music and more), LTPO2 OLED Always-On Retina display (Up to 3000 nits), Faster on-device Siri with health data access, Precision Finding for iPhone, Sleep Tracking, Sleep apnea notifications, Fall Detection and Crash detection, Siren, Customizable Action Button, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Blood Oxygen app, ECG app, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Precision dual-frequency GPS, Durable from -20° C to 55° C, Emergency SOS, International Emergency Calling, Strong Battery Performance, Pair Multiple Watches with Family Setup, Battery Life - Up to 36h / 72h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Titanium Case and Ocean Band, Music playback - Yes, Water/Dust proof - Up to 100m / IP6X, Activity Tracking - Blood oxygen, Electrocardiography (ECG), Hours slept, Resting heart rate, Target heart rate, Skin temperature, Running (Stride Length, Ground Contact Time, Vertical Oscillation), Depth/Pressure/Location Tracking for Divers, Multisport Workouts, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "apple-mac-mini-m4-10cpu-16gb-256gb-10gpu",
      "text": "Mac Mini - Apple M4 Chip 16GB Memory 256GB SSD - Integrated 10-core GPU, Model - MU9D3D/A, Memory - 16GB, Storage - 256GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M4, Dimensions - 14.01 x 14.01 x 1.26 cm • 1.16 kg, Operating System - macOS, Keyboard Language - , "
  },
  {
      "slug": "sony-virtual-reality-sony-playstation-vr2",
      "text": "Sony PSVR2 VR Headset, Model - Playstation VR2, Display - OLED display, Tracking - 4 embedded cameras for headset and controller tracking​. IR camera for eye tracking per eye, Controller - Bluetooth® Ver. 5.1​ , USB-C charging, Resolution - 2000x2040 per eye, Audio Input - Built-in microphone, Connections - USB-C, Controllers - 2x controllers, Audio Output - Stereo headphone jack, Refresh rate - 90Hz - 120Hz, Field of View - 110° field of view and foveated rendering, More Features - No games included, Motion sensor - Six-axis motion sensor system (3-axis gyroscope, 3-axis acceleration), Picture Quality - 4K HDR, Connection sensor - IR proximity sensor, Space Requirements - 1m x 1m of clear space, roomscale mode requires 2m x 2m of free space., Supported platforms - PS5, "
  },
  {
      "slug": "dreame-vacuum-cleaner-dreame-l20-ultra",
      "text": "Dreame L20 Ultra Robot Vacuum Cleaner , Filter - HEPA, Control - Controllable via smartphone & voice assistants (Amazon Alexa, Google Assistant), Runtime - 260 min (4.3 hours), Dimensions - 35 x 10.4 x 35 cm / 4.3 kg, Suitable for - Tiles, hardwood floors, laminates, parquet floors, carpets, Special Features - Extendable mops, 4.5 liter fresh water container, 4 liter dirty water container, obstacle detection, wet mopping function, with combination brush for carpets and hard floors, liftable brush and intelligent carpet detection, and an impressive suction power of 7000 Pa, Scope of Delivery - Robot vacuum cleaner, base station, cleaning tool, power cable, 1x main brush, 2x mopping pad, 2x mop holder, 1x side brush, Water tank Volume - 0.08 L, Dust container volume - 0.3 L, "
  },
  {
      "slug": "dji-mini-3-fly-more-combo-dji-rc",
      "text": "DJI Mini 3 Fly More Combo & DJI RC, Drone, Camera - Vertical rotating camera gimbal, 1/1.3\" CMOS sensor, Flight time - 38 minutes x 3 Batteries, Drone Weight - 249g, Video recording - Up to 4K30p, Special features - Includes DJI RC smart controller, Smart recording features, Scope of delivery - DJI Mini 3 with DJI RC Remote (Fly More Combo), RC Remote Controller, 3 x Intelligent Flight Battery, 3 x Propeller Set, 18 x Screw, Screwdriver, Gimbal Protector, USB-C PD Cable, USB-C 3.0 Cable, Shoulder Bag, Obstacle avoidance - Downward, Dimensions (folded) - 148.0 x 90.0 x 62.0 mm, "
  },
  {
      "slug": "delonghi-coffee-machine-delonghi-eletta-explore-ecam-450-55-g",
      "text": "De'Longhi Eletta Explore ECAM 450.55 Coffee Machine, Power - 1450W, Display - LCD touch screen (TFT), Grinder - Adjustable grinder, Cleaning - Rinsing function, descaling program, removable brew group, adjustable water hardness, Features - 4 user profiles for individual storage of preferences, 42 pre-installed recipes, suitable for coffee beans and coffee powder, touch control, hot water function, adjustable hot water temperature, jug function, American coffee function, cold brew function, double height-adjustable coffee spout max. 170mm, 2-cup function, programmable switch-off time, auto-clean function for automatic and hygienic cleaning of the milk pipes with hot water and steam, LatteCrema and LatteCrema Cool milk foam system for preparing hot or cold milk foam, Dimensions - 260 x 385 x 450 mm / 11.4 kg, Milk system - Yes, with a removable milk container, Water amount - Adjustable, Coffee amount - Adjustable, Pump pressure - 19bar, Scope of delivery - milk container LatteCrema Hot, milk container LatteCrema Cool, silicone ice cube mold (\"cube\"), separate hot water outlet, cleaning brush, coffee measure, Coffee temperature - Adjustable, Water tank capacity - 1.8l, detachable with integrated water filter, Fixed water connection - No, Capacity bean container - 300g, Coffee grounds container capacity - 14 portions, "
  },
  {
      "slug": "optoma-uhd38x-projector",
      "text": "Optoma UHD38x Projector - 4K UHD, Brightness - 4000 ANSI lumens, Connections - 2 x HDMI 2.0, 1 x Audio 3.5mm, 1 x S/PDIF, 1 x USB-A power 1.5A, 1 x RS232, 1 x 12V trigger, Aspect ratio - 16:9, Picture quality - 4K UHD, Projection size - 0.84m - 7.62m, 3D functionality - Full 3D, Special features - True 4K UHD resolution, Lightning fast gaming projector, Full 3D compatible, Screen resolution - 3840 x 2160 pixels, Projection distance - 1.21m - 9.9m, "
  },
  {
      "slug": "roborock-vacuum-cleaner-roborock-s8-pro-ultra",
      "text": "Roborock S8 Pro Ultra Vacuum Cleaner, Battery - 5.2Ah, Li-Ion, Capacity - 0.55l (0.20l wet, 0.35l dry), Features - Automatic dust discharge, washable EPA filter (E11), programmable cleaning times, floor brush, side brush, app control, voice control (Amazon Alexa, Apple HomeKit, Google Assistant), DuoRoller riser brush, VibraRise 2.0 mopping system: 5mm mop lift, Carpet Boost+ system, Reactive 3D obstacle avoidance system, Dimensions - 96 x 350 mm / 14.4 kg, Navigation - Laser sensors, obstacle detection, overcoming obstacles (up to 22mm), virtual walls, Accessories - Suction station, dust filter, wipes, power cord, Noise level - 67dB(A), Charging time - 6h, Cleaning modes - Automatic, carpet, wipe function, Operating time - 180min, Charging system - Automatic, RockDock™ Ultra - Self-washing: automatically washes the robot mop during and after cleaning, Self-drying: with warm air, Self-emptying: no need to change the dust bag for up to 7 weeks, Self-refilling: During cleaning, the RockDock™ Ultra fills the water tank of the vacuum robot , Self-cleaning: cleans the RockDock™ Ultra wash station, simplifying maintenance, Scope of delivery - Robot vacuum cleaner, suction station, dust filter, wipes, power cable, Recommended room size - Max. 300m², "
  },
  {
      "slug": "apple-macbook-pro-14-m4-10cpu-16gb-512gb-10gpu",
      "text": "MacBook Pro 14\" - Apple M4 Chip 16GB Memory 512GB SSD - Integrated 10-core GPU, Model - MW2U3D/A, Memory - 16GB, Display - 14.2 inches (3024 x 1964), Storage - 512GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M4, Dimensions - 22.12 x 31.26 x 1.55 cm • 1.61 kg, Operating System - macOS, Keyboard Language - German, "
  },
  {
      "slug": "apple-macbook-air-13-m4-10cpu-16gb-256gb-8gpu",
      "text": "MacBook Air 13\" - Apple M4 Chip 16GB Memory 256GB SSD Integrated 8-core GPU, Model - MW123D/A, Memory - 16GB, Display - 13.6 inches (2560 x 1664), Storage - 256GB SSD, Graphics - Apple Integrated 8-core GPU, Processor - Apple M4, Dimensions - 30.41 x 21.5 x 1.13 cm • 1.24 kg, Operating System - macOS, Keyboard Language - German, "
  },
  {
      "slug": "apple-tablet-11-ipad-air-2025-wifi-8gb-128gb",
      "text": "Apple 11\" iPad Air (2025) - WIFI - iOS - 128GB, Memory - 8GB, Battery - 28,93 Wh, Display - 11-inch Liquid Retina (2360 x 1640), Storage - 128GB, Processor - Apple M3, Dimensions - 19.2 x 26.1 x 3.3 cm (0.46kg), Rear Camera - 12MP, Connectivity - WIFI, Front Camera - 12MP, Operating System - iOS, "
  },
  {
      "slug": "samsung-smartphone-galaxy-z-fold7-12-gb-512-gb",
      "text": "Samsung Galaxy Z Fold7 Smartphone  - 512 GB - Dual SIM, Memory - 12 GB, Battery - 4400mAh, Display - 8.0(6.5)-inch Foldable Dynamic LTPO AMOLED 2X (1969 x 2184), Storage - 512 GB, Processor - Samsung Snapdragon 8 Elite (3 nm), Dimensions - 14.32 x 15.84 x 0.42 cm (0.215kg), Rear Camera - 200MP + 12MP +10MP, Connectivity - 5G, Front Camera - 10MP, Operating System - Android 16, "
  },
  {
      "slug": "apple-series-10-gps-cellular-aluminium-case-and-sport-band-46mm",
      "text": "Apple Watch Series 10 GPS + Cellular, Aluminium Case, 46mm, Type - Apple Watch, Features - Powered by new S10 SiP, LTPO3 OLED Always-On Retina display (Wide-angle OLED, 40% brighter), Sleep Tracking, Sleep apnea notifications, Double Tap Gesture (answer a call, open a notification, play and pause music and more), Faster on-device Siri with health data access, Precision Finding for iPhone, Crash detection, Fall Detection, Heart arrhythmia, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Pair Multiple Watches with Family Setup, Apple Pay, Listen Music, Podcast, Audiobooks, Band Size - M/L, Battery Life - Up to 18h / 36h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - Up to 50m, Activity Tracking - Continuous Heart Rate Tracking, Steps taken, Hours slept, Resting heart rate, Target heart rate, Skin temperature, Multisport workouts; Strength training, HIIT, Pilates, Meditation, Swimming, Running, Yoga, Cycling and Other Sports, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "apple-macbook-pro-14-m4-pro-12cpu-24gb-512gb-16gpu",
      "text": "MacBook Pro 14\" - Apple M4 Pro Chip 24GB Memory 512GB SSD - Integrated 16-core GPU, Model - MX2H3D/A, Memory - 24GB, Display - 14.2 inches (3024 x 1964), Storage - 512GB SSD, Graphics - Apple Integrated 16-core GPU, Processor - Apple M4 Pro, Dimensions - 22.12 x 31.26 x 1.55 cm • 1.61 kg, Operating System - macOS, Keyboard Language - German, "
  },
  {
      "slug": "samsung-tablet-galaxy-tab-s10-fe-wifi-8gb-128gb",
      "text": "Samsung Tablet, Galaxy Tab S10 FE - WIFI - Android - 128GB, Memory - 8GB, Battery - 8000 mAh, Display - 10.9-inch (2304 x 1440), Storage - 128GB, Processor - Samsung Exynos 1580, Dimensions - 16.58 x 25.43 x 0.6 cm (0.5kg), Rear Camera - 13MP, Connectivity - WIFI, Front Camera - 12MP, Operating System - Android, "
  },
  {
      "slug": "samsung-smartphone-galaxy-z-fold7-12-gb-256-gb",
      "text": "Samsung Galaxy Z Fold7 Smartphone  - 256 GB - Dual SIM, Memory - 12 GB, Battery - 4400mAh, Display - 8.0(6.5)-inch Foldable Dynamic LTPO AMOLED 2X (1968 x 2184), Storage - 256 GB, Processor - Samsung Snapdragon 8 Elite (3 nm), Dimensions - 14.32 x 15.84 x 0.42 cm (0.215kg), Rear Camera - 200MP + 12MP +10MP, Connectivity - 5G, Front Camera - 10MP, Operating System - Android 16, "
  },
  {
      "slug": "canon-eos-r6-mark-ii-rf-24-105mm-f4-7-1-is-stm",
      "text": "Canon EOS R6 II Camera Kit with RF 24-105 mm f/4.0-7.1 IS STM Kit Lens, ISO - 100 to 102,400 (Extended 50 to 204,800), HDMI - RAW 6144 x 4032 up to 59.94 fps, Lens - Canon RF 24-105mm F/4-7.1 IS STM, Photo - C-RAW, HEIF, JPEG, Video - H.264/H.265/MPEG-4 4:2:2 10-Bit; UHD 4K (3840 x 2160) at 23.98/25/29.97/50/59.94 fps [60 to 340 Mb/s], Storage - Dual UHS-II SD Card slot, Mount Type - Canon RF, Screen Type - 3\" 1,620,000-Dot Articulating Touchscreen LCD, View Finder - 3,690,000 Dot OLED EVF, Connectivity - 1x Micro-HDMI, 1x 3.5mm TRS input, 1x 3.5mm TRS Output, USB-C interface, 2.4/5GHz Wi-Fi, Bluetooth, Image Sensor - 24.2 Megapixel Full Frame CMOS sensor, Shutter Speed - 1/8000 to 30s, Stabilisation - 5-Axis Sensor-Shift, Max Resolution - 6144 x 4032, Auto-Focus Points - 1053-point Phase Detection / 1053-point Contrast Detection, Scope of delivery - EOS R6 mkii, Canon RF 24-105mm F/4-7.1 IS ST, LP-E6NH battery LC-E6 battery charger, Camera cover, Camera strap, "
  },
  {
      "slug": "apple-smartphone-galaxy-s25-12gb-128-gb-0b9ce761-799b-4c23-8d1e-6dc9c6b4cb62",
      "text": "Samsung Galaxy S25+ Smartphone  - 256 GB - Dual SIM, Memory - 12GB, Battery - 4775 mAh, Display - 6.7-inch Dynamic AMOLED 2X (1440 x 3120), Storage - 256 GB, Processor - Qualcomm Snapdragon Snapdragon 8 Elite for Galaxy (SM8750), Dimensions - 7.58 x 15.84 x 0.73 cm (0.19kg), Rear Camera - 12 MP + 50 MP + 10 MP, Connectivity - 5G, Front Camera - 12 MP, Operating System - Android 15, "
  },
  {
      "slug": "apple-13-ipad-pro-2024-wi-fi-cellular-8gb-256gb",
      "text": "Apple 13\" iPad Pro (2024) - Wi-Fi + Cellular - M4 - 256GB, Memory - 8GB, Battery - 38,99 Wh, Display - 13-inch Ultra Retina XDR display (2752 x 2064), Storage - 256GB, Processor - Apple M4, Dimensions - 22.75 x 29.55 x 3.15 cm (0.96kg), Rear Camera - 12MP, Connectivity - Wi-Fi + Cellular, Front Camera - 12MP, Operating System - iOS, "
  },
  {
      "slug": "roborock-s8-maxv-ultra-robot-cleaner",
      "text": "Roborock S8 MaxV Ultra Robot Cleaner, Dimensions - 409 x 419 x 470 mm / 14,6 kg, Charging time - Approx. 4 hours, Suction power - 10,000 Pa, Dust container - 2.5 l (station), 270 ml (robot), Operation area - Tiles, hardwood floors, laminates, parquet floors, stone floors, carpets, Special features - 10,000Pa suction power, FlexiArm side brush, additional edge wiping system, DuoRoller Riser solid rubber brush, VibraRise 3.0 wiping system, CarpetBoost+ system, real-time video call, 60°C hot water mop wash, 60°C hot air drying, intelligent dirt detection, automatic dosage for cleaning solutions, integrated intelligent voice assistant, Cleaning along the floor direction, Wet mopping function - Yes, Maximum operating time - 180 mins, Maximum volume of the water tank - 4 L (station), 100 ml (robot), System or compatible with system - Amazon Alexa, Apple Siri, Google Home, "
  },
  {
      "slug": "apple-series-10-gps-aluminium-case-and-sport-band-42mm",
      "text": "Apple Watch Series 10 GPS, Aluminium Case, 42mm, Type - Apple Watch, Features - Powered by new S10 SiP, LTPO3 OLED Always-On Retina display (Wide-angle OLED, 40% brighter), Sleep Tracking, Sleep apnea notifications, Double Tap Gesture (answer a call, open a notification, play and pause music and more), Faster on-device Siri with health data access, Precision Finding for iPhone, Crash detection, Fall Detection, Heart arrhythmia, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Pair Multiple Watches with Family Setup, Apple Pay, Listen Music, Podcast, Audiobooks, Band Size - S/M, Battery Life - Up to 18h / 36h inLow Power Mode, Connectivity - GPS, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - Up to 50m, Activity Tracking - Continuous Heart Rate Tracking, Steps taken, Hours slept, Resting heart rate, Target heart rate, Skin temperature, Multisport workouts; Strength training, HIIT, Pilates, Meditation, Swimming, Running, Yoga, Cycling and Other Sports, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "gopro-hero-13-black",
      "text": "GoPro HERO 13 Black, GPS - Tracks information about speed, altitude, G-force and more, Video - Up to 5.3K60p / 4K120p, Storage - MicroSD, Photography - 27MP photos, Slow Motion - 13x (720p400fps) for 15 seconds / 12x (900p360fps) for 15 seconds / 4x (5.3K120fps) for 5 seconds, Stabilisation - Hypersmooth, Waterproofing - up to 10 meters, Special features - GPS, ultra-slow-motion, HLG-HDR Video recording, WLAN-6, Scope of delivery - Gopro Hero 13 Black, Enduro Battery, Mounting kit, USB-C cable, "
  },
  {
      "slug": "samsung-smartphone-galaxy-z-flip7-12-gb-512-gb",
      "text": "Samsung Galaxy Z Flip7 Smartphone  - 512 GB - Dual SIM, Memory - 12 GB, Battery - 4300mAh, Display - 6.9(4.1)-inch Foldable Dynamic LTPO AMOLED 2X (1081 x 2520), Storage - 512 GB, Processor - Samsung Exynos 2500 (3 nm), Dimensions - 7.52 x 16.67 x 0.65 cm (0.188kg), Rear Camera - 50MP + 12MP, Connectivity - 5G, Front Camera - 10MP, Operating System - Android 16, "
  },
  {
      "slug": "dyson-airwrap-i-d-multistyler",
      "text": "Dyson Airwrap i.d. Multistyler, Dimensions - 41 x 48 x 272 mm / 0.55 kg, Box contents - DYSON Airwrap id multi-styler, drying attachment, conical airwrap curling attachment, long airwrap curling attachment 40 mm, round volume brush, soft smoothing brush, filter cleaning brush, attachment for quick drying, Maximum power - 1300 watts, Special features - Intelligent multi-styler enabled with a bluetooth which can be connected to the MyDyson app to adjust heat, airflow and time setting at the touch of a button, new conical curling attachment which curls closer to the roots., Temperature levels - 3 temperature levels (max. 90°C) and button for the cold setting (28 °C), "
  },
  {
      "slug": "delonghi-coffee-machine-delonghi-magnifica-evo-ecam-290-81-tb",
      "text": "De'Longhi Magnifica Evo ECAM 290.81.TB Coffee Machine, Screen - Yes, Grinder - Adjustable grinder, Cleaning - Rinsing function, descaling program, removable brew group, adjustable water hardness, Features - Suitable for coffee beans and coffee powder, touch control operation, hot water function, cup height max. 140mm, double coffee spout, 2-cup function, automatic switch-off (energy-saving mode), programmable switch-off time, Programs - 7 pre-installed drinks - espresso, coffee, long, cappuccino, latte macchiato, hot water, MyLatte milk foam, Dimensions - 440 x 240 x 360 mm / 9.6 kg, Milk system - Yes, with a removable milk container, Water amount - Adjustable, Pump pressure - 15 bar, Amount of coffee - Adjustable in 3 levels, Special features - LatteCrema milk system with adjustable milk foam consistency and automatic cleaning, MyLatte function – Decide how much milk you want to use to prepare your coffee milk drink, conical grinder with adjustable grinding level (13 levels), Scope of delivery - milk container, water filter, cleaning brush, coffee measure, Coffee temperature - Adjustable, Water tank capacity - 1.8l, detachable with integrated water filter, Capacity bean container - 250g, Coffee grounds container capacity - 14 portions, "
  },
  {
      "slug": "canon-eos-r6-mark-ii-body",
      "text": "Canon EOS R6 II Mirrorless Camera Body, ISO - 100 to 102,400 (Extended 50 to 204,800), HDMI - RAW 6144 x 4032 up to 59.94 fps, Photo - C-RAW, HEIF, JPEG, Video - H.264/H.265/MPEG-4 4:2:2 10-Bit; UHD 4K (3840 x 2160) at 23.98/25/29.97/50/59.94 fps [60 to 340 Mb/s], Storage - Dual UHS-II SD Card slot, Mount Type - Canon RF, Screen Type - 3\" 1,620,000-Dot Articulating Touchscreen LCD, View Finder - 3,690,000 Dot OLED EVF, Connectivity - 1x Micro-HDMI, 1x 3.5mm TRS input, 1x 3.5mm TRS Output, USB-C interface, 2.4/5GHz Wi-Fi, Bluetooth, Image Sensor - 24.2 Megapixel Full Frame CMOS sensor, Shutter Speed - 1/8000 to 30s, Stabilisation - 5-Axis Sensor-Shift, Max Resolution - 6144 x 4032, Auto-Focus Points - 1053-point Phase Detection / 1053-point Contrast Detection, Scope of delivery - EOS R6 mkii, LP-E6NH battery LC-E6 battery charger, Camera cover, Camera strap, "
  },
  {
      "slug": "hisense-tv-hisense-65e77nq-pro",
      "text": "Hisense 65E77NQ PRO - TV 65\" QLED 4K, HDR - Yes (HDR10 / HDR10+ / HLG / Dolby Vision IQ), USB - 2 x (1x 2.0; 1x 3.0), HDMI - 4x HDMI (2x HDMI 2.1 ALLM, VRR); (1x eARC), Tuner - DVB-T2 / T / C / S2 / S, VIDAA - (Mobile App) (Android / iOS), Game Bar - Yes, Smart TV - VIDAA U7.6, Airplay 2 - Yes, Processor - Quad Core, Anti Glare - Yes, Quantum Dot - Yes, Aspect ratio - 16:9, Refresh rate - 120 Hz (native) / 144Hz (VRR), Game Mode Pro - (ALLM, VRR, 4K@144 Hz, Freesync), Alexa Built-In - Yes, VESA Wall Mount - 400 x 300 mm, Headphone Output - 1x, Sound Technology - Dolby Atmos, Dolby Audio, Display technology - QLED, Ethernet RJ45 Port - 1x, S/PDIF Audio Output - 1x, Composite (AV) Input - 1x, Screen diagonal in cm - 164, Common Interface (CI+) - 1.4 (EPC), Screen diagonal in inches - 65, Screen resolution in pixels - Ultra HD 3840 × 2160, Size with Stand (WxHxD) in cm - 145.1×89.4×30, Size without Stand (WxHxD) in cm - 145.1×83.6×7.5, Weight with / without Stand in kg - 19.2 / 18.6, "
  },
  {
      "slug": "hp-15-fc0079ng-r7-5825u-16gb-512gb-copilot-pc",
      "text": "HP 15-fc0079ng Laptop - AMD Ryzen™ 7 5825U - 16GB - 512GB SSD - AMD AMD Radeon Graphics, Model - BV8D6EA#ABD, Memory - 16GB, Display - 15.6 inches (1920 x 1080 ), Storage - 512GB SSD, Graphics - AMD AMD Radeon Graphics, Processor - AMD Ryzen™ 7 5825U, Dimensions - 35.9 x 23.6 x 1.8 cm • 1.59 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "dji-mini-2-se-fly-more-combo",
      "text": "DJI Mini 2 SE Fly More Combo, Drone, GPS - GPS and GLONASS satellite positioning systems, Camera - 12 MP sensor capable of recording 2.7K video at 30 frames per second, Gimbal - 3-axis motorized gimbal for stable and smooth footage, Weight - 249 grams, Flight time - Up to 31 minutes of flight time, Maximum range - Up to 10 kilometers of transmission range, Maximum speed - Up to 57.6 km/h in Sport mode, Obstacle sensing - downward obstacle sensing, Special Features - One-tap takeoff, Auto Return home, QuickShots & Panorama Modes, Remote controller - Dedicated remote controller included with a range of up to 4 kilometers, "
  },
  {
      "slug": "apple-macbook-air-15-m4-10cpu-16gb-256gb-10gpu",
      "text": "MacBook Air 15\" - Apple M4 Chip 16GB Memory 256GB SSD - Integrated 10-core GPU, Model - MW1L3D/A, Memory - 16GB, Display - 15.3 inches (2880 x 1864), Storage - 256GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M4, Dimensions - 34.04 x 23.76 x 1.15 cm • 1.51 kg, Operating System - macOS, Keyboard Language - German, "
  },
  {
      "slug": "apple-smartphone-iphone-15-pro-max-8gb-256gb",
      "text": "Apple iPhone 15 Pro Max - 256GB, Memory - 8GB, Battery - 4852 mAh, Display - 6.7-inch OLED Super Retina XDR (2796 x 1290), Storage - 256GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 17, "
  },
  {
      "slug": "roborock-vacuum-cleaner-roborock-s7-maxv-ultra",
      "text": "Roborock S7 MaxV Ultra Vacuum Cleaner , Control - Controllable via smartphone & voice assistants (Alexa, Google Assistant), Runtime - 3 hours, Dimensions - 35 x 35.3 x 9.7 cm / 4.65 kg, Suitable For - Tiles, hardwood floors, laminates, parquet floors, carpets, stone floors, Suction power - 5100Pa, Wipe function - yes, Special features - Ultrasonic wiping function with room-specific control of the amount of wiping water for up to 200m², laser distance sensors (LDS) & AI dual camera for 360° coverage and obstacle avoidance from 5 x 3.0 cm (W x H), intelligent path planning with real-time room maps & selective individual room planning with virtual vacuum & wipe no-go zones, overcoming obstacles of up to 20 mm (e.g. strips, carpets), movable solid rubber brush for better floor contact, suction station with automatic emptying, refilling of water and automatic cleaning of the wipe, Scope of delivery - Vacuum robot, suction station, dust filter, wipes, power cable, operating instructions, Water tank volume - 0.2 L, Dust container volume - 0.4 L, "
  },
  {
      "slug": "apple-smartphone-iphone-16e-8gb-128gb",
      "text": "Apple iPhone 16e  - 128GB - Dual SIM, Memory - 8GB, Battery - 4005 mAh, Display - 6.1-inch OLED (2532 x 1170), Storage - 128GB, Processor - Apple A18, Dimensions - 7.15 x 14.67 x 0.78 cm (0.167kg), Rear Camera - 48MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 18, "
  },
  {
      "slug": "dreame-vacuum-cleaner-dreame-dreame-l10s-ultra",
      "text": "Dreame L10s Ultra Vacuum Cleaner, Control - Controllable via smartphone & voice assistants (Alexa, Google Assistant), Runtime - 3 hours, Dimensions - 35 x 35 x 9.7 cm / 3.7 kg, Suitable For - Tiles, hardwood floors, laminates, parquet floors, carpets, stone floors, Suction power - 5300Pa, Wipe function - yes, Special features - High precision sensors, Wet/dry, Spotless cleaning, 3D navigation, up to 60 days of automatic cleaning, Scope of delivery - Vacuum robot, suction station, dust filter, wipes, power cable, operating instructions, Water tank volume - 0.08 L, Dust container volume - 0.35 L, "
  },
  {
      "slug": "sony-alpha-7r-v-body",
      "text": "Sony Alpha 7R V Mirrorless Camera Body, ISO - 100 to 32,000 in Manual, Auto Mode (Extended: 50 to 102,400), Photo - 3:2 JPEG / Raw - 60 MP (9504 x 6336), Video - H.265/XAVC HS 4:2:2 10-Bit UHD 4K (3840 x 2160) at 23.98/50/59.94 fps [50 to 200 Mb/s],  8K 24p, 4K 60p, FHD 120p 10-Bit Video, Storage - Dual slot CFexpress Type A / SD (UHS-II), Mount Type - Sony E, Screen Type - 3.2” 2,095,000 Dot 4-axis Tilting Touchscreen LCD, View Finder - 9,437,184 Dot OLED EVF, Connectivity - 1x HDMI output / 2 x 3.5mm TRS Stereo headphone Input + output / USB micro-B / USB Type-C / Bluetooth / Wi-Fi / 1 x PC Sync Socket Output /, Image Sensor - 61 Megapixel Full Frame EXMOR R BSI sensor, Shutter Speed - 1/8000 to 30s, Size & Weight - 131.3 x 96.9 x 82.4 mm / 723g, Stabilisation - 5-Axis Sensor-Shift, Max Resolution - 9504 x 6336, Auto-Focus Points - AI-Based Real-Time Tracking AF System - 693-point Phase Detection, Scope of delivery - Sony a7RV camera, Sony NP-FZ100 battery, Sony BC-QZ1 Battery Charger, Body cap, camera strap, USB-C Cable, "
  },
  {
      "slug": "sony-camera-alpha-7-iii-body-ilce7m3",
      "text": "Sony Alpha 7 III Mirrorless Camera Body, ISO - 50 - 204,800, Video - UHD 4K30p Video, Storage - Dual SD Card slot, USH-II & UHS-I, Mount Type - Sony E, Screen Type - 3\" Tilting 921,600-Dot Touchscreen LCD, View Finder - 2,359,00-Dot OLED EVF, Connectivity - 1x Micro-HDMI output / 1x3.5mm TRS Stereo microphone input, 1x3.5mm TRS headphone output / Type-C interface / Micro-B interface / WiFi / Bluetooth, Image Sensor - 24.2MP Full-Frame CMOS Sensor, Shutter Speed - 30' -  1/8000, Stabilisation - 5-Axis Sensor-Shift, Max Resolution - 6000 x 4000, Auto-Focus Points - 693-Point Phase-Detection AF System, Scope of delivery - Sony A7III, NP FZ100 battery, AC adapter, Micro USB cable, Body cap, Shoulder strap., "
  },
  {
      "slug": "canon-rf-24-70mm-f-2-8-l-is-usm-lens",
      "text": "Canon RF 24-70mm f/2.8 L IS USM Lens, Focus - Autofocus (Nano USM), Mount - Canon RF mount, Length - 125.7mm, Weight - 900g, Aperture - F/2.8 to F/22, 9 blades, Lens type - Full Frame, Filter size - 82mm, Focal length - 24mm to 70mm, Image stabiliser - Yes (up to 5 stops), Scope of delivery - Canon RF 24-70mm F/2.8L IS USM lens, Front & Rear lens cap, Lens Hood (EW-88E), Minimum Focus Distance - 21cm, "
  },
  {
      "slug": "msi-graphics-card-geforce-rtx-5090-32g-ventus-3x-oc",
      "text": "Graphics Card MSI GeForce RTX 5090 32G VENTUS 3X OC, EAN - 4711377301633, GPU - NVIDIA GeForce RTX 5090, Slot - PCIe x16 Version 5.0, Cooling - Fan cooling, Capacity - 32 GB (GDDR7), Dimensions - 1.39 x 6.7 x 3.25 cm and 2.5 kg, Connections - 1x HDMI Version 2.1b, 3x Displayport Version 2.1a, Clock frequency - 2010 MHz, GPU boost clock - 2437 MHz, Operating systems - Windows 11, Windows 10, Manufacturer number - V530-060R, "
  },
  {
      "slug": "google-smartphone-pixel-9a-8gb-128gb",
      "text": "Google Pixel 9a Smartphone - 128GB - Dual SIM, Memory - 8GB, Battery - 5100 mAh, Display - 6.3-inch P-OLED (1080 x 2424), Storage - 128GB, Processor - Google Tensor G4, Dimensions - 7.33 x 15.47 x 0.89 cm (0.186kg), Rear Camera - 48MP + 13MP, Connectivity - 5G, Front Camera - 13MP, Operating System - Android 15, "
  },
  {
      "slug": "apple-series-10-gps-cellular-aluminium-case-and-sport-band-42mm",
      "text": "Apple Watch Series 10 GPS + Cellular, Aluminium Case, 42mm, Type - Apple Watch, Features - Powered by new S10 SiP, LTPO3 OLED Always-On Retina display (Wide-angle OLED, 40% brighter), Sleep Tracking, Sleep apnea notifications, Double Tap Gesture (answer a call, open a notification, play and pause music and more), Faster on-device Siri with health data access, Precision Finding for iPhone, Crash detection, Fall Detection, Heart arrhythmia, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Pair Multiple Watches with Family Setup, Apple Pay, Listen Music, Podcast, Audiobooks, Band Size - S/M, Battery Life - Up to 18h / 36h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - Up to 50m, Activity Tracking - Continuous Heart Rate Tracking, Steps taken, Hours slept, Resting heart rate, Target heart rate, Skin temperature, Multisport workouts; Strength training, HIIT, Pilates, Meditation, Swimming, Running, Yoga, Cycling and Other Sports, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "sony-playstation-5",
      "text": "Sony PlayStation 5, GPU - AMD Radeon™ RDNA 2, Ray Tracing Acceleration, variable frequency, up to 2.23 GHz (10.3 TFLOPS), Size - Approx. 390mm x 104mm x 260mm (width x height x depth)(excludes largest projection, excludes Base). 4.5kg, Type - Gaming Console, Model - PlayStation 5, Storage - GDDR6 16GB/448GB/s Bandwidth, Connection - 1x USB Type-A port (Hi-Speed USB), 1x USB Type-A port (Super-Speed USB 10Gbps), 2x USB Type-C port (Super-Speed USB 10Gbps), Video Output - HDMI OUT port, support of 4K 120Hz TVs, 8K TVs, VRR (specified by HDMI ver.2.1), Optical Drive - Ultra HD Blu-ray (66G/100G) ~10xCAVBD-ROM (25G/50G) ~8xCAVBD-R/RE (25G/50G) ~8xCAVDVD ~3.2xCLV, Main processor - x86-64-AMD Ryzen Zen 2, 8 Cores / 16 Threads, variable frequency, up to 3.5 GHz, Other features - 4K & 8K ready, 825GB custom SSD, up to 120fps, External Storage - Support for external USB 3.2 hard drives, Storage capacity - 825GB NVMe SSD, 5.5GB/s Read Bandwidth (Raw), Expandable Storage - internal expandable storage slot (requires a PCIe 4.0 M2 NVMe SSD), Target performance - 4K resolution, Up to 120fps with 120Hz output, 8K support, Additional Information - No games included, "
  },
  {
      "slug": "apple-smartphone-iphone-14-pro-max-6gb-128gb",
      "text": "Apple iPhone 14 Pro Max - 128GB - Dual SIM, Memory - 6GB, Battery - 4323 mAh, Display - 6.7-inch OLED (2796 x 1290), Storage - 128GB, Processor - Apple A16 Bionic, Dimensions - 9.62 x 17.93 x 2.91 cm (0.43kg), Rear Camera - 48MP + 12MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 16, "
  },
  {
      "slug": "msi-graphics-card-msi-geforce-rtx-5090-vanguard-32gb-gddr7",
      "text": "Graphics Card MSI GeForce RTX 5090 Vanguard 32GB GDDR7, EAN - 4711377302500, GPU - NVIDIA GeForce RTX 5090, Memory - 32 GB (GDDR7), Supports - Windows 11, Windows 10, Dimensions - 28.1 x 45.2 x 11.9 cm • 3.4 kg, Modell-Nr. - V530-018R, Connections - DisplayPort (3x), HDMI 2.1b, Memory Interface - 512-bit, Power Connectors - 1x 16-pin (12V-2x6), adapter included for 4x 8-pin PCIe, Boost Clock Speed - 2512 MHz, Maximum Resolution (pixels) - 7680 x 4320, "
  },
  {
      "slug": "canon-eos-r5-mark-ii",
      "text": "Canon EOS R5 Mark II, ISO - 100-102400 (expandable to 50-409600), Mount Type - Canon RF mount, Resolution - Approx. 45 Megapixels, Screen Type - 3.0-inch TFT color liquid-crystal monitor with approx. 2.1 million dots, Connectivity - Wi-Fi, Bluetooth, USB Type-C, HDMI (Type A),, Image Sensor - 36.0 x 24.0 mm back-illuminated stacked CMOS sensor, Camera Format - Digital interchangeable lens mirrorless camera, Shutter Speed - 30 - 1/8000 sec (Mechanical), up to 1/64,000 sec (Electronic), Auto-Focus Points - Max. 1053 zones (Stills), Max. 5850 selectable positions (Stills), Scope of delivery - Canon EOS R5 Mark II body, Battery Pack LP-E6P, Dimensions & Weight - 138.4 x 98.4 x 88.4 mm • 670g, "
  },
  {
      "slug": "samsung-tv-samsung-gq65q7faauxzg",
      "text": "Samsung GQ65Q7FAAUXZG - TV 65\" QLED 4K, HD type - 4K Ultra HD, Processor - Quantum 4K AI, Video apps - Samsung TV Plus, Audio decoders - Dolby Digital, Wi-Fi standards - Wi-Fi 5 (802.11ac), Display diagonal - 165.1 cm (65\"), Bluetooth version - 5.3, Display resolution - 3840 x 2160 pixels, Display technology - QLED, Number of speakers - 2, HDMI ports quantity - 3, Native aspect ratio - 16:9, Native refresh rate - 50 Hz, Audio output channels - 2.0 channels, Weight (without stand) - 16 kg, Dimensions (without stand) - 60.6 x 1452.9 x 834mm, Multiroom audio technology - Samsung Multiroom Link, Operating system installed - Tizen, Backlight dimming technology - Supreme UHD Dimming, Digital signal format system - DVB-C, DVB-S2, DVB-T2, Energy efficiency class (HDR) - G, Motion interpolation technology - Motion Xcelerator, High Dynamic Range (HDR) technology - Filmmaker Mode, High Dynamic Range 10+ (HDR10 Plus), Hybrid Log-Gamma (HLG), Quantum HDR, "
  },
  {
      "slug": "dji-drone-dji-mini-2-fly-more-combo",
      "text": "DJI Mini 2 Fly More Combo Drone, Drone, Zoom - up to 4x, Weight - 249 g, Max. Speed - 16 m/s, Photography - 1 / 2.3 '' CMOS • 12 megapixels • JPEG & RAW, Product Type - Drone and Fly More Kit, Transmission - OcuSync 2.0, Control Modes - Remote Control, Max. Flight Time - 31 min, Video Resolution - 4K: 3840 × 2160 with 24/25/30 fps • 2.7K: 2720 × 1530 with 24/25/30 fps • Full HD: 1920 × 1080 with 24/25/30/48/50/60 fps, Folded Dimensions - 138 × 81 × 58 mm, Scope of Delivery - 1x Mini 2, 1x remote control, 3x intelligent flight battery, 3x replacement propellers (pair), 1x USB-C cable, 1x gimbal protection, 1x RC cable (Micro-USB), 1x RC cable (USB-C), 1x RC -Cable (Lightning), 1x additional control sticks (pair), 18x spare screws, 1x screwdriver, 1x propeller holder, 1x two-way charging station, 1x DJI USB charger 18 W, 1x shoulder bag, Obstacle Detection - No, Transmission Range - 10 km (FCC), Unfolded Dimensions - 159 × 203 × 56 mm • With propellers: 245 × 289 × 56 mm, Intelligent Functions - QuickShots: Dronie, Circles, Helix, Rocket and Boomerang • 4K hyperlapse • Panorama: Spherical, 180° and wide-angle • \"Enhanced Photos\": automatically download enhanced photos directly into the DJI Fly app • File download: QuickTransfer, Shortened Video Clips, "
  },
  {
      "slug": "sony-wh-1000xm6-noise-cancelling-over-ear-bluetooth-headphones",
      "text": "Sony WH-1000 XM6 Noise-cancelling Over-ear Bluetooth Headphones, Type - Over-ear Bluetooth headphones, Codecs - SBC,AAC, LDAC,LC3, Battery - Up to 30h battery, Connections - USB-C, Key features - Foldable design, Adaptive NC Optimizer, Spatial udio upmix, Hi-Res audio compatible, Noise cancelling - ANC, Integrated microphone - Yes, Frequency response, Sound pressure level & Impedance - 4Hz - 40kHz, 48 ohms, 103 dB/mW, "
  },
  {
      "slug": "apple-13-ipad-pro-2024-wi-fi-8gb-256gb",
      "text": "Apple 13\" iPad Pro (2024) - Wi-Fi - M4 - 256GB, Memory - 8GB, Battery - 38,99 Wh, Display - 13-inch Ultra Retina XDR display (2752 x 2064), Storage - 256GB, Processor - Apple M4, Dimensions - 22.75 x 29.55 x 3.15 cm (0.96kg), Rear Camera - 12MP, Connectivity - Wi-Fi, Front Camera - 12MP, Operating System - iOS, "
  },
  {
      "slug": "sony-zv-1-mk-ii-vlog-kamera",
      "text": "Sony ZV-1 Mark II Vlogging Camera, Lens - Equivalent 18-50mm F1.8-4 lens, Sensor - 20.1MP 1\" Exmor RS BSI CMOS Sensor, Display - 3\" Flip-out Touchscreen LCD, Autofocus - Real-time Tracking & Eye AF, Resolution - UHD 4K30P / HLG & S-Log2/3 Gammas, Dimmensions - 10cm x 6cm x 4.6cm / 292g, Special modes - Cinematic Vlogging settings, S&Q, Product Showcase setting, Bokeh Switch, Iso Sensitivity - 125 to 12,800, Metering Method - Artificial Intelligence AE, Scope of delivery - Sony ZV-1 II Digital camera, NP-BX1 battery, Microphone wind-screen, Windscreen adapter, Continuous Shooting - up to 24FPS, Image Stabilization - Digital, "
  },
  {
      "slug": "apple-macbook-air-15-m4-10cpu-16gb-512gb-10gpu",
      "text": "MacBook Air 15\" - Apple M4 Chip 16GB Memory 512GB SSD - Apple Integrated 10-core GPU, Model - MW1M3D/A, Memory - 16GB, Display - 15.3 inches (2880 x 1864), Storage - 512GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M4, Dimensions - 34.04 x 23.76 x 1.15 cm • 1.51 kg, Operating System - macOS, Keyboard Language - German, "
  },
  {
      "slug": "soundboks-go-bluetooth-speaker",
      "text": "SOUNDBOKS Go , Type - Bluetooth Speaker, Model - Go, Power - 2 × 72 W Class D Amplifiers, Battery - Up to 40h battery, Chassis - 1 × 10” woofer, 1 × 1” silk dome tweeter, Frequency - 40Hz - 20kHz, Connections - 1 × 3.5mm stereo input, Connectivity - Bluetooth 5.0, Operating mode - Battery-powered, Special features - Powerful, durable and portable with our swappable battery and sound beyond its size. Connect with other SOUNDBOKS (Gen. 3) speakers in TeamUp mode for an incredible wireless music experience. Connect to the SOUNDBOKS app to access a world of features—plus performance upgrades for new sound settings, controls, security, and more, Scope of delivery - Soundbox Go, Battery Boxes, charger, manual, "
  },
  {
      "slug": "dji-mini-3-pro",
      "text": "DJI Mini 3 Pro with RC-N1 Controller, Drone, Video - 4K60fps , 1080p 120fps, Camera - 48MP  1/1.3’- type CMOS sensor, Gimbal - 3 axis with vertical framing, Storage - microSD, Aperture - F/1.7, Performance - 16 m/s (S-mode), 10 m/s (N-mode), 6 m/s (C-mode), Flight Ceiling - 4000 m, Wind resistance - 10.7 m/s, Remote Controller - DJI RC-N1 controller, Maximum Flight time - 34 minutes, Still image support - DNG / JPEG / RAW, Maximum Ascent speed - 5 m/s, Maximum Descent Speed - 5 m/s, "
  },
  {
      "slug": "dreame-x50-ultra-complete-robot-cleaner",
      "text": "Dreame X50 Ultra Complete Robot Cleaner, Dimensions - Base Station 590 x 457 x 340 mm / 9.09 kg; Robot vacuum 350 x 350 x 111 mm, Accessories - Base station, 1 x main brush (pre-installed), 1x brush guard (pre-installed), 1x anti-scale filter (pre-installed), 1x dustbin (pre-installed with filter), 2x mop pad holders, 2x dust bags, 1x cleaning tool,1x power cable, 1x base station ramp extension, Suction power - 20.000 Pa, Stair detection - Yes, Carpet detection - Yes, Special features - New ProLeap system enabling overcome high dual-layer obstacles upto 6cm, Fully automatic suction station with self-cleaning for long lifespan, ultra-powerful suction system with up to 20,000 Pa, Mop extend technology and versa lift navigation, automatic mop pad cleaning with 80° hot water, Obstacle detection - Yes, Wet mopping function - Yes, Maximum operating time - 200 mins(vaccum)/ 150 mins (vacuum + mop), Pre-programmed cleaning - Yes, Charging time according to the manufacturer - 4.5 hours, "
  },
  {
      "slug": "apple-series-10-gps-aluminium-case-and-sport-band-46mm",
      "text": "Apple Watch Series 10 GPS, Aluminium Case, 46mm, Type - Apple Watch, Features - Powered by new S10 SiP, LTPO3 OLED Always-On Retina display (Wide-angle OLED, 40% brighter), Sleep Tracking, Sleep apnea notifications, Double Tap Gesture (answer a call, open a notification, play and pause music and more), Faster on-device Siri with health data access, Precision Finding for iPhone, Crash detection, Fall Detection, Heart arrhythmia, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Pair Multiple Watches with Family Setup, Apple Pay, Listen Music, Podcast, Audiobooks, Band Size - M/L, Battery Life - Up to 18h / 36h in Low Power Mode, Connectivity - GPS, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - Up to 50m, Activity Tracking - Continuous Heart Rate Tracking, Steps taken, Hours slept, Resting heart rate, Target heart rate, Skin temperature, Multisport workouts; Strength training, HIIT, Pilates, Meditation, Swimming, Running, Yoga, Cycling and Other Sports, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "apple-tv-128gb-4k-wifi-ethernet-gen-3",
      "text": "Apple TV 128GB 4K WiFi + Ethernet (Gen. 3), Weight - 214 g, HD type - 4K Ultra HD, Ethernet - Yes, Frame rate - 60 fps, HDMI version - 2.1, Wi-Fi standards - Wi-Fi 6 (802.11ax), Scope of Delivery - Apple TV 4K, Siri Remote, power cord, Supported video modes - 2160p, Remote control included - Yes, Video formats supported - AVC, H.264, HEVC, M4V, MP4, MPEG4, Internal storage capacity - 128 GB, "
  },
  {
      "slug": "apple-smartphone-iphone-15-pro-8gb-128gb",
      "text": "Apple iPhone 15 Pro - 128GB, Memory - 8GB, Battery - 3650 mAh, Display - 6.1-inch OLED Super Retina XDR (1179 x 2556), Storage - 128GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 17, "
  },
  {
      "slug": "garmin-fenix-8-smartwatch-stainless-steel-51mm",
      "text": "Garmin Fēnix® 8 Smartwatch, Stainless Steel, 51mm, Type - GPS-Multisport-Smartwatches, Features - Scratch-resistant Corning® Gorilla® Glass, AMOLED Display, Microphone and Speaker, Sport-Specific Training Plans, Supports Recreational Diving and Freediving Up to 40 Meters, Dynamic Roundtrip Routing for Staying on Track, Easily Share Routes, Workouts, and Locations with Garmin-Compatible Products, Get Slope Information and Cross-Country Ski Trails, Training Readiness Score with recommendations, Track your uphill running progress with Hillscore, Train with Animated workours and Garmin coach, Sleep monitoring with insights into sleep quality and HRV status, Morning report (sleep summary, HRV status along with daily training recommendations), Minimize Jetlag effects with Jetlag advisor, Pay contactless with Garmin Pay™, Emergency assistance and automatic incident notifications during activities, Send message from your smartwatch, Smart Features (receive calls, messages, weather updates, save and play songs from compatible services (Garmin Music, Spotify, Youtube Music, Deezer Amazon Music), View your health and fitness data in one place with Garmin Connect, Communicate without mobile signal with Inreach Compatability share your location, or send SOS alerts via the Iridium satellite network, Band Size - L, Battery Life - Up to 84h in GPS mode / 29 days in Smartwatch mode, Connectivity - GPS, NFC, Bluetooth®, WiFi, Compatibility - Android / iOS, Build Material - Stainless Steel and Silicone Band, Music playback - Yes, Water/Dust proof - Up to 10 ATM / 40 m, Activity Tracking - 80+ Sports/Outdoor apps (Running, Mountain biking, Team sports), Activity vs. inactivity, Altitude changes, Blood oxygen, Heart Rate, Breathing patterns, Cadence, Calories burned, Cycling speed, Distance swam, Distance traveled, Duration of exercise, Heart rate, Laps swam, Pace, Speed, Stairs climbed, Steps taken, Global Positioning - GPS, NFC, GLONASS, "
  },
  {
      "slug": "gopro-hero12-black",
      "text": "Gopro HERO 12 Black, Video - 5312 x 2988 at 60 fps // 1920 x 1080p at 200/240 fps, Sensor - 27 megapixel, Storage - MicroSD (U3/V30 recommended), Photography - RAW 27mp, IP Streaming - H.265 1920x1080p, Waterproofing - Up to 10 meters, Special features - 8x slow-motion video, Scope of delivery - Gopro Hero 12 black, Battery, Adhesive mount, Mounting buckle, Thumbscrew, USB-C cable, Image stabilization - Hypersmooth 6.0, "
  },
  {
      "slug": "samsung-freestyle-2023-projector",
      "text": "Samsung Freestyle 2nd Gen. Projector - Full HD, WiFi - WiFi5, Model - SP-LFF3CLAXXXE, Weight - 0.83 kg, Dimensions - (W x H x D): 102.4 x 172.8 x 95.2 mm (with lens cap)., Contrast Ratio - 100,000:1, HDMI Resolution - 1920x1080i 60, Projection Ratio - 1.2, Special Features - Connect 2 Freestyle Speakers together for Smart EDGE Blending, allowing for 21:9 configuration, Scope of Delivery - Solar Smart Remote, instructions, Power Cable USB-C, Screen Resolution - 1920 x 1080, Full HD, Projection Distance - for 100\" Screen Diagonal - 265.4 cm, Image Diagonal (Max.) - 30\"-160\", "
  },
  {
      "slug": "canon-lens-canon-rf-70-200mm-f2-8l-is-usm",
      "text": "Canon RF 70-200mm f/2.8 L US USM lens, Focus - Autofocus, Mount - Canon RF mount, Weight - 2.35 lb / 1070 g, Lens Type - Full Frame, Dimensions - 3.54 x 5.75\" / 89.9 x 146 mm, Filter size - 77mm, Image Stabilizer - Yes, Scope of Delivery - RF 70-200mm F2.8 lens, front and rear cover, Lens hood, Tripod ring, Minimum focus distance - 2.3' / 70 cm, "
  },
  {
      "slug": "canon-eos-r50-rf-s-18-45mm-f4-5-6-3-is-stm-camera-kit",
      "text": "Canon EOS R50 Camera Kit with RF-S 18-45mm f/4.5-6.3 IS STM Lens, ISO - 100 - 32,000, Video - Uncropped 4K 30fps, Storage - Single-slot SD card, Auto-Focus - 651-point Phase Detect Dual Pixel CMOS AF II, Mount Type - Canon RF, Viewfinder - 3.69 million dots OLED, Screen Type - 3\" 1.62 Million-dot clear View LCD ii Variable Angle Touchscreen, Connectivity - WLAN, Bluetooth, Fast shooting - Up to 12FPS continuous shooting, Scope of delivery - Canon EOS R50, RF-S 18-45mm, Lens cover, camera cover, Battery LP-E17, Power cable, Dimensions & Weight - 116.3 x 85.5 x 68.8 mm • 375g, "
  },
  {
      "slug": "apple-smartphone-iphone-16-plus-8gb-128gb",
      "text": "Apple iPhone 16 Plus - 128GB - Dual SIM, Memory - 8GB, Battery - 4006 mAh, Display - 6.7-inch OLED Super Retina XDR (2796 x 1290), Storage - 128GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 18, "
  },
  {
      "slug": "apple-smartphone-iphone-14-pro-6gb-128gb",
      "text": "Apple iPhone 14 Pro - 128GB - Dual SIM, Memory - 6GB, Battery - 3200 mAh, Display - 6.1-inch OLED (2556 x 1179), Storage - 128GB, Processor - Apple A16 Bionic, Dimensions - 8.96 x 16.57 x 2.92 cm (0.37kg), Rear Camera - 48MP + 12MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 16, "
  },
  {
      "slug": "samsung-galaxy-watch8-bt-44-mm",
      "text": "Samsung Galaxy Watch8 Smartwatch, Aluminium Case, 44mm, Type - Smartwatch, Features - Slimmer than ever with a modern, sleek design, Integrated Google Gemini AI on the watch, Personal sleep coach with smart health insights, AI-powered running coach, New health monitoring features: Vascular load measurement and Antioxidant index tracking, Battery Life - Up to 40h, Connectivity - Bluetooth® 5.3, WLAN 2,4 GHz & 5 GHz, NFC, Dual-GPS (L1+L5), Compatibility - Android, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - IP6816, 5 ATM17, MIL-STD-810H18, Activity Tracking - ECG measurement, Blood pressure monitoring, Heart rate monitoring, Blood oxygen (SpO2) measurement, Sleep apnea monitoring, Bioelectrical Impedance Analysis (body composition), Global Positioning - Glonass, Beidou, Galileo, "
  },
  {
      "slug": "roborock-vacuum-cleaner-roborock-s8plus",
      "text": "Roborock S8+ Vacuum & Mop Robot Cleaner, Battery - 5.2Ah, Li-Ion, Capacity - 0.65l (0.30l wet, 0.35l dry), Dimension - 96 x 350 mm / 9.2 kg, Equipment - Automatic dust discharge, filter, programmable cleaning times, 2x floor brush, 1x side brush, app control, voice control (Amazon Alexa, Google Assistant), DuoRoller riser brush, VibraRise 2.0 mopping system: 5mm mop lift, Carpet Boost+ system, Reactive 3D obstacle avoidance system, Navigation - Laser sensors, obstacle detection, overcoming obstacles, virtual walls, Accessories - Charging station, dust filter, power cord, mopping module, mop head, Noise level - 67dB(A), Charging time - 6h, Cleaning modes - Automatic, carpet, wipe function, Operating time - 180min, Charging system - Automatic, Recommended room size - Max. 300m², "
  },
  {
      "slug": "sonos-arc-ultra",
      "text": "Sonos Arc Ultra, WiFi - Yes, Bluetooth - Yes, Dimensions - 75 x 1178 x 110.6 mm - 5.9 kg, Connections - HDMI eARC, Lan, Scope of delivery - Sonos arc ultra, power cable, HDMI cable, Speaker components - 15 class-D digital amplifiers, 8 elliptical woofers, 7 dome tweeters, 6 mid-woofers, "
  },
  {
      "slug": "hp-hp-reverb-g2",
      "text": "HP Reverb G2 VR Headset, Audio - Integrated valve audio, Model - HP Reverb G2, Weight - 0.49kg, Sensors - HP Reverb G2 Inside-Out, 6DoF motion tracking, gyroscope, accelerometer and magnetometer, Connections - DisplayPort ™ 1.3, USB 3.0 Type C, power supply, Controllers - 2x motion controllers, Refresh rate - 90Hz, Field of View - 114°, Operating mode - Tethered, PC requirements - Graphics card - NVIDIA GeForce GTX 1080 and above, NVIDIA GeForce RTX 2060 SUPER and above, GeForce RTX 2080 and above, AMD Radeon RX 5700 and above. Processor - Intel Core i5, i7, Intel Xeon E3-1240 v5, equivalent or better. AMD Ryzen 5 equivalent and above. Memory - 8 GB RAM or more, Ports - DisplayPort 1.3, 1x USB 3.0 Type C,, Operating system - Windows 10 May 2019 to Windows 11, not including version 24H2 and newer. New Windows 11 does not support the VR., Supported platforms - Cross-platform, Display type, lens & resolution - Dual 2.89-inch LCD, 4320x2160 (combined), 2160x2160 (per eye), "
  },
  {
      "slug": "samsung-tv-samsung-gq55q7faauxzg",
      "text": "Samsung GQ55Q7FAAUXZG - TV 55\" QLED 4K, HD type - 4K Ultra HD, Processor - Quantum 4K AI, Audio decoders - Dolby Digital, Wi-Fi standards - Wi-Fi 5 (802.11ac), Display diagonal - 139.7 cm (55\"), Bluetooth version - 5.3, Display resolution - 3840 x 2160 pixels, Display technology - QLED, Number of speakers - 2, HDMI ports quantity - 3, Native refresh rate - 50 Hz, Weight (without stand) - 11.3 kg, Dimensions (without stand) - 60.3 x 1234.1 x 710.8mm, Multiroom audio technology - Samsung Multiroom Link, Operating system installed - Tizen, Backlight dimming technology - Supreme UHD Dimming, Digital signal format system - DVB-C, DVB-S2, DVB-T2, Energy efficiency class (HDR) - G, Motion interpolation technology - Motion Xcelerator, High Dynamic Range (HDR) technology - Filmmaker Mode, High Dynamic Range 10+ (HDR10 Plus), Hybrid Log-Gamma (HLG), Quantum HDR, "
  },
  {
      "slug": "apple-smartphone-iphone-14-pro-6gb-256gb",
      "text": "Apple iPhone 14 Pro - 256GB - Dual SIM, Memory - 6GB, Battery - 3200 mAh, Display - 6.1-inch OLED (2556 x 1179), Storage - 256GB, Processor - Apple A16 Bionic, Dimensions - 8.96 x 16.57 x 2.92 cm (0.37kg), Rear Camera - 48MP + 12MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 16, "
  },
  {
      "slug": "dji-osmo-pocket-3",
      "text": "DJI Osmo Pocket 3, Camera - 20mm f/2 / 1\"-Type CMOS / 9.4MP, Battery - Max runtime 2.6h / charging 0.5h, Display - 2\" Rotating touchscreen LCD, Wireless - 2.4/5GHz Wi-Fi App controlled, Dimensions - 139.7 x 42.2 x 33.5 mm - 179g, Video resolution - Up to 3840 x 2160 @ 120FPS / D-LOG M & 10-bit support, Scope of delivery - Osmo pocket 3, USB-C cable, Protective cover, Wrist strap, Handle with 1/4\"20 thread, "
  },
  {
      "slug": "delonghi-la-specialista-opera-ec9555-coffee-machine",
      "text": "Delonghi La Specialista Opera EC9555 Coffee Machine, Grinder - Conical grinder with 15 adjustable grinding levels and SensorGRINDING technology, Programs - 5 recipes to pre-select: 5 predefined recipes: Espresso, Coffee, Americano, Cold Brew and Espresso Cool, Dimensions - 380 x 445 x 370 mm / 13.2 kg, Pump pressure - 19 bars, 2 cup function - Yes, Special features - Cold Extraction Technology for cold brew, easy dosing with X1 and X2 buttons, smart tamping station, full stainless steel housing, integrated grinder (15 grind settings), powerful My LatteArt steam nozzle that quickly produces creamy micro foam with a rich, silky texture, 3 coffee temperature settings via dedicated button, advanced thermoblock for faster readiness for use, active temperature control with PID keeps the water temperature constant during brewing, for more precision and consistency in taste, single wall filter: coffee quantity up to 18 g, 5 predefined recipes: espresso, coffee and Americano, cold brew and espresso cool, dedicated hot water spout for tea, pressure indicator for full extraction control, Scope of delivery - Espresso machine, stainless steel milk jug (350 ml), X1 and X2 single and double wall filters, nozzle cleaning needle, tube brush, Water tank capacity - 2 litres, Bean container contents - 250 g, "
  },
  {
      "slug": "gopro-hero-11-black",
      "text": "Gopro HERO 11 Black, Sensor - 27MP CMOS sensor, Weight - 4.5 oz / 127 g, Battery - Rechargeable 1720 mAh Battery pack, Display - 2.27\" Touch screen LCD / front live-view monitor, Storage - Single slot microSD, Dimension - 2.8 x 2 x 1.3\" / 71.8 x 50.8 x 33.6 mm, Recording - 5.3K60/2.7K240 Video, 27MP Photos, Connectivity - 1x USB-C / Headphone jack, Focal length - 24.4mm, Special Features - HyperSmooth 5.0 Image Stabilization, 8x Slow-Motion Video, Scope of Delivery - Gopro Hero 11, Adhesive Mount, Mounting Buckle, THumbscrew, Gopro battery, USB Type-C cable, Carry Case, Weather resistance - 33' Waterproof without Housing, Image Stabilization - Digital, Supported languages - English, French, German, Italian, Japanese, Korean, Portuguese, Simplified Chinese, "
  },
  {
      "slug": "samsung-galaxy-watch-ultra-lte-titanium-case-and-marine-band-47-mm",
      "text": "Samsung Galaxy Watch Ultra LTE Smartwatch, Titanium Case, 47 mm, Type - Smartwatch, Features - Durable design thanks to Titanium casing (Grade 4), Navigate outdoor trails with dual GPS, SOS, and Track Back functions, Long-lasting battery for up to 100h with fast charging capability, Personalized user experience with AI features like energy value, wellness tips, and quick replies, Focus on your goals with intelligent health and fitness functions, Extensive app ecosystem through Google Wear OS, Sporty-modern design, Quickly access important functions with Quick button, Analyzes and assesses your daily energy value based on activity, sleep, and resting heart rate, Advanced sleep analysis, See your body composition with Bioelectrical Impedance Analysis (BIA), Supports 90 different training programs and recognizes key disciplines like running, walking, or cycling, and can start recording automatically, Pursue your fitness goals in a controlled manner with intensity levels based on your personalized heart rate zones, Irregular heart rhythm monitoring to alert you to possible arrhythmias such as atrial fibrillation, Band Size - 20mm, Battery Life - Up to 100 hours, Connectivity - LTE, GPS, NFC, Bluetooth 5.0, WiFi, Compatibility - Android 11.0 or higher with at least 1.5 GB of RAM, Build Material - Titanium Case and Marine Band, Music playback - Yes, Water/Dust proof - Yes, 10 ATM/ IP68 / MIL-STD-810H, Activity Tracking - Heart Rate Monitor, ECG, Continuous Sp02, Blood Pressure, Bioelictrical impedance analysis (Body composition), Global Positioning - GPS, Glonass, Beidou, Galileo, "
  },
  {
      "slug": "canon-eos-r8-body",
      "text": "Canon EOS R8 Mirrorless Camera Body, ISO - 100 to 25.600 ( expandable to 102,400), Photo - JPEG, C-RAW, HEIF, RAW @ 14-bit, Video - 4K60p / 4:2:2 10-bit, Storage - Single slot SD UHS-II, Mount Type - Canon RF Full Frame, Screen Type - 3” 1 620 000 Dot Articulating Touchscreen, View Finder - 3 360000-dot OLED EVF, Connectivity - Micro HDMI, 2x 3.5mm audio Input & output, USB-C multiport, WLAN, Bluetooth, Image Sensor - 24MP Full Frame CMOS sensor, Shutter Speed - 1/8000 to 30s, Stabilization - Digital, Max Resolution - 6000 x 4000 pixels, Auto-Focus Points - Photo 4897-phase detect points / Video 4067-phase detect points, Scope of delivery - EOS R8, LP-E17 Battery, Camera neck strap, LC-E17E battery charger, Camera cover, Continuous shooting - Up to 40FPS, "
  },
  {
      "slug": "sony-headphones-sony-wh-1000xm5-over-ear-bluetooth-headphones",
      "text": "Sony WH-1000 XM5 Noise-cancelling Over-ear Bluetooth headphones, Type - Over-ear Bluetooth headphones, Codecs - AAC, LDAC, sbc, Battery - Up to 30h battery, Connections - USB-C, Key features - Detachable cable, Microphone, Multipoint connection, Voice assistant, Noise cancelling - ANC, Integrated microphone - Yes, Frequency response, Sound pressure level & Impedance - 4Hz - 40kHz, 48 ohms, 102 dB/mW, "
  },
  {
      "slug": "apple-ultra-2-gps-cellular-titanium-case-and-milanese-band-m",
      "text": "Apple Watch Ultra 2 GPS + Cellular, Titanium Case, 49mm, Type - Apple Watch, Features - Powered by new S9 SiP, Double Tap Gesture (answer a call, open a notification, play and pause music and more), LTPO2 OLED Always-On Retina display (Up to 3000 nits), Faster on-device Siri with health data access, Precision Finding for iPhone, Sleep Tracking, Sleep apnea notifications, Fall Detection and Crash detection, Siren, Customizable Action Button, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Blood Oxygen app, ECG app, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Precision dual-frequency GPS, Durable from -20° C to 55° C, Emergency SOS, International Emergency Calling, Strong Battery Performance, Pair Multiple Watches with Family Setup, Band Size - M, Battery Life - Up to 36h / 72h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Titanium Case and Milanese Band, Music playback - Yes, Water/Dust proof - Up to 100m / IP6X, Activity Tracking - Blood oxygen, Electrocardiography (ECG), Hours slept, Resting heart rate, Target heart rate, Skin temperature, Running (Stride Length, Ground Contact Time, Vertical Oscillation), Depth/Pressure/Location Tracking for Divers, Multisport Workouts, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "samsung-smartphone-s24-ultra-12gb-256gb",
      "text": "Samsung S24 Ultra Smartphone - 256GB - Dual SIM, Memory - 12GB, Battery - 5000 mAh, Display - 6.8-inch Dynamic AMOLED 2X (1440 x 3120), Storage - 256GB, Processor - , Dimensions - , Rear Camera - 200MP+12MP+50MP, Connectivity - 5G, Front Camera - 12MP, Operating System - Android 14, "
  },
  {
      "slug": "dreame-l50-pro-ultra-robot-cleaner",
      "text": "Dreame L50 Pro Ultra Robot Cleaner, Accessories - Base station, 1 x main brush (pre-installed), 1x brush guard (pre-installed), 1x anti-scale filter (pre-installed), 1x dustbin (pre-installed with filter), 2x mop pad holders, 2x dust bags, 1x cleaning tool,1x power cable, 1x base station ramp extension, Filter type - HEPA, Suction power - 19.500 Pa, Stair detection - Yes, Special features - EasyLeap system enabling dual-layer obstacles upto 4cm, Fully automatic docking station, powerful suction system with up to 19,500 Pa, Mop extend technology and versa lift navigation, automatic mop pad cleaning with 75° hot water, Obstacle detection - Yes, Wet mopping function - Yes, Maximum operating time - 200 mins(vaccum)/ 150 mins (vacuum + mop), Pre-programmed cleaning - Yes, Device dimension including bas station - 350 x 570 x 457 mm / 15.6 kg, Charging time according to the manufacturer - 4.5 hours, "
  }
];



const generatedOutPut = [
  {
      "slug": "sony-console-playstation-5-pro",
      "text": "Sony PlayStation 5 Pro Console, HDR - Yes, Type - PlayStation 5 Pro, WiFi - Built-in WiFi 7, Color - White & black, Memory - 16 GB GDDR6, Weight - 2.6 kg, 3D audio - Puts you in the thick of the action, whether you're using a headset or TV speakers, Ethernet - Yes, Graphics - 4K, Bluetooth - 5.1, Dimensions - 390 x 104 x 260 mm (H x W x D), Connectivity - HDMI x 1, USB Type-C x 2, USB Type-A x 2, Refresh Rate - 60Hz or 120Hz, Native Resolution - 1440p, Scope of Delivery - Console, DualSense wireless controller, 2 TB SSD (internal storage), 2 Horizontal stand feet, HDMI cable, AC power cord, Optical Disc Drive - No, Hard Drive Capacity - 2 TB SSD, Backwards Compatibility - Compatible with PlayStation 4 games, ",
      "pros": " Pros:\n  - 2 TB SSD gives renters plenty of room for big titles and fast loads.\n  - 4K output with 60/120 Hz support and 3D audio for an immersive living‑room setup.\n  - Built‑in Wi‑Fi 7 and multiple USB/HDMI ports make setup and downloads quick and flexible.",
      "cons": " Cons:\n  - No optical disc drive—best if you’re happy going all‑digital.\n  - Native 1440p with 4K upscaling; to see the benefit, pair with a capable TV.",
      "name": "1) Sony PlayStation 5 Pro Console (2 TB, Wi‑Fi 7)"
  },
  {
      "slug": "apple-tablet-ipad-2025-wifi-6gb-128gb",
      "text": "Apple iPad (2025) - WIFI - iOS - 128GB, Memory - 6GB, Battery - 28.93 Wh, Display - 11-inch Liquid Retina IPS LCD (2360 x 1640), Storage - 128GB, Processor - Apple A16 Bionic, Dimensions - 19.2 x 26.2 x 3.3 cm (0.773kg), Rear Camera - 12MP, Connectivity - WIFI, Front Camera - 12MP, Operating System - iOS, ",
      "pros": " Pros:\n  - A16 Bionic and 6 GB RAM handle streaming, study, and everyday creativity smoothly.\n  - Light, portable 11\" Liquid Retina display—great for travel, classes, and couch use.\n  - 12 MP front and rear cameras make video calls and scanning notes easy.",
      "cons": " Cons:\n  - Wi‑Fi only—may not suit users who need on‑the‑go cellular data.\n  - 128 GB storage can fill up if you keep lots of offline media or large apps.",
      "name": "2) Apple iPad (2025) 11\" Wi‑Fi 128 GB"
  },
  {
      "slug": "samsung-smartphone-galaxy-s25-ultra-12gb-256-gb",
      "text": "Samsung Galaxy S25 Ultra Smartphone  - 256 GB - Dual SIM, Memory - 12GB, Battery - 4855 mAh, Display - 6.9-inch Dynamic AMOLED 2X (3120 x 1440), Storage - 256 GB, Processor - , Dimensions - , Rear Camera - 200 MP + 50 MP + 50 MP + 10 MP, Connectivity - 5G, Front Camera - 12 MP, Operating System - Android 15, ",
      "pros": " Pros:\n  - Flagship camera setup (up to 200 MP) for detailed photos and versatile zoom.\n  - Big, sharp 6.9\" QHD+ Dynamic AMOLED 2X display—excellent for media and gaming.\n  - 4855 mAh battery and Dual SIM are handy for long days and travel flexibility.",
      "cons": " Cons:\n  - Large size may not suit users who prefer a more compact phone.\n  - 256 GB is solid, but heavy 8K/RAW shooters may prefer higher storage tiers.",
      "name": "3) Samsung Galaxy S25 Ultra 256 GB (Dual SIM)"
  },
  {
      "slug": "apple-smartphone-iphone-16-pro-max-8gb-256gb",
      "text": "Apple iPhone 16 Pro Max - 256GB - Dual SIM, Memory - 8GB, Battery - 4676 mAh, Display - 6.9-inch OLED Super Retina XDR (2868 x 1320), Storage - 256GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP + 48MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 18, ",
      "pros": " Pros:\n  - Huge 6.9\" Super Retina XDR display and Pro‑grade cameras for content creation.\n  - Long‑lasting 4676 mAh battery and iOS 18 ecosystem for seamless daily use.\n  - Dual SIM adds flexibility for travel or separate work/personal lines.",
      "cons": " Cons:\n  - The extra‑large form factor may feel bulky for small hands or pockets.\n  - 256 GB is ample, but frequent 4K/ProRes recording can benefit from more space.",
      "name": "4) Apple iPhone 16 Pro Max 256 GB (Dual SIM)"
  },
  {
      "slug": "apple-smartphone-iphone-16-pro-8gb-128gb",
      "text": "Apple iPhone 16 Pro - 128GB - Dual SIM, Memory - 8GB, Battery - 3577 mAh, Display - 6.3-inch OLED Super Retina XDR (2622 x 1206), Storage - 128GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP + 48MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 18, ",
      "pros": " Pros:\n  - Pro‑level cameras and performance in a more compact 6.3\" form.\n  - iOS 18 features and Dual SIM make it versatile for work and travel.\n  - Lightweight and pocket‑friendly compared with larger Pro models.",
      "cons": " Cons:\n  - 128 GB may feel tight for ProRAW photos or 4K video libraries.\n  - Smaller battery than Pro Max—power users might prefer the bigger model.",
      "name": "5) Apple iPhone 16 Pro 128 GB (Dual SIM)"
  },
  {
      "slug": "apple-macbook-air-13-m4-10cpu-16gb-512gb-10gpu",
      "text": "MacBook Air 13\" - Apple M4 Chip 16GB Memory  512GB SSD Integrated 10-core GPU, Model - MW133D/A, Memory - 16GB, Display - 13.6 inches (2560 x 1664), Storage - 512GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M4, Dimensions - 30.41 x 21.5 x 1.13 cm • 1.24 kg, Operating System - macOS, Keyboard Language - German, ",
      "pros": " Pros:\n  - Apple M4 performance with 16 GB memory is great for multitasking and study/work.\n  - 1.24 kg, slim design—ideal for commuting, campus, or hybrid work.\n  - 512 GB SSD provides comfortable space for apps and files.",
      "cons": " Cons:\n  - Integrated graphics are efficient, but not ideal for heavy 3D or AAA gaming.\n  - German keyboard layout—may not suit everyone without an external keyboard.",
      "name": "6) MacBook Air 13\" (M4, 16 GB, 512 GB)"
  },
  {
      "slug": "apple-headphones-apple-airpods-pro-2-with-usb-c-noise-cancelling-in-ear-bluetooth-headphones",
      "text": "Apple Airpods Pro 2 with USB-C In-ear Bluetooth Headphones, Type - In-ear Bluetooth Headphones, Codecs - AAC, Battery - Up to 6h (with ANC), 30h (with charging case), Sensors - Two beamforming microphones, Touch Control, Voice Control, Auto Pause/​Play, Connections - USB-C, Key features - Developed by Apple. Easy setup for all your Apple devices. H2 Apple Chip. Adaptive EQ. Personalized 3D Audio with dynamic head tracking. Improved ANC. 4 sizes for silicone tips. IPX4 wate, dust and sweat proof. MagSafe charging case with USB-C port, Technologies - Adaptive Audio, transparency mode, Personalized 3D audio with dynamicHead tracking,Conversation Recognition, Personalized volume, Adaptive EQ, Special high-excursion Apple woofer, Noise cancelling - ANC, Wireless charging - Magsafe charging case via the USB-C port,, works with Apple Watch chager or the Magsafe charger, wireless charging (Qi)., Integrated microphone - Yes, Water/splash resistant - IPx4 waterproof, sweatproof & dustproof, ",
      "pros": " Pros:\n  - Strong ANC and Transparency with Adaptive Audio—great for commuting and focus.\n  - Seamless setup across Apple devices; MagSafe and USB‑C charging for flexibility.\n  - IPX4 water/sweat resistance and multiple ear tips for a secure fit.",
      "cons": " Cons:\n  - Best experience is within the Apple ecosystem.\n  - In‑ear design may not suit those who prefer over‑ear comfort.",
      "name": "7) Apple AirPods Pro 2 (USB‑C)"
  },
  {
      "slug": "meta-mixed-reality-meta-quest-3-512gb",
      "text": "Meta Quest 3 512 GB VR Headset, DRAM - 8 GB (33% more than Quest 2), Audio - Integrated stereo speakers with 3D spatial audio, enhanced bass, Power - Snapdragon XR2 Gen 2 chipset (double GPU processing power), Wi-Fi - Wi-Fi 6E enabled (region permitting), Weight - 515g, Display - 4K+ Infinite Display (25PPD, 1218 PPI), Privacy - External LED signal for camera usage notification, Storage - 512 GB, Ergonomics - Soft adjustable strap, depth adjustment, Resolution - 2064x2208 pixels per eye (30% better than Quest 2), Charge time - Approximately 2.3 hours with 18 W power adapter, Battery life - Up to 2.4 hours for gaming, Eye Tracking - Not featured, Refresh rate - 90 Hz, 120 Hz, Field of view - 110 degrees horizontal, 96 degrees vertical, pancake lens, Mixed Reality - Two RGB cameras (18 PPD), 10X Quest 2 resolution in Pass-through, depth projection, and room mapping, Lens Adjustment - Inter Pupillary Distance (IPD) ranges from 58 mm-71 mm, Scope of Delivery - Headset, headset insert, 2 x Meta Quest Touch Plus Controllers (AA batteries included), Power supply, Charging cable, Xbox Cloud Gaming - Stream hundreds of Xbox games on Meta Quest with Game Pass Ultimate, Backwards compatibility - PC support with Meta Quest Link cable and Air Link, Officially Supported Controller - Xbox Wireless Controller, Xbox Elite Wireless Controller Series 2, Xbox Adaptive Controller, Sony DualShock 4 Wireless Controller, Nintendo Switch Pro Controller, Meta Quest Touch Plus Controllers - Streamlined, ring-free design, TruTouch variable haptics, mixed-reality pass-through, Direct Touch hand tracking, ",
      "pros": " Pros:\n  - Standalone VR/MR with Snapdragon XR2 Gen 2 and high‑res 4K+ display for crisp visuals.\n  - 512 GB storage is rental‑friendly—install lots of titles without constant juggling.\n  - Mixed Reality color pass‑through and PC VR support (Link/Air Link) expand what you can try.",
      "cons": " Cons:\n  - Battery life (around 2–2.5 hours) may require mid‑session charging for long play.\n  - Works best with a clear play space; not ideal for very tight rooms.",
      "name": "8) Meta Quest 3 (512 GB)"
  },
  {
      "slug": "sony-console-sony-playstation-5-slim",
      "text": "Sony PlayStation 5 Slim Console, CPU - x86-64-AMD Ryzen “Zen 2”, 8 Cores / 16 Threads, Variable frequency, up to 3.5 GHz, GPU - AMD Radeon RDNA 2-based graphics engine, Ray Tracing Acceleration, Variable frequency, up to 2.23 GHz, Memory - 16GB, 448GB/s Bandwidth, Weight - 3.2kg, USB Ports - USB Type-C (Super-Speed USB 10Gbps), USB Type-C (Hi-Speed USB), USB Type-A port (Super-Speed USB 10Gbps) x2, Dimensions - 96mm x 358mm x 216mm, Performance - 4K @ 60 FPS, Up to 120 FPS and 8K, Storage Type - 1TB Custom NVME SSD, Optical Drive - 4K UHD Blu-ray Player, Vertical Stand - Not included, Scope of Delivery - PlayStation®5 console, DualSense™ Wireless Controller, 1TB SSD, 2 Horizontal stand feet, HDMI® cable, AC power cord, USB cable, Printed materials, Expandable Storage - NVMe SSD Slot, Number of USB Ports - 4, ",
      "pros": " Pros:\n  - Plays physical discs and digital titles—flexible for renting games or borrowing.\n  - 4K/120 FPS support, ray tracing, and NVMe expansion for a future‑proof setup.\n  - DualSense controller included for next‑gen haptics and triggers.",
      "cons": " Cons:\n  - Vertical stand not included—plan for horizontal placement or a separate stand.\n  - Large downloads and updates still benefit from fast internet.",
      "name": "9) Sony PlayStation 5 Slim Console (Disc, 1 TB)"
  },
  {
      "slug": "sony-console-sony-playstation-5-slim-digital",
      "text": "Sony PlayStation 5 Slim Digital Console, CPU - x86-64-AMD Ryzen “Zen 2”, 8 Cores / 16 Threads, Variable frequency, up to 3.5 GHz, GPU - AMD Radeon RDNA 2-based graphics engine, Ray Tracing Acceleration, Variable frequency, up to 2.23 GHz, Memory - 16GB, 448GB/s Bandwidth, Weight - 2.6kg, USB Ports - USB Type-C (Super-Speed USB 10Gbps), USB Type-C (Hi-Speed USB), USB Type-A port (Super-Speed USB 10Gbps) x2, Dimensions - 80mm x 358mm x 216mm, Performance - 4K @ 60 FPS, Up to 120 FPS and 8K, Storage Type - 1TB Custom NVME SSD, Optical Drive - all-digital version without a disc drive, Vertical Stand - Not included, Scope of Delivery - PlayStation®5 console, DualSense™ Wireless Controller, 1TB SSD, 2 Horizontal stand feet, HDMI® cable, AC power cord, USB cable, Printed materials, Expandable Storage - NVMe SSD Slot, Number of USB Ports - 4, ",
      "pros": " Pros:\n  - All‑digital convenience with 1 TB SSD—ideal if you prefer downloadable games.\n  - Slim design with 4K/120 FPS support and NVMe expansion for bigger libraries.\n  - DualSense controller included for immersive haptics.",
      "cons": " Cons:\n  - No disc drive—may not suit users with physical game collections.\n  - Vertical stand not included if you want upright placement.",
      "name": "10) Sony PlayStation 5 Slim Digital Console (1 TB)"
  },
  {
      "slug": "canon-eos-r50-rf-s-18-45mm-rf-s-55-210mm-camera-kit",
      "text": "Canon EOS R50 Camera Kit with RF-S 18-45mm f/4.5-6.3 IS STM + RF-S 55-210mm f/5-7.1 IS STM Lens, ISO - 100 - 32,000, Video - Uncropped 4K 30fps, Storage - Single-slot SD card, Auto-Focus - 651-point Phase Detect Dual Pixel CMOS AF II, Mount Type - Canon RF, Viewfinder - 3.69 million dots OLED, Screen Type - 3\" 1.62 Million-dot clear View LCD ii Variable Angle Touchscreen, Connectivity - WLAN, Bluetooth, Fast shooting - Up to 12FPS continuous shooting, Scope of delivery - Canon EOS R50, RF-S 18-45mm, RF-S 55-210mm, Lens cover, camera cover, Battery LP-E17, Power cable, Dimensions & Weight - 116.3 x 85.5 x 68.8 mm • 375g, ",
      "name": "1) Canon EOS R50 Camera Kit (18–45mm + 55–210mm)",
      "pros": " Pros:\n  - All‑in‑one kit: two RF‑S lenses cover wide to tele—great for travel, events, and learning different styles.\n  - Fast autofocus (651‑point Dual Pixel AF II) and up to 12 fps for action, pets, and street moments.\n  - Lightweight body (375 g) with uncropped 4K30 and flip touchscreen—easy for vlogging.",
      "cons": " Cons:\n  - Single SD card slot and no in‑body stabilization may not suit risk‑averse or handheld low‑light shooters.\n  - 4K is limited to 30 fps; slow‑motion 4K creators may want more."
  },
  {
      "slug": "sony-alpha-ilce-7-iv-body",
      "text": "Sony Alpha 7 IV Mirrorless Camera Body, ISO - 100 to 51,200, Video - 4K60p in 10-bit, S-Cinetone Photo: JPEG, RAW, HEIF, Storage - Slot 1 CFexpress type A / SD (UHS-II), Slot 2 SD UHS-II, Mount Type - Sony E, Screen Type - 3” 1,036800 Dot Free-Angle Tilting Touchscreen LCD, View Finder - 3,680,000 Dot OLED EVF, Connectivity - 1x HDMI output / 2 x 3.5mm TRS Stereo headphone Input + output / USB micro-B / USB Type-C / Bluetooth / Wi-Fi, Image Sensor - 33mp Full Frame CMOS sensor, Shutter Speed - 1/8000 to 30s, Stabilisation - 5-Axis Sensor-Shift, Max Resolution - 7008 x 4672, Auto-Focus Points - 759-point Phase Detection / 425-point Contrast Detection, Scope of delivery - Sony A7 IV camera, Sony NP-FZ100 Lithium Ion Battery (2280mAh), Ac Adapter and Power cord, Shoulder Strap, USB Type-C to Type-A cable, ",
      "name": "2) Sony Alpha 7 IV Mirrorless Camera Body",
      "pros": " Pros:\n  - 33 MP full‑frame sensor with 5‑axis IBIS and advanced AF (759 points) for reliable hybrid shooting.\n  - 10‑bit 4K up to 60p, S‑Cinetone, and dual card slots (CFexpress A/SD) for pro‑leaning workflows.\n  - Strong I/O (HDMI, mic, headphone, USB‑C) for streaming, monitoring, and fast transfers.",
      "cons": " Cons:\n  - Body‑only—be sure to add a Sony E‑mount lens to your rental.\n  - CFexpress Type A media is speedy but can increase card costs."
  },
  {
      "slug": "sony-alpha-7-iv-sel-fe-28-70mm",
      "text": "Sony Alpha 7 IV Camera Kit with FE 28-70 mm f/3.5–5.6 OSS Lens, ISO - 100 to 51,200, Lens - Sony FE 28-70mm f/3.5-5.6 OSS, Video - 4K60p in 10-bit, S-Cinetone Photo: JPEG, RAW, HEIF, Storage - Slot 1 CFexpress type A / SD (UHS-II), Slot 2 SD UHS-II, Mount Type - Sony E, Screen Type - 3” 1,036800 Dot Free-Angle Tilting Touchscreen LCD, View Finder - 3,680,000 Dot OLED EVF, Connectivity - 1x HDMI output / 2 x 3.5mm TRS Stereo headphone Input + output / USB micro-B / USB Type-C / Bluetooth / Wi-Fi, Image Sensor - 33mp Full Frame CMOS sensor, Shutter Speed - 1/8000 to 30s, Stabilisation - 5-Axis Sensor-Shift, Max Resolution - 7008 x 4672, Auto-Focus Points - 759-point Phase Detection / 425-point Contrast Detection, Scope of delivery - Sony A7 IV camera, Sony NP-FZ100 Lithium Ion Battery (2280mAh), Ac Adapter and Power cord, Shoulder Strap, USB Type-C to Type-A cable, ",
      "name": "3) Sony Alpha 7 IV Kit with FE 28–70mm f/3.5–5.6 OSS",
      "pros": " Pros:\n  - Ready‑to‑shoot full‑frame setup with stabilized everyday zoom—ideal for travel and content creation.\n  - 10‑bit 4K60 and robust AF deliver reliable photo/video performance for clients and socials.\n  - Dual card slots plus 5‑axis IBIS help with backup and stable handheld footage.",
      "cons": " Cons:\n  - The kit lens has a slower variable aperture; low‑light shooters may prefer a faster prime/zoom.\n  - 4K60 applies an APS‑C crop, which can affect framing."
  },
  {
      "slug": "apple-smartphone-galaxy-s25-12gb-128-gb",
      "text": "Samsung Galaxy S25 Smartphone  - 128 GB - Dual SIM, Memory - 12GB, Battery - 3885 mAh, Display - 6.2-inch Dynamic AMOLED 2X (1080 x 2340), Storage - 128 GB, Processor - , Dimensions - , Rear Camera - 12 MP + 50 MP + 10 MP, Connectivity - 5G, Front Camera - 12 MP, Operating System - Android 15, ",
      "name": "4) Samsung Galaxy S25 (128 GB, Dual SIM)",
      "pros": " Pros:\n  - Pocket‑friendly 6.2\" Dynamic AMOLED 2X display—bright, smooth, and great for streaming.\n  - Versatile triple rear cameras (50 MP main) for day‑to‑night photos and social content.\n  - 12 GB RAM and 5G keep multitasking and gaming snappy; try Android 15 without long‑term commitment.",
      "cons": " Cons:\n  - 128 GB storage may fill quickly with high‑res media and games.\n  - 3885 mAh battery is modest; power users may want a mid‑day top‑up."
  },
  {
      "slug": "apple-smartphone-iphone-16-8gb-128gb",
      "text": "Apple iPhone 16 - 128GB - Dual SIM, Memory - 8GB, Battery - 3561 mAh, Display - 6.1-inch OLED Super Retina XDR (2556 x 1179), Storage - 128GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 18, ",
      "name": "5) Apple iPhone 16 (128 GB, Dual SIM)",
      "pros": " Pros:\n  - 48 MP main camera and 6.1\" Super Retina XDR screen for sharp photos and a premium viewing experience.\n  - iOS 18 with long software support—rent the latest iPhone without the upfront cost.\n  - Seamless Apple ecosystem features (AirDrop, iCloud, Apple Watch).",
      "cons": " Cons:\n  - 128 GB storage may feel tight if you shoot lots of video.\n  - Moderate battery capacity; heavy users may prefer a power bank."
  },
  {
      "slug": "apple-macbook-pro-16-m4-pro-14cpu-24gb-512gb-20gpu",
      "text": "MacBook Pro 16\" - Apple M4 Pro Chip 24GB Memory 512GB SSD - Integrated 20-core GPU, Model - MX2X3D/A, Memory - 24GB, Display - 16.2 inches (3024 x 1964), Storage - 512GB SSD, Graphics - Apple Integrated 20-core GPU, Processor - Apple M4 Pro, Dimensions - 35.57 x 35.57 x 1.68 cm • 2.14 kg, Operating System - macOS, Keyboard Language - German, ",
      "name": "6) MacBook Pro 16\" (M4 Pro, 24 GB RAM, 512 GB SSD, DE keyboard)",
      "pros": " Pros:\n  - M4 Pro with 20‑core GPU and 24 GB memory handles 4K edits, coding, and design with ease.\n  - Large 16.2\" high‑resolution display and quiet, efficient performance for long work sessions.\n  - Rent powerful hardware for intensive projects without buying a workstation.",
      "cons": " Cons:\n  - 512 GB SSD can fill up fast for video or 3D work—consider an external SSD.\n  - German keyboard layout may not suit everyone."
  },
  {
      "slug": "apple-airpods-4-with-active-noise-cancellation-in-ear-bluetooth-headphones",
      "text": "Apple Airpods 4 with Active Noise Cancellation In-ear Bluetooth Headphones, Type - In-ear Bluetooth Headphones, Battery - Up to 20h battery with ANC enabled, Sensors - Two beamforming microphones, Inward-facing microphone, Optical in-ear sensor, Accelerometer with motion detection, Accelerometer with speech recognition, Pressure sensor, Connections - USB-C, Key features - Bluetooth 5.3, H2 headphone chip, Personalized 3D audio with dynamic head tracking, Adaptive EQ automatically tunes music to your ears, Voice isolation, special high-excursion Apple woofer and amplifier with dynamic range, Ventilation for pressure equalization, Active Noise Cancellation, Transparency mode, Conversation Recognition,, Noise canceling - ANC, Scope of Delivery - Airpods 4 with ANC , Charging case (USB-C), Wireless charging - Qi-certified chargers or Apple watch charger, Integrated microphone - Yes, Water/splash resistant - IP54, ",
      "name": "7) Apple AirPods 4 with ANC (In‑ear)",
      "pros": " Pros:\n  - Compact earbuds with effective ANC and Transparency—great for commuting and focus.\n  - USB‑C charging plus wireless charging (Qi/Apple Watch) keeps your setup simple.\n  - Personalized 3D Audio and voice isolation enhance streaming and calls.",
      "cons": " Cons:\n  - Up to 20 hours total with ANC may not suit marathon listening compared to some over‑ears.\n  - IP54 is splash‑resistant but not designed for heavy rain."
  },
  {
      "slug": "apple-airpods-max-with-usb-c-over-ear-bluetooth-headphones",
      "text": "Apple Airpods Max with USB-C Over-ear Bluetooth Headphones, Type - Over-ear headphones, Battery - Up to 20h with ANC & 3D audio, Sensors - Optical sensor (in each earpiece), Position sensor (in each earpiece), Case detection sensor (in each earpiece), Accelerometer (in each earcup), Gyro sensor (left earcup), Connections - USB-C, Key features - Dynamic driver developed by Apple provides rich, deep bass, accurate mid-ranges, and crisp, clean high-frequency extension so every note can be heard. Transparency mode, Adaptive EQ, 3D audio with dynamic head tracking, digital crown control, Storage in the smart case extends the battery life through extremely low energy consumption, multi-connect allows automatic device switching., Noise canceling - ANC, Scope of Delivery - Airpods Max, Smartcase, USB-C charging cable, Wireless charging - No, Integrated microphone - 9x microphones for noise cancellation and voice capture, Intelligent functions - Voice control with Siri, smart case, wear detection, ",
      "name": "8) Apple AirPods Max with USB‑C (Over‑ear)",
      "pros": " Pros:\n  - Premium ANC with nine mics and Apple’s dynamic driver for detailed, immersive sound.\n  - Spatial Audio with dynamic head tracking and seamless multi‑device switching.\n  - USB‑C charging; Smart Case helps preserve battery between sessions.",
      "cons": " Cons:\n  - No wireless charging—cable required.\n  - Over‑ear size can feel bulky for light travel or small bags."
  },
  {
      "slug": "dji-mini-3-pro-dji-rc",
      "text": "DJI Mini 3 Pro with DJI RC Smart Controller, Drone, Video - 4K60fps , 1080p 120fps, Camera - 48MP  1/1.3’- type CMOS sensor, Gimbal - 3 axis with vertical framing, Storage - microSD, Aperture - F/1.7, Performance - 16 m/s (S-mode), 10 m/s (N-mode), 6 m/s (C-mode), Flight Ceiling - 4000 m, Wind resistance - 10.7 m/s, Remote Controller - DJI RC smart controller, Scope of Delivery - 1x Battery, 1x Drone, Gimbal protector, DJI RC smart controller, Spare propellers, propeller screws & screwdriver, USB-C cable (for charging), Maximum Flight time - 34 minutes, Still image support - DNG / JPEG / RAW, Maximum Ascent speed - 5 m/s, Maximum Descent Speed - 5 m/s, ",
      "name": "9) DJI Mini 3 Pro with DJI RC Smart Controller",
      "pros": " Pros:\n  - 4K60 video, 48 MP photos, and vertical shooting—ideal for travel content and social reels.\n  - DJI RC with built‑in screen lets you fly without using your phone.\n  - Up to 34 minutes per battery and fast f/1.7 lens for flexible shooting.",
      "cons": " Cons:\n  - Requires microSD; extra cards and batteries help for longer shoots.\n  - Moderate wind resistance—blustery conditions may need extra care."
  },
  {
      "slug": "valve-console-valve-steam-deck-512gb-oled",
      "text": "Valve Steam Deck OLED 512GB Console, CPU - Zen 2 4c/8t, 2.4-3.5GHz (up to 448 GFlops FP32), GPU - 8 RDNA 2 CUs, 1.6GHz (1.6 TFlops FP32), RAM - 16 GB LPDDR5 on-board RAM (6400 MT/s quad 32-bit channels), Gyro - 6-Axis IMU, Size - 298mm x 117mm x 49mm, Input - PD3.0 Type C power supply, Wi-Fi - Tri-band Wi-Fi 6E, Weight - Approx. 640 grams, Battery - 50Whr battery 3-12 hours of gameplay, Desktop - KDE Plasma, Display - 1280 x 800 HDR OLED, Haptics - HD haptics, Sensors - Light: Dual ambient light sensor ALS, Storage - Steam Deck 512GB NVMe SSD with high-speed microSD card slot, microSD - UHS-I supports SD, SDXC and SDHC, Channels - Stereo with embedded DSP for an immersive listening experience, APU power - 4-15W, Expansion - , Processor - 6nm AMD APU, Microphones - Dual microphone array, Screen Size - 7.4” diagonal, Connectivity - Bluetooth 5.3, Refresh Rate - 90Hz, Operating System - SteamOS 3 (Arch-based), Maximum brightness - 1,000 nits peak brightness (HDR), 600 nits (SDR), Headphone / mic jack - 3.5mm stereo headphone jack, ",
      "name": "10) Valve Steam Deck OLED 512 GB",
      "pros": " Pros:\n  - Vibrant 7.4\" HDR OLED at 90 Hz with up to 1,000‑nit peak brightness—great visuals on the go.\n  - 512 GB NVMe plus microSD expansion; Wi‑Fi 6E and Bluetooth 5.3 for fast downloads and accessories.\n  - PC flexibility: SteamOS with Desktop mode for emulators and light productivity.",
      "cons": " Cons:\n  - Approx. 640 g—heavier than some handhelds; long sessions may be more comfortable with a stand.\n  - Battery life varies widely (about 3–12 hours) depending on game and settings."
  },
  {
      "slug": "soundboks-gen-4-party-bluetooth-speaker",
      "text": "SOUNDBOKS Gen 4, Type - Bluetooth Speaker, Model - Soundboks 4, Output - 126 dB (A), Battery - Up to 40h battery, Frequency - 40-20 KHz, Durability - IP65 water resistant, Connections - 2 × combined microphone / instrument inputs (XLR, 1/4 ”), 1 × 3.5mm stereo input, 1 × 3.5mm stereo output, Connectivity - Bluetooth 5.0, No of Speakers - 2 x 10” 96 dB woofers and 1 x 1” 104 dB compression driver tweeter (CD), Special Features - Experience unparalleled audio clarity, depth, and detail with the Adaptive EQ Technology of the Soundboks Gen 4, whether you're blasting music at a lively outdoor event or enjoying quieter tunes indoors. Bid farewell to manual adjustments and revel in pristine sound quality wherever your adventures take you, courtesy of this innovative feature. Additionally, the Soundboks Gen 4 boasts an integrated LED lighting system that syncs with your music, creating a dynamic visual accompaniment to enhance your listening experience. Control the energy-efficient LED lights via the Soundboks app, allowing you to customize the lighting effects to suit any occasion. With 20% longer battery life, a quick-fit detachable grill, robust construction, and enhanced audio immersion, the Soundboks Gen 4 offers a comprehensive audiovisual solution. Experience wireless control over multiple speakers, enabling you to build a complete stereo system with precise frequency control and selectable modes for optimized bass, power, and indoor settings., ",
      "name": "1) SOUNDBOKS Gen 4 (Bluetooth Speaker)",
      "pros": " Pros: Stadium-level volume (up to 126 dB) with Adaptive EQ for clear sound indoors or out; up to 40h swappable battery is great for weekends and events; rugged IP65 build plus mic/instrument inputs for plug-and-play jams.",
      "cons": " Cons: Big, loud unit may be overkill for small rooms or shared spaces."
  },
  {
      "slug": "samsung-galaxy-watch-ultra-lte-2025-47mm",
      "text": "Samsung Galaxy Watch Ultra (2025) LTE Smartwatch, Titanium Case, 47mm, Type - Smartwatch, Features - Designed for tough environments and outdoor use, Powered by Galaxy AI, Integrated Google Gemini on the watch, Dual-GPS for high-precision tracking, SOS and Track Back functions for outdoor safety, Intelligent fitness features and goal tracking, Battery Life - Up to 100h, Connectivity - LTE, Bluetooth® 5.3, WLAN 2,4 GHz & 5 GHz, NFC, Dual-GPS (L1+L5), Compatibility - Android, Build Material - Titanium Case and Marine Band, Music playback - Yes, Water/Dust proof - IP6816, 10 ATM17, MIL-STD-810H18, Activity Tracking - ECG measurement, Blood pressure monitoring, Heart rate monitoring, Blood oxygen (SpO2) measurement, Sleep apnea monitoring, Bioelectrical Impedance Analysis (body composition), Global Positioning - Glonass, Beidou, Galileo, ",
      "name": "2) Samsung Galaxy Watch Ultra (2025) LTE Smartwatch, 47mm",
      "pros": " Pros: Dual-GPS and outdoor safety tools (SOS, Track Back) suit hiking and training; up to 100h battery and LTE keep you connected longer; rugged titanium build with 10 ATM and MIL-STD-810H for tough use.",
      "cons": " Cons: 47mm size may feel bulky on smaller wrists; Android-only compatibility."
  },
  {
      "slug": "apple-ultra-2-gps-cellular-titanium-case-and-ocean-band",
      "text": "Apple Watch Ultra 2 GPS + Cellular, Titanium Case, 49mm, Type - Apple Watch, Features - Powered by new S9 SiP, Double Tap Gesture (answer a call, open a notification, play and pause music and more), LTPO2 OLED Always-On Retina display (Up to 3000 nits), Faster on-device Siri with health data access, Precision Finding for iPhone, Sleep Tracking, Sleep apnea notifications, Fall Detection and Crash detection, Siren, Customizable Action Button, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Blood Oxygen app, ECG app, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Precision dual-frequency GPS, Durable from -20° C to 55° C, Emergency SOS, International Emergency Calling, Strong Battery Performance, Pair Multiple Watches with Family Setup, Battery Life - Up to 36h / 72h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Titanium Case and Ocean Band, Music playback - Yes, Water/Dust proof - Up to 100m / IP6X, Activity Tracking - Blood oxygen, Electrocardiography (ECG), Hours slept, Resting heart rate, Target heart rate, Skin temperature, Running (Stride Length, Ground Contact Time, Vertical Oscillation), Depth/Pressure/Location Tracking for Divers, Multisport Workouts, Global Positioning - Galileo, GLONASS, GPS, ",
      "name": "3) Apple Watch Ultra 2 GPS + Cellular, 49mm",
      "pros": " Pros: Super-bright 3000-nit display and precision dual-frequency GPS for outdoor sport; cellular, Action Button, and safety features (Fall/Crash detection, Siren) add confidence; S9 chip with Double Tap for quick control.",
      "cons": " Cons: Works best with an iPhone; 49mm case may be large for everyday wear."
  },
  {
      "slug": "apple-mac-mini-m4-10cpu-16gb-256gb-10gpu",
      "text": "Mac Mini - Apple M4 Chip 16GB Memory 256GB SSD - Integrated 10-core GPU, Model - MU9D3D/A, Memory - 16GB, Storage - 256GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M4, Dimensions - 14.01 x 14.01 x 1.26 cm • 1.16 kg, Operating System - macOS, Keyboard Language - , ",
      "name": "4) Mac mini (M4, 16GB/256GB)",
      "pros": " Pros: Desktop-grade M4 performance in a compact, quiet box; easy to pair with your own monitor for a flexible workspace; great short-term power boost for creative or code projects.",
      "cons": " Cons: Requires separate monitor/keyboard/mouse; 256GB storage may feel tight for media-heavy workflows."
  },
  {
      "slug": "sony-virtual-reality-sony-playstation-vr2",
      "text": "Sony PSVR2 VR Headset, Model - Playstation VR2, Display - OLED display, Tracking - 4 embedded cameras for headset and controller tracking​. IR camera for eye tracking per eye, Controller - Bluetooth® Ver. 5.1​ , USB-C charging, Resolution - 2000x2040 per eye, Audio Input - Built-in microphone, Connections - USB-C, Controllers - 2x controllers, Audio Output - Stereo headphone jack, Refresh rate - 90Hz - 120Hz, Field of View - 110° field of view and foveated rendering, More Features - No games included, Motion sensor - Six-axis motion sensor system (3-axis gyroscope, 3-axis acceleration), Picture Quality - 4K HDR, Connection sensor - IR proximity sensor, Space Requirements - 1m x 1m of clear space, roomscale mode requires 2m x 2m of free space., Supported platforms - PS5, ",
      "name": "5) Sony PSVR2 (VR Headset)",
      "pros": " Pros: OLED 4K HDR visuals with eye tracking and foveated rendering for immersive play; precise inside-out tracking and 110° FOV; plug-and-play with PS5.",
      "cons": " Cons: PS5 required and no games included; needs clear floor space to use room-scale modes."
  },
  {
      "slug": "dreame-vacuum-cleaner-dreame-l20-ultra",
      "text": "Dreame L20 Ultra Robot Vacuum Cleaner , Filter - HEPA, Control - Controllable via smartphone & voice assistants (Amazon Alexa, Google Assistant), Runtime - 260 min (4.3 hours), Dimensions - 35 x 10.4 x 35 cm / 4.3 kg, Suitable for - Tiles, hardwood floors, laminates, parquet floors, carpets, Special Features - Extendable mops, 4.5 liter fresh water container, 4 liter dirty water container, obstacle detection, wet mopping function, with combination brush for carpets and hard floors, liftable brush and intelligent carpet detection, and an impressive suction power of 7000 Pa, Scope of Delivery - Robot vacuum cleaner, base station, cleaning tool, power cable, 1x main brush, 2x mopping pad, 2x mop holder, 1x side brush, Water tank Volume - 0.08 L, Dust container volume - 0.3 L, ",
      "name": "6) Dreame L20 Ultra Robot Vacuum Cleaner",
      "pros": " Pros: High 7000 Pa suction with extendable mops and carpet detection; large auto-fill/auto-empty base reduces upkeep; app and voice control for hands-off schedules.",
      "cons": " Cons: Dock and water tanks take noticeable space; first mapping/setup takes some time."
  },
  {
      "slug": "dji-mini-3-fly-more-combo-dji-rc",
      "text": "DJI Mini 3 Fly More Combo & DJI RC, Drone, Camera - Vertical rotating camera gimbal, 1/1.3\" CMOS sensor, Flight time - 38 minutes x 3 Batteries, Drone Weight - 249g, Video recording - Up to 4K30p, Special features - Includes DJI RC smart controller, Smart recording features, Scope of delivery - DJI Mini 3 with DJI RC Remote (Fly More Combo), RC Remote Controller, 3 x Intelligent Flight Battery, 3 x Propeller Set, 18 x Screw, Screwdriver, Gimbal Protector, USB-C PD Cable, USB-C 3.0 Cable, Shoulder Bag, Obstacle avoidance - Downward, Dimensions (folded) - 148.0 x 90.0 x 62.0 mm, ",
      "name": "7) DJI Mini 3 Fly More Combo & DJI RC",
      "pros": " Pros: Sub-249g drone avoids some registration hurdles in many regions; Fly More kit with 3 batteries and RC means long sessions out of the box; 4K video and vertical shooting for socials.",
      "cons": " Cons: Limited obstacle avoidance (downward only); tops out at 4K30p."
  },
  {
      "slug": "delonghi-coffee-machine-delonghi-eletta-explore-ecam-450-55-g",
      "text": "De'Longhi Eletta Explore ECAM 450.55 Coffee Machine, Power - 1450W, Display - LCD touch screen (TFT), Grinder - Adjustable grinder, Cleaning - Rinsing function, descaling program, removable brew group, adjustable water hardness, Features - 4 user profiles for individual storage of preferences, 42 pre-installed recipes, suitable for coffee beans and coffee powder, touch control, hot water function, adjustable hot water temperature, jug function, American coffee function, cold brew function, double height-adjustable coffee spout max. 170mm, 2-cup function, programmable switch-off time, auto-clean function for automatic and hygienic cleaning of the milk pipes with hot water and steam, LatteCrema and LatteCrema Cool milk foam system for preparing hot or cold milk foam, Dimensions - 260 x 385 x 450 mm / 11.4 kg, Milk system - Yes, with a removable milk container, Water amount - Adjustable, Coffee amount - Adjustable, Pump pressure - 19bar, Scope of delivery - milk container LatteCrema Hot, milk container LatteCrema Cool, silicone ice cube mold (\"cube\"), separate hot water outlet, cleaning brush, coffee measure, Coffee temperature - Adjustable, Water tank capacity - 1.8l, detachable with integrated water filter, Fixed water connection - No, Capacity bean container - 300g, Coffee grounds container capacity - 14 portions, ",
      "name": "8) De’Longhi Eletta Explore ECAM 450.55",
      "pros": " Pros: 42 recipes plus hot/cold LatteCrema for café drinks at home; 4 user profiles to save preferences; thorough auto-clean routines for milk system.",
      "cons": " Cons: Large footprint; regular descaling and milk-system care still required."
  },
  {
      "slug": "optoma-uhd38x-projector",
      "text": "Optoma UHD38x Projector - 4K UHD, Brightness - 4000 ANSI lumens, Connections - 2 x HDMI 2.0, 1 x Audio 3.5mm, 1 x S/PDIF, 1 x USB-A power 1.5A, 1 x RS232, 1 x 12V trigger, Aspect ratio - 16:9, Picture quality - 4K UHD, Projection size - 0.84m - 7.62m, 3D functionality - Full 3D, Special features - True 4K UHD resolution, Lightning fast gaming projector, Full 3D compatible, Screen resolution - 3840 x 2160 pixels, Projection distance - 1.21m - 9.9m, ",
      "name": "9) Optoma UHD38x Projector (4K UHD)",
      "pros": " Pros: Bright 4000 lumens for daytime viewing; true 4K with low-latency modes for gaming; wide throw range for different room sizes.",
      "cons": " Cons: Built-in smart apps not included—plan on a streaming stick; brightest modes may add fan noise."
  },
  {
      "slug": "roborock-vacuum-cleaner-roborock-s8-pro-ultra",
      "text": "Roborock S8 Pro Ultra Vacuum Cleaner, Battery - 5.2Ah, Li-Ion, Capacity - 0.55l (0.20l wet, 0.35l dry), Features - Automatic dust discharge, washable EPA filter (E11), programmable cleaning times, floor brush, side brush, app control, voice control (Amazon Alexa, Apple HomeKit, Google Assistant), DuoRoller riser brush, VibraRise 2.0 mopping system: 5mm mop lift, Carpet Boost+ system, Reactive 3D obstacle avoidance system, Dimensions - 96 x 350 mm / 14.4 kg, Navigation - Laser sensors, obstacle detection, overcoming obstacles (up to 22mm), virtual walls, Accessories - Suction station, dust filter, wipes, power cord, Noise level - 67dB(A), Charging time - 6h, Cleaning modes - Automatic, carpet, wipe function, Operating time - 180min, Charging system - Automatic, RockDock™ Ultra - Self-washing: automatically washes the robot mop during and after cleaning, Self-drying: with warm air, Self-emptying: no need to change the dust bag for up to 7 weeks, Self-refilling: During cleaning, the RockDock™ Ultra fills the water tank of the vacuum robot , Self-cleaning: cleans the RockDock™ Ultra wash station, simplifying maintenance, Scope of delivery - Robot vacuum cleaner, suction station, dust filter, wipes, power cable, Recommended room size - Max. 300m², ",
      "name": "10) Roborock S8 Pro Ultra",
      "pros": " Pros: RockDock Ultra handles self-wash, self-empty, self-dry—minimal maintenance; strong vacuum/mop combo with obstacle avoidance; long 180min runtime for larger homes.",
      "cons": " Cons: Large dock needs floor space and a power outlet; 6h recharge is lengthy if you clean multiple times a day."
  },
  {
      "slug": "apple-macbook-pro-14-m4-10cpu-16gb-512gb-10gpu",
      "text": "MacBook Pro 14\" - Apple M4 Chip 16GB Memory 512GB SSD - Integrated 10-core GPU, Model - MW2U3D/A, Memory - 16GB, Display - 14.2 inches (3024 x 1964), Storage - 512GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M4, Dimensions - 22.12 x 31.26 x 1.55 cm • 1.61 kg, Operating System - macOS, Keyboard Language - German, ",
      "name": "11) MacBook Pro 14\" (M4, 16GB/512GB)",
      "pros": " Pros: Pro-grade M4 power and stunning 14.2\" display for editing, dev work, and multitasking; silent, cool performance and strong battery life; great renter option for short intense projects.",
      "cons": " Cons: Heavier and pricier than an Air for casual use."
  },
  {
      "slug": "apple-macbook-air-13-m4-10cpu-16gb-256gb-8gpu",
      "text": "MacBook Air 13\" - Apple M4 Chip 16GB Memory 256GB SSD Integrated 8-core GPU, Model - MW123D/A, Memory - 16GB, Display - 13.6 inches (2560 x 1664), Storage - 256GB SSD, Graphics - Apple Integrated 8-core GPU, Processor - Apple M4, Dimensions - 30.41 x 21.5 x 1.13 cm • 1.24 kg, Operating System - macOS, Keyboard Language - German, ",
      "name": "12) MacBook Air 13\" (M4, 16GB/256GB)",
      "pros": " Pros: Thin, light, and silent with strong all‑day battery; M4 power feels fast for everyday work and creative apps; perfect flexible upgrade without buying new.",
      "cons": " Cons: 256GB storage fills fast with large media; fewer ports than Pro models."
  },
  {
      "slug": "apple-tablet-11-ipad-air-2025-wifi-8gb-128gb",
      "text": "Apple 11\" iPad Air (2025) - WIFI - iOS - 128GB, Memory - 8GB, Battery - 28,93 Wh, Display - 11-inch Liquid Retina (2360 x 1640), Storage - 128GB, Processor - Apple M3, Dimensions - 19.2 x 26.1 x 3.3 cm (0.46kg), Rear Camera - 12MP, Connectivity - WIFI, Front Camera - 12MP, Operating System - iOS, ",
      "name": "13) Apple iPad Air 11\" (2025, M3, Wi‑Fi, 128GB)",
      "pros": " Pros: M3 performance in a lightweight tablet—great for study, notes, and creative apps; 11\" Liquid Retina is a sweet spot for portability; easy to pair with Pencil/keyboard (if needed).",
      "cons": " Cons: Accessories not included; iPadOS may not replace a full laptop for some workflows."
  },
  {
      "slug": "samsung-smartphone-galaxy-z-fold7-12-gb-512-gb",
      "text": "Samsung Galaxy Z Fold7 Smartphone  - 512 GB - Dual SIM, Memory - 12 GB, Battery - 4400mAh, Display - 8.0(6.5)-inch Foldable Dynamic LTPO AMOLED 2X (1969 x 2184), Storage - 512 GB, Processor - Samsung Snapdragon 8 Elite (3 nm), Dimensions - 14.32 x 15.84 x 0.42 cm (0.215kg), Rear Camera - 200MP + 12MP +10MP, Connectivity - 5G, Front Camera - 10MP, Operating System - Android 16, ",
      "name": "14) Samsung Galaxy Z Fold7 (512GB)",
      "pros": " Pros: Phone-to-tablet foldable gives big-screen multitasking on demand; Snapdragon 8 Elite performance and 200MP camera for content creation; rental lets you test foldable life before committing.",
      "cons": " Cons: Thicker and heavier than a standard phone; some apps still optimize better than others for the large inner display."
  },
  {
      "slug": "apple-series-10-gps-cellular-aluminium-case-and-sport-band-46mm",
      "text": "Apple Watch Series 10 GPS + Cellular, Aluminium Case, 46mm, Type - Apple Watch, Features - Powered by new S10 SiP, LTPO3 OLED Always-On Retina display (Wide-angle OLED, 40% brighter), Sleep Tracking, Sleep apnea notifications, Double Tap Gesture (answer a call, open a notification, play and pause music and more), Faster on-device Siri with health data access, Precision Finding for iPhone, Crash detection, Fall Detection, Heart arrhythmia, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Pair Multiple Watches with Family Setup, Apple Pay, Listen Music, Podcast, Audiobooks, Band Size - M/L, Battery Life - Up to 18h / 36h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - Up to 50m, Activity Tracking - Continuous Heart Rate Tracking, Steps taken, Hours slept, Resting heart rate, Target heart rate, Skin temperature, Multisport workouts; Strength training, HIIT, Pilates, Meditation, Swimming, Running, Yoga, Cycling and Other Sports, Global Positioning - Galileo, GLONASS, GPS, ",
      "name": "15) Apple Watch Series 10 GPS + Cellular, 46mm",
      "pros": " Pros: Brighter wide‑angle OLED, S10 chip, and on‑device Siri; extensive health/fitness tracking; cellular freedom without your iPhone nearby.",
      "cons": " Cons: Daily charging for most users; iPhone required for full setup and features."
  },
  {
      "slug": "apple-macbook-pro-14-m4-pro-12cpu-24gb-512gb-16gpu",
      "text": "MacBook Pro 14\" - Apple M4 Pro Chip 24GB Memory 512GB SSD - Integrated 16-core GPU, Model - MX2H3D/A, Memory - 24GB, Display - 14.2 inches (3024 x 1964), Storage - 512GB SSD, Graphics - Apple Integrated 16-core GPU, Processor - Apple M4 Pro, Dimensions - 22.12 x 31.26 x 1.55 cm • 1.61 kg, Operating System - macOS, Keyboard Language - German, ",
      "name": "16) MacBook Pro 14\" (M4 Pro, 24GB/512GB)",
      "pros": " Pros: Extra GPU/CPU cores and 24GB RAM handle heavy pro apps and multitasking; same portable 14\" form factor with premium display; great short‑term workstation.",
      "cons": " Cons: Overkill if you only browse and stream; higher monthly cost than Air‑class devices."
  },
  {
      "slug": "samsung-tablet-galaxy-tab-s10-fe-wifi-8gb-128gb",
      "text": "Samsung Tablet, Galaxy Tab S10 FE - WIFI - Android - 128GB, Memory - 8GB, Battery - 8000 mAh, Display - 10.9-inch (2304 x 1440), Storage - 128GB, Processor - Samsung Exynos 1580, Dimensions - 16.58 x 25.43 x 0.6 cm (0.5kg), Rear Camera - 13MP, Connectivity - WIFI, Front Camera - 12MP, Operating System - Android, ",
      "name": "17) Samsung Galaxy Tab S10 FE (Wi‑Fi, 128GB)",
      "pros": " Pros: Big 10.9\" display and 8000 mAh battery for study and streaming; lightweight and portable; great value entry to Android tablets.",
      "cons": " Cons: Mid-range chip may feel modest for heavy gaming; tablet app ecosystem quality varies by app."
  },
  {
      "slug": "samsung-smartphone-galaxy-z-fold7-12-gb-256-gb",
      "text": "Samsung Galaxy Z Fold7 Smartphone  - 256 GB - Dual SIM, Memory - 12 GB, Battery - 4400mAh, Display - 8.0(6.5)-inch Foldable Dynamic LTPO AMOLED 2X (1968 x 2184), Storage - 256 GB, Processor - Samsung Snapdragon 8 Elite (3 nm), Dimensions - 14.32 x 15.84 x 0.42 cm (0.215kg), Rear Camera - 200MP + 12MP +10MP, Connectivity - 5G, Front Camera - 10MP, Operating System - Android 16, ",
      "name": "18) Samsung Galaxy Z Fold7 (256GB)",
      "pros": " Pros: Same big-screen productivity and flagship performance at a lower capacity price point; great for multi-window work and travel media.",
      "cons": " Cons: Bulkier than a slab phone; large-screen app support can vary."
  },
  {
      "slug": "canon-eos-r6-mark-ii-rf-24-105mm-f4-7-1-is-stm",
      "text": "Canon EOS R6 II Camera Kit with RF 24-105 mm f/4.0-7.1 IS STM Kit Lens, ISO - 100 to 102,400 (Extended 50 to 204,800), HDMI - RAW 6144 x 4032 up to 59.94 fps, Lens - Canon RF 24-105mm F/4-7.1 IS STM, Photo - C-RAW, HEIF, JPEG, Video - H.264/H.265/MPEG-4 4:2:2 10-Bit; UHD 4K (3840 x 2160) at 23.98/25/29.97/50/59.94 fps [60 to 340 Mb/s], Storage - Dual UHS-II SD Card slot, Mount Type - Canon RF, Screen Type - 3\" 1,620,000-Dot Articulating Touchscreen LCD, View Finder - 3,690,000 Dot OLED EVF, Connectivity - 1x Micro-HDMI, 1x 3.5mm TRS input, 1x 3.5mm TRS Output, USB-C interface, 2.4/5GHz Wi-Fi, Bluetooth, Image Sensor - 24.2 Megapixel Full Frame CMOS sensor, Shutter Speed - 1/8000 to 30s, Stabilisation - 5-Axis Sensor-Shift, Max Resolution - 6144 x 4032, Auto-Focus Points - 1053-point Phase Detection / 1053-point Contrast Detection, Scope of delivery - EOS R6 mkii, Canon RF 24-105mm F/4-7.1 IS ST, LP-E6NH battery LC-E6 battery charger, Camera cover, Camera strap, ",
      "name": "19) Canon EOS R6 II Kit (RF 24‑105mm)",
      "pros": " Pros: 24.2MP full-frame with fast AF and 4K60 10‑bit video; IBIS and dual UHS‑II slots for reliable shoots; kit lens covers versatile range.",
      "cons": " Cons: Kit lens has variable aperture (f/4‑7.1), not ideal for low light; learning curve for advanced video settings."
  },
  {
      "slug": "apple-smartphone-galaxy-s25-12gb-128-gb-0b9ce761-799b-4c23-8d1e-6dc9c6b4cb62",
      "text": "Samsung Galaxy S25+ Smartphone  - 256 GB - Dual SIM, Memory - 12GB, Battery - 4775 mAh, Display - 6.7-inch Dynamic AMOLED 2X (1440 x 3120), Storage - 256 GB, Processor - Qualcomm Snapdragon Snapdragon 8 Elite for Galaxy (SM8750), Dimensions - 7.58 x 15.84 x 0.73 cm (0.19kg), Rear Camera - 12 MP + 50 MP + 10 MP, Connectivity - 5G, Front Camera - 12 MP, Operating System - Android 15, ",
      "name": "20) Samsung Galaxy S25+ (256GB)",
      "pros": " Pros: Sharp 6.7\" AMOLED at high resolution with fast Snapdragon 8 Elite; reliable triple-camera setup for day-to-day content; 4775 mAh battery for all‑day use.",
      "cons": " Cons: No periscope zoom; premium monthly price vs mid‑range options."
  },
  {
      "slug": "apple-13-ipad-pro-2024-wi-fi-cellular-8gb-256gb",
      "text": "Apple 13\" iPad Pro (2024) - Wi-Fi + Cellular - M4 - 256GB, Memory - 8GB, Battery - 38,99 Wh, Display - 13-inch Ultra Retina XDR display (2752 x 2064), Storage - 256GB, Processor - Apple M4, Dimensions - 22.75 x 29.55 x 3.15 cm (0.96kg), Rear Camera - 12MP, Connectivity - Wi-Fi + Cellular, Front Camera - 12MP, Operating System - iOS, ",
      "name": "21) Apple iPad Pro 13\" (2024, M4, Wi‑Fi + Cellular, 256GB)",
      "pros": " Pros: Ultra Retina XDR display is fantastic for HDR content and creative work; M4 chip for pro apps and future‑proof performance; cellular keeps you connected on the go.",
      "cons": " Cons: Keyboard/Pencil accessories cost extra; more power than casual users may need."
  },
  {
      "slug": "roborock-s8-maxv-ultra-robot-cleaner",
      "text": "Roborock S8 MaxV Ultra Robot Cleaner, Dimensions - 409 x 419 x 470 mm / 14,6 kg, Charging time - Approx. 4 hours, Suction power - 10,000 Pa, Dust container - 2.5 l (station), 270 ml (robot), Operation area - Tiles, hardwood floors, laminates, parquet floors, stone floors, carpets, Special features - 10,000Pa suction power, FlexiArm side brush, additional edge wiping system, DuoRoller Riser solid rubber brush, VibraRise 3.0 wiping system, CarpetBoost+ system, real-time video call, 60°C hot water mop wash, 60°C hot air drying, intelligent dirt detection, automatic dosage for cleaning solutions, integrated intelligent voice assistant, Cleaning along the floor direction, Wet mopping function - Yes, Maximum operating time - 180 mins, Maximum volume of the water tank - 4 L (station), 100 ml (robot), System or compatible with system - Amazon Alexa, Apple Siri, Google Home, ",
      "name": "22) Roborock S8 MaxV Ultra",
      "pros": " Pros: Massive 10,000 Pa suction plus edge/side brush for corner cleaning; 60°C hot water wash and hot air drying keep the mop and dock fresh; built-in voice assistant and video call for on‑the‑spot control.",
      "cons": " Cons: Large station with multiple tanks needs space; video features may not appeal to privacy‑focused users."
  },
  {
      "slug": "apple-series-10-gps-aluminium-case-and-sport-band-42mm",
      "text": "Apple Watch Series 10 GPS, Aluminium Case, 42mm, Type - Apple Watch, Features - Powered by new S10 SiP, LTPO3 OLED Always-On Retina display (Wide-angle OLED, 40% brighter), Sleep Tracking, Sleep apnea notifications, Double Tap Gesture (answer a call, open a notification, play and pause music and more), Faster on-device Siri with health data access, Precision Finding for iPhone, Crash detection, Fall Detection, Heart arrhythmia, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Pair Multiple Watches with Family Setup, Apple Pay, Listen Music, Podcast, Audiobooks, Band Size - S/M, Battery Life - Up to 18h / 36h inLow Power Mode, Connectivity - GPS, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - Up to 50m, Activity Tracking - Continuous Heart Rate Tracking, Steps taken, Hours slept, Resting heart rate, Target heart rate, Skin temperature, Multisport workouts; Strength training, HIIT, Pilates, Meditation, Swimming, Running, Yoga, Cycling and Other Sports, Global Positioning - Galileo, GLONASS, GPS, ",
      "name": "23) Apple Watch Series 10 GPS, 42mm",
      "pros": " Pros: Bright wide‑angle OLED and S10 chip in a lighter, GPS‑only package; full Apple health/fitness features; budget‑friendlier than LTE.",
      "cons": " Cons: No cellular for standalone calls; typical 18h battery for most users."
  },
  {
      "slug": "gopro-hero-13-black",
      "text": "GoPro HERO 13 Black, GPS - Tracks information about speed, altitude, G-force and more, Video - Up to 5.3K60p / 4K120p, Storage - MicroSD, Photography - 27MP photos, Slow Motion - 13x (720p400fps) for 15 seconds / 12x (900p360fps) for 15 seconds / 4x (5.3K120fps) for 5 seconds, Stabilisation - Hypersmooth, Waterproofing - up to 10 meters, Special features - GPS, ultra-slow-motion, HLG-HDR Video recording, WLAN-6, Scope of delivery - Gopro Hero 13 Black, Enduro Battery, Mounting kit, USB-C cable, ",
      "name": "24) GoPro HERO 13 Black",
      "pros": " Pros: 5.3K60 and 4K120 capture with HyperSmooth stabilization; GPS overlays for speed and altitude; waterproof to 10m—great for travel and sports.",
      "cons": " Cons: Battery life shortens at high resolutions/frame rates; requires a microSD card."
  },
  {
      "slug": "samsung-smartphone-galaxy-z-flip7-12-gb-512-gb",
      "text": "Samsung Galaxy Z Flip7 Smartphone  - 512 GB - Dual SIM, Memory - 12 GB, Battery - 4300mAh, Display - 6.9(4.1)-inch Foldable Dynamic LTPO AMOLED 2X (1081 x 2520), Storage - 512 GB, Processor - Samsung Exynos 2500 (3 nm), Dimensions - 7.52 x 16.67 x 0.65 cm (0.188kg), Rear Camera - 50MP + 12MP, Connectivity - 5G, Front Camera - 10MP, Operating System - Android 16, ",
      "name": "25) Samsung Galaxy Z Flip7 (512GB)",
      "pros": " Pros: Compact flip design fits pockets easily; flagship performance with plenty of storage; flex modes are handy for hands-free photos and video.",
      "cons": " Cons: Foldable screen feel may not suit everyone; fewer focal lengths than multi‑camera flagships."
  },
  {
      "slug": "dyson-airwrap-i-d-multistyler",
      "text": "Dyson Airwrap i.d. Multistyler, Dimensions - 41 x 48 x 272 mm / 0.55 kg, Box contents - DYSON Airwrap id multi-styler, drying attachment, conical airwrap curling attachment, long airwrap curling attachment 40 mm, round volume brush, soft smoothing brush, filter cleaning brush, attachment for quick drying, Maximum power - 1300 watts, Special features - Intelligent multi-styler enabled with a bluetooth which can be connected to the MyDyson app to adjust heat, airflow and time setting at the touch of a button, new conical curling attachment which curls closer to the roots., Temperature levels - 3 temperature levels (max. 90°C) and button for the cold setting (28 °C), ",
      "name": "26) Dyson Airwrap i.d. Multistyler",
      "pros": " Pros: Styles with intelligent heat control to help protect hair; Bluetooth app presets for heat/airflow/time make results more repeatable; versatile attachments for curls, smoothing, and volume.",
      "cons": " Cons: Takes practice to master each attachment; not the most compact for travel."
  },
  {
      "slug": "delonghi-coffee-machine-delonghi-magnifica-evo-ecam-290-81-tb",
      "text": "De'Longhi Magnifica Evo ECAM 290.81.TB Coffee Machine, Screen - Yes, Grinder - Adjustable grinder, Cleaning - Rinsing function, descaling program, removable brew group, adjustable water hardness, Features - Suitable for coffee beans and coffee powder, touch control operation, hot water function, cup height max. 140mm, double coffee spout, 2-cup function, automatic switch-off (energy-saving mode), programmable switch-off time, Programs - 7 pre-installed drinks - espresso, coffee, long, cappuccino, latte macchiato, hot water, MyLatte milk foam, Dimensions - 440 x 240 x 360 mm / 9.6 kg, Milk system - Yes, with a removable milk container, Water amount - Adjustable, Pump pressure - 15 bar, Amount of coffee - Adjustable in 3 levels, Special features - LatteCrema milk system with adjustable milk foam consistency and automatic cleaning, MyLatte function – Decide how much milk you want to use to prepare your coffee milk drink, conical grinder with adjustable grinding level (13 levels), Scope of delivery - milk container, water filter, cleaning brush, coffee measure, Coffee temperature - Adjustable, Water tank capacity - 1.8l, detachable with integrated water filter, Capacity bean container - 250g, Coffee grounds container capacity - 14 portions, ",
      "name": "27) De’Longhi Magnifica Evo ECAM 290.81.TB",
      "pros": " Pros: 7 one‑touch drinks and LatteCrema milk foam with auto‑clean; adjustable grind/temperature/volume to dial your taste; MyLatte function to use exactly the milk you want.",
      "cons": " Cons: Requires periodic descaling and milk system rinses; larger machine for smaller counters."
  },
  {
      "slug": "canon-eos-r6-mark-ii-body",
      "text": "Canon EOS R6 II Mirrorless Camera Body, ISO - 100 to 102,400 (Extended 50 to 204,800), HDMI - RAW 6144 x 4032 up to 59.94 fps, Photo - C-RAW, HEIF, JPEG, Video - H.264/H.265/MPEG-4 4:2:2 10-Bit; UHD 4K (3840 x 2160) at 23.98/25/29.97/50/59.94 fps [60 to 340 Mb/s], Storage - Dual UHS-II SD Card slot, Mount Type - Canon RF, Screen Type - 3\" 1,620,000-Dot Articulating Touchscreen LCD, View Finder - 3,690,000 Dot OLED EVF, Connectivity - 1x Micro-HDMI, 1x 3.5mm TRS input, 1x 3.5mm TRS Output, USB-C interface, 2.4/5GHz Wi-Fi, Bluetooth, Image Sensor - 24.2 Megapixel Full Frame CMOS sensor, Shutter Speed - 1/8000 to 30s, Stabilisation - 5-Axis Sensor-Shift, Max Resolution - 6144 x 4032, Auto-Focus Points - 1053-point Phase Detection / 1053-point Contrast Detection, Scope of delivery - EOS R6 mkii, LP-E6NH battery LC-E6 battery charger, Camera cover, Camera strap, ",
      "name": "28) Canon EOS R6 II (Body)",
      "pros": " Pros: 24.2MP full frame with fast 4K60 10‑bit and outstanding AF; IBIS and dual UHS‑II slots for dependable shoots; compact, balanced body for hybrid creators.",
      "cons": " Cons: Requires RF lenses (not included); deeper menus/features mean a learning curve."
  },
  {
      "slug": "hisense-tv-hisense-65e77nq-pro",
      "text": "Hisense 65E77NQ PRO - TV 65\" QLED 4K, HDR - Yes (HDR10 / HDR10+ / HLG / Dolby Vision IQ), USB - 2 x (1x 2.0; 1x 3.0), HDMI - 4x HDMI (2x HDMI 2.1 ALLM, VRR); (1x eARC), Tuner - DVB-T2 / T / C / S2 / S, VIDAA - (Mobile App) (Android / iOS), Game Bar - Yes, Smart TV - VIDAA U7.6, Airplay 2 - Yes, Processor - Quad Core, Anti Glare - Yes, Quantum Dot - Yes, Aspect ratio - 16:9, Refresh rate - 120 Hz (native) / 144Hz (VRR), Game Mode Pro - (ALLM, VRR, 4K@144 Hz, Freesync), Alexa Built-In - Yes, VESA Wall Mount - 400 x 300 mm, Headphone Output - 1x, Sound Technology - Dolby Atmos, Dolby Audio, Display technology - QLED, Ethernet RJ45 Port - 1x, S/PDIF Audio Output - 1x, Composite (AV) Input - 1x, Screen diagonal in cm - 164, Common Interface (CI+) - 1.4 (EPC), Screen diagonal in inches - 65, Screen resolution in pixels - Ultra HD 3840 × 2160, Size with Stand (WxHxD) in cm - 145.1×89.4×30, Size without Stand (WxHxD) in cm - 145.1×83.6×7.5, Weight with / without Stand in kg - 19.2 / 18.6, ",
      "name": "29) Hisense 65E77NQ PRO (65\" QLED 4K)",
      "pros": " Pros: 120Hz native panel with 144Hz VRR and Game Mode Pro; Dolby Vision IQ and Quantum Dot for vivid HDR; good port mix including eARC.",
      "cons": " Cons: VIDAA OS has fewer apps than Android TV; built‑in speakers are basic—soundbar recommended."
  },
  {
      "slug": "hp-15-fc0079ng-r7-5825u-16gb-512gb-copilot-pc",
      "text": "HP 15-fc0079ng Laptop - AMD Ryzen™ 7 5825U - 16GB - 512GB SSD - AMD AMD Radeon Graphics, Model - BV8D6EA#ABD, Memory - 16GB, Display - 15.6 inches (1920 x 1080 ), Storage - 512GB SSD, Graphics - AMD AMD Radeon Graphics, Processor - AMD Ryzen™ 7 5825U, Dimensions - 35.9 x 23.6 x 1.8 cm • 1.59 kg, Operating System - Windows® 11 Home, Keyboard Language - German, ",
      "name": "30) HP 15-fc0079ng (Ryzen 7 5825U, 16/512)",
      "pros": " Pros: 8‑core Ryzen performance for multitasking and study; 16GB RAM and 512GB SSD for smooth everyday use; 15.6\" FHD screen suits work and streaming.",
      "cons": " Cons: Integrated graphics limit AAA gaming; 60Hz display not ideal for high‑fps play."
  },
  {
      "slug": "dji-mini-2-se-fly-more-combo",
      "text": "DJI Mini 2 SE Fly More Combo, Drone, GPS - GPS and GLONASS satellite positioning systems, Camera - 12 MP sensor capable of recording 2.7K video at 30 frames per second, Gimbal - 3-axis motorized gimbal for stable and smooth footage, Weight - 249 grams, Flight time - Up to 31 minutes of flight time, Maximum range - Up to 10 kilometers of transmission range, Maximum speed - Up to 57.6 km/h in Sport mode, Obstacle sensing - downward obstacle sensing, Special Features - One-tap takeoff, Auto Return home, QuickShots & Panorama Modes, Remote controller - Dedicated remote controller included with a range of up to 4 kilometers, ",
      "name": "31) DJI Mini 2 SE Fly More Combo",
      "pros": " Pros: 249g weight and long flight time—easy to pack and fly; Fly More kit adds batteries and accessories; solid 2.7K/12MP with 3‑axis gimbal.",
      "cons": " Cons: No obstacle avoidance beyond downward; video capped at 2.7K30."
  },
  {
      "slug": "apple-macbook-air-15-m4-10cpu-16gb-256gb-10gpu",
      "text": "MacBook Air 15\" - Apple M4 Chip 16GB Memory 256GB SSD - Integrated 10-core GPU, Model - MW1L3D/A, Memory - 16GB, Display - 15.3 inches (2880 x 1864), Storage - 256GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M4, Dimensions - 34.04 x 23.76 x 1.15 cm • 1.51 kg, Operating System - macOS, Keyboard Language - German, ",
      "name": "32) MacBook Air 15\" (M4, 16GB/256GB)",
      "pros": " Pros: Big 15.3\" screen in a slim, quiet body; M4 chip breezes through work and light creative tasks; great battery for all‑day study or travel.",
      "cons": " Cons: 256GB storage is modest for large libraries; limited ports (use a hub if needed)."
  },
  {
      "slug": "apple-smartphone-iphone-15-pro-max-8gb-256gb",
      "text": "Apple iPhone 15 Pro Max - 256GB, Memory - 8GB, Battery - 4852 mAh, Display - 6.7-inch OLED Super Retina XDR (2796 x 1290), Storage - 256GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 17, ",
      "name": "33) Apple iPhone 15 Pro Max (256GB)",
      "pros": " Pros: Excellent triple-camera system for photo/video; large, bright 6.7\" display; premium build and performance for creators.",
      "cons": " Cons: Big phone footprint; premium monthly price compared to standard models."
  },
  {
      "slug": "roborock-vacuum-cleaner-roborock-s7-maxv-ultra",
      "text": "Roborock S7 MaxV Ultra Vacuum Cleaner , Control - Controllable via smartphone & voice assistants (Alexa, Google Assistant), Runtime - 3 hours, Dimensions - 35 x 35.3 x 9.7 cm / 4.65 kg, Suitable For - Tiles, hardwood floors, laminates, parquet floors, carpets, stone floors, Suction power - 5100Pa, Wipe function - yes, Special features - Ultrasonic wiping function with room-specific control of the amount of wiping water for up to 200m², laser distance sensors (LDS) & AI dual camera for 360° coverage and obstacle avoidance from 5 x 3.0 cm (W x H), intelligent path planning with real-time room maps & selective individual room planning with virtual vacuum & wipe no-go zones, overcoming obstacles of up to 20 mm (e.g. strips, carpets), movable solid rubber brush for better floor contact, suction station with automatic emptying, refilling of water and automatic cleaning of the wipe, Scope of delivery - Vacuum robot, suction station, dust filter, wipes, power cable, operating instructions, Water tank volume - 0.2 L, Dust container volume - 0.4 L, ",
      "name": "34) Roborock S7 MaxV Ultra",
      "pros": " Pros: Self‑empty, auto‑refill, and pad washing—truly low-maintenance; 5100 Pa suction with AI obstacle avoidance; maps rooms for targeted cleaning.",
      "cons": " Cons: Large dock; on‑robot water tank is small, though auto‑refill helps."
  },
  {
      "slug": "apple-smartphone-iphone-16e-8gb-128gb",
      "text": "Apple iPhone 16e  - 128GB - Dual SIM, Memory - 8GB, Battery - 4005 mAh, Display - 6.1-inch OLED (2532 x 1170), Storage - 128GB, Processor - Apple A18, Dimensions - 7.15 x 14.67 x 0.78 cm (0.167kg), Rear Camera - 48MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 18, ",
      "name": "35) Apple iPhone 16e (128GB)",
      "pros": " Pros: Fast A18 chip in a lighter, compact form—great daily driver; upgraded 48MP main camera; rental is a smart way to try iOS 18.",
      "cons": " Cons: Single rear lens limits optical zoom options; 128GB storage can fill with 4K video."
  },
  {
      "slug": "dreame-vacuum-cleaner-dreame-dreame-l10s-ultra",
      "text": "Dreame L10s Ultra Vacuum Cleaner, Control - Controllable via smartphone & voice assistants (Alexa, Google Assistant), Runtime - 3 hours, Dimensions - 35 x 35 x 9.7 cm / 3.7 kg, Suitable For - Tiles, hardwood floors, laminates, parquet floors, carpets, stone floors, Suction power - 5300Pa, Wipe function - yes, Special features - High precision sensors, Wet/dry, Spotless cleaning, 3D navigation, up to 60 days of automatic cleaning, Scope of delivery - Vacuum robot, suction station, dust filter, wipes, power cable, operating instructions, Water tank volume - 0.08 L, Dust container volume - 0.35 L, ",
      "name": "36) Dreame L10s Ultra",
      "pros": " Pros: 5300 Pa suction with 3D navigation and precise obstacle handling; up to ~60 days auto empty for low maintenance; strong mopping with wet/dry routines.",
      "cons": " Cons: Dock takes floor space; smaller on‑robot dust/water tanks."
  },
  {
      "slug": "sony-alpha-7r-v-body",
      "text": "Sony Alpha 7R V Mirrorless Camera Body, ISO - 100 to 32,000 in Manual, Auto Mode (Extended: 50 to 102,400), Photo - 3:2 JPEG / Raw - 60 MP (9504 x 6336), Video - H.265/XAVC HS 4:2:2 10-Bit UHD 4K (3840 x 2160) at 23.98/50/59.94 fps [50 to 200 Mb/s],  8K 24p, 4K 60p, FHD 120p 10-Bit Video, Storage - Dual slot CFexpress Type A / SD (UHS-II), Mount Type - Sony E, Screen Type - 3.2” 2,095,000 Dot 4-axis Tilting Touchscreen LCD, View Finder - 9,437,184 Dot OLED EVF, Connectivity - 1x HDMI output / 2 x 3.5mm TRS Stereo headphone Input + output / USB micro-B / USB Type-C / Bluetooth / Wi-Fi / 1 x PC Sync Socket Output /, Image Sensor - 61 Megapixel Full Frame EXMOR R BSI sensor, Shutter Speed - 1/8000 to 30s, Size & Weight - 131.3 x 96.9 x 82.4 mm / 723g, Stabilisation - 5-Axis Sensor-Shift, Max Resolution - 9504 x 6336, Auto-Focus Points - AI-Based Real-Time Tracking AF System - 693-point Phase Detection, Scope of delivery - Sony a7RV camera, Sony NP-FZ100 battery, Sony BC-QZ1 Battery Charger, Body cap, camera strap, USB-C Cable, ",
      "name": "37) Sony Alpha 7R V (Body)",
      "pros": " Pros: 61MP sensor for incredible detail; 8K/4K60 10‑bit video and class‑leading AF; high‑res EVF and flexible 4‑axis screen.",
      "cons": " Cons: Large files demand fast cards/storage; benefits most from premium lenses."
  },
  {
      "slug": "sony-camera-alpha-7-iii-body-ilce7m3",
      "text": "Sony Alpha 7 III Mirrorless Camera Body, ISO - 50 - 204,800, Video - UHD 4K30p Video, Storage - Dual SD Card slot, USH-II & UHS-I, Mount Type - Sony E, Screen Type - 3\" Tilting 921,600-Dot Touchscreen LCD, View Finder - 2,359,00-Dot OLED EVF, Connectivity - 1x Micro-HDMI output / 1x3.5mm TRS Stereo microphone input, 1x3.5mm TRS headphone output / Type-C interface / Micro-B interface / WiFi / Bluetooth, Image Sensor - 24.2MP Full-Frame CMOS Sensor, Shutter Speed - 30' -  1/8000, Stabilisation - 5-Axis Sensor-Shift, Max Resolution - 6000 x 4000, Auto-Focus Points - 693-Point Phase-Detection AF System, Scope of delivery - Sony A7III, NP FZ100 battery, AC adapter, Micro USB cable, Body cap, Shoulder strap., ",
      "name": "38) Sony Alpha 7 III (Body)",
      "pros": " Pros: 24MP full‑frame with great low‑light and dynamic range; 4K30, 5‑axis IBIS, and long battery life; strong value for hybrid shooters.",
      "cons": " Cons: Older UI and 4K limited to 30fps; lower‑res screen/EVF compared to newer bodies."
  },
  {
      "slug": "canon-rf-24-70mm-f-2-8-l-is-usm-lens",
      "text": "Canon RF 24-70mm f/2.8 L IS USM Lens, Focus - Autofocus (Nano USM), Mount - Canon RF mount, Length - 125.7mm, Weight - 900g, Aperture - F/2.8 to F/22, 9 blades, Lens type - Full Frame, Filter size - 82mm, Focal length - 24mm to 70mm, Image stabiliser - Yes (up to 5 stops), Scope of delivery - Canon RF 24-70mm F/2.8L IS USM lens, Front & Rear lens cap, Lens Hood (EW-88E), Minimum Focus Distance - 21cm, ",
      "name": "39) Canon RF 24–70mm f/2.8 L IS USM",
      "pros": " Pros: Constant f/2.8 aperture with 5‑stop IS—great for low light and video; sharp, fast Nano USM AF; versatile focal range for most shoots.",
      "cons": " Cons: Heavy (900g) for all‑day carry; 82mm filters cost more."
  },
  {
      "slug": "msi-graphics-card-geforce-rtx-5090-32g-ventus-3x-oc",
      "text": "Graphics Card MSI GeForce RTX 5090 32G VENTUS 3X OC, EAN - 4711377301633, GPU - NVIDIA GeForce RTX 5090, Slot - PCIe x16 Version 5.0, Cooling - Fan cooling, Capacity - 32 GB (GDDR7), Dimensions - 1.39 x 6.7 x 3.25 cm and 2.5 kg, Connections - 1x HDMI Version 2.1b, 3x Displayport Version 2.1a, Clock frequency - 2010 MHz, GPU boost clock - 2437 MHz, Operating systems - Windows 11, Windows 10, Manufacturer number - V530-060R, ",
      "name": "40) MSI GeForce RTX 5090 32G Ventus 3X OC",
      "pros": " Pros: Flagship 4K/8K performance with 32GB GDDR7; DLSS 3 and ample VRAM future‑proof demanding workflows; rental lets you stress‑test your setup before buying.",
      "cons": " Cons: Very large and power‑hungry—check PSU and case clearance; may be overkill for 1080p gaming."
  },
  {
      "slug": "google-smartphone-pixel-9a-8gb-128gb",
      "text": "Google Pixel 9a Smartphone - 128GB - Dual SIM, Memory - 8GB, Battery - 5100 mAh, Display - 6.3-inch P-OLED (1080 x 2424), Storage - 128GB, Processor - Google Tensor G4, Dimensions - 7.33 x 15.47 x 0.89 cm (0.186kg), Rear Camera - 48MP + 13MP, Connectivity - 5G, Front Camera - 13MP, Operating System - Android 15, ",
      "name": "41) Google Pixel 9a (128GB)",
      "pros": " Pros: Big 5100 mAh battery for all‑day use; clean Android with Pixel‑first AI features; strong main/ultra‑wide cameras for the price.",
      "cons": " Cons: No dedicated telephoto lens; mid‑tier performance vs flagship phones."
  },
  {
      "slug": "apple-series-10-gps-cellular-aluminium-case-and-sport-band-42mm",
      "text": "Apple Watch Series 10 GPS + Cellular, Aluminium Case, 42mm, Type - Apple Watch, Features - Powered by new S10 SiP, LTPO3 OLED Always-On Retina display (Wide-angle OLED, 40% brighter), Sleep Tracking, Sleep apnea notifications, Double Tap Gesture (answer a call, open a notification, play and pause music and more), Faster on-device Siri with health data access, Precision Finding for iPhone, Crash detection, Fall Detection, Heart arrhythmia, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Pair Multiple Watches with Family Setup, Apple Pay, Listen Music, Podcast, Audiobooks, Band Size - S/M, Battery Life - Up to 18h / 36h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - Up to 50m, Activity Tracking - Continuous Heart Rate Tracking, Steps taken, Hours slept, Resting heart rate, Target heart rate, Skin temperature, Multisport workouts; Strength training, HIIT, Pilates, Meditation, Swimming, Running, Yoga, Cycling and Other Sports, Global Positioning - Galileo, GLONASS, GPS, ",
      "name": "42) Apple Watch Series 10 GPS + Cellular, 42mm",
      "pros": " Pros: Cellular lets you run, call, and pay without your iPhone; bright wide‑angle OLED and S10 chip; full health/fitness suite with safety alerts.",
      "cons": " Cons: 18h typical battery; iPhone required for initial setup."
  },
  {
      "slug": "sony-playstation-5",
      "text": "Sony PlayStation 5, GPU - AMD Radeon™ RDNA 2, Ray Tracing Acceleration, variable frequency, up to 2.23 GHz (10.3 TFLOPS), Size - Approx. 390mm x 104mm x 260mm (width x height x depth)(excludes largest projection, excludes Base). 4.5kg, Type - Gaming Console, Model - PlayStation 5, Storage - GDDR6 16GB/448GB/s Bandwidth, Connection - 1x USB Type-A port (Hi-Speed USB), 1x USB Type-A port (Super-Speed USB 10Gbps), 2x USB Type-C port (Super-Speed USB 10Gbps), Video Output - HDMI OUT port, support of 4K 120Hz TVs, 8K TVs, VRR (specified by HDMI ver.2.1), Optical Drive - Ultra HD Blu-ray (66G/100G) ~10xCAVBD-ROM (25G/50G) ~8xCAVBD-R/RE (25G/50G) ~8xCAVDVD ~3.2xCLV, Main processor - x86-64-AMD Ryzen Zen 2, 8 Cores / 16 Threads, variable frequency, up to 3.5 GHz, Other features - 4K & 8K ready, 825GB custom SSD, up to 120fps, External Storage - Support for external USB 3.2 hard drives, Storage capacity - 825GB NVMe SSD, 5.5GB/s Read Bandwidth (Raw), Expandable Storage - internal expandable storage slot (requires a PCIe 4.0 M2 NVMe SSD), Target performance - 4K resolution, Up to 120fps with 120Hz output, 8K support, Additional Information - No games included, ",
      "name": "43) Sony PlayStation 5",
      "pros": " Pros: Fast custom SSD and 4K120/8K support for next‑gen gaming; huge game library and VRR/HDMI 2.1 support; easy to rent for events or new releases.",
      "cons": " Cons: Large console footprint; 825GB internal storage fills quickly—consider external or M.2 expansion."
  },
  {
      "slug": "apple-smartphone-iphone-14-pro-max-6gb-128gb",
      "text": "Apple iPhone 14 Pro Max - 128GB - Dual SIM, Memory - 6GB, Battery - 4323 mAh, Display - 6.7-inch OLED (2796 x 1290), Storage - 128GB, Processor - Apple A16 Bionic, Dimensions - 9.62 x 17.93 x 2.91 cm (0.43kg), Rear Camera - 48MP + 12MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 16, ",
      "name": "44) Apple iPhone 14 Pro Max (128GB)",
      "pros": " Pros: Strong triple‑camera system and fast performance; large OLED display for media and gaming; still a great value as a previous‑gen flagship.",
      "cons": " Cons: 128GB base storage can limit 4K shooting; larger and heavier than standard models."
  },
  {
      "slug": "msi-graphics-card-msi-geforce-rtx-5090-vanguard-32gb-gddr7",
      "text": "Graphics Card MSI GeForce RTX 5090 Vanguard 32GB GDDR7, EAN - 4711377302500, GPU - NVIDIA GeForce RTX 5090, Memory - 32 GB (GDDR7), Supports - Windows 11, Windows 10, Dimensions - 28.1 x 45.2 x 11.9 cm • 3.4 kg, Modell-Nr. - V530-018R, Connections - DisplayPort (3x), HDMI 2.1b, Memory Interface - 512-bit, Power Connectors - 1x 16-pin (12V-2x6), adapter included for 4x 8-pin PCIe, Boost Clock Speed - 2512 MHz, Maximum Resolution (pixels) - 7680 x 4320, ",
      "name": "45) MSI GeForce RTX 5090 Vanguard 32GB",
      "pros": " Pros: Extreme performance with 32GB GDDR7 and 512‑bit bus; high boost clocks for 4K/8K, AI, and 3D workloads; rental helps verify PSU/cooling before investing.",
      "cons": " Cons: Very large/heavy GPU—ensure case support and 16‑pin/adapter readiness; premium pricing tier."
  },
  {
      "slug": "canon-eos-r5-mark-ii",
      "text": "Canon EOS R5 Mark II, ISO - 100-102400 (expandable to 50-409600), Mount Type - Canon RF mount, Resolution - Approx. 45 Megapixels, Screen Type - 3.0-inch TFT color liquid-crystal monitor with approx. 2.1 million dots, Connectivity - Wi-Fi, Bluetooth, USB Type-C, HDMI (Type A),, Image Sensor - 36.0 x 24.0 mm back-illuminated stacked CMOS sensor, Camera Format - Digital interchangeable lens mirrorless camera, Shutter Speed - 30 - 1/8000 sec (Mechanical), up to 1/64,000 sec (Electronic), Auto-Focus Points - Max. 1053 zones (Stills), Max. 5850 selectable positions (Stills), Scope of delivery - Canon EOS R5 Mark II body, Battery Pack LP-E6P, Dimensions & Weight - 138.4 x 98.4 x 88.4 mm • 670g, ",
      "name": "46) Canon EOS R5 Mark II (Body)",
      "pros": " Pros: High‑resolution ~45MP BSI stacked sensor with advanced AF; fast electronic shutter up to 1/64,000 sec; robust connectivity (USB‑C, Wi‑Fi, Bluetooth, HDMI).",
      "cons": " Cons: Large files benefit from fast CFexpress/SD cards; best results require quality RF lenses."
  },
  {
      "slug": "samsung-tv-samsung-gq65q7faauxzg",
      "text": "Samsung GQ65Q7FAAUXZG - TV 65\" QLED 4K, HD type - 4K Ultra HD, Processor - Quantum 4K AI, Video apps - Samsung TV Plus, Audio decoders - Dolby Digital, Wi-Fi standards - Wi-Fi 5 (802.11ac), Display diagonal - 165.1 cm (65\"), Bluetooth version - 5.3, Display resolution - 3840 x 2160 pixels, Display technology - QLED, Number of speakers - 2, HDMI ports quantity - 3, Native aspect ratio - 16:9, Native refresh rate - 50 Hz, Audio output channels - 2.0 channels, Weight (without stand) - 16 kg, Dimensions (without stand) - 60.6 x 1452.9 x 834mm, Multiroom audio technology - Samsung Multiroom Link, Operating system installed - Tizen, Backlight dimming technology - Supreme UHD Dimming, Digital signal format system - DVB-C, DVB-S2, DVB-T2, Energy efficiency class (HDR) - G, Motion interpolation technology - Motion Xcelerator, High Dynamic Range (HDR) technology - Filmmaker Mode, High Dynamic Range 10+ (HDR10 Plus), Hybrid Log-Gamma (HLG), Quantum HDR, ",
      "name": "47) Samsung 65\" QLED 4K (GQ65Q7FAAUXZG)",
      "pros": " Pros: QLED 4K picture with Quantum HDR; Tizen smart TV with AirPlay 2; slim design and Bluetooth 5.3.",
      "cons": " Cons: 50Hz native refresh rate is modest for high‑fps gaming; only 3 HDMI ports."
  },
  {
      "slug": "dji-drone-dji-mini-2-fly-more-combo",
      "text": "DJI Mini 2 Fly More Combo Drone, Drone, Zoom - up to 4x, Weight - 249 g, Max. Speed - 16 m/s, Photography - 1 / 2.3 '' CMOS • 12 megapixels • JPEG & RAW, Product Type - Drone and Fly More Kit, Transmission - OcuSync 2.0, Control Modes - Remote Control, Max. Flight Time - 31 min, Video Resolution - 4K: 3840 × 2160 with 24/25/30 fps • 2.7K: 2720 × 1530 with 24/25/30 fps • Full HD: 1920 × 1080 with 24/25/30/48/50/60 fps, Folded Dimensions - 138 × 81 × 58 mm, Scope of Delivery - 1x Mini 2, 1x remote control, 3x intelligent flight battery, 3x replacement propellers (pair), 1x USB-C cable, 1x gimbal protection, 1x RC cable (Micro-USB), 1x RC cable (USB-C), 1x RC -Cable (Lightning), 1x additional control sticks (pair), 18x spare screws, 1x screwdriver, 1x propeller holder, 1x two-way charging station, 1x DJI USB charger 18 W, 1x shoulder bag, Obstacle Detection - No, Transmission Range - 10 km (FCC), Unfolded Dimensions - 159 × 203 × 56 mm • With propellers: 245 × 289 × 56 mm, Intelligent Functions - QuickShots: Dronie, Circles, Helix, Rocket and Boomerang • 4K hyperlapse • Panorama: Spherical, 180° and wide-angle • \"Enhanced Photos\": automatically download enhanced photos directly into the DJI Fly app • File download: QuickTransfer, Shortened Video Clips, ",
      "name": "48) DJI Mini 2 Fly More Combo",
      "pros": " Pros: 4K video, 249g weight, and long flight time; OcuSync 2.0 for solid transmission; generous Fly More kit for extended flying.",
      "cons": " Cons: No obstacle avoidance sensors; 4K limited to 30fps."
  },
  {
      "slug": "sony-wh-1000xm6-noise-cancelling-over-ear-bluetooth-headphones",
      "text": "Sony WH-1000 XM6 Noise-cancelling Over-ear Bluetooth Headphones, Type - Over-ear Bluetooth headphones, Codecs - SBC,AAC, LDAC,LC3, Battery - Up to 30h battery, Connections - USB-C, Key features - Foldable design, Adaptive NC Optimizer, Spatial udio upmix, Hi-Res audio compatible, Noise cancelling - ANC, Integrated microphone - Yes, Frequency response, Sound pressure level & Impedance - 4Hz - 40kHz, 48 ohms, 103 dB/mW, ",
      "name": "49) Sony WH‑1000XM6 (ANC Headphones)",
      "pros": " Pros: Excellent noise cancelling with LDAC/LC3 support; up to 30h battery and USB‑C quick charge; foldable, comfortable design for commuting or focus.",
      "cons": " Cons: Not water‑resistant; over‑ear fit may feel warm during workouts."
  },
  {
      "slug": "apple-13-ipad-pro-2024-wi-fi-8gb-256gb",
      "text": "Apple 13\" iPad Pro (2024) - Wi-Fi - M4 - 256GB, Memory - 8GB, Battery - 38,99 Wh, Display - 13-inch Ultra Retina XDR display (2752 x 2064), Storage - 256GB, Processor - Apple M4, Dimensions - 22.75 x 29.55 x 3.15 cm (0.96kg), Rear Camera - 12MP, Connectivity - Wi-Fi, Front Camera - 12MP, Operating System - iOS, ",
      "name": "50) Apple iPad Pro 13\" (2024, M4, Wi‑Fi, 256GB)",
      "pros": " Pros: Ultra Retina XDR delivers stunning HDR; M4 chip handles pro apps and multitasking; thin and light for a powerhouse device.",
      "cons": " Cons: Keyboard/Pencil sold separately; may be more power than casual users need."
  },
  {
      "slug": "sony-zv-1-mk-ii-vlog-kamera",
      "text": "Sony ZV-1 Mark II Vlogging Camera, Lens - Equivalent 18-50mm F1.8-4 lens, Sensor - 20.1MP 1\" Exmor RS BSI CMOS Sensor, Display - 3\" Flip-out Touchscreen LCD, Autofocus - Real-time Tracking & Eye AF, Resolution - UHD 4K30P / HLG & S-Log2/3 Gammas, Dimmensions - 10cm x 6cm x 4.6cm / 292g, Special modes - Cinematic Vlogging settings, S&Q, Product Showcase setting, Bokeh Switch, Iso Sensitivity - 125 to 12,800, Metering Method - Artificial Intelligence AE, Scope of delivery - Sony ZV-1 II Digital camera, NP-BX1 battery, Microphone wind-screen, Windscreen adapter, Continuous Shooting - up to 24FPS, Image Stabilization - Digital, "
  },
  {
      "slug": "apple-macbook-air-15-m4-10cpu-16gb-512gb-10gpu",
      "text": "MacBook Air 15\" - Apple M4 Chip 16GB Memory 512GB SSD - Apple Integrated 10-core GPU, Model - MW1M3D/A, Memory - 16GB, Display - 15.3 inches (2880 x 1864), Storage - 512GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M4, Dimensions - 34.04 x 23.76 x 1.15 cm • 1.51 kg, Operating System - macOS, Keyboard Language - German, "
  },
  {
      "slug": "soundboks-go-bluetooth-speaker",
      "text": "SOUNDBOKS Go , Type - Bluetooth Speaker, Model - Go, Power - 2 × 72 W Class D Amplifiers, Battery - Up to 40h battery, Chassis - 1 × 10” woofer, 1 × 1” silk dome tweeter, Frequency - 40Hz - 20kHz, Connections - 1 × 3.5mm stereo input, Connectivity - Bluetooth 5.0, Operating mode - Battery-powered, Special features - Powerful, durable and portable with our swappable battery and sound beyond its size. Connect with other SOUNDBOKS (Gen. 3) speakers in TeamUp mode for an incredible wireless music experience. Connect to the SOUNDBOKS app to access a world of features—plus performance upgrades for new sound settings, controls, security, and more, Scope of delivery - Soundbox Go, Battery Boxes, charger, manual, "
  },
  {
      "slug": "dji-mini-3-pro",
      "text": "DJI Mini 3 Pro with RC-N1 Controller, Drone, Video - 4K60fps , 1080p 120fps, Camera - 48MP  1/1.3’- type CMOS sensor, Gimbal - 3 axis with vertical framing, Storage - microSD, Aperture - F/1.7, Performance - 16 m/s (S-mode), 10 m/s (N-mode), 6 m/s (C-mode), Flight Ceiling - 4000 m, Wind resistance - 10.7 m/s, Remote Controller - DJI RC-N1 controller, Maximum Flight time - 34 minutes, Still image support - DNG / JPEG / RAW, Maximum Ascent speed - 5 m/s, Maximum Descent Speed - 5 m/s, "
  },
  {
      "slug": "dreame-x50-ultra-complete-robot-cleaner",
      "text": "Dreame X50 Ultra Complete Robot Cleaner, Dimensions - Base Station 590 x 457 x 340 mm / 9.09 kg; Robot vacuum 350 x 350 x 111 mm, Accessories - Base station, 1 x main brush (pre-installed), 1x brush guard (pre-installed), 1x anti-scale filter (pre-installed), 1x dustbin (pre-installed with filter), 2x mop pad holders, 2x dust bags, 1x cleaning tool,1x power cable, 1x base station ramp extension, Suction power - 20.000 Pa, Stair detection - Yes, Carpet detection - Yes, Special features - New ProLeap system enabling overcome high dual-layer obstacles upto 6cm, Fully automatic suction station with self-cleaning for long lifespan, ultra-powerful suction system with up to 20,000 Pa, Mop extend technology and versa lift navigation, automatic mop pad cleaning with 80° hot water, Obstacle detection - Yes, Wet mopping function - Yes, Maximum operating time - 200 mins(vaccum)/ 150 mins (vacuum + mop), Pre-programmed cleaning - Yes, Charging time according to the manufacturer - 4.5 hours, "
  },
  {
      "slug": "apple-series-10-gps-aluminium-case-and-sport-band-46mm",
      "text": "Apple Watch Series 10 GPS, Aluminium Case, 46mm, Type - Apple Watch, Features - Powered by new S10 SiP, LTPO3 OLED Always-On Retina display (Wide-angle OLED, 40% brighter), Sleep Tracking, Sleep apnea notifications, Double Tap Gesture (answer a call, open a notification, play and pause music and more), Faster on-device Siri with health data access, Precision Finding for iPhone, Crash detection, Fall Detection, Heart arrhythmia, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Pair Multiple Watches with Family Setup, Apple Pay, Listen Music, Podcast, Audiobooks, Band Size - M/L, Battery Life - Up to 18h / 36h in Low Power Mode, Connectivity - GPS, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - Up to 50m, Activity Tracking - Continuous Heart Rate Tracking, Steps taken, Hours slept, Resting heart rate, Target heart rate, Skin temperature, Multisport workouts; Strength training, HIIT, Pilates, Meditation, Swimming, Running, Yoga, Cycling and Other Sports, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "apple-tv-128gb-4k-wifi-ethernet-gen-3",
      "text": "Apple TV 128GB 4K WiFi + Ethernet (Gen. 3), Weight - 214 g, HD type - 4K Ultra HD, Ethernet - Yes, Frame rate - 60 fps, HDMI version - 2.1, Wi-Fi standards - Wi-Fi 6 (802.11ax), Scope of Delivery - Apple TV 4K, Siri Remote, power cord, Supported video modes - 2160p, Remote control included - Yes, Video formats supported - AVC, H.264, HEVC, M4V, MP4, MPEG4, Internal storage capacity - 128 GB, "
  },
  {
      "slug": "apple-smartphone-iphone-15-pro-8gb-128gb",
      "text": "Apple iPhone 15 Pro - 128GB, Memory - 8GB, Battery - 3650 mAh, Display - 6.1-inch OLED Super Retina XDR (1179 x 2556), Storage - 128GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 17, "
  },
  {
      "slug": "garmin-fenix-8-smartwatch-stainless-steel-51mm",
      "text": "Garmin Fēnix® 8 Smartwatch, Stainless Steel, 51mm, Type - GPS-Multisport-Smartwatches, Features - Scratch-resistant Corning® Gorilla® Glass, AMOLED Display, Microphone and Speaker, Sport-Specific Training Plans, Supports Recreational Diving and Freediving Up to 40 Meters, Dynamic Roundtrip Routing for Staying on Track, Easily Share Routes, Workouts, and Locations with Garmin-Compatible Products, Get Slope Information and Cross-Country Ski Trails, Training Readiness Score with recommendations, Track your uphill running progress with Hillscore, Train with Animated workours and Garmin coach, Sleep monitoring with insights into sleep quality and HRV status, Morning report (sleep summary, HRV status along with daily training recommendations), Minimize Jetlag effects with Jetlag advisor, Pay contactless with Garmin Pay™, Emergency assistance and automatic incident notifications during activities, Send message from your smartwatch, Smart Features (receive calls, messages, weather updates, save and play songs from compatible services (Garmin Music, Spotify, Youtube Music, Deezer Amazon Music), View your health and fitness data in one place with Garmin Connect, Communicate without mobile signal with Inreach Compatability share your location, or send SOS alerts via the Iridium satellite network, Band Size - L, Battery Life - Up to 84h in GPS mode / 29 days in Smartwatch mode, Connectivity - GPS, NFC, Bluetooth®, WiFi, Compatibility - Android / iOS, Build Material - Stainless Steel and Silicone Band, Music playback - Yes, Water/Dust proof - Up to 10 ATM / 40 m, Activity Tracking - 80+ Sports/Outdoor apps (Running, Mountain biking, Team sports), Activity vs. inactivity, Altitude changes, Blood oxygen, Heart Rate, Breathing patterns, Cadence, Calories burned, Cycling speed, Distance swam, Distance traveled, Duration of exercise, Heart rate, Laps swam, Pace, Speed, Stairs climbed, Steps taken, Global Positioning - GPS, NFC, GLONASS, "
  },
  {
      "slug": "gopro-hero12-black",
      "text": "Gopro HERO 12 Black, Video - 5312 x 2988 at 60 fps // 1920 x 1080p at 200/240 fps, Sensor - 27 megapixel, Storage - MicroSD (U3/V30 recommended), Photography - RAW 27mp, IP Streaming - H.265 1920x1080p, Waterproofing - Up to 10 meters, Special features - 8x slow-motion video, Scope of delivery - Gopro Hero 12 black, Battery, Adhesive mount, Mounting buckle, Thumbscrew, USB-C cable, Image stabilization - Hypersmooth 6.0, "
  },
  {
      "slug": "samsung-freestyle-2023-projector",
      "text": "Samsung Freestyle 2nd Gen. Projector - Full HD, WiFi - WiFi5, Model - SP-LFF3CLAXXXE, Weight - 0.83 kg, Dimensions - (W x H x D): 102.4 x 172.8 x 95.2 mm (with lens cap)., Contrast Ratio - 100,000:1, HDMI Resolution - 1920x1080i 60, Projection Ratio - 1.2, Special Features - Connect 2 Freestyle Speakers together for Smart EDGE Blending, allowing for 21:9 configuration, Scope of Delivery - Solar Smart Remote, instructions, Power Cable USB-C, Screen Resolution - 1920 x 1080, Full HD, Projection Distance - for 100\" Screen Diagonal - 265.4 cm, Image Diagonal (Max.) - 30\"-160\", "
  },
  {
      "slug": "canon-lens-canon-rf-70-200mm-f2-8l-is-usm",
      "text": "Canon RF 70-200mm f/2.8 L US USM lens, Focus - Autofocus, Mount - Canon RF mount, Weight - 2.35 lb / 1070 g, Lens Type - Full Frame, Dimensions - 3.54 x 5.75\" / 89.9 x 146 mm, Filter size - 77mm, Image Stabilizer - Yes, Scope of Delivery - RF 70-200mm F2.8 lens, front and rear cover, Lens hood, Tripod ring, Minimum focus distance - 2.3' / 70 cm, "
  },
  {
      "slug": "canon-eos-r50-rf-s-18-45mm-f4-5-6-3-is-stm-camera-kit",
      "text": "Canon EOS R50 Camera Kit with RF-S 18-45mm f/4.5-6.3 IS STM Lens, ISO - 100 - 32,000, Video - Uncropped 4K 30fps, Storage - Single-slot SD card, Auto-Focus - 651-point Phase Detect Dual Pixel CMOS AF II, Mount Type - Canon RF, Viewfinder - 3.69 million dots OLED, Screen Type - 3\" 1.62 Million-dot clear View LCD ii Variable Angle Touchscreen, Connectivity - WLAN, Bluetooth, Fast shooting - Up to 12FPS continuous shooting, Scope of delivery - Canon EOS R50, RF-S 18-45mm, Lens cover, camera cover, Battery LP-E17, Power cable, Dimensions & Weight - 116.3 x 85.5 x 68.8 mm • 375g, "
  },
  {
      "slug": "apple-smartphone-iphone-16-plus-8gb-128gb",
      "text": "Apple iPhone 16 Plus - 128GB - Dual SIM, Memory - 8GB, Battery - 4006 mAh, Display - 6.7-inch OLED Super Retina XDR (2796 x 1290), Storage - 128GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 18, "
  },
  {
      "slug": "apple-smartphone-iphone-14-pro-6gb-128gb",
      "text": "Apple iPhone 14 Pro - 128GB - Dual SIM, Memory - 6GB, Battery - 3200 mAh, Display - 6.1-inch OLED (2556 x 1179), Storage - 128GB, Processor - Apple A16 Bionic, Dimensions - 8.96 x 16.57 x 2.92 cm (0.37kg), Rear Camera - 48MP + 12MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 16, "
  },
  {
      "slug": "samsung-galaxy-watch8-bt-44-mm",
      "text": "Samsung Galaxy Watch8 Smartwatch, Aluminium Case, 44mm, Type - Smartwatch, Features - Slimmer than ever with a modern, sleek design, Integrated Google Gemini AI on the watch, Personal sleep coach with smart health insights, AI-powered running coach, New health monitoring features: Vascular load measurement and Antioxidant index tracking, Battery Life - Up to 40h, Connectivity - Bluetooth® 5.3, WLAN 2,4 GHz & 5 GHz, NFC, Dual-GPS (L1+L5), Compatibility - Android, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - IP6816, 5 ATM17, MIL-STD-810H18, Activity Tracking - ECG measurement, Blood pressure monitoring, Heart rate monitoring, Blood oxygen (SpO2) measurement, Sleep apnea monitoring, Bioelectrical Impedance Analysis (body composition), Global Positioning - Glonass, Beidou, Galileo, "
  },
  {
      "slug": "roborock-vacuum-cleaner-roborock-s8plus",
      "text": "Roborock S8+ Vacuum & Mop Robot Cleaner, Battery - 5.2Ah, Li-Ion, Capacity - 0.65l (0.30l wet, 0.35l dry), Dimension - 96 x 350 mm / 9.2 kg, Equipment - Automatic dust discharge, filter, programmable cleaning times, 2x floor brush, 1x side brush, app control, voice control (Amazon Alexa, Google Assistant), DuoRoller riser brush, VibraRise 2.0 mopping system: 5mm mop lift, Carpet Boost+ system, Reactive 3D obstacle avoidance system, Navigation - Laser sensors, obstacle detection, overcoming obstacles, virtual walls, Accessories - Charging station, dust filter, power cord, mopping module, mop head, Noise level - 67dB(A), Charging time - 6h, Cleaning modes - Automatic, carpet, wipe function, Operating time - 180min, Charging system - Automatic, Recommended room size - Max. 300m², "
  },
  {
      "slug": "sonos-arc-ultra",
      "text": "Sonos Arc Ultra, WiFi - Yes, Bluetooth - Yes, Dimensions - 75 x 1178 x 110.6 mm - 5.9 kg, Connections - HDMI eARC, Lan, Scope of delivery - Sonos arc ultra, power cable, HDMI cable, Speaker components - 15 class-D digital amplifiers, 8 elliptical woofers, 7 dome tweeters, 6 mid-woofers, "
  },
  {
      "slug": "hp-hp-reverb-g2",
      "text": "HP Reverb G2 VR Headset, Audio - Integrated valve audio, Model - HP Reverb G2, Weight - 0.49kg, Sensors - HP Reverb G2 Inside-Out, 6DoF motion tracking, gyroscope, accelerometer and magnetometer, Connections - DisplayPort ™ 1.3, USB 3.0 Type C, power supply, Controllers - 2x motion controllers, Refresh rate - 90Hz, Field of View - 114°, Operating mode - Tethered, PC requirements - Graphics card - NVIDIA GeForce GTX 1080 and above, NVIDIA GeForce RTX 2060 SUPER and above, GeForce RTX 2080 and above, AMD Radeon RX 5700 and above. Processor - Intel Core i5, i7, Intel Xeon E3-1240 v5, equivalent or better. AMD Ryzen 5 equivalent and above. Memory - 8 GB RAM or more, Ports - DisplayPort 1.3, 1x USB 3.0 Type C,, Operating system - Windows 10 May 2019 to Windows 11, not including version 24H2 and newer. New Windows 11 does not support the VR., Supported platforms - Cross-platform, Display type, lens & resolution - Dual 2.89-inch LCD, 4320x2160 (combined), 2160x2160 (per eye), "
  },
  {
      "slug": "samsung-tv-samsung-gq55q7faauxzg",
      "text": "Samsung GQ55Q7FAAUXZG - TV 55\" QLED 4K, HD type - 4K Ultra HD, Processor - Quantum 4K AI, Audio decoders - Dolby Digital, Wi-Fi standards - Wi-Fi 5 (802.11ac), Display diagonal - 139.7 cm (55\"), Bluetooth version - 5.3, Display resolution - 3840 x 2160 pixels, Display technology - QLED, Number of speakers - 2, HDMI ports quantity - 3, Native refresh rate - 50 Hz, Weight (without stand) - 11.3 kg, Dimensions (without stand) - 60.3 x 1234.1 x 710.8mm, Multiroom audio technology - Samsung Multiroom Link, Operating system installed - Tizen, Backlight dimming technology - Supreme UHD Dimming, Digital signal format system - DVB-C, DVB-S2, DVB-T2, Energy efficiency class (HDR) - G, Motion interpolation technology - Motion Xcelerator, High Dynamic Range (HDR) technology - Filmmaker Mode, High Dynamic Range 10+ (HDR10 Plus), Hybrid Log-Gamma (HLG), Quantum HDR, "
  },
  {
      "slug": "apple-smartphone-iphone-14-pro-6gb-256gb",
      "text": "Apple iPhone 14 Pro - 256GB - Dual SIM, Memory - 6GB, Battery - 3200 mAh, Display - 6.1-inch OLED (2556 x 1179), Storage - 256GB, Processor - Apple A16 Bionic, Dimensions - 8.96 x 16.57 x 2.92 cm (0.37kg), Rear Camera - 48MP + 12MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 16, "
  },
  {
      "slug": "dji-osmo-pocket-3",
      "text": "DJI Osmo Pocket 3, Camera - 20mm f/2 / 1\"-Type CMOS / 9.4MP, Battery - Max runtime 2.6h / charging 0.5h, Display - 2\" Rotating touchscreen LCD, Wireless - 2.4/5GHz Wi-Fi App controlled, Dimensions - 139.7 x 42.2 x 33.5 mm - 179g, Video resolution - Up to 3840 x 2160 @ 120FPS / D-LOG M & 10-bit support, Scope of delivery - Osmo pocket 3, USB-C cable, Protective cover, Wrist strap, Handle with 1/4\"20 thread, "
  },
  {
      "slug": "delonghi-la-specialista-opera-ec9555-coffee-machine",
      "text": "Delonghi La Specialista Opera EC9555 Coffee Machine, Grinder - Conical grinder with 15 adjustable grinding levels and SensorGRINDING technology, Programs - 5 recipes to pre-select: 5 predefined recipes: Espresso, Coffee, Americano, Cold Brew and Espresso Cool, Dimensions - 380 x 445 x 370 mm / 13.2 kg, Pump pressure - 19 bars, 2 cup function - Yes, Special features - Cold Extraction Technology for cold brew, easy dosing with X1 and X2 buttons, smart tamping station, full stainless steel housing, integrated grinder (15 grind settings), powerful My LatteArt steam nozzle that quickly produces creamy micro foam with a rich, silky texture, 3 coffee temperature settings via dedicated button, advanced thermoblock for faster readiness for use, active temperature control with PID keeps the water temperature constant during brewing, for more precision and consistency in taste, single wall filter: coffee quantity up to 18 g, 5 predefined recipes: espresso, coffee and Americano, cold brew and espresso cool, dedicated hot water spout for tea, pressure indicator for full extraction control, Scope of delivery - Espresso machine, stainless steel milk jug (350 ml), X1 and X2 single and double wall filters, nozzle cleaning needle, tube brush, Water tank capacity - 2 litres, Bean container contents - 250 g, "
  },
  {
      "slug": "gopro-hero-11-black",
      "text": "Gopro HERO 11 Black, Sensor - 27MP CMOS sensor, Weight - 4.5 oz / 127 g, Battery - Rechargeable 1720 mAh Battery pack, Display - 2.27\" Touch screen LCD / front live-view monitor, Storage - Single slot microSD, Dimension - 2.8 x 2 x 1.3\" / 71.8 x 50.8 x 33.6 mm, Recording - 5.3K60/2.7K240 Video, 27MP Photos, Connectivity - 1x USB-C / Headphone jack, Focal length - 24.4mm, Special Features - HyperSmooth 5.0 Image Stabilization, 8x Slow-Motion Video, Scope of Delivery - Gopro Hero 11, Adhesive Mount, Mounting Buckle, THumbscrew, Gopro battery, USB Type-C cable, Carry Case, Weather resistance - 33' Waterproof without Housing, Image Stabilization - Digital, Supported languages - English, French, German, Italian, Japanese, Korean, Portuguese, Simplified Chinese, "
  },
  {
      "slug": "samsung-galaxy-watch-ultra-lte-titanium-case-and-marine-band-47-mm",
      "text": "Samsung Galaxy Watch Ultra LTE Smartwatch, Titanium Case, 47 mm, Type - Smartwatch, Features - Durable design thanks to Titanium casing (Grade 4), Navigate outdoor trails with dual GPS, SOS, and Track Back functions, Long-lasting battery for up to 100h with fast charging capability, Personalized user experience with AI features like energy value, wellness tips, and quick replies, Focus on your goals with intelligent health and fitness functions, Extensive app ecosystem through Google Wear OS, Sporty-modern design, Quickly access important functions with Quick button, Analyzes and assesses your daily energy value based on activity, sleep, and resting heart rate, Advanced sleep analysis, See your body composition with Bioelectrical Impedance Analysis (BIA), Supports 90 different training programs and recognizes key disciplines like running, walking, or cycling, and can start recording automatically, Pursue your fitness goals in a controlled manner with intensity levels based on your personalized heart rate zones, Irregular heart rhythm monitoring to alert you to possible arrhythmias such as atrial fibrillation, Band Size - 20mm, Battery Life - Up to 100 hours, Connectivity - LTE, GPS, NFC, Bluetooth 5.0, WiFi, Compatibility - Android 11.0 or higher with at least 1.5 GB of RAM, Build Material - Titanium Case and Marine Band, Music playback - Yes, Water/Dust proof - Yes, 10 ATM/ IP68 / MIL-STD-810H, Activity Tracking - Heart Rate Monitor, ECG, Continuous Sp02, Blood Pressure, Bioelictrical impedance analysis (Body composition), Global Positioning - GPS, Glonass, Beidou, Galileo, "
  },
  {
      "slug": "canon-eos-r8-body",
      "text": "Canon EOS R8 Mirrorless Camera Body, ISO - 100 to 25.600 ( expandable to 102,400), Photo - JPEG, C-RAW, HEIF, RAW @ 14-bit, Video - 4K60p / 4:2:2 10-bit, Storage - Single slot SD UHS-II, Mount Type - Canon RF Full Frame, Screen Type - 3” 1 620 000 Dot Articulating Touchscreen, View Finder - 3 360000-dot OLED EVF, Connectivity - Micro HDMI, 2x 3.5mm audio Input & output, USB-C multiport, WLAN, Bluetooth, Image Sensor - 24MP Full Frame CMOS sensor, Shutter Speed - 1/8000 to 30s, Stabilization - Digital, Max Resolution - 6000 x 4000 pixels, Auto-Focus Points - Photo 4897-phase detect points / Video 4067-phase detect points, Scope of delivery - EOS R8, LP-E17 Battery, Camera neck strap, LC-E17E battery charger, Camera cover, Continuous shooting - Up to 40FPS, "
  },
  {
      "slug": "sony-headphones-sony-wh-1000xm5-over-ear-bluetooth-headphones",
      "text": "Sony WH-1000 XM5 Noise-cancelling Over-ear Bluetooth headphones, Type - Over-ear Bluetooth headphones, Codecs - AAC, LDAC, sbc, Battery - Up to 30h battery, Connections - USB-C, Key features - Detachable cable, Microphone, Multipoint connection, Voice assistant, Noise cancelling - ANC, Integrated microphone - Yes, Frequency response, Sound pressure level & Impedance - 4Hz - 40kHz, 48 ohms, 102 dB/mW, "
  },
  {
      "slug": "apple-ultra-2-gps-cellular-titanium-case-and-milanese-band-m",
      "text": "Apple Watch Ultra 2 GPS + Cellular, Titanium Case, 49mm, Type - Apple Watch, Features - Powered by new S9 SiP, Double Tap Gesture (answer a call, open a notification, play and pause music and more), LTPO2 OLED Always-On Retina display (Up to 3000 nits), Faster on-device Siri with health data access, Precision Finding for iPhone, Sleep Tracking, Sleep apnea notifications, Fall Detection and Crash detection, Siren, Customizable Action Button, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Blood Oxygen app, ECG app, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Precision dual-frequency GPS, Durable from -20° C to 55° C, Emergency SOS, International Emergency Calling, Strong Battery Performance, Pair Multiple Watches with Family Setup, Band Size - M, Battery Life - Up to 36h / 72h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Titanium Case and Milanese Band, Music playback - Yes, Water/Dust proof - Up to 100m / IP6X, Activity Tracking - Blood oxygen, Electrocardiography (ECG), Hours slept, Resting heart rate, Target heart rate, Skin temperature, Running (Stride Length, Ground Contact Time, Vertical Oscillation), Depth/Pressure/Location Tracking for Divers, Multisport Workouts, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "samsung-smartphone-s24-ultra-12gb-256gb",
      "text": "Samsung S24 Ultra Smartphone - 256GB - Dual SIM, Memory - 12GB, Battery - 5000 mAh, Display - 6.8-inch Dynamic AMOLED 2X (1440 x 3120), Storage - 256GB, Processor - , Dimensions - , Rear Camera - 200MP+12MP+50MP, Connectivity - 5G, Front Camera - 12MP, Operating System - Android 14, "
  },
  {
      "slug": "dreame-l50-pro-ultra-robot-cleaner",
      "text": "Dreame L50 Pro Ultra Robot Cleaner, Accessories - Base station, 1 x main brush (pre-installed), 1x brush guard (pre-installed), 1x anti-scale filter (pre-installed), 1x dustbin (pre-installed with filter), 2x mop pad holders, 2x dust bags, 1x cleaning tool,1x power cable, 1x base station ramp extension, Filter type - HEPA, Suction power - 19.500 Pa, Stair detection - Yes, Special features - EasyLeap system enabling dual-layer obstacles upto 4cm, Fully automatic docking station, powerful suction system with up to 19,500 Pa, Mop extend technology and versa lift navigation, automatic mop pad cleaning with 75° hot water, Obstacle detection - Yes, Wet mopping function - Yes, Maximum operating time - 200 mins(vaccum)/ 150 mins (vacuum + mop), Pre-programmed cleaning - Yes, Device dimension including bas station - 350 x 570 x 457 mm / 15.6 kg, Charging time according to the manufacturer - 4.5 hours, "
  }
]