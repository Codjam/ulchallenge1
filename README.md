Code Challenges

HTML/CSS Challenge
This challenge will run for 4 weeks. At the end of the month, we should be able to build a Dog blog website.

To participate, all you need is VSCode or any other code editor of your choice.

This week, you have to complete the two challenges on or before Friday.

To start this challenge,
Copy the code below to your code editor

<!DOCTYPE html>
<html>
  <head>
<!--   Meta data would go here   -->
  </head>
  <body>
    <!-- HTML that needs to be rendered to the browser goes below this line -->
    <h1>HTML and CSS Challenges</h1>
  </body>
</html>

-Challenge 1 -

                • Remove the current "HTML and CSS Challenges" h1 tag (below). Moving forward, place all code inside the body tags.
                • Let's create a simple header for our webpage. First, create a header tag.
                 DON'T CONFUSE A header TAG WITH A head tag or an h1-h6 tag. This is a new tag we havn't talked about yet.
                 It's probably a good idea to look up the documentation on this: https://www.w3schools.com/tags/tag_header.asp.
                 Then let's nest an h1 tag inside of our header tag. The h1 tag should have the text "Dog Blog" inside of it. Additionally,
                  let's add an id of "heading" to our h1 tag so that we can style our h1 later.

                • Let's also add a Horizontal Rule line after our header to give us some separation. Try looking here for some documentation
                on Horizontal Rule HTML elements: https://www.w3schools.com/tags/tag_hr.asp.



-Challenge 2 -

Next, let's start creating our blog posts for our pups.
• Let's start by creating a container div for our first blog post and give it class of "blogPost". We will use this class later to style our div.
Each blog post we create will consist of an image and a description of a dog.

                • Let's nest an image tag for our first dog post inside our container div and set the src attribute of it equal to a url of a dog we are blogging about (copy this url. "https://goo.gl/4zBMtT").
                You can obtain a url of your own by simply googling an image you want, right clicking it and copying the image address.

                • Next let's create our description for our dog.
                Let's nest an additional div inside of our container div and give it a class of "textContainer".
                Inside of that textContainer div let's add a paragraph tag. We can add our text that describes our dog. You can come up with this text yourself or you can copy some place holder doggo lorem ipsum here: "https://doggoipsum.com/".

                • Create 4 more of these dog posts to give our page a little more content.

@channel

– Challenge 3 –

CSS
As we blog about more and more dogs our page is going to become longer and longer. Let's add an anchor tag at the bottom of our web page that will return us back to the top without having to scroll all the way up.

Create an anchor tag and set its href attribute equal to "#heading"
When you click on the text on our webpage it should take you to the top.

– Challenge 4 –

Let's start off by making our posts look a little more uniform.
• Create a CSS selector that targets the class "blogPost". Then make its width 75% of their parent element.
• Create a CSS selector that targets all images and set their widths to 100% of their parent element.
• Now let's make our posts pop a bit. Using the same class "blogPost" selector as before, give our blog posts some box shadow.
• Lets also give our "blogPost" class a border radius of 5px and padding of 5px.
• Since our posts are a little squished together let's put 25px of space between them using margin-bottom.

-Challenge 5 -

Let's make our content align on the page in a nicer format.
• Create a CSS selector that targets out body. Then use flexbox to center all of our content on the page in one column.

-Challenge 6-
Finally let's make some last little tweaks to make everything come together.
• Create a CSS selector that targets our "heading" id and change the font family to "Comic Sans MS".
• Create a CSS selector for our horizontal rule and set its width to 90% of its parent element and give it 20px of bottom margin.
• Let's make our dog descriptions a little easier to read. Create a CSS selector that targets our "textContainer" class and change the line height to 150%.
• Add 5px of border radius to all images.

@channel

- Then add onclick event of "changeImage()" function to the image tag

- When done, go to your Javascript and create the function - changeImage

- inside the changeImage function, set this url - (https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg) as a variable named newImg

- also set the image tag as variable oldImg.

- then, let return newImg as the new src attribute of the image tag.

When you click on the image now, the image should change to the new image
