What is Fusion?
----

Fusion is a collection of simply beautiful open source icons. It includes the Top Tokens/Chains Symbols and a lot of usefull Interface Icons. As its made out of pure lines, you can finetune it with css attributes: stroke-width and stroke. This pack grow over time. Checkout the offical Homepage here : https://fusion.li


Using SVG Sprites
----

Download based on your needs [`fusion-coins.svg`](sprites/fusion-coins.svg) and / or [`fusion-interface.svg`](sprites/fusion-interface.svg) to your project.

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


JSON Data
----

coins.json is a fetch from coinmarketcap's top 500 coins,
what i update when making new icons.

```json
{
	"name": "Bitcoin", //coinmarketcap currency name
	"symbol": "BTC", //coinmarketcap symbol name
	"cmcId": 1, //coinmarketcap unique id
	"exists": true, //fusion have an icon for it or not
	"file": "BTC_1.svg", //file's physical name
	"sprite": "#BTC_1" //sprite's name
},
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
