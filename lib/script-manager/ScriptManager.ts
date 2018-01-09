import { IScriptRunner } from "./IScriptRunner";


/**
 * let scriptManager = ScriptManager(new Python());7
 * scriptManager.$path = "pytonScript.py";
 * scriptManager.addArgument("--cascaded", "5")
 *              .addArgument("--block-orientation", "0");
 * scriptManager.
 */
export class ScriptManager {

    private script: IScriptRunner;

    constructor(script: IScriptRunner) {
        this.script = script;
    }

    public execute() {
        
    }
}