define([ 'components/logic/RegistrationManager', 'components/logic/keyValueStorage'],
    function (RegistrationManager, keyValueStorage) {
        'use strict';


        describe('Registration Manager', function () {
            var registrationManager = new RegistrationManager(keyValueStorage);


            describe('Log In', function () {


                describe('Valid storage', function () {



                });


                describe('Corrupted Storage', function () {



                });

            });

            describe('Sign Up', function () {

                beforeEach(function () {
                   spyOn(registrationManager.storage, 'hasKey').and.callFake(function(key) {
                      return true;
                   });
                });


                it('should return false on empty username', function () {
                   expect(registrationManager.isUserNameValidForSignUp('')).toBeFalsy();
                });

                //it('should return false when username exists in storage', function () {
                //    expect(registrationManager.isUserNameExistsInStorage('sss')).toBeFalsy();
                //});

            });

        });



    });
