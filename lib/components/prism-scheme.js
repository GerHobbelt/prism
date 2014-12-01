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

	Prism.languages.scheme = {
    'boolean' : /#(t|f){1}/,
    'comment' : /;.*/,
    'keyword' : {
	pattern : /([(])(define(-syntax|-library|-values)?|(case-)?lambda|let(-values|(rec)?(\*)?)?|else|if|cond|begin|delay|delay-force|parameterize|guard|set!|(quasi-)?quote|syntax-rules)/,
	lookbehind : true
    },
    'builtin' : {
	pattern :  /([(])(cons|car|cdr|null\?|pair\?|boolean\?|eof-object\?|char\?|procedure\?|number\?|port\?|string\?|vector\?|symbol\?|bytevector\?|list|call-with-current-continuation|call\/cc|append|abs|apply|eval)\b/,
	lookbehind : true
    },
    'string' :  /(["])(?:(?=(\\?))\2.)*?\1|'[^('|\s)]+/, //thanks http://stackoverflow.com/questions/171480/regex-grabbing-values-between-quotation-marks
    'number' : /(\s|\))[-+]?[0-9]*\.?[0-9]+((\s*)[-+]{1}(\s*)[0-9]*\.?[0-9]+i)?/,
    'operator': /(\*|\+|\-|\%|\/|<=|=>|>=|<|=|>)/,
    'function' : {
	pattern : /([(])[^(\s|\))]*\s/,
	lookbehind : true
    },
    'punctuation' : /[()]/
};

    

    


}));