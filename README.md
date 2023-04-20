Demo
----
Demo [here](https://fusion.li).


Using SVG Sprites
----

Download based on your needs [`fusion-coins.svg`](sprites/fusion-coins.svg) / [`fusion-interface.svg`](sprites/fusion-interface.svg) / [`fusion-web3.svg`](sprites/fusion-web3.svg) to your project.

```css
.fusion{
color: #112E49;
stroke-width: 1.1;
aspect-ratio: 1/1;
}
```

Use spritesheet files what contains the icons you need and add the icons name behind the #

```html
<svg class="fusion">
<use xlink:href="sprites/fusion-interface.svg#alarm"></use>
</svg>
<svg class="fusion">
<use xlink:href="sprites/fusion-coins.svg#BTC_1"></use>
</svg>
<svg class="fusion">
<use xlink:href="sprites/fusion-web3.svg#coinbase"></use>
</svg>
}
```


Fusion for Figma
----
[`online`](https://www.figma.com/file/SQPTWYnxQv3188UUmKBPIv/fusion)

License
----
See [LICENSE](LICENSE)