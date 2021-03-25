Making the web(3) more beautiful, fast, and open through great iconography.
----

I believe the best way to bring personality and performance to websites and products is through great design and technology. My goal is to make that process simple, by offering an intuitive and robust collection of open source icons. By using fusion, you can integrate icons seamless and however you prefer.


Fusion for Figma
----
[`online`](https://www.figma.com/file/SQPTWYnxQv3188UUmKBPIv/fusion)


Demo
----
You can see a demo [here](https://fusion.li).


Using SVG Sprites
----

Download based on your needs [`fusion-coins.svg`](sprites/fusion-coins.svg) / [`fusion-interface.svg`](sprites/fusion-interface.svg) / [`fusion-web3.svg`](sprites/fusion-web3.svg) to your project.

Define CSS

```css
.fusion{
background-color: white;
stroke: black;
stroke-width: 2px;
stroke-miterlimit: 5;
width: 64px;
height: 64px;
fill: none;
}
```

Add HTML Markup

Use the spritesheet what contains the icons you need ( interface.svg or coins.svg (or both), and add the icons name behind the #

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


Use with ReactTypescript
----

Modulize for React Typescript, run:
```
node build_tsx.js
```

After building copy the `icons` folder to your React Application
then you can import it as Component:

```tsx
import { Add1 } from "./icons/interface"

const ReactFunction = () => (
    <Add1 width="16" height="16" />
)
```

import all as bundle:

```tsx
import Svg from "./icons"

const ReactFunction = () => (
    <Svg.interface.Add1 width="16" height="16" />
)
```





License
----
See [LICENSE](LICENSE)
