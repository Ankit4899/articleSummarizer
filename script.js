const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6d2ca7a0bdmshb56c4fa1b2d2cc5p108492jsn6c2074702f38',
		'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
	}
};

// fetch(url,options)
// .then((data)=>{
//     return data.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((e)=>{
//     console.log(e);
// })


const btn = document.querySelector(".btn");
const summary = document.querySelector(".summary");



btn.addEventListener(("click"),(e)=>{
    e.preventDefault();
    const inp = document.querySelector("#url").value;
    
    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${inp}&lang=en&engine=2`;
    summary.innerText = "Have patience.....";
    if(!/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/.test(inp)){
summary.innerText="Invalid url something wrong";
    }else{
        fetch(url,options)
.then((data)=>data.json())
    .then(data=>{
        // console.log(data.summary);
        summary.innerText = data?.summary;
})
.catch((e)=>{
    console.log(e);
})
    }
})