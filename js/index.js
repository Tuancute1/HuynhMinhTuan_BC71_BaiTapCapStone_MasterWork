const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        document.getElementById('sun').style.opacity = '0';
        document.getElementById('sun').style.transform = 'scale(0)';
        document.getElementById('moon').style.opacity = '1';
        document.getElementById('moon').style.transform = 'scale(1)';
    } else {
        document.getElementById('sun').style.opacity = '1';
        document.getElementById('sun').style.transform = 'scale(1)';
        document.getElementById('moon').style.opacity = '0';
        document.getElementById('moon').style.transform = 'scale(0)';
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        document.getElementById('sun').style.opacity = '0';
        document.getElementById('sun').style.transform = 'scale(0)';
        document.getElementById('moon').style.opacity = '1';
        document.getElementById('moon').style.transform = 'scale(1)';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        document.getElementById('sun').style.opacity = '1';
        document.getElementById('sun').style.transform = 'scale(1)';
        document.getElementById('moon').style.opacity = '0';
        document.getElementById('moon').style.transform = 'scale(0)';
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);


// SEARCH
document.addEventListener("DOMContentLoaded", function(){
    var masSearch = document.getElementById("masSearch");
    
});

// READ MORE READ LESS

var dots = document.getElementById("dots");
var moreContent = document.getElementById("more__content");
var readMore = document.getElementById("btn");
var isExpanded = false;

btn.addEventListener("click", function(){
    if(!isExpanded){
        moreContent.style.display = "inline";
        dots.style.display = "none";
        readMore.textContent = "Read Less";
    }
    else{
        moreContent.style.display = "none";
        dots.style.display = "inline";
        readMore.textContent = "Read More";
    }
    isExpanded = !isExpanded;
});