export interface MusicObject<T> {
    name?: string;
    time?: number;
    n?: number;
    type?: 'relative' | 'absolute';
    duration?: number;
    length?: number;
    velocity?: number;
    transpose?: number;
    chords?: Music<T>[] | Music<T>;
    v?: Music<T>[] | Music<T>;
    p?: Music<T>[] | Music<T>;
    m?: Music<T>[] | Music<T>;
}
export declare type Music<T> = T | T[] | MusicObject<T>;
export interface Song extends MusicObject<string> {
    bpm: number;
    p: Music<string>[];
}
export declare type TransformParams<T> = {
    block: MusicObject<T>;
    props: Object;
};
export declare type Transform<T> = (params: TransformParams<T>) => TransformParams<T>;
export declare const params: {
    monophony: string;
    polyphony: string;
    time: string;
    duration: string;
    velocity: string;
};
export declare function toObject(music: Music<any>, param?: string): any;
export declare function toArray<T>(array: T): T[];
export declare function unify<T>(music: Music<T>): MusicObject<T>;
export declare function render2<T>(music: Music<T>, transform?: Transform<T>): {
    seconds: any;
    p: any;
};
export declare function calculate2(totalLength?: number, verbose?: boolean): any;
export declare function isSameSlot(pathsA: any, pathsB: any): boolean;
export declare function eventDuration(e: any, standard?: number): any;
export declare function flat2<T>(music: Music<T>, props?: any, transform?: Transform<T>): any;
