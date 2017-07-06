describe('madLibsFactory', function() {

  beforeEach(module("madLibs"));

  var wordsService;

  beforeEach(inject(function(_wordService_){
    wordsService = _wordService_;
  }));

  it("stores and retrieves data", function() {
    var word = 'hello'
    wordsService.sendWords('word');
    expect(wordsService.getWords()).toBe('hello');
  });

});
