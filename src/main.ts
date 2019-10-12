namespace ICM {
    export namespace Computation {
        export const isInternalLink = (link: string) => /^\/(?!\/)/.test(link)
    }
}
if (typeof (global) !== 'undefined') {
    (global as any).ICM = {};
    (global as any).ICM.Computation = {};
    (global as any).ICM.Computation.isInternalLink = ICM.Computation.isInternalLink;
}
// (window as any).Computation = {};
// (window as any).Computation.isInternalLink = Computation.isInternalLink;