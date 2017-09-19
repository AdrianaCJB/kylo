// Hook to avoid caching
var systemLocate = System.locate;
System.locate = function (load) {
    return Promise.resolve(systemLocate.call(this, load)).then(function (address) {
        return address + "?ver=0.8.3.1"
    });
};

// Configure dependencies
System.config({
    baseURL: "js",
    defaultJSExtensions: true,
    paths: {
        "angular":"../bower_components/angular/angular.min",
        "angular-drag-and-drop-lists":"../bower_components/angular-drag-and-drop-lists/angular-drag-and-drop-lists.min",
        "angular-material-data-table":"../bower_components/angular-material-data-table/dist/md-data-table.min",
        "angular-material-expansion-panel":"../bower_components/angular-material-expansion-panel/dist/md-expansion-panel.min",
        "angular-material-icons":"vendor/angular-material-icons/angular-material-icons",
        "angular-nvd3":"../bower_components/angular-nvd3/dist/angular-nvd3.min",
        "angular-sanitize":"../bower_components/angular-sanitize/angular-sanitize.min",
        "angular-ui-codemirror":"../bower_components/angular-ui-codemirror/ui-codemirror.min",
        "angular-ui-grid":"../bower_components/angular-ui-grid/ui-grid.min",
        "angular-ui-router":"../bower_components/angular-ui-router/release/angular-ui-router",
        "angular-visjs":"../bower_components/angular-visjs/angular-vis",
        "angularAnimate":"../bower_components/angular-animate/angular-animate.min",
        "angularAria":"../bower_components/angular-aria/angular-aria.min",
        "angularLocalStorage": "../bower_components/angularLocalStorage/dist/angularLocalStorage.min",
        "angularMaterial":"../bower_components/angular-material/angular-material.min",
        "angularMessages":"../bower_components/angular-messages/angular-messages.min",
        "app":"app",
        "c3":"../bower_components/c3/c3.min",
        "cardLayout":"common/card-layout/card-layout",
        "codemirror": "../bower_components/codemirror/lib/codemirror",
        "codemirror/addon/": "../bower_components/codemirror/addon/",
        "codemirror/mode/": "../bower_components/codemirror/mode/",
        "common/module-name": "common/module-name",
        "d3":"../bower_components/d3/d3.min",
        "dirPagination":"vendor/dirPagination/dirPagination",
        "draggabilly":"../bower_components/draggabilly/dist/draggabilly.pkgd.min",
        "fattable": "../bower_components/fattable/fattable",
        "gsap": "../bower_components/gsap/src/uncompressed/TweenMax",
        "jquery":"../bower_components/jquery/dist/jquery.min",
        "jquery-ui":"../bower_components/jquery-ui/jquery-ui.min",
        "kylo-common":"common/module-require",
        "kylo-common-module":"common/module",
        "kylo-feedmgr":"feed-mgr/module-require",
        "kylo-feedmgr-module":"feed-mgr/module",
        "kylo-opsmgr":"ops-mgr/module-require",
        "kylo-opsmgr-module":"ops-mgr/module",
        "kylo-services":"services/module-require",
        "kylo-services-module":"services/module",
        "kylo-side-nav":"side-nav/module-require",
        "kylo-side-nav-module":"side-nav/module",
        "kyloTimer":"common/timer/kylo-timer",
        "lz-string": "../bower_components/lz-string/libs/lz-string.min",
        "ment-io":"vendor/ment.io/mentio",
        "moment":"../bower_components/moment/min/moment.min",
        "npm:": "../node_modules/",
        'ng-fx':"../bower_components/ngFx/dist/ngFx.min",
        "ng-text-truncate":"vendor/ng-text-truncate/ng-text-truncate",
        "nvd3": "../bower_components/nvd3/build/nv.d3.min",
        "ocLazyLoad":"../bower_components/oclazyload/dist/ocLazyLoad.require",
        "pivottable": "../bower_components/pivottable/dist/pivot.min",
        "pivottable-c3-renderers":"../bower_components/pivottable/dist/c3_renderers.min",
        "requirejs": "../bower_components/requirejs/require",
        "routes": "routes.js",
        "services/module-name":"services/module-name",
        "svg-morpheus":"../bower_components/svg-morpheus/compile/unminified/svg-morpheus",
        "underscore":"../bower_components/underscore/underscore-min",
        "vis":"../bower_components/vis/dist/vis.min"
    },
    map: {
        '@angular/core': 'npm:@angular/core/bundles/core.umd.min',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.min',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.min',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.min',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.min',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.min',
        '@angular/router/upgrade': 'npm:@angular/router/bundles/router-upgrade.umd.min',
        '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.min',
        '@angular/upgrade/static': 'npm:@angular/upgrade/bundles/upgrade-static.umd.min',
        'rxjs': 'npm:rxjs'
    },
    meta: {
        "@angular/core": {deps:["angular"]},
        "angular": {deps:["jquery"],exports: "angular"},
        'angular-ui-router': {deps:['angular']},
        'angularAria': ['angular'],
        'angularMessages': ['angular'],
        'angularAnimate': ['angular'],
        'angularMaterial': ['angular','angularAnimate','angularAria','angularMessages'],
        'angular-material-expansion-panel':['angular'],
        'angular-material-icons':['angular'],
        'angular-material-data-table':['angular'],
        "angular-nvd3":['angular','nvd3'],
        "angular-sanitize":["angular"],
        'angular-ui-grid':['angular','angularAnimate'],
        'angular-ui-codemirror':['angular','codemirror'],
        'angular-visjs':['angular','vis'],
        "codemirror-pig": ["codemirror"],
        "codemirror-properties":["codemirror"],
        "codemirror-python":["codemirror"],
        "codemirror-xml":["codemirror"],
        "codemirror-shell":["codemirror"],
        "codemirror-javascript":["codemirror"],
        "codemirror-sql":["codemirror"],
        "codemirror-show-hint":["codemirror"],
        "codemirror-sql-hint":["codemirror"],
        "codemirror-xml-hint":["codemirror"],
        "codemirror-groovy":["codemirror"],
        "codemirror-dialog":["codemirror"],
        'd3':{exports:'d3'},
        'dirPagination':['angular'],
        "jquery-ui":["jquery"],
        'ocLazyLoad':['angular'],
        'kylo-services-module':{deps:['angular','jquery']},
        'kylo-services':{deps:['angular','kylo-services-module','jquery']},
        'kylo-common-module':{deps:['angular','jquery']},
        'kylo-common':{deps:['angular','kylo-services','kylo-common-module','jquery','angular-material-icons'], exports:'kylo-common', format:"amd"},
        'kylo-feedmgr-module':{deps:['angular','jquery']},
        'kylo-feedmgr':{deps:['angular','kylo-services','kylo-common','kylo-feedmgr-module']},
        'kylo-opsmgr-module':{deps:['angular','jquery']},
        'kylo-opsmgr':{deps:['angular','kylo-services','kylo-common','kylo-opsmgr-module']},
        'kylo-side-nav-module':{deps:['angular','jquery']},
        'kylo-side-nav':{deps:['angular','kylo-services','jquery','angular-material-icons','kylo-side-nav-module'], exports:'kylo-side-nav', format:"amd"},
        'ment-io':['angular'],
        "ng-fx":{deps:["gsap"]},
        "ng-text-truncate":["angular"],
        'nvd3':{deps:['d3'],exports:'nv'},
        'pivottable':{deps:['c3','jquery']},
        "pivottable-c3-renderers":{deps:['pivottable']},
        'vis':{exports:"vis"},
        'app':{deps:['ocLazyLoad','underscore','angularMaterial','jquery','angular-sanitize','ng-text-truncate'], exports:'app', format: "amd"},
        'routes':{deps:['app'], exports:'routes', format: "amd"}
    }
});
