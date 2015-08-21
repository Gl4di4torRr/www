// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
     $ionicPlatform.ready(function() {
                          // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                          // for form inputs)
                          if(window.cordova && window.cordova.plugins.Keyboard) {
                          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                          }
                          if(window.StatusBar) {
                          StatusBar.styleDefault();
                          }
                          });
     })

var myApp = angular.module('starter',['ionic']);

myApp.controller('mainController', ['$scope', function($scope) {
                                    
                                    $scope.formData = {distance: 0};
                                    
                                    //Initialize the from
                                    $scope.units = [
                                                    {thisunit:'Kilometer'},
                                                    {thisunit:'Meter'},
                                                    {thisunit:'Centimeter'},
                                                    {thisunit:'Millimeter'},
                                                    {thisunit:'Mile'},
                                                    {thisunit: 'Nautical Mile'}
                                                    ];
                                    $scope.myUnit = $scope.units[0];
                                    
                                    //initialize the to
                                    $scope.units2 = [
                                                     {thisunit2:'Kilometer'},
                                                     {thisunit2:'Meter'},
                                                     {thisunit2:'Centimeter'},
                                                     {thisunit2:'Millimeter'},
                                                     {thisunit2:'Mile'},
                                                     {thisunit2: 'Nautical Mile'}
                                                     ];
                                    $scope.myUnit2 = $scope.units2[4];
                                    
                                    //convert button function for when button is clicked
                                    $scope.convert = function(myUnit, myUnit2, distance){
                                        var result = 0;
                                        if(myUnit === "Kilometer"){
                                            if(myUnit2 === "Kilometer"){
                                                result = distance;
                                            }
                                            else if(myUnit2 === "Meter"){
                                                    result = distance * 1000;
                                            }
                                            else if(myUnit2 === "Centimeter"){
                                                result = distance * 100000;
                                            }
                                            else if(myUnit2 === "Millimeter"){
                                                result = distance * 1000000;
                                            }
                                            else if(myUnit2 === "Mile"){
                                                result  = distance * 0.621371;
                                            }
                                            else if(myUnit2 === "Nautical Mile"){
                                                result = distance * 0.539957;
                                            }
                                        }
                                        else if(myUnit === "Meter"){
                                                if(myUnit2 === "Kilometer"){
                                                    result = distance / 1000;
                                                }
                                            else if(myUnit2 === "Meter"){
                                                    result = distance;
                                            }
                                            else if(myUnit2 === "Centimeter"){
                                                result = distance * 100;
                                            }
                                            else if(myUnit2 === "Millimeter"){
                                                result = distance * 1000;
                                            }
                                            else if(myUnit2 === "Mile"){
                                                result = distance * 0.000621371;
                                            }
                                            else if(myUnit2 === "Nautical Mile"){
                                                result = distance * 0.000539957;
                                            }
                                        }
                                        else if(myUnit === "Centimeter"){
                                            if(myUnit2 === "Kilometer"){
                                                result = distance / 100000;
                                            }
                                            else if(myUnit2 === "Meter"){
                                                result = distance / 100;
                                            }
                                            else if(myUnit2 === "Centimeter"){
                                                result = distance;
                                            }
                                            else if(myUnit2 === "Millimeter"){
                                                result = distance * 10;
                                            }
                                            else if(myUnit2 === "Mile"){
                                                result = distance * 0.00000621371;
                                            }
                                            else if(myUnit2 === "Nautical Mile"){
                                                result = distance * 0.00000539957;
                                            }
                                        }
                                        else if(myUnit === "Millimeter"){
                                            if(myUnit2 === "Kilometer"){
                                                result = distance / 1000000;
                                            }
                                            else if(myUnit2 === "Meter"){
                                                result = distance / 1000;
                                            }
                                            else if(myUnit2 === "Centimeter"){
                                                result = distance / 10;
                                            }
                                            else if(myUnit2 === "Millimeter"){
                                                result = distance;
                                            }
                                            else if(myUnit2 === "Mile"){
                                                result = distance * 0.000000621371;
                                            }
                                            else if(myUnit2 === "Nautical Mile"){
                                                result = distance * 0.000000539957;
                                            }
                                        }
                                        else if(myUnit === "Mile"){
                                            if(myUnit2 === "Kilometer"){
                                                result = distance * 1.60934;
                                            }
                                            else if(myUnit2 === "Meter"){
                                                result = distance * 1609.34;
                                            }
                                            else if(myUnit2 === "Centimeter"){
                                                result = distance * 160934;
                                            }
                                            else if(myUnit2 === "Millimeter"){
                                                result = distance * 1609340;
                                            }
                                            else if(myUnit2 === "Mile"){
                                                result = distance;
                                            }
                                            else if(myUnit2 === "Nautical Mile"){
                                                result = distance * 0.868976;
                                            }
                                        }
                                        else if(myUnit === "Nautical Mile"){
                                            if(myUnit2 === "Kilometer"){
                                                result = distance * 1.852;
                                            }
                                            else if(myUnit2 === "Meter"){
                                                result = distance * 1852;
                                            }
                                            else if(myUnit2 === "Centimeter"){
                                                result = distance * 185200;
                                            }
                                            else if(myUnit2 === "Millimeter"){
                                                result = distance * 1852000;
                                            }
                                            else if(myUnit2 === "Mile"){
                                                result = distance * 1.15078;
                                            }
                                            else if(myUnit2 === "Nautical Mile"){
                                                result = distance;
                                            }
                                        }
                                        $scope.res = result.toFixed(2);
                                    }
                                    }]);

