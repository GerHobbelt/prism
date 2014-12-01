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

	Prism.languages.objectivec = Prism.languages.extend('c', {
	'keyword': /(\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b)|((?=[\w|@])(@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b)/g,
	'string': /(?:("|')([^\n\\\1]|\\.|\\\r*\n)*?\1)|(@"([^\n\\"]|\\.|\\\r*\n)*?")/g,
	'operator': /[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|@/g
});


}));