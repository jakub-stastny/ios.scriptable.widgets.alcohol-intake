// import * as widgetConfig from './config.ts'
// import { getCurrentEvent, getBirthdays, getTodayEvents, getDayFlags } from './data.ts'
// import { instantiateUserInterface } from './ui.ts'

// async function fetchData() {
//   return {
//     currentEvent: await getCurrentEvent(),
//     birthdays: await getBirthdays(),
//     todayEvents: await getTodayEvents(),
//     dayFlags: await getDayFlags()
//   }
// }

// // We wrap everything in an async main function just so
// // the compilation doesn't fail for using top-level await.
// async function main() {
//   const data = await fetchData()
//   const ui = instantiateUserInterface(config, {widgetConfig, config, data})

//   ui.render()
// }

// main()
const unitsAllowed = 17
const unitsConsumed = 0 // Thursday morning
const unitsLeft = unitsAllowed - unitsConsumed
const unitsLeftRough = Math.round(unitsLeft / 3) // 0..6
console.log(unitsLeftRough)

const widget = new ListWidget()
widget.url = 'shortcuts://run-shortcut?name=Log%20alcohol%20intake'

//const unitsLeftText = widget.addText("8 of 17")
const unitsLeftText = widget.addText(unitsLeft.toString())
unitsLeftText.textColor = new Color('#cfbfc4', 1)
unitsLeftText.textOpacity = 0.8
unitsLeftText.font = new Font('Helvetica', 14)
unitsLeftText.centerAlignText()

const fm = FileManager.local()
const filePath = fm.joinPath(fm.bookmarkedPath('widgets'), `pint-${unitsLeftRough}.jpg`)
// widget.backgroundImage = Image.fromFile(filePath)

Script.setWidget(widget)
Script.complete()
