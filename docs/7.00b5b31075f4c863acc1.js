(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{quZp:function(e,t,r){"use strict";r.r(t),r.d(t,"NumberInRangeValidatorModule",function(){return I});var n=r("ofXK"),a=r("PCNd"),o=r("tyNb"),c=r("fXoL"),b=r("wZkO");let s=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Ib({type:e,selectors:[["app-number-in-range-overview"]],decls:2,vars:0,template:function(e,t){1&e&&(c.Tb(0,"p"),c.uc(1,"It is 'number-in-range' validator"),c.Sb())},styles:[""]}),e})(),u=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Ib({type:e,selectors:[["app-number-in-range-api"]],decls:2,vars:0,template:function(e,t){1&e&&(c.Tb(0,"p"),c.uc(1,"Here are 'number-in-range' validator APIs"),c.Sb())},styles:[""]}),e})();var i=r("3Pt+"),l=r("WHk0"),p=r("ste7"),m=r("XiUz"),f=r("kmnG"),v=r("qFsG");function d(e,t){if(1&e&&(c.Tb(0,"mat-error"),c.uc(1),c.Sb()),2&e){const e=c.ec();c.Db(1),c.vc(e.getErrorMessage(e.percentageControl))}}let g=(()=>{class e{constructor(e){this.errorResolverService=e,this.percentageControl=new i.d(null,Object(l.k)(1,100))}ngOnInit(){}getErrorMessage(e){return this.errorResolverService.getErrorMessage(e)}}return e.\u0275fac=function(t){return new(t||e)(c.Ob(p.a))},e.\u0275cmp=c.Ib({type:e,selectors:[["app-number-in-range-examples"]],decls:13,vars:3,consts:[["fxLayout","column","autocomplete","off",1,"mt-1"],["appearance","outline",1,"mt-1"],["type","number","matInput","",3,"placeholder","formControl"],[4,"ngIf"]],template:function(e,t){1&e&&(c.Tb(0,"p"),c.uc(1,"Here are 'number-in-range' validator examples."),c.Sb(),c.Tb(2,"p"),c.uc(3,"We have to pass 'FROM' and 'TO' values that must be numbers. 'FROM' value must be less than 'TO' value"),c.Sb(),c.Tb(4,"p"),c.Tb(5,"b"),c.uc(6,"Next control must have value from 1-100:"),c.Sb(),c.Sb(),c.Tb(7,"form",0),c.Tb(8,"mat-form-field",1),c.Tb(9,"mat-label"),c.uc(10,"What percentage? (Must be in range 1-100)"),c.Sb(),c.Pb(11,"input",2),c.tc(12,d,2,1,"mat-error",3),c.Sb(),c.Sb()),2&e&&(c.Db(11),c.hc("placeholder","What percentage?")("formControl",t.percentageControl),c.Db(1),c.hc("ngIf",t.percentageControl.invalid))},directives:[i.r,i.m,m.d,f.c,f.f,i.o,v.b,i.c,i.l,i.e,n.j,f.b],styles:[""]}),e})(),w=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Ib({type:e,selectors:[["app-number-in-range-validator"]],decls:10,vars:0,consts:[["label","Overview"],[1,"mt-2"],["label","API"],["label","Examples"]],template:function(e,t){1&e&&(c.Tb(0,"mat-tab-group"),c.Tb(1,"mat-tab",0),c.Tb(2,"div",1),c.Pb(3,"app-number-in-range-overview"),c.Sb(),c.Sb(),c.Tb(4,"mat-tab",2),c.Tb(5,"div",1),c.Pb(6,"app-number-in-range-api"),c.Sb(),c.Sb(),c.Tb(7,"mat-tab",3),c.Tb(8,"div",1),c.Pb(9,"app-number-in-range-examples"),c.Sb(),c.Sb(),c.Sb())},directives:[b.b,b.a,s,u,g],styles:[""]}),e})(),y=(()=>{class e{}return e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({factory:function(t){return new(t||e)},imports:[[n.b,a.a]]}),e})(),S=(()=>{class e{}return e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({factory:function(t){return new(t||e)},imports:[[n.b,a.a]]}),e})(),T=(()=>{class e{}return e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({factory:function(t){return new(t||e)},imports:[[n.b,a.a]]}),e})();const h=[{path:"",component:w}];let I=(()=>{class e{}return e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({factory:function(t){return new(t||e)},imports:[[n.b,a.a,o.c.forChild(h),y,S,T]]}),e})()}}]);