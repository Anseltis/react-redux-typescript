export function logOptions(hasErrors: boolean): any {
    if (!hasErrors) {
        return {
            colors: true
        };
    }
    return {
        colors: true,
        hash: false,
        version: false,
        timings: false,
        assets: false,
        chunks: false,
        chunkModules: false,
        modules: false,
        children: false,
        cached: false,
        reasons: false,
        source: false,
        errorDetails: true,
        chunkOrigins: false
    };
}