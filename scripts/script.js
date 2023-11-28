function myFunction() {
    document.getElementById("dropDown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.headBtn')) {
      var dropdowns = document.getElementsByClassName("hMenuItem");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
