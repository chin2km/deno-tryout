import { BG, COLORS, log } from "../utils/logger.ts"

export const AutomobileMixin = {
    honk(arg: string) {
        log(` Honk honk - ${arg} `, BG.bgBlue, COLORS.white)
    },
    steer() {
        log(" Moving forward 🚀 ")
    },
}
