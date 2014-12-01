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

	Prism.languages.cpp = Prism.languages.extend('c', {
	'keyword': /\b(alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|delete\[\]|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|new\[\]|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/g,
	'boolean': /\b(true|false)\b/g,
	'operator': /[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|:{1,2}|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|\b(and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/g
});

Prism.languages.insertBefore('cpp', 'keyword', {
	'class-name': {
		pattern: /(class\s+)[a-z0-9_]+/ig,
		lookbehind: true,
	},
});

}));