
export interface IScriptRunner {
    validate(): boolean;
    execute(): Promise<any>;
}