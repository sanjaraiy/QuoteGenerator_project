const url_API='https://api.quotable.io/random';

const quote=document.querySelector('#quote');
const author=document.querySelector('#author');
const next=document.querySelector('#next');
const tweet_post=document.querySelector('.tweet');
async function getQuotion(){
    const response=await fetch(url_API);
    const data =await response.json();
    // console.log(data);

    quote.innerHTML=data.content;
    author.innerHTML=data.author;


}

next.addEventListener('click',getQuotion,false);

const post=quote.innerHTML;

function tweet(){
  window.open(`https://twitter.com/intent/tweet?text=${post}`,"Tweet Window","width=600, height=300");
}

tweet_post.addEventListener('click',tweet,false);
