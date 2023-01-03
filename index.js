const tacoGifs = [
    'https://media.giphy.com/media/10wtUWPq0MgKfC/giphy.gif',
    'https://media.giphy.com/media/hrlfMpZwcEdiM/giphy.gif',
    'https://media.giphy.com/media/PrRVvcwgty7K0/giphy.gif'
];

const catsGifs = [
    'https://media.giphy.com/media/SJk9xTbxcg0DFDs89d/giphy.gif',
    'https://media.giphy.com/media/C9x8gX02SnMIoAClXa/giphy.gif',
    'https://media.giphy.com/media/5ztEKjZUDQ0XC/giphy.gif'
];

const friendsGifs = [
    'https://media.giphy.com/media/KiaU2EUyxjQB2/giphy.gif',
    'https://media.giphy.com/media/31lPv5L3aIvTi/giphy.gif',
    'https://media.giphy.com/media/BlVnrxJgTGsUw/giphy.gif'
];

const gifList=document.getElementById('gif-list');
const gifList2=document.getElementById('gif-list2');
const selectorGif=document.getElementById('gif-selector');

function removeChild(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function addChilds(toto, titi){
    for(let i=0;i<titi.length;i++){
        const image=document.createElement('img');
        image.src=titi[i];
        toto.appendChild(image);
    }
}
addChilds(gifList,catsGifs);

selectorGif.addEventListener('change',()=>{
    removeChild(gifList)
    const choice=selectorGif.value;
    switch(choice){
        case 'cats' : addChilds(gifList,catsGifs);
                break;
        case 'friends' : addChilds(gifList, friendsGifs)
                break;
        case 'tacos' : addChilds(gifList,tacoGifs);
                break;
        default :  addChilds(gifList,catsGifs);
    }
})

function addBlog(author, dateBlog,message){
    const blogContainer=document.createElement('div');
    const authorP=document.createElement('p');
    authorP.innerHTML=`Auteur : ${author}`;
    blogContainer.appendChild(authorP);
    const dateP=document.createElement('p');
    dateP.innerHTML=`Date : ${dateBlog}`;
    blogContainer.appendChild(dateP);
    const messageP=document.createElement('p');
    messageP.innerHTML=`Message <br>${message}`;
    blogContainer.appendChild(messageP);
    gifList2.appendChild(blogContainer);
}
addBlog('Toto','01/01/01','lorem');
addBlog('Titi','02/06/71','lorem 2');
