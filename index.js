import { openai, supabase } from './config.js';

const form = document.querySelector("form")

const chatMessages = [{
  role: 'system',
  content: `
  You are an enthusiastic movie expert who loves recommending movies to people. You will be given two pieces of information - some context about movies and a question. Your main job is to formulate a short answer to the question using the provided context. Please do not make up the answer.
  Your answer should be in the form of a json object in the following structure:
  {
    title: "<Title Here with date>",
    desc: "<Description here/ why this movie fits me.>"
  }
  Please only answer in this format. And dont add any extra data to the response. Only json.
  If you are unsure and cannot find the answer in the context, give
  {
    title: "No Movie Available For Now",
    desc: "Please try again later."
  }
  If the user provided a movie as his favourite, and you have other options, please recommend them instead of it.
  ` 
}];


form.addEventListener("submit", async (e) => {
  e.preventDefault()
  let data = new FormData(e.target)
  data = [data.get("firstchoice"), data.get("secondchoice"), data.get("thirdchoice")]
  data = data.map(x => x).join("\n")
  const embedding = await openai.embeddings.create({
          model: "text-embedding-ada-002", 
          input: data,
        });
  const text = await getChatCompletion( await findNearestMatch(embedding.data[0].embedding), data)
  form.reset()
  document.querySelector(".screen-2 h2").textContent = text.title
  document.querySelector(".screen-2 p").textContent = text.desc
  document.querySelector(".screen-1").style.display = "none"
  document.querySelector(".screen-2").style.display = "block"
})

document.querySelector(".screen-2 button").addEventListener("click", () => {
  document.querySelector(".screen-1").style.display = "block"
  document.querySelector(".screen-2").style.display = "none"
})

async function getChatCompletion(text, query) { 
  chatMessages.push({
    role: 'user',
    content: `Context: ${text} Question: ${query}`
  });
  
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: chatMessages,
    temperature: 0.5,
    frequency_penalty: 0.5
  });
  return JSON.parse(response.choices[0].message.content);
}

// Query Supabase and return a semantically matching text chunk
async function findNearestMatch(embedding) {
  const { data } = await supabase.rpc('match_movies', {
    query_embedding: embedding,
    match_threshold: 0.50,
    match_count: 20
  });
  return data.reduce((acc, inc) => {return acc+inc.content}, "\n");
}
