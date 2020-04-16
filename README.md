# text-roller
A vanilla JavaScript infinite text scroll/carousel

## Description
What this little javascript basically does is, picks up a text that can overflow from the right side,
and make it scroll without stop to the left, and loops around. If there are space, the text is
replicated to fill blank space
![GIF Preview](https://i.imgur.com/AWEsQLr.gif)

## Usage
Basically, grab `text-roller.js` and add it to your web page as a `<script>` tag.

Once done, you must set up an element with a span inside, like this.
```
<div id="my-text-roller">
  <span>This is my text</span>
</div>
```

Now, go to your javascript, grab your element that wraps your `<span>` and initialize your text roller:
```
var my_text_roller = new TextRoller(document.getElementById("my-text-roller"));
my_text_roller.start();
```

Done! Your text now rolls and wrap around indefinitely.

## Things to keep in mind
Make sure your text does not wrap, and overflows to the right. Otherwise, this will not work.
To make sure that it works, use CSS like in the example files (*index.css*) and make use of
`white-space: nowrap;` on your wrapper. In the example above it should lool like:
```
#my-text-roller{
  white-space: nowrap;
}
```
