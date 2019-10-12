var Computation;
(function (Computation) {
    Computation.isInternalLink = function (link) { return /^\/(?!\/)/.test(link); };
})(Computation || (Computation = {}));
//const globalAny: any = global;
if (typeof (global) !== 'undefined') {
    global.Computation = {};
    global.Computation.isInternalLink = Computation.isInternalLink;
}
// (window as any).Computation = {};
// (window as any).Computation.isInternalLink = Computation.isInternalLink;
