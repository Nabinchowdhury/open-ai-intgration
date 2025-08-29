async function callLambda() {
  try {
    const response = await fetch("http://localhost:3000/openAi-integration/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: `You are a product content writer for Grover, a tech rental platform that makes it easy to access the latest technology without the commitment of buying.
Write a list of 2–3 Pros and 1–2 Cons for the following product: [Sony ZV-1 Mark II Vlogging Camera, Lens - Equivalent 18-50mm F1.8-4 lens, Sensor - 20.1MP 1\" Exmor RS BSI CMOS Sensor, Display - 3\" Flip-out Touchscreen LCD, Autofocus - Real-time Tracking & Eye AF, Resolution - UHD 4K30P / HLG & S-Log2/3 Gammas, Dimmensions - 10cm x 6cm x 4.6cm / 292g, Special modes - Cinematic Vlogging settings, S&Q, Product Showcase setting, Bokeh Switch, Iso Sensitivity - 125 to 12,800, Metering Method - Artificial Intelligence AE, Scope of delivery - Sony ZV-1 II Digital camera, NP-BX1 battery, Microphone wind-screen, Windscreen adapter, Continuous Shooting - up to 24FPS, Image Stabilization - Digital,].
✅ Keep these rules in mind:
Tone: Clear, helpful, modern. Avoid exaggeration or hype.
Audience: Young, price-conscious, open to innovation, but skeptical and risk-sensitive (especially about trust, flexibility, and quality).
Pros: Highlight what makes this product great for renters — performance, flexibility, trendiness
Cons: Be honest about minor downsides, but keep the tone constructive. Avoid harsh or overly critical language. Use softening phrases like “may not suit…” or “some users might find…”. Never mention product defects or broken items.
🎯 Frame cons in ways that support decision clarity — not doubt. The goal is to help users understand if this rental suits their needs.
 `}),
    });

    const data = await response.json();
    console.log(data.choices[0].message.content);
  } catch (error) {
    console.error("Error calling Lambda:", error);
  }
}

callLambda();