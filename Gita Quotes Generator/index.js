quotes = ['For one who has conquered his mind  a mind is best of friends but for one who has failed to do so a mind is the greatest enemy.',
    'Set thy heart upon thy work, but never on its reward.', 
    'He who is content with whatever comes, without attachment, not disappointed when he gets nothing, is wise.',
    'Calmness, gentleness, silence, self-restraint, and purity: these are the disciplines of the mind.',
    'As a strong wind sweeps away a boat on the water, even one of the roaming world of the senses on which the mind focuses can carry away a man’s intellect.',
    'One who sees inaction in action, and action in inaction, is intelligent among men.',
    'When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.'
]
//getting things from html
const quoteElements = document.getElementById("quote");
const usedindex = new Set();

function generateQuotes(){
    if (usedindex.size == quotes.length){  //resetting the set 
        usedindex.clear();
    }

    while (true){
        const randomidx = Math.floor(Math.random()*quotes.length) //generates a random number eg 1 ,2
        if (usedindex.has(randomidx))continue

        const quote = quotes[randomidx];
        quoteElements.innerHTML = quote; //embed code in html 
        usedindex.add(randomidx)
        break
    } 
}

/**/