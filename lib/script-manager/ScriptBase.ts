import fs = require("file-system");
import { Dictionary } from "typescript-collections";

export abstract class ScriptBase {

    private path: string;
    private argument: Dictionary<string, string>;
    
    constructor(path: string) {
        this.path = path;
        this.argument = new Dictionary<string, string>();
    }

    public get $path(): string {
		return this.path;
	}

	public set $path(value: string) {
		this.path = value;
    }
    
    public addArgument(argKey: string, argValue: string): Dictionary<string, string> {
        this.argument.setValue(argKey, argValue);
        return this.argument;
    }

    public getArgumentList(): Dictionary<string, string> {
        return this.argument;
    }
    
    protected validate(): boolean {
        return this.fileExists(this.path);
    }

    private fileExists(path): boolean {
        return fs.existsSync(path);
    }

} 