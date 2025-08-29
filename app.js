// server.js
import express from "express";
// import fetch from "node-fetch";
import dotenv from "dotenv";
import serverless from "serverless-http";

dotenv.config();

const app = express();
app.use(express.json());

// app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Additional middleware to handle Lambda-specific body parsing
app.use((req, res, next) => {
  // If body is a buffer, try to parse it as JSON
  if (Buffer.isBuffer(req.body)) {
    try {
      const bodyString = req.body.toString('utf8');
      req.body = JSON.parse(bodyString);
    } catch (error) {
      console.error('Error parsing buffer body:', error);
      return res.status(400).json({ error: 'Invalid JSON in request body' });
    }
  }
  next();
});


app.post("/openAi-integration/api/chat", async (req, res) => {
  const { prompt } = req.body;
  console.log('req.body', req.body)
  console.log('prompt', prompt)
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-5",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await response.json();
  console.log(data)
  res.json(data);
});

app.get("/openAi-integration", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));

// Lambda handler export
// export const handler = serverless(app);
// export const handler = serverless(app, {
//   binary: false,
//   request: (request, event, context) => {
//     // Ensure body is properly handled
//     if (event.body && typeof event.body === 'string') {
//       try {
//         request.body = JSON.parse(event.body);
//       } catch (e) {
//         // If parsing fails, leave as string
//       }
//     }
//   }
// });
