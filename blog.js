
function changeImage() {
            var imageId = document.getElementById("img");
            if (imageId.src.match("https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/African_wild_dog_%28Lycaon_pictus_pictus%29.jpg/1920px-African_wild_dog_%28Lycaon_pictus_pictus%29.jpg")) {
                imageId.src = "https://tse2.mm.bing.net/th?id=OIP.WrmwqPbQG0-fpI79UQAI-QHaEo&pid=Api&P=0&w=305&h=191";
            }
            else {
                imageId.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/African_wild_dog_%28Lycaon_pictus_pictus%29.jpg/1920px-African_wild_dog_%28Lycaon_pictus_pictus%29.jpg";
            }
        } 




