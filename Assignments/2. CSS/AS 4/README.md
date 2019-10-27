# CSS Assingmnet 4 (CHAPTER 20)

**In this assignment we will be discussing units, different ways to measure things.**

Their are two main different types of measurement, relitive and absolute. absolute units are used when you want something to be a fixed size and never change, but you want to use relitive units so your website can change size depending on the size of the screen.

Be sure to put dummy text in each eliment, as sizes will not b rendered on empty eliments.

The most used units we will be discussing are:
1. %    (responsive)
2. px   (absolute)
3. rem  (responsive)
4. vw   (responsive)
5. vh   (responsive)

<br>

## Steps

1. Create a css file and link it to the starting HTML file.
2. Make each decendant of the div with id "d1" width 50% of its parent. (Bonus if you can do it with only 1 selector. hint: select all decendants not each child)
3. Make the div with id "d2" have a width of 700px.
4. Make the div with id "d3" have a width of 100vw.
5. Make each decendant of the div with id "d1" have a font size of 2rem.

<br>

## Conclutions

After you have finished each step resize your web browser to see how each div responds to the page being resized and take not of how relitive units change size and absolute units do not.

It should also be noted that the the reason the 100vh on the div with id d3 goes off screen is because the body of the document by default has padding and  margin, so that div gets pushed over due to the body, however it is the width of the screen and does resize.

The best way to visualize vh and vw is that they are percentages of the screen, and % is percentage of the parent eliment.

The rem unit is only used for fonts and the way it works is 1rem is the standard 16px and 2rem is double that 32px. The reason we use this instead of pixles is for mobile phones. So you can change the base size of 1rem using pixles and all other fonts using rem will resize according to the root size of 1rem. Simply put you can change the value of a rem with pixels and a rem is a multiple of that value.

