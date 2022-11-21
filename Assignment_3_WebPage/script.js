function toggle_theme(){
    const root = document.documentElement;

    if (root.getAttribute('data-theme') != 'dark'){
        root.setAttribute('data-theme','dark');
        localStorage.setItem('data-theme','dark');
    }
    else {
        root.setAttribute('data-theme','');
        localStorage.setItem('data-theme','');
    }
}

function load_theme(){
    const root = document.documentElement;

    theme = localStorage.getItem('data-theme');

    root.setAttribute('data-theme',theme);
}

function load_heading(){
    const user_name_header = document.getElementById('user_name_header');

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let user_name = urlParams.get('user_name');

    if (user_name == null){
        user_name = localStorage.getItem('user_name');
    } else {
        localStorage.setItem('user_name',user_name);
    }

    user_name_header.innerHTML = 'Hello, ' + user_name;
}