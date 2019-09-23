date = Date();
let body = document.body;

function hello() {
	setTimeout(function() {
  let preloader = document.getElementById('preloader');
  let loader = document.getElementById('loader');
  if( !preloader.classList.contains('done') )
  {
  	preloader.classList.add('done');
    loader.classList.add('done');
  }
  }, 2000);
}

const name = 'SveSvet';
const url = 'https://api.github.com/users/';

const getName = new Promise((resolve, reject) => {
	setTimeout(() => name ? resolve(name) : reject('Name not found'), 3000);
});


const getUrl = new Promise((resolve, reject) => {
	setTimeout(() => url ? resolve(url) : reject('url not found'), 2000);
});

	Promise.all([getName, getUrl])
  .then(([name, url]) => fetch(`${url}${name}`))
  .then(res => res.json())
   .then (user => {
    userAvatar = user.avatar_url;
    userBio = user.bio;
    userUrl = user.url;
        
    if (user.id != undefined) {
    const addUsername = () => {
        let user = document.createElement('h1');
        user.innerHTML = name;
        body.appendChild(user);
    }
    
    const addBio = () => {
        const bio = document.createElement('p');
        bio.innerHTML = `${userBio}`;
        body.appendChild(bio);
    }
    
    const addAvatar = () => {
        const avatar = document.createElement('img');
        avatar.src = this.userAvatar;
        body.appendChild(avatar);
    }
    
    let addDate = () => {
    let dateInHTML = document.createElement('h2');
    dateInHTML.innerHTML = date;
    body.appendChild(dateInHTML);
        
    }
    
    addUsername();
    addBio();
    addAvatar();
    addDate();
    hello()
    }
    
    else {
        
    alert('Вы ввели несуществующего пользователя!');
        
    }
        
}) 
 .catch(err => alert(err + ' Профиль не найден'));