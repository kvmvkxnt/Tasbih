function findElement(selector, node = document) {
    return node.querySelector(selector);
}

export { findElement };