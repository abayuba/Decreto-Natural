angular.module("aerosa.controllers", [])



// TODO: indexCtrl --|-- 
.controller("indexCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "-" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: indexCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: indexCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: indexCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: indexCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: indexCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: indexCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `index` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: side_menusCtrl --|-- 
.controller("side_menusCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "-" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: side_menusCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: side_menusCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: side_menusCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: side_menusCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: side_menusCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 
	
	var popover_template = "";
	popover_template += "<ion-popover-view class=\"fit\">";
	popover_template += "	<ion-header-bar>";
	popover_template += "		<h1  class=\"title\">Nosotros</h1>";
	popover_template += "	</ion-header-bar>";
	popover_template += "	<ion-content>";
	popover_template += "		<ion-list>";
	popover_template += "			<a  class=\"item dark-ink\" ng-href=\"#/aerosa/about_us\" ng-click=\"popover.hide()\">";
	popover_template += "			Contactar";
	popover_template += "			</a>";
	popover_template += "		</ion-list>";
	popover_template += "	</ion-content>";
	popover_template += "</ion-popover-view>";
	
	
	$scope.popover = $ionicPopover.fromTemplate(popover_template,{
		scope: $scope
	});
	
	$scope.closePopover = function(){
		$scope.popover.hide();
	};
	
	$scope.$on("$destroy", function(){
		$scope.popover.remove();
	});

	// TODO: side_menusCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `side_menus` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: _prod_de_homeopatia_hahnemanCtrl --|-- 
.controller("_prod_de_homeopatia_hahnemanCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: _prod_de_homeopatia_hahnemanCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: _prod_de_homeopatia_hahnemanCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: _prod_de_homeopatia_hahnemanCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: _prod_de_homeopatia_hahnemanCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: _prod_de_homeopatia_hahnemanCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: _prod_de_homeopatia_hahnemanCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `_prod_de_homeopatia_hahneman` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: about_usCtrl --|-- 
.controller("about_usCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: about_usCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: about_usCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: about_usCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: about_usCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: about_usCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: about_usCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `about_us` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: aceitesCtrl --|-- 
.controller("aceitesCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: aceitesCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: aceitesCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: aceitesCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: aceitesCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: aceitesCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: aceitesCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `aceites` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: bebidas_sin_y_con_alcoholCtrl --|-- 
.controller("bebidas_sin_y_con_alcoholCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: bebidas_sin_y_con_alcoholCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: bebidas_sin_y_con_alcoholCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: bebidas_sin_y_con_alcoholCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: bebidas_sin_y_con_alcoholCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: bebidas_sin_y_con_alcoholCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: bebidas_sin_y_con_alcoholCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `bebidas_sin_y_con_alcohol` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: cafs_cebadas_y_cacaoCtrl --|-- 
.controller("cafs_cebadas_y_cacaoCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: cafs_cebadas_y_cacaoCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: cafs_cebadas_y_cacaoCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: cafs_cebadas_y_cacaoCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: cafs_cebadas_y_cacaoCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: cafs_cebadas_y_cacaoCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: cafs_cebadas_y_cacaoCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `cafs_cebadas_y_cacao` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: cereales_y_granolasCtrl --|-- 
.controller("cereales_y_granolasCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: cereales_y_granolasCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: cereales_y_granolasCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: cereales_y_granolasCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: cereales_y_granolasCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: cereales_y_granolasCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: cereales_y_granolasCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `cereales_y_granolas` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: complementos_nutricionalesCtrl --|-- 
.controller("complementos_nutricionalesCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: complementos_nutricionalesCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: complementos_nutricionalesCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: complementos_nutricionalesCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: complementos_nutricionalesCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: complementos_nutricionalesCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: complementos_nutricionalesCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `complementos_nutricionales` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: confitesCtrl --|-- 
.controller("confitesCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: confitesCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: confitesCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: confitesCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: confitesCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: confitesCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: confitesCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `confites` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: congeladosCtrl --|-- 
.controller("congeladosCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: congeladosCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: congeladosCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: congeladosCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: congeladosCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: congeladosCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: congeladosCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `congelados` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: conservas_variasCtrl --|-- 
.controller("conservas_variasCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: conservas_variasCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: conservas_variasCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: conservas_variasCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: conservas_variasCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: conservas_variasCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: conservas_variasCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `conservas_varias` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: contatctarCtrl --|-- 
.controller("contatctarCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: contatctarCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: contatctarCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: contatctarCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: contatctarCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: contatctarCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: contatctarCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `contatctar` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: cosmtica_e_higiene_personalCtrl --|-- 
.controller("cosmtica_e_higiene_personalCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: cosmtica_e_higiene_personalCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: cosmtica_e_higiene_personalCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: cosmtica_e_higiene_personalCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: cosmtica_e_higiene_personalCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: cosmtica_e_higiene_personalCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: cosmtica_e_higiene_personalCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `cosmtica_e_higiene_personal` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: dashboardCtrl --|-- 
.controller("dashboardCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: dashboardCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: dashboardCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: dashboardCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: dashboardCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: dashboardCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: dashboardCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `dashboard` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: dulces_jaleas_mermeladasCtrl --|-- 
.controller("dulces_jaleas_mermeladasCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: dulces_jaleas_mermeladasCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: dulces_jaleas_mermeladasCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: dulces_jaleas_mermeladasCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: dulces_jaleas_mermeladasCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: dulces_jaleas_mermeladasCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: dulces_jaleas_mermeladasCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `dulces_jaleas_mermeladas` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: especias_y_condimentosCtrl --|-- 
.controller("especias_y_condimentosCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: especias_y_condimentosCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: especias_y_condimentosCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: especias_y_condimentosCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: especias_y_condimentosCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: especias_y_condimentosCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: especias_y_condimentosCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `especias_y_condimentos` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: frutos_secos_y_frutas_pasasCtrl --|-- 
.controller("frutos_secos_y_frutas_pasasCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: frutos_secos_y_frutas_pasasCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: frutos_secos_y_frutas_pasasCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: frutos_secos_y_frutas_pasasCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: frutos_secos_y_frutas_pasasCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: frutos_secos_y_frutas_pasasCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: frutos_secos_y_frutas_pasasCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `frutos_secos_y_frutas_pasas` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: galeraCtrl --|-- 
.controller("galeraCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: galeraCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: galeraCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: galeraCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: galeraCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: galeraCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: galeraCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `galera` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: galera_de_prodctosCtrl --|-- 
.controller("galera_de_prodctosCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: galera_de_prodctosCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: galera_de_prodctosCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: galera_de_prodctosCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: galera_de_prodctosCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: galera_de_prodctosCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: galera_de_prodctosCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `galera_de_prodctos` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: galletasCtrl --|-- 
.controller("galletasCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: galletasCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: galletasCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: galletasCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: galletasCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: galletasCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: galletasCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `galletas` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: granos_y_semillasCtrl --|-- 
.controller("granos_y_semillasCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: granos_y_semillasCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: granos_y_semillasCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: granos_y_semillasCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: granos_y_semillasCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: granos_y_semillasCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: granos_y_semillasCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `granos_y_semillas` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: harinas_y_salvadosCtrl --|-- 
.controller("harinas_y_salvadosCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: harinas_y_salvadosCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: harinas_y_salvadosCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: harinas_y_salvadosCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: harinas_y_salvadosCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: harinas_y_salvadosCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: harinas_y_salvadosCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `harinas_y_salvados` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: hierbas_tes_yuyosCtrl --|-- 
.controller("hierbas_tes_yuyosCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: hierbas_tes_yuyosCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: hierbas_tes_yuyosCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: hierbas_tes_yuyosCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: hierbas_tes_yuyosCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: hierbas_tes_yuyosCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: hierbas_tes_yuyosCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `hierbas_tes_yuyos` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: homeCtrl --|-- 
.controller("homeCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: homeCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: homeCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: homeCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: homeCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: homeCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: homeCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `home` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: lista_de_precioCtrl --|-- 
.controller("lista_de_precioCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: lista_de_precioCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: lista_de_precioCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: lista_de_precioCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: lista_de_precioCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: lista_de_precioCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: lista_de_precioCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `lista_de_precio` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: listas_de_preciosCtrl --|-- 
.controller("listas_de_preciosCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "table (listas)" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: listas_de_preciosCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: listas_de_preciosCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: listas_de_preciosCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: listas_de_preciosCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: listas_de_preciosCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: listas_de_preciosCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' This page required login',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("aerosa.dashboard");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};
	
	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	var targetQuery = ""; //default param
	var raplaceWithQuery = "";
	//fix url Listas de Precios
	targetQuery = "categories=20"; //default param
	raplaceWithQuery = "categories=20";
	if(typeof $stateParams.categories !== 'undefined'){
		raplaceWithQuery = "categories=" + $stateParams.categories;
	}
	if(typeof $rootScope.listas_de_preciosQueryParam !== "undefined"){
		raplaceWithQuery = "categories=" +  $rootScope.listas_de_preciosQueryParam ;
	}

	
	// TODO: listas_de_preciosCtrl --|-- $scope.splitArray
	$scope.splitArray = function(items,cols,maxItem) {
		var newItems = [];
		if(maxItem == 0){
			maxItem = items.length;
		}
		if(items){
			for (var i=0; i < maxItem; i+=cols) {
				newItems.push(items.slice(i, i+cols));
			}
		}
		return newItems;
	}
	$scope.gmapOptions = {options: { scrollwheel: false }};
	
	var fetch_per_scroll = 1;
	// animation loading 
	$ionicLoading.show({
		template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
	});
	
	
	// TODO: listas_de_preciosCtrl --|-- $scope.fetchURL
	$scope.fetchURL = "http://galeria.aplicacionesmoviles.uy/wp-json/wp/v2/posts?categories=20&per_page=20";
	// TODO: listas_de_preciosCtrl --|-- $scope.fetchURLp
	$scope.fetchURLp = "http://galeria.aplicacionesmoviles.uy/wp-json/wp/v2/posts?categories=20&per_page=20&callback=JSON_CALLBACK";
	// TODO: listas_de_preciosCtrl --|-- $scope.hashURL
	$scope.hashURL = md5.createHash( $scope.fetchURL.replace(targetQuery,raplaceWithQuery));
	
	
	$scope.noMoreItemsAvailable = false; //readmore status
	var lastPush = 0;
	var data_listass = [];
	
	localforage.getItem("data_listass_" + $scope.hashURL, function(err, get_listass){
		if(get_listass === null){
			data_listass =[];
		}else{
			data_listass = JSON.parse(get_listass);
			$scope.data_listass =JSON.parse( get_listass);
			$scope.listass = [];
			for(lastPush = 0; lastPush < 10; lastPush++) {
				if (angular.isObject(data_listass[lastPush])){
					$scope.listass.push(data_listass[lastPush]);
				};
			}
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			},200);
		}
	}).then(function(value){
	}).catch(function (err){
	})
	if(data_listass === null ){
		data_listass =[];
	}
	if(data_listass.length === 0 ){
		$timeout(function() {
			var url_request = $scope.fetchURL.replace(targetQuery,raplaceWithQuery);
			// overwrite HTTP Header 
			http_header = {
				headers: {
				},
				params: http_params
			};
			// TODO: listas_de_preciosCtrl --|-- $http.get
			console.log("%cRetrieving JSON: %c" + url_request,"color:blue;font-size:18px","color:red;font-size:18px");
			$http.get(url_request,http_header).then(function(response) {
				data_listass = response.data;
				console.log("%cSuccessfully","color:blue;font-size:18px");
				console.dir(data_listass);
				$scope.data_listass = response.data;
				// TODO: listas_de_preciosCtrl --|---------- set:localforage
				localforage.setItem("data_listass_" + $scope.hashURL, JSON.stringify(data_listass));
				$scope.listass = [];
				for(lastPush = 0; lastPush < 100; lastPush++) {
					if (angular.isObject(data_listass[lastPush])){
						$scope.listass.push(data_listass[lastPush]);
					};
				}
			},function(response) {
			
				$timeout(function() {
					var url_request = $scope.fetchURLp.replace(targetQuery,raplaceWithQuery);
					// overwrite HTTP Header 
					http_header = {
						headers: {
						},
						params: http_params
					};
					console.log("%cRetrieving again: %c" + url_request,"color:blue;font-size:18px","color:red;font-size:18px");
					// TODO: listas_de_preciosCtrl --|------ $http.jsonp
					$http.jsonp(url_request,http_header).success(function(data){
						data_listass = data;
						$scope.data_listass = data;
						$ionicLoading.hide();
						// TODO: listas_de_preciosCtrl --|---------- set:localforage
						localforage.setItem("data_listass_" + $scope.hashURL,JSON.stringify(data_listass));
						controller_by_user();
						$scope.listass = [];
						for(lastPush = 0; lastPush < 100; lastPush++) {
							if (angular.isObject(data_listass[lastPush])){
								$scope.listass.push(data_listass[lastPush]);
							};
						}
					}).error(function(data){
					if(response.status ===401){
						// TODO: listas_de_preciosCtrl --|------------ error:Unauthorized
						$scope.showAuthentication();
					}else{
						// TODO: listas_de_preciosCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "No Network connection" + " (" + data.status + ")",
							template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings" + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
						});
						$timeout(function() {
							alertPopup.close();
						}, 2000);
					}
					});
				}, 1000);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 1000);
		});
	
		}, 1000);
	}
	
	
	// TODO: listas_de_preciosCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		var url_request = $scope.fetchURL.replace(targetQuery,raplaceWithQuery);
		// retry retrieving data
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: listas_de_preciosCtrl --|------ $http.get
		$http.get(url_request,http_header).then(function(response) {
			data_listass = response.data;
			$scope.data_listass = response.data;
			// TODO: listas_de_preciosCtrl --|---------- set:localforage
			localforage.setItem("data_listass_" + $scope.hashURL,JSON.stringify(data_listass));
			$scope.listass = [];
			for(lastPush = 0; lastPush < 100; lastPush++) {
				if (angular.isObject(data_listass[lastPush])){
					$scope.listass.push(data_listass[lastPush]);
				};
			}
		},function(response){
			
		// retrieving data with jsonp
			$timeout(function() {
			var url_request =$scope.fetchURLp.replace(targetQuery,raplaceWithQuery);
				// overwrite http_header 
				http_header = {
					headers: {
					},
					params: http_params
				};
				// TODO: listas_de_preciosCtrl --|---------- $http.jsonp
				$http.jsonp(url_request,http_header).success(function(data){
					data_listass = data;
					$scope.data_listass = data;
					$ionicLoading.hide();
					controller_by_user();
					// TODO: listas_de_preciosCtrl --|---------- set:localforage
					localforage.setItem("data_listass_"+ $scope.hashURL,JSON.stringify(data_listass));
					$scope.listass = [];
					for(lastPush = 0; lastPush < 100; lastPush++) {
						if (angular.isObject(data_listass[lastPush])){
							$scope.listass.push(data_listass[lastPush]);
						};
					}
				}).error(function(resp){
					if(response.status ===401){
					// TODO: listas_de_preciosCtrl --|------------ error:Unauthorized
					$scope.showAuthentication();
					}else{
						// TODO: listas_de_preciosCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "No Network connection" + " (" + data.status + ")",
							template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings" + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
						});
					};
				});
			}, 1000);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 500);
		});
	
	};
	if (data_listass === null){
		data_listass = [];
	};
	// animation readmore
	var fetchItems = function() {
		for(var z=0;z<fetch_per_scroll;z++){
			if (angular.isObject(data_listass[lastPush])){
				$scope.listass.push(data_listass[lastPush]);
				lastPush++;
			}else{;
				$scope.noMoreItemsAvailable = true;
			}
		}
		$scope.$broadcast("scroll.infiniteScrollComplete");
	};
	
	// event readmore
	$scope.onInfinite = function() {
		$timeout(fetchItems, 500);
	};
	
	// create animation fade slide in right (ionic-material)
	$scope.fireEvent = function(){
		ionicMaterialMotion.fadeSlideInRight();
		ionicMaterialInk.displayEffect();
	};
	// code 

	// TODO: listas_de_preciosCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
//debug: all data
//console.log(data_listass);
$ionicConfig.backButton.text("");
			
		} catch(e){
			console.log("%cerror: %cPage: `listas_de_precios` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: listas_singlesCtrl --|-- 
.controller("listas_singlesCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: listas_singlesCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: listas_singlesCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: listas_singlesCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: listas_singlesCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: listas_singlesCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: listas_singlesCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' This page required login',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("aerosa.dashboard");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};

	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	// animation loading 
	$ionicLoading.show({
		template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
	});
	
	// Retrieving data
	var itemID = $stateParams.id;
	// TODO: listas_singlesCtrl --|-- $scope.fetchURL
	$scope.fetchURL = "http://demo.ihsana.net/wordpress/wp-json/wp/v2/posts/" + itemID;
	// TODO: listas_singlesCtrl --|-- $scope.fetchURLp
	$scope.fetchURLp = "http://demo.ihsana.net/wordpress/wp-json/wp/v2/posts/" + itemID + "?callback=JSON_CALLBACK";
	// TODO: listas_singlesCtrl --|-- $scope.hashURL
	$scope.hashURL = md5.createHash($scope.fetchURL);
	
	var current_item = [];
	localforage.getItem("data_listas_single_" + $scope.hashURL, function(err, get_datas){
		if(get_datas === null){
			current_item = [];
		}else{
			if(get_datas !== null){
				current_item = JSON.parse(get_datas);
				$timeout(function(){
					$ionicLoading.hide();
					$scope.listas = current_item ;
					controller_by_user();
				}, 500);
			};
		};
	}).then(function(value){
	}).catch(function (err){
	})
	if( current_item.length === 0 ){
		var itemID = $stateParams.id;
		var current_item = [];
	
		// set HTTP Header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: listas_singlesCtrl --|-- $http.get
		$http.get($scope.fetchURL,http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			// TODO: listas_singlesCtrl --|---------- set:localforage
			localforage.setItem("data_listas_single_" + $scope.hashURL,JSON.stringify(datas));
			current_item = datas ;
		},function(data) {
					// Error message
					var alertPopup = $ionicPopup.alert({
						title: "No Network connection" + " (" + data.status + ")",
						template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings" + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
					});
					$timeout(function() {
						alertPopup.close();
					}, 2000);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.listas = current_item ;
				controller_by_user();
			}, 500);
		});
	}
	
	
		// TODO: listas_singlesCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		// Retrieving data
		var itemID = $stateParams.id;
		var current_item = [];
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: listas_singlesCtrl --|------ $http.get
		$http.get($scope.fetchURL,http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			// TODO: listas_singlesCtrl --|---------- set:localforage
			localforage.setItem("data_listas_single_" + $scope.hashURL,JSON.stringify(datas));
			current_item = datas ;
		},function(data) {
			// Error message
		// TODO: listas_singlesCtrl --|---------- $http.jsonp
				$http.jsonp($scope.fetchURLp,http_header).success(function(response){
					// Get data single
					var datas = response;
			// TODO: listas_singlesCtrl --|---------- set:localforage
			localforage.setItem("data_listas_single_" + $scope.hashURL,JSON.stringify(datas));
					current_item = datas ;
						$scope.$broadcast("scroll.refreshComplete");
						// event done, hidden animation loading
						$timeout(function() {
							$ionicLoading.hide();
							$scope.listas = current_item ;
							controller_by_user();
						}, 500);
					}).error(function(resp){
						var alertPopup = $ionicPopup.alert({
							title: "No Network connection" + " (" + data.status + ")",
							template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings" + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
						});
					});
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.listas = current_item ;
				controller_by_user();
			}, 500);
		});
	};
	// code 

	// TODO: listas_singlesCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			

$scope.radioURL = "http://www.ustream.tv/embed/21467571";
$scope.toggle_state = false;

if (audioPlayer == null) {
	var audioPlayer = $document[0].createElement("audio");
	audioPlayer.src = $sce.trustAsResourceUrl($scope.radioURL);
	try {
		audioPlayer.play();
		$scope.toggle_state = true;
	} catch (e) {
		$scope.toggle_state = false;
        console.log(e);
	}
}

$scope.togglePlay = function() {
	if ($scope.toggle_state == false) {
		try {
			audioPlayer.play();
			$scope.toggle_state = true;
		} catch (e) {
			$scope.toggle_state = false;
            console.log(e);
		}

	} else {
		$scope.toggle_state = false;
		audioPlayer.pause();
	}
}


$interval(function() {
	$scope.state = audioPlayer.readyState;
}, 500);

			
		} catch(e){
			console.log("%cerror: %cPage: `listas_singles` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: manuCtrl --|-- 
.controller("manuCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: manuCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: manuCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: manuCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: manuCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: manuCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: manuCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `manu` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: menCtrl --|-- 
.controller("menCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: menCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: menCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: menCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: menCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: menCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: menCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `men` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: menuCtrl --|-- 
.controller("menuCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: menuCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: menuCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: menuCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: menuCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: menuCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: menuCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `menu` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: pastas_quesos_y_cremasCtrl --|-- 
.controller("pastas_quesos_y_cremasCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: pastas_quesos_y_cremasCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: pastas_quesos_y_cremasCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: pastas_quesos_y_cremasCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: pastas_quesos_y_cremasCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: pastas_quesos_y_cremasCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: pastas_quesos_y_cremasCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `pastas_quesos_y_cremas` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: prod_aptos_para_celacosCtrl --|-- 
.controller("prod_aptos_para_celacosCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: prod_aptos_para_celacosCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: prod_aptos_para_celacosCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: prod_aptos_para_celacosCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: prod_aptos_para_celacosCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: prod_aptos_para_celacosCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: prod_aptos_para_celacosCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `prod_aptos_para_celacos` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: prod_bajas_caloriasCtrl --|-- 
.controller("prod_bajas_caloriasCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: prod_bajas_caloriasCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: prod_bajas_caloriasCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: prod_bajas_caloriasCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: prod_bajas_caloriasCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: prod_bajas_caloriasCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: prod_bajas_caloriasCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `prod_bajas_calorias` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: productos_orgnicosCtrl --|-- 
.controller("productos_orgnicosCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: productos_orgnicosCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: productos_orgnicosCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: productos_orgnicosCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: productos_orgnicosCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: productos_orgnicosCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: productos_orgnicosCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `productos_orgnicos` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: raciones_y_otrosCtrl --|-- 
.controller("raciones_y_otrosCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: raciones_y_otrosCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: raciones_y_otrosCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: raciones_y_otrosCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: raciones_y_otrosCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: raciones_y_otrosCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: raciones_y_otrosCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `raciones_y_otros` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: sadasdasCtrl --|-- 
.controller("sadasdasCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "table (listas)" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: sadasdasCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: sadasdasCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: sadasdasCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: sadasdasCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: sadasdasCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: sadasdasCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
//debug: all data
//console.log(data_listass);
$ionicConfig.backButton.text("");
			
		} catch(e){
			console.log("%cerror: %cPage: `sadasdas` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: slide_tab_menuCtrl --|-- 
.controller("slide_tab_menuCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: slide_tab_menuCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: slide_tab_menuCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: slide_tab_menuCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: slide_tab_menuCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: slide_tab_menuCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: slide_tab_menuCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `slide_tab_menu` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: snacksCtrl --|-- 
.controller("snacksCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: snacksCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: snacksCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: snacksCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: snacksCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: snacksCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: snacksCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `snacks` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: sustituto_de_sal_y_prod_sin_salCtrl --|-- 
.controller("sustituto_de_sal_y_prod_sin_salCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: sustituto_de_sal_y_prod_sin_salCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: sustituto_de_sal_y_prod_sin_salCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: sustituto_de_sal_y_prod_sin_salCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: sustituto_de_sal_y_prod_sin_salCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: sustituto_de_sal_y_prod_sin_salCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: sustituto_de_sal_y_prod_sin_salCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `sustituto_de_sal_y_prod_sin_sal` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: variosCtrl --|-- 
.controller("variosCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: variosCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: variosCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: variosCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: variosCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_self");
		appWebview.addEventListener("loadstart",function(){ navigator.notification.activityStart("Please Wait", "Its loading...."); });
		appWebview.addEventListener("loadstop",function(){ navigator.notification.activityStop(); });
	};
	
	
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: variosCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: variosCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `varios` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})
