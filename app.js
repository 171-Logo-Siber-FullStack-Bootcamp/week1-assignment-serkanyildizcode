const element = document.getElementById("getData");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send();
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if ((this.status == 200) && (this.status < 300)) {
          console.log(this.responseText)
         
        }
      }
    }