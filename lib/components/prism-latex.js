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

	Prism.languages.latex = {
	'comment': /%.*?(\r?\n|$)$/m,
	'string': /(\$)(\\?.)*?\1/g,
	'punctuation': /[{}]/g,
	'selector': /\\[a-z;,:\.]*/i
}

}));