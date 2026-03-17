import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req) {
  try {
    console.log("KEY:", process.env.GROQ_API_KEY); 

    const { messages } = await req.json();

    const response = await client.chat.completions.create({
     model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: "You are a helpful AI support agent.",
        },
        ...messages,
      ],
    });

    return Response.json({
      reply: response.choices[0].message.content,
    });

  } catch (err) {
    console.error("REAL ERROR:", err);
    return Response.json({ error: "Error" }, { status: 500 });
  }
}