import parse from 'html-react-parser';

export function dateToString(dateTime) {
  const date = new Date(dateTime * 1000);
  const intl = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
  return intl.format(date);
}

export function parseContent(text) {
  const replacements = [
    {
      regex: /\[color=(.*?)\](.*?)\[\/color\]/g,
      replacement: '<span style="color:$1;">$2</span>',
    },
    {
      regex: /\[i](.*?)\[\/i\]/g,
      replacement: '<i>$1</i>',
    },
    {
      regex: /\[b](.*?)\[\/b\]/g,
      replacement: '<b>$1</b>',
    },
    {
      regex: /\[br]/g,
      replacement: '<br />',
    },
    {
      regex: /\[url](.*?)\[\/url\]/g,
      replacement: '<a href="$1">link</a>',
    },
    {
      regex: /\[url(?:=(.*?))?\](.*?)\[\/url\]/g,
      replacement: '<a href="$1">link</a>',
    },
    {
      regex: /\[img](.*?)\[\/img\]/g,
      replacement: '<img src="$1" style="display:inline-block" />',
    },
    {
      regex: /\[\*\]([\s\S]*?)(?=\[\*|\[\/list\]|$)/g,
      replacement: '<li>$1</li>',
    },
    {
      regex: /\[list\]([\s\S]*?)\[\/list\]/g,
      replacement: '<ul>$1</ul>',
    },
  ];

  let finalText = text;

  for (const { regex, replacement } of replacements) {
    finalText = finalText.replace(regex, replacement);
  }

  return parse(finalText);
}

export function prepareMaterial(material) {
  return {
    ...material,
    thumbUrl: material?.thumbUrl?.replace('$1', ''),
  };
}
