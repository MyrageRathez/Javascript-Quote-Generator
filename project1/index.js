const author= document.querySelector(".author")
const quote = document.querySelector(".quote") 
const button = document.querySelector("button")

const quotes = [{
  quote :`"If you aren't sure where you are going you'll probably end up somewhere else."`,
  author: 'Robert Mager'
},{
  quote:`"The man who has no direction is a slave of his circumstances."`,
  author: 'John Mason'
},{
  quote:`"When you stumble today,pick yourself up tomorrow;that's what tomorrrows are for."`,
  author:'Janet Collins'
},{
  quote:`"Remember,there are two benefits of failure.First,if you fail,you learn what doesn't work;and second, it gives you an oppprortunity to try a new approach."`,
  author:'Roger Von Oech'
},{
  quote:`"There's no time llike the present and no present like time."`,
  author:'John Mason'
},{
  quote:`"Some men have thousands of reasons why they can't do what they want to do,when all they need is one reason why they can."`,
  author:'Willis Whitney'
},{
  quote:"We have many reasons for failure but not a single excuse.",
  author:'Ralph Waldo Emerson'
},{
  quote:`"The people who are really failures are people who set their standards so low,keep the bar at such a safe level that they never run the risk of failure."`,
  author:'Robert Schuller'
},{
  quote:`"Believing is Seeing."`,
  author:'Terrence Deal'
},{
  quote:`"The fool with all his other thoughts has this also;he is always getting ready to live."`,
  author:'Sam Slick'
},{
  quote:`"When you see God's hand in everything,you leave everything in God's hands."`,
  author:'John Mason'
},];

button.addEventListener("click",function(){
  const random =Math.floor( Math.random()*quotes.length);

  quote.innerText = quotes[random].quote
  author.innerText = quotes[random].author
})
