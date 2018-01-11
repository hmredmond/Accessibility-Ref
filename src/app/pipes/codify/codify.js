import {Pipe} from '@angular/core';

const highlight = require('highlight.js');

function htmlify(value) {
  const tags = [];
  let newString = '';

  for (let i = 0; i < value.length; i += 1) {
    const char = value[i];
    const nextChar = value[(i < value.length - 1 ? i + 1 : null)];

    if (char === '<' && nextChar === '/') {
      if (value[i - 1] === '>') {
        newString += '\n';
      }
      newString += char;
      newString += nextChar;
      i += 2;
      let tagName = '';
      let tagChar = value[i];

      while (tagChar !== '>') {
        tagName += tagChar;
        newString += value[i];
        i++;
        tagChar = value[i];
      }

      if (tagName === tags[tags.length - 1]) {
        tags.pop();
      }
    } else if (char === '<') {
      if (value[i - 1] === '>') {
        newString += '\n';
      }
      newString += ('  '.repeat(tags.length));
      newString += char;
      i++;
      let tagName = '';
      let tagChar = value[i];

      while (tagChar !== ' ') {
        tagName += tagChar;
        newString += value[i];
        i++;
        tagChar = value[i];
      }

      tags.push(tagName);
    }
    newString += value[i];
  }
  return newString;
}

@Pipe({name: 'codify'})
export class Codify {
  transform(value) {
    /* eslint-disable */
    return highlight.highlightAuto(htmlify(value), ['html']).value;
    /* eslint-enable */
  }
}
