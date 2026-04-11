var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closebtn = document.getElementById("closebtn")

menuicon.addEventListener("click",function(){
    sidenav.style.right="0%"

})
closebtn.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

// product search functionality

var productcontainer =  document.getElementById("product-container")
var searchbar = document.getElementById("searchBar")
var productlist = productcontainer.querySelectorAll("div")

searchbar.addEventListener("keyup",function(event){
    var enteredvalue = event.target.value.toUpperCase()
    for(count=0;count<productlist.length;count=count+1)
    {
        var productname = productlist[count].querySelector("h2").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[count].style.display="none"
        }
        else{
             productlist[count].style.display="block"
        }
    }
})