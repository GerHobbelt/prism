Prism.languages.graphql = {
	'comment': /#.*/,
	'description': {
		pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
		greedy: true,
		alias: 'string',
		inside: {
			'language-markdown': {
				pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
				lookbehind: true,
				inside: Prism.languages.markdown
			}
		}
	},
	'string': {
		pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
		greedy: true
	},
	'number': /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	'boolean': /\b(?:true|false)\b/,
	'variable-input': {
		pattern: /(mutation.*)\$[\w_]+/i,
		alias: 'variable',
		lookbehind: true
	},
	'variable': /\$[a-z_]\w*/i,
	'atom-input': {
		pattern: /(mutation.*:\s*)\b[A-Z_]\w*\b!?/,
		lookbehind: true,
		alias: 'class-name'
	},
	'directive': {
		pattern: /@[a-z_]\w*/i,
		alias: 'function'
	},
	'attr-name': {
		pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
		greedy: true
	},
	'constant': /\b(?!ID\b)[A-Z][A-Z_\d]*\b/,
	'class-name': {
		pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\s*\[)[A-Z_]\w*/,
		lookbehind: true
	},
	'fragment': {
		pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
		lookbehind: true,
		alias: 'function'
	},
	'property-mutation': {
		pattern: /\b(mutation.*(?:[\n\r\u2028\u2029][\n\s]*)?)\b\w+/g,
		lookbehind: true,
		greedy: true
	},
	'definition-mutation': {
		pattern: /(\bmutation\s+|\.{3}\s*)[a-zA-Z_]\w*/,
		lookbehind: true,
		alias: 'function'
	},
	'definition-query': {
		pattern: /(\bquery\s+|\.{3}\s*)[a-zA-Z_]\w*/,
		lookbehind: true,
		alias: 'function'
	},
	'keyword-mutation': {
		pattern: /\b(?:mutation)\b/,
		alias: 'keyword'
	},
	'keyword-query': {
		pattern: /\b(?:query)\b/,
		alias: 'keyword'
	},
	'keyword': /\b(?:directive|enum|extend|fragment|implements|input|interface|on|repeatable|scalar|schema|subscription|type|union)\b/,
	'operator': /[!=|&]|\.{3}/,
	'property-query': /\w+(?=\s*\()/,
	'object': /\w+(?=\s*{)/,
	'punctuation': /[!(){}\[\]:=,]/,
	'property': /\w+/
};
