import { IScriptRunner } from "./IScriptRunner";
import PythonShell = require("python-shell")
import { ScriptBase } from "./ScriptBase";

export class Python extends ScriptBase implements IScriptRunner {

    private getArgumentArray(): Array<string> {
        let argsList = this.getArgumentList(),
            array = [];
        argsList.forEach(function(key, value) {
            array.push(key);
            array.push(value);
        });
        return array;
    }

    public validate(): boolean {
        return super.validate();
    }

    public async execute(): Promise<any> {
        let that = this;
        let promise = new Promise((resolve, reject) => {
            let argsArray = that.getArgumentArray();
            let options = {
                mode: 'text',
                pythonOptions: ['-u'],
                args: argsArray
            };
            PythonShell.run(that.$path, options, function (err, results) {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        return promise;
    };

}