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
// move to top

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () {
          scrollFunction()
        };
      
        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("movetop").style.display = "block";
          } else {
            document.getElementById("movetop").style.display = "none";
          }
        }
      
        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }
  