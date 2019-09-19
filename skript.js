let body = document.body;
let url = window.location.toString();
let date = new Date();
let requestForPromise, dateForPromise;


function hello() {
	setTimeout(function() {
  let preloader = document.getElementById('preloader');
  let loader = document.getElementById('loader');
  if( !preloader.classList.contains('done') )
  {
  	preloader.classList.add('done');
    loader.classList.add('done');
  }
  }, 1000);
}



let getUsername = (url) => {
    let splitOfUrl = url.split('=');
    let getMyUsername = splitOfUrl[1];
    if (getMyUsername == undefined) {
        getMyUsername = 'SveSvet';
    }
    return getMyUsername;
}

let getDate = new Promise((resolve, reject) => 
setTimeout(() => date ? 
resolve(date) : reject('Date is not defined'), 2000)
);

function dataPromise() {
    let getInfo = fetch(`https://api.github.com/users/${getUsername(url)}`);
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(getInfo);
            reject('error');
        }, 3000)
    })
    return promise;
}


Promise.all([dataPromise(), getDate])
    .then(([request, date]) => {
    requestForPromise = request;
    dateForPromice = date;
})
    .then(res => requestForPromise.json())
    .then(user => {
    userAvatar = user.avatar_url;
    userBio = user.bio;
    userUrl = user.url;
    
    let addUsername = () => {
        let user = document.createElement('h1');
        user.innerHTML = `${getUsername(url)}`;
        body.appendChild(user);
    }
    
    let addBio = () => {
        const bio = document.createElement('p');
        bio.innerHTML = `${userBio}`;
        body.appendChild(bio);
    }
    
    let addAvatar = () => {
        const avatar = document.createElement('img');
        avatar.src = this.userAvatar;
        body.appendChild(avatar);
    }

    let addDate = () => {
    let dateInHTML = document.createElement('h2');
    dateInHTML.innerHTML = dateForPromice;
    body.appendChild(dateInHTML);
    }
    addUsername();
    addBio();
    addAvatar();
    addDate();
    hello()
}) 
.catch(err => console.log('Page is not defined :c'));