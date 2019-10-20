export function smartSetAttribute(element, attribute, value) {
    if (element.tagName.match(/^C/i)) {
        attribute = attribute.replace(/-\w/g, m => m[1].toUpperCase());
        element[attribute] = value ? value : null;
    } else if (value) {
        element.setAttribute(attribute, value);
    } else {
        element.removeAttribute(attribute);
    }
}
