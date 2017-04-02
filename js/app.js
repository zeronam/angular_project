var app = angular.module("myapp", ["ngRoute","ngAnimate","angularUtils.directives.dirPagination"]);

app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "pages/pages_home.html",
        controller: "main_controller"
    })
    .when("/home", {
        templateUrl : "pages/pages_home.html",
        controller: "main_controller"
    })
    .when("/mobile", {
        templateUrl : "pages/pages_mobile.html",
        controller: "main_controller"
    })
    .when("/laptop", {
        templateUrl : "pages/pages_laptop.html",
        controller: "main_controller"   
    })
    .when("/services", {
        templateUrl : "pages/pages_home.html",
        controller: "main_controller" 
    })
    .when("/products", {
        templateUrl : "pages/pages_home.html",
        controller: "main_controller" 
    })
    .when("/contact", {
        templateUrl : "pages/pages_home.html",
        controller: "main_controller" 
    })
    .when("/detail/:id", {
        templateUrl : "pages/pages_detail.html",
        controller: "main_controller"
    });
    
    $locationProvider.html5Mode(true);
});

app.controller("main_controller", function($scope,$http,$routeParams){
    $http.get("webservice/get_mobile.php")
    .then(function(response) {
        //First function handles success
        $scope.mobile = response.data;
        
    }, function(response) {
        //Second function handles error
        $scope.mobile = "Something went wrong";
    });


    $http.get("webservice/get_laptop.php")
    .then(function(response) {
        //First function handles success
        $scope.laptop = response.data;
    }, function(response) {
        //Second function handles error
        $scope.laptop = "Something went wrong";
    }); 

    $http.get("webservice/get_detail.php",{            
            params: {
                id: $routeParams.id
            }         
        })
        .then(function(response) {        
            $scope.detail = response.data;            
        });
});


app.controller("PaginationController", function($scope){
});   


app.controller('TabController', function () {
        this.tab = 1;

        this.setTab = function (tabId) {
            this.tab = tabId;
        };

        this.isSet = function (tabId) {
            return this.tab === tabId;
        };
});

app.controller('tabDetailController', function ($scope) {
    $scope.tab = 1;

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    }; 
});
app.controller('PanelController', function () {
        this.tab = 'description';

        this.setTab = function (tab) {
            this.tab = tab;
        };

        this.isSelected = function (tab) {
            return this.tab === tab;
        }
});

$scope.toggle = false;

