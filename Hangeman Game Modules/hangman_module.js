export const categories = {
    Fruits: ['apple', 'banana', 'orange', 'mango'],
    Colors: ['red', 'blue', 'yellow', 'green'],
    Animals: ['elephant', 'giraffe', 'cat', 'dog'],
    Movies: ['inception', 'avatar', 'moana', 'titanic'],
    Countries: ['canada', 'france', 'egypt', 'germany']
};

export const hints = {
    Fruits: ['A round red fruit', 'A long yellow fruit', 'A citrus fruit with orange color', 'A tropical fruit with a stone inside'],
    Colors: ['The color of blood', 'The color of the sky', 'The color of the sun', 'The color of grass'],
    Animals: ['A large mammal with a trunk', 'A tall animal with a long neck', 'A small domestic feline', 'A loyal domestic pet'],
    Movies: ['A mind-bending thriller by Christopher Nolan', 'A sci-fi movie about a different planet', 'A Disney movie set in Polynesia', 'A romantic drama set on a sinking ship'],
    Countries: ['A North American country known for maple syrup', 'A European country famous for the Eiffel Tower', 'A Middle Eastern country with ancient pyramids', 'A European country known for forests, rivers and mountain ranges']
};


export  function resetGame(){
    document.getElementById('category-selection').style.display='block';
    document.getElementById('game-area').style.display='none';
    document.getElementById('alphabet-buttons').innerHTML = '';
    document.getElementById('message').innerText = '';

}


