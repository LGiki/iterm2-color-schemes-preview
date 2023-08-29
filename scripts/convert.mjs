import {load} from 'js-yaml';
import {readdirSync, readFileSync, writeFileSync} from 'fs';
import {join} from "path";

const colorSchemes = []

const currentWorkingDirectory = process.cwd()

const inputFolder = join(currentWorkingDirectory, './iTerm2-Color-Schemes/alacritty')
const outputFilePath = join(currentWorkingDirectory, './data/color-schemes.json')

readdirSync(inputFolder).forEach(filename => {
    const filePath = join(inputFolder, filename)
    const fileContent = load(readFileSync(filePath, 'utf8'))
    const colorScheme = {
        name: filename.replace('.yml', ''),
        colors: {
            foreground: fileContent.colors.primary.foreground,
            background: fileContent.colors.primary.background,
            cursor: fileContent.colors.cursor.cursor,
            cursorAccent: fileContent.colors.cursor.text,
            selectionBackground: fileContent.colors.selection.background,
            selectionForeground: fileContent.colors.selection.text,
            selectionInactiveBackground: fileContent.colors.selection.background,
            black: fileContent.colors.normal.black,
            red: fileContent.colors.normal.red,
            green: fileContent.colors.normal.green,
            yellow: fileContent.colors.normal.yellow,
            blue: fileContent.colors.normal.blue,
            magenta: fileContent.colors.normal.magenta,
            cyan: fileContent.colors.normal.cyan,
            white: fileContent.colors.normal.white,
            brightBlack: fileContent.colors.bright.black,
            brightRed: fileContent.colors.bright.red,
            brightGreen: fileContent.colors.bright.green,
            brightYellow: fileContent.colors.bright.yellow,
            brightBlue: fileContent.colors.bright.blue,
            brightMagenta: fileContent.colors.bright.magenta,
            brightCyan: fileContent.colors.bright.cyan,
            brightWhite: fileContent.colors.bright.white,
        }
    }
    colorSchemes.push(colorScheme)
})

writeFileSync(outputFilePath, JSON.stringify(colorSchemes, null, 2))
console.log(`Color schemes have been converted to ${outputFilePath}`)