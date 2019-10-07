# HTML Assingmnet 15

**In this assingment we will showing how to include images in our code**

NOTE: When developing a website images are a very important aspect, and sourcing images is even harder. Two good resources for free use icons and images are [unsplash](https://unsplash.com) & [icons8](https://icons8.com).

<br>

## Steps

1. Create the basic HTML layout.
2. Add the following code in the head of your html file (it will make the images a fixed width)
```
<style>
    img {
        width: 300px;
    }
</style>
```
3. Find an image from one of the sources listed above, do not download it, but link it with a URL (right click and select "open image in new tab" that url will be what you are looking for).
4. With the 3 images in the "asset" folder use the picture tag to display a different picture at different window sizes.

<br>

## Conclutions

The picture eliment was created to replace the srcset attribut for the image tag. The main purpose of these tags is to dowload an image of a lower resolution where posible (such as on a phone with a smaller screen) to reduce download time of your web page.

Resize your browser window to view the effects of the picture tag.