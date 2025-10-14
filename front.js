async function callLambda(productData) {
  const {name, specifications} = productData
try {
  const response = await fetch("http://localhost:3000/openAi-integration/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: `You are a product content writer for Grover, a tech rental platform that makes it easy to access the latest technology without the commitment of buying.
Write a list of 2–3 Pros and 1–2 Cons for the following product: [${name}, ${specifications? specifications : ''}].
✅ Keep these rules in mind:
Don't use any hyphen on the generated output
Tone: Clear, helpful, modern. Avoid exaggeration or hype.
Audience: Young, price-conscious, open to innovation, but skeptical and risk-sensitive (especially about trust, flexibility, and quality).
Pros: Highlight what makes this product great for renters — performance, flexibility, trendiness
Cons: Be honest about minor downsides, but keep the tone constructive. Avoid harsh or overly critical language. Use softening phrases like “may not suit…” or “some users might find…”. Never mention product defects or broken items.
🎯 Frame cons in ways that support decision clarity — not doubt. The goal is to help users understand if this rental suits their needs.
`}),
  });

  const data = await response.json();
  const prosCons = data.choices[0].message.content.split('\n\n');
  return prosCons;
} catch (error) {
  console.error("Error calling Lambda:", error);
}
}

// callLambda();


for (let i = 0 ; i < data.length; i++){
  console.log('hit', i)
  const productData = data[i];
  const prosConsData = await callLambda(productData)
   prosConsData.forEach((pc) => {
      if(pc.includes('Pros')){
          data[i].pros =  pc;
      }
      else if(pc.includes('Cons')){
          data[i].cons =  pc;
      }
  })
}

// must check for pros and cons
for (const [key, value] of Object.entries(data)) {
  if(!value.pros){
      console.log(data.indexOf(data[key]))
  }
}
