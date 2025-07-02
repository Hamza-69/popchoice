import axios from 'axios';
const form = document.querySelector("form")

const chatMessages = [{
  role: 'system',
  content: `
  You are an enthusiastic movie expert who loves recommending movies to people. You will be given two pieces of information - some context about movies and a question. Your main job is to formulate a short answer to the question using the provided context. Please do not make up the answer.
  Your answer should be in the form of a json object in the following structure:
  {
    title: "<Title Here with date>",
    desc: "<Description here/ why this movie fits me in 50 words>"
  }
  Please only answer in this format. And dont add any extra data to the response. Only json.
  If you are unsure and cannot find the answer in the context, give
  {
    title: "No Movie Available For Now",
    desc: "Please try again later."
  }
  If the user provided a movie as his favourite, and you have other options, please dont recommend his favorite movie, recommend something else.
  If you have no other options, then recommend it.
  ` 
}];


form.addEventListener("submit", async (e) => {
  e.preventDefault()
  document.querySelector(".screen-1").style.display = "none"
  document.querySelector(".screen-2").style.display = "block"
  let data = new FormData(e.target)
  data = [data.get("firstchoice"), data.get("secondchoice"), data.get("thirdchoice")]
  data = data.map(x => x).join(" ")
  
  try {
    let embedding = await axios.post(`https://ai-embedding.hamzarachidi04.workers.dev/?data=${data}`)
    
    const text = await getChatCompletion(await findNearestMatch(embedding.data.data[0].embedding), data)
    form.reset()
    document.querySelector(".screen-2 h2").textContent = text.title
    document.querySelector(".screen-2 p").textContent = text.desc
    document.querySelector(".screen-2 button").textContent = "Go Again"
    document.querySelector(".screen-2 button").disabled = false
  } catch (error) {
    console.error('Error processing form:', error)
    alert('Sorry, there was an error processing your request. Please try again.')
    document.querySelector(".screen-1").style.display = "block"
    document.querySelector(".screen-2").style.display = "none"
  } 
})

document.querySelector(".screen-2 button").addEventListener("click", () => {
  document.querySelector(".screen-1").style.display = "block"
  document.querySelector(".screen-2").style.display = "none"
    document.querySelector(".screen-2 h2").textContent = "Loading data..."
    document.querySelector(".screen-2 p").textContent = "Loading data..."
    document.querySelector(".screen-2 button").textContent = "Loading data..."
  document.querySelector(".screen-2 button").disabled = true
})

async function getChatCompletion(text, query) { 
  try {
    chatMessages.push({
      role: 'user',
      content: `Context: ${text} Question: ${query}`
    });
    
    const response = await axios.post(`https://ai-text.hamzarachidi04.workers.dev/`, chatMessages, {
      headers: {
          'Content-Type': 'application/json'
      }
    })

    if (!response.data || !response.data.content) {
      throw new Error('Invalid AI response structure')
    }

    return JSON.parse(response.data.content);
  } catch (error) {
    console.error('Error in getChatCompletion:', error)
    console.error('Error response data:', error.response?.data)
    console.error('Error response status:', error.response?.status)
    return {
      title: "No Movie Available For Now",
      desc: "Please try again later."
    }
  }
}

// Query Supabase and return a semantically matching text chunk
async function findNearestMatch(embedding) {
  try {
    const response = await axios.post(`https://supabase.hamzarachidi04.workers.dev/`, embedding, {
      headers: {
          'Content-Type': 'application/json'
      }
    })

    if (!response.data || !Array.isArray(response.data)) {
      throw new Error('Invalid Supabase response structure')
    }

    console.log(response.data)

    return response.data.reduce((acc, inc) => {return acc+inc.content}, "\n");
  } catch (error) {
    console.error('Error in findNearestMatch:', error)
    return "No matching movies found."
  }
}
