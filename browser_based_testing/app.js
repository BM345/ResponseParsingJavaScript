var app = angular.module("ResponseParsing", []);

app.controller("MainController", ["$scope", "$http", function MainController($scope, $http) {

    $scope.developerMode = true;

    $scope.expectedResponseType = "integer";

    $scope.allowLeadingZeros = false;
    $scope.allowTrailingZeros = true;
    $scope.sign = "canBeExplicitOrImplicit";
    $scope.sf1 = "";
    $scope.sf2 = "";
    $scope.nsf = "";
    $scope.dp1 = "";
    $scope.dp2 = "";
    $scope.ndp = "";
    $scope.currency = "USD";

    $scope.removeLeadingZerosFromNormalizedForm = false;
    $scope.removeTrailingZerosFromNormalizedForm = false;
    $scope.removeTrailingDecimalPointFromNormalizedForm = true;
    $scope.normaliseSign = "notSet";

    $scope.acceptOrRejectIsVisible = false;

    $scope.getValidationResponse = function () {

        var validationRequest = new rp.ValidationRequest();

        validationRequest.studentsResponse =  $scope.studentsResponse;
        validationRequest.expectedResponseType =  $scope.expectedResponseType;
        validationRequest.constraints =  {
                "allowLeadingZeros": $scope.allowLeadingZeros,
                "allowTrailingZeros": $scope.allowTrailingZeros,
                "removeLeadingZerosFromNormalizedForm": $scope.removeLeadingZerosFromNormalizedForm,
                "removeTrailingZerosFromNormalizedForm": $scope.removeTrailingZerosFromNormalizedForm,
                "removeTrailingDecimalPointFromNormalizedForm": $scope.removeTrailingDecimalPointFromNormalizedForm,
                "normalizeSign": $scope.normaliseSign,
                "sign": $scope.sign,
            };
        

        if ($scope.sf1.match(/^[0-9]+$/g)) {
            validationRequest.constraints.mustHaveAtLeastNSF = parseInt($scope.sf1);
        }

        if ($scope.sf2.match(/^[0-9]+$/g)) {
            validationRequest.constraints.mustHaveNoMoreThanNSF = parseInt($scope.sf2);
        }

        if ($scope.nsf.match(/^[0-9]+$/g)) {
            validationRequest.constraints.mustHaveExactlyNSF = parseInt($scope.nsf);
        }

        if ($scope.dp1.match(/^[0-9]+$/g)) {
            validationRequest.constraints.mustHaveAtLeastNDP = parseInt($scope.dp1);
        }

        if ($scope.dp2.match(/^[0-9]+$/g)) {
            validationRequest.constraints.mustHaveNoMoreThanNDP = parseInt($scope.dp2);
        }

        if ($scope.ndp.match(/^[0-9]+$/g)) {
            validationRequest.constraints.mustHaveExactlyNDP = parseInt($scope.ndp);
        }

        if ($scope.expectedResponseType == "currencyValue") {
            validationRequest.constraints.currency = $scope.currency;
        }

        if ($scope.developerMode) {
            console.log(validationRequest);
        }

        var validator = new rp.Validator();

        var responseData = validator.validate(validationRequest);

        if ($scope.developerMode) {
            console.log(responseData);
        }

        if (responseData.isAccepted) {
            $scope.isAccepted = "Accepted";
            $scope.isAcceptedColour = 120;
        }
        else {
            $scope.isAccepted = "Rejected";
            $scope.isAcceptedColour = 350;
        }

        $scope.acceptOrRejectIsVisible = true;
        $scope.messageText = responseData.messageText;
        $scope.normalisedStudentsResponse = responseData.normalisedStudentsResponse;
    }

    $scope.reset = function () {
        $scope.isAccepted = "";
        $scope.isAcceptedColour = 350;

        $scope.acceptOrRejectIsVisible = false;
        $scope.messageText = "";
        $scope.normalisedStudentsResponse = "";
    }

    $scope.submit = function () {
        $scope.getValidationResponse();
    }

    $scope.$watchGroup(["studentsResponse",
        "expectedResponseType",
        "allowLeadingZeros",
        "allowTrailingZeros",
        "removeLeadingZerosFromNormalizedForm",
        "removeTrailingZerosFromNormalizedForm",
        "removeTrailingDecimalPointFromNormalizedForm",
        "normaliseSign",
        "sign",
        "sf1",
        "sf2",
        "nsf",
        "dp1",
        "dp2",
        "ndp",
        "currency"], function (newValue, oldValue) {
            if ($scope.developerMode) {
                $scope.getValidationResponse();
            }
            else {
                $scope.reset();
            }
        });

    $scope.$watchGroup(["expectedResponseType",
        "allowLeadingZeros",
        "allowTrailingZeros",
        "removeLeadingZerosFromNormalizedForm",
        "removeTrailingZerosFromNormalizedForm",
        "removeTrailingDecimalPointFromNormalizedForm",
        "normaliseSign",
        "sign",
        "sf1",
        "sf2",
        "nsf",
        "dp1",
        "dp2",
        "ndp",
        "currency"], function (newValue, oldValue) {
            if (!$scope.developerMode) {
                $scope.reset();
            }
        });

}]);