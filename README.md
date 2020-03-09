What is Fusion?
----

Fusion is a collection of simply beautiful open source icons. It includes the Top Tokens/Chains Symbols and a lot of usefull Interface Icons. As its made out of pure lines, you can finetune it with css attributes: stroke-width and stroke. This pack grow over time.

https://fusion.li

![preview](preview.png)


Using SVG Sprites
----

Download [`fusion-coins.svg`](sprites/fusion-coins.svg) and [`fusion-interface.svg`](sprites/fusion-interface.svg) to your project.

Define CSS

```css
.fusion{
background-color: white;
stroke: black;
stroke-width: 2px;
width:64px;
height:64px;
fill: none;
}
```

Add HTML Markup

Use the spritesheet what contains the icon you need ( interface.scg or coins.svg, and add the icons name behind the #

```html
<svg class="fusion">
<use xlink:href="sprites/fusion-interface.svg#alarm"></use>
</svg>
<svg class="fusion">
<use xlink:href="sprites/fusion-coins.svg#BTC_1"></use>
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




You can help!
----

Please consider support this open source project on Gitcoin Grands / a direct donation [here](https://fusion.li/donate).


File naming convention
----

I go with the Coinmarketcap format's : [symbol] + _ + [cmcId] + .svg
Example : ETH_1027.svg or XRP_52



Demo
----

You can see a demo [here](https://fusion.li).



License
----
See [LICENSE](LICENSE)
