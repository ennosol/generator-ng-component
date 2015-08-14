/* jshint -W117, -W030 */
'use strict';

describe('Controller: <%= classedName %>Controller', function() {
    var controller;

    // load the controller's module
    beforeEach(function() {
        bard.appModule(
            '<%= scriptAppName %>'
            // include previous module containing mocked service which will override actual service
            // , because it's declared later
            // Put here mock service modules
        );
        bard.inject('$controller');
    });

    // Initialize the controller and a mock scope if it is needed
    beforeEach(function() {
        controller = $controller('<%= classedName %>Controller', {});
    });

    describe('<%= classedName %> controller', function() {
        it('should be created successfully', function() {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have exPublicVariable of exampleVar', function() {
                expect(controller.exPublicVariable).to.equal('exampleVar');
            });
        });
    });
});
