'use strict';

describe('Service: <%= cameledName %>Config', function() {

    beforeEach(function() {
        // load the service's module
        bard.appModule('<%= scriptAppName %>');
        // instantiate service
        bard.inject('<%= cameledName %>Config');
    });

    it('should do something', function() {<% if (hasFilter('jasmine')) { %>
        expect(!!<%= cameledName %>Config).toBe(true);<% } if (hasFilter('mocha')) { %>
        expect(!!<%= cameledName %>Config).to.be.true;<% } %>
    });

});
