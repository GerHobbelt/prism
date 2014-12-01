(function(factory){

	var prism_  = (typeof Prism  !== 'undefined' && Prism ) || null,
		global_ = (typeof global !== 'undefined' && global) 
		|| (typeof window !== 'undefined' && window)
		|| (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope && self)
		|| null;
	
	if (prism_ == null && typeof require === 'function') {
		prism_ = require('prismjs');
	}
	if (prism_ == null && typeof define === 'function' && define.amd) {
		define(['prismjs'], function (Prism) {
            return factory(Prism, global_, { Prism: Prism });
        });
        return;
	}

	if (prism_ == null) {
		throw Error('Prism is not loaded');
	}

	// some plugins depend on `self`
	factory(prism_, global_, { Prism: Prism });

}(function(Prism, window, self) {

	Prism.languages.c = Prism.languages.extend('clike', {
	// allow for c multiline strings
	'string': /("|')([^\n\\\1]|\\.|\\\r*\n)*?\1/g,
	'keyword': /\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/g,
	'operator': /[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\//g
});

Prism.languages.insertBefore('c', 'string', {
	// property class reused for macro statements
	'property': {
		// allow for multiline macro definitions
		// spaces after the # character compile fine with gcc
		pattern: /((^|\n)\s*)#\s*[a-z]+([^\n\\]|\\.|\\\r*\n)*/gi,
		lookbehind: true,
		inside: {
			// highlight the path of the include statement as a string
			'string': {
				pattern: /(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/g,
				lookbehind: true,
			}
		}
	}
});

delete Prism.languages.c['class-name'];
delete Prism.languages.c['boolean'];

}));