Demo
----
Demo [here](https://fusion.li).

Single Use Method : copy/paste icon's code into your html
----

Open icon-file, copy code to html. 
Notice : You can use the regular color attribute.

```html
<div style="color: #112E49; stroke-width: 1.1;">
 <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor">
 <circle cx="32" cy="32" r="24"/><line x1="20" y1="32" x2="44" y2="32"/><line x1="32" y1="20" x2="32" y2="44"/></svg>
</div>
```



Vue3 / React Method : inline-svg
----

Get your favorite inline svg loader like inline-svg

```js
<inline-svg src="<path>/<Icon>.svg" stroke="black" stroke-width="1"/>
```


Oldshool No-Build Low-Http-Request way:
----

Download [`fusion-coins.svg`](sprites/fusion-coins.svg) / [`fusion-interface.svg`](sprites/fusion-interface.svg) / [`fusion-web3.svg`](sprites/fusion-web3.svg) to your project.

Use the spritesheet files, that contains the icons you need, and icons name after the #

```html
<svg style="color: #112E49; stroke-width: 1.1; aspect-ratio: 1/1;">
 <use xlink:href="sprites/fusion-interface.svg#alarm"></use>
</svg>
}
```

Note, there is a [`genSprites.js`](/genSprites.js) written in Node JS, to generate these spritesheets from the icons folder. You will not need this file inside your project.


Fusion for Figma
----

There is also a Figma file for our designer friends.

[`online`](https://www.figma.com/file/SQPTWYnxQv3188UUmKBPIv/fusion)


License
----
See [LICENSE](LICENSE)