'use strict';

describe('Filter: <%= cameledName %>', function() {
    var <%= cameledName %>;

    // load the controller's module
    beforeEach(function() {
        bard.appModule('<%= scriptAppName %>');
        bard.inject('$filter');
    });

    // initialize a new instance of the filter before each test
    beforeEach(function() {
        <%= cameledName %> = $filter('<%= cameledName %>');
    });

    it('should return the input prefixed with "<%= cameledName %> filter:"', function() {
        var text = 'angularjs';<% if (hasFilter('jasmine')) { %>
        expect(<%= cameledName %>(text)).toBe('<%= cameledName %> filter: ' + text);<% } if (hasFilter('mocha')) { %>
        expect(<%= cameledName %>(text)).to.equal('<%= cameledName %> filter: ' + text);<% } %>
    });

});
