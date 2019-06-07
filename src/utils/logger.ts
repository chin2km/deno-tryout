import { bgBlue, bgCyan, bgGreen, black, bold, gray, italic, red, white } from 'https://deno.land/std/colors/mod.ts';

export const COLORS = {
    red,
    white,
    gray,
    black
}
export const BG = {
    bgBlue,
    bgCyan,
    bgGreen,
}

interface ILog {
    (message: string, bg?: (str: string) => string, color?: (str: string) => string)
}
export const log: ILog = (message, bg = BG.bgGreen, color = COLORS.black) =>
    console.log(bg(color(bold(italic(message)))));