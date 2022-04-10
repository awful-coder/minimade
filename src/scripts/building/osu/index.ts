import circle from "./circle.js";
import slider from "./slider.js";
import hitbursts from "./hitbursts.js";
import spinner from "./spinner.js";
import hud from "./hud.js";
import { TaskGroup } from "ktw";

export default new TaskGroup("osu", [circle, slider, spinner, hitbursts, hud]);
