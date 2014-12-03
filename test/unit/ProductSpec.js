describe('ProductController', function() {
  var scope, ctrl, $httpBackend;

  beforeEach(module('onlineStore'));
  
  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('data/products.json').
        respond([{name: 'Shirt'}, {name: 'Shoes'}]);

    scope = $rootScope.$new();
    ctrl = $controller('ProductController', {$scope: scope});
  }));

  it('should set the default value of products model', function() {
    expect(scope.products).toEqual([]);
  });

  it('it should create product models from data retrieved from XHR', function() {
    $httpBackend.flush();

    expect(scope.products).toEqual([{name: 'Shirt'}, {name: 'Shoes'}]);
  });
});