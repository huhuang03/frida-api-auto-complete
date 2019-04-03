class Thread {
    static backtrace(context, backtracer)
}

class Backtracer {
    static ACCURATE
}

class DebugSymbol {
    static fromAddress
}

class Interceptor {
    static attach(target: string, callbacks);
}

class Process {
    id: number;
    static enumerateModules(): Module[];
    static isDebuggerAttached(): boolean;
    static getCurrentThreadId(): number;
    static enumerateThreads(): [Thread];
    static findModuleByName(name: String): Module;
}

class Module {
    name: string;
    path: string;
    base: NativePointer;
    static findExportByName(moduleName: string, exportName: string): string
}

class NativePointer {

}

class Thread {
    id: number;
    state: string;
}


class NativePointer {
    readCString(size = -1);

    readUtf8String(size = -1);

    readUtf16String(size = -1);

    readAnsiString(size = -1);
}


// Java
class Java {
    static perform(func);
    
    static use(pkg: String);
}
