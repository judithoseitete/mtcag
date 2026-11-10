/**
 * Capitalizes holy names (Jesus, God, Christ, Lord, Holy Spirit) in lowercase text
 * by wrapping them in spans with text-transform: none to prevent CSS lowercase
 */
export function capitalizeHolyNames(text: string): string {
  const holyNames = [
    {
      pattern: /\bjesus\b/gi,
      replacement: '<span style="text-transform: none;">Jesus</span>',
    },
    {
      pattern: /\bgod\b/gi,
      replacement: '<span style="text-transform: none;">God</span>',
    },
    {
      pattern: /\bchrist\b/gi,
      replacement: '<span style="text-transform: none;">Christ</span>',
    },
    {
      pattern: /\blord\b/gi,
      replacement: '<span style="text-transform: none;">Lord</span>',
    },
    {
      pattern: /\bholy spirit\b/gi,
      replacement: '<span style="text-transform: none;">Holy Spirit</span>',
    },
    {
      pattern: /\bspirit\b/gi,
      replacement: '<span style="text-transform: none;">Spirit</span>',
    },
  ];

  let result = text;
  holyNames.forEach(({ pattern, replacement }) => {
    result = result.replace(pattern, replacement);
  });

  return result;
}
