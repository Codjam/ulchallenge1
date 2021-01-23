
function changeImage() {
            var Image_Id = document.getElementById("img");
            if (Image_Id.src.match("https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/African_wild_dog_%28Lycaon_pictus_pictus%29.jpg/1920px-African_wild_dog_%28Lycaon_pictus_pictus%29.jpg")) {
                Image_Id.src = "https://tse2.mm.bing.net/th?id=OIP.WrmwqPbQG0-fpI79UQAI-QHaEo&pid=Api&P=0&w=305&h=191";
            }
            else {
                Image_Id.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/African_wild_dog_%28Lycaon_pictus_pictus%29.jpg/1920px-African_wild_dog_%28Lycaon_pictus_pictus%29.jpg";
            }
        } 



        // function changeImage() {

//         if (document.getElementById("imgClickAndChange").src == "http://www.userinterfaceicons.com/80x80/minimize.png") 
//         {
//             document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/maximize.png";
//         }
//         else 
//         {
//             document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/minimize.png";
//         }
//     }

