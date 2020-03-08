const fs = require("fs")

const build_icons = (_path) => {
  let fileHead = `import React from "react"
`
  let defaultVars = `
const StrokeWidth = "3.5px"
const Height = "2em"
const Width = "2em"
const Color = "currentColor"
const Fill = "none"
`
  let imported = ``
  let exported = ``
  let fileList = fs.readdirSync(_path)

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  fileList.map((file) => {
    if (file.endsWith(".svg")) {
      let name = file.replace(".svg", "")
      let c = capitalize(name).replace("-", "")

      if (c.includes("_")) {
        let s = c.split("_")
        let n = ""
        s.map(part => {
          n += capitalize(part)
        })
        c = n
      }

      imported += `import { ReactComponent as ${c}Svg } from "./${name}.svg"\n`
      exported += `
export const ${c} = (props: React.SVGProps<SVGSVGElement>) => <${c}Svg
  fill={props.fill || Fill}
  stroke={props.stroke || Color}
  strokeWidth={props.strokeWidth || StrokeWidth}
  height={props.height || Height}
  width={props.width || Width}
  style={{ ...props.style }} {...props}
/>
  `
    }
  })

  let finalFile = fileHead + imported + defaultVars + exported

  fs.writeFileSync(`${_path}/index.tsx`, finalFile, "utf8")
}

const build_default = (_path) => {
  let indexfile = `import * as c from "./coins"
import * as i from "./interface"

const out = {
  interface: i,
  coins: c
}

export default out
`
  fs.writeFileSync(`${_path}/index.ts`, indexfile, "utf8")
}

build_icons(`${process.cwd()}/icons/coins`)
build_icons(`${process.cwd()}/icons/interface`)
build_default(`${process.cwd()}/icons`)
