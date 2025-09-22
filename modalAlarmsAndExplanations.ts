import type { Modals } from "./modals";

type ModalAlarmsAndExplanations = {
    [key in keyof Modals]?: string
};

export const modalAlarmsAndExplanations: ModalAlarmsAndExplanations = {
    G17: "G17 (XY plane selection) is not set. Please set it to ensure correct plane selection for machining operations.",
    G20: "G20 (Inch mode) is not set. Please set it to ensure the machine operates in the correct unit system.",
    G40: "G40 (Tool radius compensation off) is not set. Please set it to avoid unexpected tool path deviations.",
    G49: "G49 (Tool length offset cancel) is not set. Please set it to ensure accurate tool length compensation.",
    G54: "G54 (Work coordinate system 1) is not set. Please set it to define the primary work coordinate system.",
    G90: "G90 (Absolute programming) is not set. Please set it to ensure all coordinates are interpreted correctly.",
    G94: "G94 (Feed per minute) is not set. Please set it to ensure the feed rate is applied correctly.",
    G96: "G96 (Constant surface speed) is not set. Please set it to maintain consistent cutting conditions.",
    M3: "M3 (Spindle on clockwise) is not set. Please set it to start the spindle in the correct direction.",
    M7: "M7 (Mist coolant on) is not set. Please set it to ensure proper cooling during machining operations."
}