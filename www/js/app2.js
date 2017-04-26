angular.module("aerosa", ["ngCordova","ionic","ionMdInput","ionic-material","ion-datetime-picker","ionic.rating","utf8-base64","angular-md5","aerosa.controllers", "aerosa.services"])
	.run(function($ionicPlatform,$window,$interval) {
		$ionicPlatform.ready(function() {
			//required: cordova plugin add ionic-plugin-keyboard --save
			if(window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}

			//required: cordova plugin add cordova-plugin-statusbar --save
			if(window.StatusBar) {
				StatusBar.styleDefault();
			}

			localforage.config({
				driver : localforage.INDEXEDDB,
				name : "aerosa",
				storeName : "aerosa",
				description : "The offline datastore for aerosa app"
			});



		});
	})


	.filter("to_trusted", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])

	.filter("trustUrl", function($sce) {
		return function(url) {
			return $sce.trustAsResourceUrl(url);
		};
	})

	.filter("trustJs", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsJs(text);
		};
	}])

	.filter("strExplode", function() {
		return function($string,$delimiter) {
			if(!$string.length ) return;
			var $_delimiter = $delimiter || "|";
			return $string.split($_delimiter);
		};
	})

	.filter("strDate", function(){
		return function (input) {
			return new Date(input);
		}
	})
	.filter("strHTML", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])
	.filter("strEscape",function(){
		return window.encodeURIComponent;
	})





.config(function($stateProvider, $urlRouterProvider,$sceDelegateProvider,$httpProvider,$ionicConfigProvider){
	try{
		// Domain Whitelist
		$sceDelegateProvider.resourceUrlWhitelist([
			"self",
			new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$'),
			new RegExp('^(http[s]?):\/\/(w{3}.)?w3schools\.com/.+$'),
		]);
	}catch(err){
		console.log("%cerror: %cdomain whitelist","color:blue;font-size:16px;","color:red;font-size:16px;");
	}
	$stateProvider
	.state("aerosa",{
		url: "/aerosa",
			abstract: true,
			templateUrl: "templates/aerosa-side_menus.html",
			controller: "side_menusCtrl",
	})

	.state("aerosa._prod_de_homeopatia_hahneman", {
		url: "/_prod_de_homeopatia_hahneman",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-_prod_de_homeopatia_hahneman.html",
						controller: "_prod_de_homeopatia_hahnemanCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.about_us", {
		url: "/about_us",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-about_us.html",
						controller: "about_usCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.aceites", {
		url: "/aceites",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-aceites.html",
						controller: "aceitesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.bebidas_sin_y_con_alcohol", {
		url: "/bebidas_sin_y_con_alcohol",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-bebidas_sin_y_con_alcohol.html",
						controller: "bebidas_sin_y_con_alcoholCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.cafs_cebadas_y_cacao", {
		url: "/cafs_cebadas_y_cacao",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-cafs_cebadas_y_cacao.html",
						controller: "cafs_cebadas_y_cacaoCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.cereales_y_granolas", {
		url: "/cereales_y_granolas",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-cereales_y_granolas.html",
						controller: "cereales_y_granolasCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.complementos_nutricionales", {
		url: "/complementos_nutricionales",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-complementos_nutricionales.html",
						controller: "complementos_nutricionalesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.confites", {
		url: "/confites",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-confites.html",
						controller: "confitesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.congelados", {
		url: "/congelados",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-congelados.html",
						controller: "congeladosCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.conservas_varias", {
		url: "/conservas_varias",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-conservas_varias.html",
						controller: "conservas_variasCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.contatctar", {
		url: "/contatctar",
		views: {
			"aerosa-contatctar" : {
						templateUrl:"templates/aerosa-contatctar.html",
						controller: "contatctarCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.cosmtica_e_higiene_personal", {
		url: "/cosmtica_e_higiene_personal",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-cosmtica_e_higiene_personal.html",
						controller: "cosmtica_e_higiene_personalCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.dashboard", {
		url: "/dashboard",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-dashboard.html",
						controller: "dashboardCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.dulces_jaleas_mermeladas", {
		url: "/dulces_jaleas_mermeladas",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-dulces_jaleas_mermeladas.html",
						controller: "dulces_jaleas_mermeladasCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.especias_y_condimentos", {
		url: "/especias_y_condimentos",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-especias_y_condimentos.html",
						controller: "especias_y_condimentosCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.frutos_secos_y_frutas_pasas", {
		url: "/frutos_secos_y_frutas_pasas",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-frutos_secos_y_frutas_pasas.html",
						controller: "frutos_secos_y_frutas_pasasCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.galera", {
		url: "/galera",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-galera.html",
						controller: "galeraCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.galera_de_prodctos", {
		url: "/galera_de_prodctos",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-galera_de_prodctos.html",
						controller: "galera_de_prodctosCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.galletas", {
		url: "/galletas",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-galletas.html",
						controller: "galletasCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.granos_y_semillas", {
		url: "/granos_y_semillas",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-granos_y_semillas.html",
						controller: "granos_y_semillasCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.harinas_y_salvados", {
		url: "/harinas_y_salvados",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-harinas_y_salvados.html",
						controller: "harinas_y_salvadosCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.hierbas_tes_yuyos", {
		url: "/hierbas_tes_yuyos",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-hierbas_tes_yuyos.html",
						controller: "hierbas_tes_yuyosCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.home", {
		url: "/home",
		views: {
			"aerosa-home" : {
						templateUrl:"templates/aerosa-home.html",
						controller: "homeCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.lista_de_precio", {
		url: "/lista_de_precio",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-lista_de_precio.html",
						controller: "lista_de_precioCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.listas_de_precios", {
		url: "/listas_de_precios/:categories",
		cache:false,
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-listas_de_precios.html",
						controller: "listas_de_preciosCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.listas_singles", {
		url: "/listas_singles/:id",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-listas_singles.html",
						controller: "listas_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.manu", {
		url: "/manu",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-manu.html",
						controller: "manuCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.men", {
		url: "/men",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-men.html",
						controller: "menCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.pastas_quesos_y_cremas", {
		url: "/pastas_quesos_y_cremas",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-pastas_quesos_y_cremas.html",
						controller: "pastas_quesos_y_cremasCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.prod_aptos_para_celacos", {
		url: "/prod_aptos_para_celacos",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-prod_aptos_para_celacos.html",
						controller: "prod_aptos_para_celacosCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.prod_bajas_calorias", {
		url: "/prod_bajas_calorias",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-prod_bajas_calorias.html",
						controller: "prod_bajas_caloriasCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.productos_orgnicos", {
		url: "/productos_orgnicos",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-productos_orgnicos.html",
						controller: "productos_orgnicosCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.raciones_y_otros", {
		url: "/raciones_y_otros",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-raciones_y_otros.html",
						controller: "raciones_y_otrosCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.sadasdas", {
		url: "/sadasdas/:categories",
		cache:false,
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-sadasdas.html",
						controller: "sadasdasCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.slide_tab_menu", {
		url: "/slide_tab_menu",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-slide_tab_menu.html",
						controller: "slide_tab_menuCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.snacks", {
		url: "/snacks",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-snacks.html",
						controller: "snacksCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.sustituto_de_sal_y_prod_sin_sal", {
		url: "/sustituto_de_sal_y_prod_sin_sal",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-sustituto_de_sal_y_prod_sin_sal.html",
						controller: "sustituto_de_sal_y_prod_sin_salCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("aerosa.varios", {
		url: "/varios",
		views: {
			"aerosa-side_menus" : {
						templateUrl:"templates/aerosa-varios.html",
						controller: "variosCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	$urlRouterProvider.otherwise("/aerosa/dashboard");
});
