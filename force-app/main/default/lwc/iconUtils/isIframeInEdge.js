const isEdgeUA = /\bEdge\/.(\d+)\b/.test(navigator.userAgent);
const inIframe = window.top !== window.self;
const isIframeInEdge = isEdgeUA && inIframe;

export default isIframeInEdge;
