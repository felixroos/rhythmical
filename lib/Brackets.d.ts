import { NestedRhythm } from './Rhythm';
export interface Nested<T> extends Array<T | Nested<T>> {
}
export declare class Brackets {
    /** START OF ALTERNATIVE IMPLEMENTATION
     * The following methods are alternatives to using JSON.parse. They still do not work correctly with marked feet */
    static outerPair(string: string): number[] | false;
    static outerPairs(string: string): any[];
    static split(string: string, modify?: (part: string) => string[]): any;
    static resolve(string: string | NestedRhythm<string>, modify?: (string: string) => string[]): any;
    /** END OF ALTERNATIVE IMPLEMENTATION */
    static simplify(strings: string[] | string): string[] | string;
    static divide(string: string, symbol: string): string[] | string;
    static divideHierarchy(string: string, symbolHierarchy: string[]): any;
    static rabbit(hole: any, fn: any): any;
    static simplifyDeep(nested: string | Nested<string>): any;
    static divideDeep(tree: Nested<string> | string, divideHierarchy?: string[]): any;
    static toJson(string: any): any;
}
