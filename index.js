function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
    const lists = document.querySelectorAll('.ranked-list')

    for (let i = 0; i < lists.length; i++) {
        lists[i].innerHTML = (i + n).toString()
    }
}

function deepestChild() {
    let node = document.getElementById('grand-node');

    let nodeChildren = node.children[0];

    while (nodeChildren) {
        node = nodeChildren;
        nodeChildren = node.children[0];
    }

    return node;
}