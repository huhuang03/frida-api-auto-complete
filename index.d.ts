declare class Backtracer {
    // static ACCURATE
}

declare class DebugSymbol {
    // static fromAddress
}

declare class Interceptor {
    static attach(target: NativePointer, callbacks: {
        onEnter?: (args: [NativePointer])=>void;
        onLeave?: (retval?: any)=>void;
    }): any;
}

declare class Process {
    id: number;
    static enumerateModules(): Module[];
    static isDebuggerAttached(): boolean;
    static getCurrentThreadId(): number;
    static enumerateThreads(): [Thread];
    static findModuleByName(name: String): Module;
}

declare class Module {
    name: string;
    path: string;
    base: NativePointer;
    size: number;
    static findExportByName(moduleName: string, declareName: string): NativePointer
}

declare class Thread {
    id: number;
    state: string;
    static backtrace(context: any, backtracer: any): any;
}


declare class NativePointer {
    add(rhs: number|NativePointer): NativePointer;
    sub(rhs: number|NativePointer): NativePointer;
    and(rhs: number|NativePointer): NativePointer;
    or(rhs: number|NativePointer): NativePointer;
    xor(rhs: number|NativePointer): NativePointer;

    readS8(): number;
    readU8(): number;
    readS16(): number;
    readU16(): number;
    readS32(): number;
    readU32(): number;
    readShort(): number;
    readUShort(): number;
    readInt(): number;
    readUInt(): number;
    readFloat(): number;
    readDouble(): number;
    readPointer(): NativePointer;
    
    readCString(size?:number): string;

    readUtf8String(size: number): string;

    readUtf16String(size: number): string;

    readAnsiString(size: number): string;
    
    isNull(): boolean;
}

declare interface ObjectWrapper {
    readonly value: any;
    [fieldOrMethods: string]: any;
}

declare interface ClassWrapper {
    $new(...args: any[]): any;
    $dispose(): void;
    [method: string]: Method | any;
}

// Java
declare class Java {
    static perform(func: any): void;
    
    static use(pkg: String): ClassWrapper;

    static cast(obj: any, clazz: Class): any;

    static array(type: string, elements: any): any;
}

declare class Class {
    [mehtod: string]: Method;
}

declare class Method {
    overload(signature: string): Method;
    implementation: () => void;
}

declare function ptr(address: string): any;
declare function send(obj: any): any;

declare function recv(type: string, data: any): void;

declare var rpc: any;