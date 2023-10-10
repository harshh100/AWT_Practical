import fetch from "node-fetch";

async function SequentialFetch() {
  try {
    // first fetching user from api
    const userApi = "https://dummyjson.com/user/1";
    const response = await fetch(userApi);
    const data = await response.json();
    console.log("User Data:");
    console.log("id:", data.id);
    console.log("username:", data.username);
    console.log("email:", data.email);

    // fetch posts of user from user's id
    const postsApi = "https://dummyjson.com/posts/" + data.id;
    const response2 = await fetch(postsApi);
    const data2 = await response2.json();
    console.log("User Post:");
    console.log("id:", data2.id);
    console.log("title:", data2.title);
    console.log("body:", data2.tags);

    //comments of post
    const commentsApi = "https://dummyjson.com/comments/" + data2.id;
    const response3 = await fetch(commentsApi);
    const data3 = await response3.json();
    console.log("User Comments:");
    console.log("by:", data3.user);
    console.log("content:", data3.body);
    
  } catch (error) {
    throw error;
  }
}

SequentialFetch()
