declare class Backtracer {
    static ACCURATE
}

declare class DebugSymbol {
    static fromAddress
}

declare class Interceptor {
    static attach(target: string, callbacks: {
        onEnter: (args: [NativePointer])=>void;
        onLeave: ()=>void;
    });
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
    static findExportByName(moduleName: string, declareName: string): string
}

declare class Thread {
    id: number;
    state: string;
    static backtrace(context, backtracer)
}


declare class NativePointer {
    readCString(size:number): string;

    readUtf8String(size: number): string;

    readUtf16String(size: number): string;

    readAnsiString(size: number): string;
}


// Java
declare class Java {
    static perform(func);
    
    static use(pkg: String): Class;

    static cast(obj, clazz: Class);
}

declare class Class {

}
