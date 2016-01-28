walk(document.body);

function walk(node)  {
  var child, next;

  switch (node.nodeType) {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;
    case 3:  // Text node
      handleText(node);
      break;
  }
}

function handleText(textNode) {
  textNode.nodeValue = textNode.nodeValue
      .replace(/\ban AI\b/g, 'Natural Stupidity')
      .replace(/\bAIs\b/g, 'Natural Stupidities')
      .replace(/\bA.I.s\b/g, 'Natural Stupidities')
      .replace(/\bAI\b/g, 'Natural Stupidity')
      .replace(/\bA.I.\b/g, 'Natural Stupidity')
      .replace(/\bArtificial Intelligence\b/g, 'Natural Stupidity')
      .replace(/\bArtificial intelligence\b/g, 'Natural stupidity')
      .replace(/\bartificial intelligence\b/g, 'Natural Stupidity');
}
