'use strict';

describe('Service: <%= cameledName %>', function() {

    beforeEach(function() {
        // load the service's module
        bard.appModule('<%= scriptAppName %>')
        // instantiate service
        bard.inject('<%= cameledName %>');
    });

    it('should do something', function() {<% if (hasFilter('jasmine')) { %>
        expect(!!<%= cameledName %>).toBe(true);<% } if (hasFilter('mocha')) { %>
        expect(!!<%= cameledName %>).to.be.true;<% } %>
    });

});
