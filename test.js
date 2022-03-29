const fs = require("fs")
const translate = require("./index")


//Read text original from origen.txt
const readText = async () => {
    const NAME_FILE =  "origen.txt"
    try {
        const text = fs.readFileSync(NAME_FILE, { encoding: 'utf8', flag: 'r' })

        return text
    } catch (err) {
        console.log(err)
    }
}
//Write text translated in target.txt
const writeText = async (text) => {
    fs.writeFileSync("target.txt", text)
    console.log("Text translated")
}



(async () => {
    const text = await readText()
    const textTranslated = await translate(text, ["en","es"], 'html')
    await writeText(textTranslated)
})()
