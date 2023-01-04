
$("button").click(fetchCat)

function fetchCat() {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then((data) => {
        caturl = data[0].url
        catwidth = data[0].width
        catheight = data[0].height
        console.log(caturl)

        if(catheight <= 2000 && catwidth <= 2000) {
            $(".catplace").attr("src", caturl)
        }
        
    })

}