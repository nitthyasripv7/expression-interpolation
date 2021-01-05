(function(){
    'usestrict';

    angular.module('expinter',[])
    .controller('expression',expression)
    .filter('loves',lovesFilter)
    .filter('truth',truthfilter);


    expression.$inject=['$scope','$filter','lovesFilter'];

    function expression($scope,$filter,lovesFilter){
        $scope.message="nitthya";
        $scope.stateofbeing="hunger";
        $scope.cookiecost=.45;

        $scope.feednitth=function(){
            $scope.stateofbeing="fed";
        };

        $scope.saylovesmessage=function(){
            var res= "nitth like snacks";    //custom filter concept
            res=lovesFilter(res);   
            return res;
        
        };

        $scope.saymessage=function(){
            // var out ="nitth available";    //filter concept
            // var res=($filter)('uppercase')(out);
            // return res;
            
            return "nitth like snaks";    //expression and interpolation concept
        
        };
    }
    function lovesFilter(){
        return function(input){
        input=input||" ";
        input=input.replace("like","loves");
        return input;
     };
    }

    function truthfilter(){
        return function(input,target,replace){
            input=input||" ";
            input=input.replace(target,replace);
            return input; 

        }
    }

  

})();