(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{K6Ta:function(t,e,r){"use strict";r.r(e),r.d(e,"DateComparatorValidatorModule",function(){return N});var a=r("ofXK"),o=r("PCNd"),b=r("tyNb"),c=r("fXoL");let l=(()=>{class t{}return t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({factory:function(e){return new(e||t)},imports:[[a.b,o.a]]}),t})(),n=(()=>{class t{}return t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({factory:function(e){return new(e||t)},imports:[[a.b,o.a]]}),t})(),s=(()=>{class t{}return t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({factory:function(e){return new(e||t)},imports:[[a.b,o.a]]}),t})();var i=r("wZkO"),m=r("XiUz");let d=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ib({type:t,selectors:[["app-date-comparator-overview"]],decls:42,vars:6,consts:[["fxLayout","column"],[1,"pt-1"],[1,"mt-2"]],template:function(t,e){1&t&&(c.Tb(0,"h2"),c.wc(1,"IMDateComparatorValidator"),c.Sb(),c.Tb(2,"h2"),c.Tb(3,"strong"),c.wc(4,"This is date comparator validator."),c.Sb(),c.Sb(),c.Tb(5,"p"),c.wc(6,"Configuration parameter must be passed with next config items:"),c.Sb(),c.Tb(7,"ul"),c.Tb(8,"li"),c.wc(9,"Comparing Operator"),c.Sb(),c.Tb(10,"li"),c.wc(11,"Comparing Value"),c.Sb(),c.Tb(12,"li"),c.wc(13,"Comparing Control Key"),c.Sb(),c.Sb(),c.Pb(14,"hr"),c.Tb(15,"p"),c.wc(16,"We have two possibilities to use this validator."),c.Sb(),c.Tb(17,"p"),c.Tb(18,"b"),c.wc(19,"1. Pass comparing value directly via validator configuration"),c.Sb(),c.Sb(),c.Tb(20,"p"),c.Tb(21,"b"),c.wc(22,"2. Pass control key directly via validator configuration"),c.Sb(),c.Sb(),c.Tb(23,"p"),c.wc(24,"It must be sibling form control from the same form group with moment model."),c.Sb(),c.Pb(25,"hr"),c.Tb(26,"p",0),c.Tb(27,"span"),c.wc(28,"It can be imported in next way:"),c.Sb(),c.Tb(29,"strong",1),c.wc(30),c.Sb(),c.Tb(31,"span",1),c.wc(32,"To pass configuration parameter, you can import its interface from library:"),c.Sb(),c.Tb(33,"strong",1),c.wc(34),c.Sb(),c.Tb(35,"span",1),c.wc(36,"Also, error interface that validator returns can be imported as well:"),c.Sb(),c.Tb(37,"strong",1),c.wc(38),c.Sb(),c.Sb(),c.Pb(39,"hr"),c.Tb(40,"p",2),c.wc(41,"Please, take a look at the validator APIs for more detailed information."),c.Sb()),2&t&&(c.Db(30),c.zc("import ","{","IMDateComparatorValidator","}"," from 'im-angular-validators';"),c.Db(4),c.zc("import ","{","IMDateComparatorValidatorConfigInterface","}"," from 'im-angular-validators';"),c.Db(4),c.zc("import ","{","IMDateComparatorErrorInterface","}"," from 'im-angular-validators';"))},directives:[m.e],styles:[""]}),t})();var u=r("WHk0");let p=(()=>{class t{constructor(){this.comparatorOperatorEnum=u.b}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ib({type:t,selectors:[["app-date-comparator-api"]],decls:140,vars:5,consts:[[1,"api"],[1,"mt-2","mb-2"],[1,"mt-2"]],template:function(t,e){1&t&&(c.Tb(0,"table",0),c.Tb(1,"tr"),c.Tb(2,"th"),c.wc(3,"Parameter"),c.Sb(),c.Tb(4,"th"),c.wc(5,"Type"),c.Sb(),c.Tb(6,"th"),c.wc(7,"Required"),c.Sb(),c.Tb(8,"th"),c.wc(9,"Default value"),c.Sb(),c.Tb(10,"th"),c.wc(11,"Description"),c.Sb(),c.Sb(),c.Tb(12,"tr"),c.Tb(13,"td"),c.Tb(14,"strong"),c.wc(15,"config"),c.Sb(),c.Sb(),c.Tb(16,"td"),c.wc(17,"IMDateComparatorValidatorConfigInterface"),c.Sb(),c.Tb(18,"td"),c.wc(19,"Yes"),c.Sb(),c.Tb(20,"td"),c.wc(21,"No default value"),c.Sb(),c.Tb(22,"td"),c.wc(23,"It defines set of configurations for the validator"),c.Sb(),c.Sb(),c.Sb(),c.Tb(24,"p",1),c.Tb(25,"b"),c.wc(26,"Configuration has next parameter values:"),c.Sb(),c.Sb(),c.Tb(27,"table",0),c.Tb(28,"tr"),c.Tb(29,"th"),c.wc(30,"Parameter"),c.Sb(),c.Tb(31,"th"),c.wc(32,"Type"),c.Sb(),c.Tb(33,"th"),c.wc(34,"Required"),c.Sb(),c.Tb(35,"th"),c.wc(36,"Default value"),c.Sb(),c.Tb(37,"th"),c.wc(38,"Description"),c.Sb(),c.Sb(),c.Tb(39,"tr"),c.Tb(40,"td"),c.Tb(41,"strong"),c.wc(42,"comparingOperator"),c.Sb(),c.Sb(),c.Tb(43,"td"),c.wc(44,"IMComparatorOperatorEnum"),c.Sb(),c.Tb(45,"td"),c.wc(46,"Yes"),c.Sb(),c.Tb(47,"td"),c.wc(48,"No default value"),c.Sb(),c.Tb(49,"td"),c.wc(50,"This is comparator operator"),c.Sb(),c.Sb(),c.Tb(51,"tr"),c.Tb(52,"td"),c.Tb(53,"strong"),c.wc(54,"comparingValue"),c.Sb(),c.Sb(),c.Tb(55,"td"),c.wc(56,"Moment"),c.Sb(),c.Tb(57,"td"),c.wc(58,"Yes, if 'comparingControlKey' is not provided"),c.Sb(),c.Tb(59,"td"),c.wc(60,"No default value"),c.Sb(),c.Tb(61,"td"),c.wc(62,"This is value for comparing"),c.Sb(),c.Sb(),c.Tb(63,"tr"),c.Tb(64,"td"),c.Tb(65,"strong"),c.wc(66,"comparingControlKey"),c.Sb(),c.Sb(),c.Tb(67,"td"),c.wc(68,"string"),c.Sb(),c.Tb(69,"td"),c.wc(70,"Yes, if 'comparingValue' is not provided"),c.Sb(),c.Tb(71,"td"),c.wc(72,"No default value"),c.Sb(),c.Tb(73,"td"),c.wc(74,"This is key of sibling form control (must have moment model)"),c.Sb(),c.Sb(),c.Sb(),c.Tb(75,"p",1),c.Tb(76,"b"),c.wc(77,"Next comparing operators are available:"),c.Sb(),c.Sb(),c.Tb(78,"table",0),c.Tb(79,"tr"),c.Tb(80,"th"),c.wc(81,"Operator"),c.Sb(),c.Tb(82,"th"),c.wc(83,"Enum key"),c.Sb(),c.Tb(84,"th"),c.wc(85,"Enum value"),c.Sb(),c.Tb(86,"th"),c.wc(87,"Description"),c.Sb(),c.Sb(),c.Tb(88,"tr"),c.Tb(89,"td"),c.wc(90,"="),c.Sb(),c.Tb(91,"td"),c.Tb(92,"strong"),c.wc(93,"equal"),c.Sb(),c.Sb(),c.Tb(94,"td"),c.wc(95),c.Sb(),c.Tb(96,"td"),c.wc(97,"Equal to"),c.Sb(),c.Sb(),c.Tb(98,"tr"),c.Tb(99,"td"),c.wc(100,">"),c.Sb(),c.Tb(101,"td"),c.Tb(102,"strong"),c.wc(103,"greater"),c.Sb(),c.Sb(),c.Tb(104,"td"),c.wc(105),c.Sb(),c.Tb(106,"td"),c.wc(107,"Greater than"),c.Sb(),c.Sb(),c.Tb(108,"tr"),c.Tb(109,"td"),c.wc(110,">="),c.Sb(),c.Tb(111,"td"),c.Tb(112,"strong"),c.wc(113,"greaterEqual"),c.Sb(),c.Sb(),c.Tb(114,"td"),c.wc(115),c.Sb(),c.Tb(116,"td"),c.wc(117,"Greater than or equal to"),c.Sb(),c.Sb(),c.Tb(118,"tr"),c.Tb(119,"td"),c.wc(120,"<"),c.Sb(),c.Tb(121,"td"),c.Tb(122,"strong"),c.wc(123,"less"),c.Sb(),c.Sb(),c.Tb(124,"td"),c.wc(125),c.Sb(),c.Tb(126,"td"),c.wc(127,"Less than"),c.Sb(),c.Sb(),c.Tb(128,"tr"),c.Tb(129,"td"),c.wc(130,"<="),c.Sb(),c.Tb(131,"td"),c.Tb(132,"strong"),c.wc(133,"lessEqual"),c.Sb(),c.Sb(),c.Tb(134,"td"),c.wc(135),c.Sb(),c.Tb(136,"td"),c.wc(137,"Less than or equal to"),c.Sb(),c.Sb(),c.Sb(),c.Tb(138,"p",2),c.wc(139," Please, take a look at the validator examples and play with different defined validator parameters.\n"),c.Sb()),2&t&&(c.Db(95),c.xc(e.comparatorOperatorEnum.equal),c.Db(10),c.xc(e.comparatorOperatorEnum.greater),c.Db(10),c.xc(e.comparatorOperatorEnum.greaterEqual),c.Db(10),c.xc(e.comparatorOperatorEnum.less),c.Db(10),c.xc(e.comparatorOperatorEnum.lessEqual))},styles:[""]}),t})();var g=r("3Pt+"),f=r("wd/R"),S=r("XNiG"),T=r("1G5W"),w=r("kmnG"),D=r("iadO"),v=r("qFsG"),h=r("nCvJ");function q(t,e){if(1&t&&(c.Tb(0,"mat-error"),c.wc(1),c.fc(2,"controlErrorResolver"),c.Sb()),2&t){const t=c.ec();c.Db(1),c.yc(" ",c.gc(2,1,t.equalFormControl.errors)," ")}}function y(t,e){if(1&t&&(c.Tb(0,"mat-error"),c.wc(1),c.fc(2,"controlErrorResolver"),c.Sb()),2&t){const t=c.ec();c.Db(1),c.yc(" ",c.gc(2,1,t.equalForm.get("startDate").errors)," ")}}function P(t,e){if(1&t&&(c.Tb(0,"mat-error"),c.wc(1),c.fc(2,"controlErrorResolver"),c.Sb()),2&t){const t=c.ec();c.Db(1),c.yc(" ",c.gc(2,1,t.equalForm.get("endDate").errors)," ")}}function k(t,e){if(1&t&&(c.Tb(0,"mat-error"),c.wc(1),c.fc(2,"controlErrorResolver"),c.Sb()),2&t){const t=c.ec();c.Db(1),c.yc(" ",c.gc(2,1,t.greaterFormControl.errors)," ")}}function E(t,e){if(1&t&&(c.Tb(0,"mat-error"),c.wc(1),c.fc(2,"controlErrorResolver"),c.Sb()),2&t){const t=c.ec();c.Db(1),c.yc(" ",c.gc(2,1,t.greaterForm.get("startDate").errors)," ")}}function j(t,e){if(1&t&&(c.Tb(0,"mat-error"),c.wc(1),c.fc(2,"controlErrorResolver"),c.Sb()),2&t){const t=c.ec();c.Db(1),c.yc(" ",c.gc(2,1,t.greaterForm.get("endDate").errors)," ")}}function C(t,e){if(1&t&&(c.Tb(0,"mat-error"),c.wc(1),c.fc(2,"controlErrorResolver"),c.Sb()),2&t){const t=c.ec();c.Db(1),c.yc(" ",c.gc(2,1,t.greaterEqualFormControl.errors)," ")}}function F(t,e){if(1&t&&(c.Tb(0,"mat-error"),c.wc(1),c.fc(2,"controlErrorResolver"),c.Sb()),2&t){const t=c.ec();c.Db(1),c.yc(" ",c.gc(2,1,t.greaterEqualForm.get("startDate").errors)," ")}}function I(t,e){if(1&t&&(c.Tb(0,"mat-error"),c.wc(1),c.fc(2,"controlErrorResolver"),c.Sb()),2&t){const t=c.ec();c.Db(1),c.yc(" ",c.gc(2,1,t.greaterEqualForm.get("endDate").errors)," ")}}function O(t,e){if(1&t&&(c.Tb(0,"mat-error"),c.wc(1),c.fc(2,"controlErrorResolver"),c.Sb()),2&t){const t=c.ec();c.Db(1),c.yc(" ",c.gc(2,1,t.lessFormControl.errors)," ")}}function x(t,e){if(1&t&&(c.Tb(0,"mat-error"),c.wc(1),c.fc(2,"controlErrorResolver"),c.Sb()),2&t){const t=c.ec();c.Db(1),c.yc(" ",c.gc(2,1,t.lessForm.get("startDate").errors)," ")}}function V(t,e){if(1&t&&(c.Tb(0,"mat-error"),c.wc(1),c.fc(2,"controlErrorResolver"),c.Sb()),2&t){const t=c.ec();c.Db(1),c.yc(" ",c.gc(2,1,t.lessForm.get("endDate").errors)," ")}}function R(t,e){if(1&t&&(c.Tb(0,"mat-error"),c.wc(1),c.fc(2,"controlErrorResolver"),c.Sb()),2&t){const t=c.ec();c.Db(1),c.yc(" ",c.gc(2,1,t.lessEqualFormControl.errors)," ")}}function G(t,e){if(1&t&&(c.Tb(0,"mat-error"),c.wc(1),c.fc(2,"controlErrorResolver"),c.Sb()),2&t){const t=c.ec();c.Db(1),c.yc(" ",c.gc(2,1,t.lessEqualForm.get("startDate").errors)," ")}}function L(t,e){if(1&t&&(c.Tb(0,"mat-error"),c.wc(1),c.fc(2,"controlErrorResolver"),c.Sb()),2&t){const t=c.ec();c.Db(1),c.yc(" ",c.gc(2,1,t.lessEqualForm.get("endDate").errors)," ")}}let M=(()=>{class t{constructor(){this.today=f().startOf("day"),this.equalFormControl=new g.d(null,Object(u.g)({comparingOperator:u.b.equal,comparingValue:this.today})),this.greaterFormControl=new g.d(null,Object(u.g)({comparingOperator:u.b.greater,comparingValue:this.today})),this.greaterEqualFormControl=new g.d(null,Object(u.g)({comparingOperator:u.b.greaterEqual,comparingValue:this.today})),this.lessFormControl=new g.d(null,Object(u.g)({comparingOperator:u.b.less,comparingValue:this.today})),this.lessEqualFormControl=new g.d(null,Object(u.g)({comparingOperator:u.b.lessEqual,comparingValue:this.today})),this.equalForm=new g.g({startDate:new g.d(null,g.q.required),endDate:new g.d(null,[g.q.required,Object(u.g)({comparingOperator:u.b.equal,comparingControlKey:"startDate"})])}),this.greaterForm=new g.g({startDate:new g.d(null,g.q.required),endDate:new g.d(null,[g.q.required,Object(u.g)({comparingOperator:u.b.greater,comparingControlKey:"startDate"})])}),this.greaterEqualForm=new g.g({startDate:new g.d(null,g.q.required),endDate:new g.d(null,[g.q.required,Object(u.g)({comparingOperator:u.b.greaterEqual,comparingControlKey:"startDate"})])}),this.lessForm=new g.g({startDate:new g.d(null,g.q.required),endDate:new g.d(null,[g.q.required,Object(u.g)({comparingOperator:u.b.less,comparingControlKey:"startDate"})])}),this.lessEqualForm=new g.g({startDate:new g.d(null,g.q.required),endDate:new g.d(null,[g.q.required,Object(u.g)({comparingOperator:u.b.lessEqual,comparingControlKey:"startDate"})])}),this.subscriptions=new S.a}ngOnInit(){this.equalForm.get("startDate").valueChanges.pipe(Object(T.a)(this.subscriptions)).subscribe(()=>this.equalForm.get("endDate").updateValueAndValidity()),this.greaterForm.get("startDate").valueChanges.pipe(Object(T.a)(this.subscriptions)).subscribe(()=>this.greaterForm.get("endDate").updateValueAndValidity()),this.greaterEqualForm.get("startDate").valueChanges.pipe(Object(T.a)(this.subscriptions)).subscribe(()=>this.greaterEqualForm.get("endDate").updateValueAndValidity()),this.lessForm.get("startDate").valueChanges.pipe(Object(T.a)(this.subscriptions)).subscribe(()=>this.lessForm.get("endDate").updateValueAndValidity()),this.lessEqualForm.get("startDate").valueChanges.pipe(Object(T.a)(this.subscriptions)).subscribe(()=>this.lessEqualForm.get("endDate").updateValueAndValidity())}ngOnDestroy(){this.subscriptions.next(),this.subscriptions.complete()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ib({type:t,selectors:[["app-date-comparator-examples"]],decls:198,vars:60,consts:[["animationDuration","0ms"],["label","Equal To (===)"],[1,"mt-2"],["fxLayout","column"],["fxLayout","column","autocomplete","off",1,"mt-1"],["fxFlex","100%"],["matPrefix","",3,"for"],["matInput","",3,"formControl","matDatepicker"],["equalDatePicker",""],[4,"ngIf"],["fxLayout","column","autocomplete","off","fxLayoutGap","12px",1,"mt-1",3,"formGroup"],["matInput","","formControlName","startDate",3,"matDatepicker"],["equalStartDatePicker",""],["matInput","","formControlName","endDate",3,"matDatepicker"],["equalEndDatePicker",""],["label","Greater Than (>)"],["greaterDatePicker",""],["greaterStartDatePicker",""],["greaterEndDatePicker",""],["label","Greater Than Or Equal To (>=)"],["greaterEqualDatePicker",""],["greaterEqualStartDatePicker",""],["greaterEqualEndDatePicker",""],["label","Less Than (<)"],["lessDatePicker",""],["lessStartDatePicker",""],["lessEndDatePicker",""],["label","Less Than Or Equal To (<=)"],["lessEqualDatePicker",""],["lessEqualStartDatePicker",""],["lessEqualEndDatePicker",""]],template:function(t,e){if(1&t&&(c.Tb(0,"h2"),c.wc(1,"Here is example player:"),c.Sb(),c.Tb(2,"mat-tab-group",0),c.Tb(3,"mat-tab",1),c.Tb(4,"div",2),c.Tb(5,"p",3),c.Tb(6,"b"),c.wc(7,"1. Comparing value is passed"),c.Sb(),c.Tb(8,"span"),c.wc(9,"In next example value of the form control must be equal to current today date."),c.Sb(),c.Sb(),c.Tb(10,"form",4),c.Tb(11,"mat-form-field",5),c.Pb(12,"mat-datepicker-toggle",6),c.Tb(13,"mat-label"),c.wc(14,"Select date"),c.Sb(),c.Pb(15,"input",7),c.Pb(16,"mat-datepicker",null,8),c.vc(18,q,3,3,"mat-error",9),c.Sb(),c.Sb(),c.Tb(19,"p",3),c.Tb(20,"b"),c.wc(21,"2. Comparing control value is passed"),c.Sb(),c.Tb(22,"span"),c.wc(23,"Here are two form controls that are required and end date has to be the same as start date."),c.Sb(),c.Sb(),c.Tb(24,"form",10),c.Tb(25,"mat-form-field",5),c.Pb(26,"mat-datepicker-toggle",6),c.Tb(27,"mat-label"),c.wc(28,"Select start date"),c.Sb(),c.Pb(29,"input",11),c.Pb(30,"mat-datepicker",null,12),c.vc(32,y,3,3,"mat-error",9),c.Sb(),c.Tb(33,"mat-form-field",5),c.Pb(34,"mat-datepicker-toggle",6),c.Tb(35,"mat-label"),c.wc(36,"Select end date"),c.Sb(),c.Pb(37,"input",13),c.Pb(38,"mat-datepicker",null,14),c.vc(40,P,3,3,"mat-error",9),c.Sb(),c.wc(41),c.Sb(),c.Sb(),c.Sb(),c.Tb(42,"mat-tab",15),c.Tb(43,"div",2),c.Tb(44,"p",3),c.Tb(45,"b"),c.wc(46,"1. Comparing value is passed"),c.Sb(),c.Tb(47,"span"),c.wc(48,"In next example selected date must be strictly greater than current today date."),c.Sb(),c.Sb(),c.Tb(49,"form",4),c.Tb(50,"mat-form-field",5),c.Pb(51,"mat-datepicker-toggle",6),c.Tb(52,"mat-label"),c.wc(53,"Select date"),c.Sb(),c.Pb(54,"input",7),c.Pb(55,"mat-datepicker",null,16),c.vc(57,k,3,3,"mat-error",9),c.Sb(),c.Sb(),c.Tb(58,"p",3),c.Tb(59,"b"),c.wc(60,"2. Comparing control value is passed"),c.Sb(),c.Tb(61,"span"),c.wc(62,"Here are two form controls that are required and end date must be strictly greater than start date."),c.Sb(),c.Sb(),c.Tb(63,"form",10),c.Tb(64,"mat-form-field",5),c.Pb(65,"mat-datepicker-toggle",6),c.Tb(66,"mat-label"),c.wc(67,"Select start date"),c.Sb(),c.Pb(68,"input",11),c.Pb(69,"mat-datepicker",null,17),c.vc(71,E,3,3,"mat-error",9),c.Sb(),c.Tb(72,"mat-form-field",5),c.Pb(73,"mat-datepicker-toggle",6),c.Tb(74,"mat-label"),c.wc(75,"Select end date"),c.Sb(),c.Pb(76,"input",13),c.Pb(77,"mat-datepicker",null,18),c.vc(79,j,3,3,"mat-error",9),c.Sb(),c.wc(80),c.Sb(),c.Sb(),c.Sb(),c.Tb(81,"mat-tab",19),c.Tb(82,"div",2),c.Tb(83,"p",3),c.Tb(84,"b"),c.wc(85,"1. Comparing value is passed"),c.Sb(),c.Tb(86,"span"),c.wc(87,"In next example value of the form control must be greater than or equal to current today date."),c.Sb(),c.Sb(),c.Tb(88,"form",4),c.Tb(89,"mat-form-field",5),c.Pb(90,"mat-datepicker-toggle",6),c.Tb(91,"mat-label"),c.wc(92,"Select date"),c.Sb(),c.Pb(93,"input",7),c.Pb(94,"mat-datepicker",null,20),c.vc(96,C,3,3,"mat-error",9),c.Sb(),c.Sb(),c.Tb(97,"p",3),c.Tb(98,"b"),c.wc(99,"2. Comparing control value is passed"),c.Sb(),c.Tb(100,"span"),c.wc(101,"Here are two form controls that are required and end date must be greater than or equal to start date."),c.Sb(),c.Sb(),c.Tb(102,"form",10),c.Tb(103,"mat-form-field",5),c.Pb(104,"mat-datepicker-toggle",6),c.Tb(105,"mat-label"),c.wc(106,"Select start date"),c.Sb(),c.Pb(107,"input",11),c.Pb(108,"mat-datepicker",null,21),c.vc(110,F,3,3,"mat-error",9),c.Sb(),c.Tb(111,"mat-form-field",5),c.Pb(112,"mat-datepicker-toggle",6),c.Tb(113,"mat-label"),c.wc(114,"Select end date"),c.Sb(),c.Pb(115,"input",13),c.Pb(116,"mat-datepicker",null,22),c.vc(118,I,3,3,"mat-error",9),c.Sb(),c.wc(119),c.Sb(),c.Sb(),c.Sb(),c.Tb(120,"mat-tab",23),c.Tb(121,"div",2),c.Tb(122,"p",3),c.Tb(123,"b"),c.wc(124,"1. Comparing value is passed"),c.Sb(),c.Tb(125,"span"),c.wc(126,"In next example value of the form control must be strictly less than current today date."),c.Sb(),c.Sb(),c.Tb(127,"form",4),c.Tb(128,"mat-form-field",5),c.Pb(129,"mat-datepicker-toggle",6),c.Tb(130,"mat-label"),c.wc(131,"Select date"),c.Sb(),c.Pb(132,"input",7),c.Pb(133,"mat-datepicker",null,24),c.vc(135,O,3,3,"mat-error",9),c.Sb(),c.Sb(),c.Tb(136,"p",3),c.Tb(137,"b"),c.wc(138,"2. Comparing control value is passed"),c.Sb(),c.Tb(139,"span"),c.wc(140,"Here are two form controls that are required and end date must be strictly less than start date."),c.Sb(),c.Sb(),c.Tb(141,"form",10),c.Tb(142,"mat-form-field",5),c.Pb(143,"mat-datepicker-toggle",6),c.Tb(144,"mat-label"),c.wc(145,"Select start date"),c.Sb(),c.Pb(146,"input",11),c.Pb(147,"mat-datepicker",null,25),c.vc(149,x,3,3,"mat-error",9),c.Sb(),c.Tb(150,"mat-form-field",5),c.Pb(151,"mat-datepicker-toggle",6),c.Tb(152,"mat-label"),c.wc(153,"Select end date"),c.Sb(),c.Pb(154,"input",13),c.Pb(155,"mat-datepicker",null,26),c.vc(157,V,3,3,"mat-error",9),c.Sb(),c.wc(158),c.Sb(),c.Sb(),c.Sb(),c.Tb(159,"mat-tab",27),c.Tb(160,"div",2),c.Tb(161,"p",3),c.Tb(162,"b"),c.wc(163,"1. Comparing value is passed"),c.Sb(),c.Tb(164,"span"),c.wc(165,"In next example value of the form control must be less than or equal to current today date."),c.Sb(),c.Sb(),c.Tb(166,"form",4),c.Tb(167,"mat-form-field",5),c.Pb(168,"mat-datepicker-toggle",6),c.Tb(169,"mat-label"),c.wc(170,"Select date"),c.Sb(),c.Pb(171,"input",7),c.Pb(172,"mat-datepicker",null,28),c.vc(174,R,3,3,"mat-error",9),c.Sb(),c.Sb(),c.Tb(175,"p",3),c.Tb(176,"b"),c.wc(177,"2. Comparing control value is passed"),c.Sb(),c.Tb(178,"span"),c.wc(179,"Here are two form controls that are required and end date must be less than or equal to start date."),c.Sb(),c.Sb(),c.Tb(180,"form",10),c.Tb(181,"mat-form-field",5),c.Pb(182,"mat-datepicker-toggle",6),c.Tb(183,"mat-label"),c.wc(184,"Select start date"),c.Sb(),c.Pb(185,"input",11),c.Pb(186,"mat-datepicker",null,29),c.vc(188,G,3,3,"mat-error",9),c.Sb(),c.Tb(189,"mat-form-field",5),c.Pb(190,"mat-datepicker-toggle",6),c.Tb(191,"mat-label"),c.wc(192,"Select end date"),c.Sb(),c.Pb(193,"input",13),c.Pb(194,"mat-datepicker",null,30),c.vc(196,L,3,3,"mat-error",9),c.Sb(),c.wc(197),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&t){const t=c.oc(17),r=c.oc(31),a=c.oc(39),o=c.oc(56),b=c.oc(70),l=c.oc(78),n=c.oc(95),s=c.oc(109),i=c.oc(117),m=c.oc(134),d=c.oc(148),u=c.oc(156),p=c.oc(173),g=c.oc(187),f=c.oc(195);c.Db(12),c.jc("for",t),c.Db(3),c.jc("formControl",e.equalFormControl)("matDatepicker",t),c.Db(3),c.jc("ngIf",e.equalFormControl.invalid),c.Db(6),c.jc("formGroup",e.equalForm),c.Db(2),c.jc("for",r),c.Db(3),c.jc("matDatepicker",r),c.Db(3),c.jc("ngIf",e.equalForm.get("startDate").invalid),c.Db(2),c.jc("for",a),c.Db(3),c.jc("matDatepicker",a),c.Db(3),c.jc("ngIf",e.equalForm.get("endDate").invalid),c.Db(1),c.yc(" Is form valid: ",e.equalForm.valid," "),c.Db(10),c.jc("for",o),c.Db(3),c.jc("formControl",e.greaterFormControl)("matDatepicker",o),c.Db(3),c.jc("ngIf",e.greaterFormControl.invalid),c.Db(6),c.jc("formGroup",e.greaterForm),c.Db(2),c.jc("for",b),c.Db(3),c.jc("matDatepicker",b),c.Db(3),c.jc("ngIf",e.greaterForm.get("startDate").invalid),c.Db(2),c.jc("for",l),c.Db(3),c.jc("matDatepicker",l),c.Db(3),c.jc("ngIf",e.greaterForm.get("endDate").invalid),c.Db(1),c.yc(" Is form valid: ",e.greaterForm.valid," "),c.Db(10),c.jc("for",n),c.Db(3),c.jc("formControl",e.greaterEqualFormControl)("matDatepicker",n),c.Db(3),c.jc("ngIf",e.greaterEqualFormControl.invalid),c.Db(6),c.jc("formGroup",e.greaterEqualForm),c.Db(2),c.jc("for",s),c.Db(3),c.jc("matDatepicker",s),c.Db(3),c.jc("ngIf",e.greaterEqualForm.get("startDate").invalid),c.Db(2),c.jc("for",i),c.Db(3),c.jc("matDatepicker",i),c.Db(3),c.jc("ngIf",e.greaterEqualForm.get("endDate").invalid),c.Db(1),c.yc(" Is form valid: ",e.greaterEqualForm.valid," "),c.Db(10),c.jc("for",m),c.Db(3),c.jc("formControl",e.lessFormControl)("matDatepicker",m),c.Db(3),c.jc("ngIf",e.lessFormControl.invalid),c.Db(6),c.jc("formGroup",e.lessForm),c.Db(2),c.jc("for",d),c.Db(3),c.jc("matDatepicker",d),c.Db(3),c.jc("ngIf",e.lessForm.get("startDate").invalid),c.Db(2),c.jc("for",u),c.Db(3),c.jc("matDatepicker",u),c.Db(3),c.jc("ngIf",e.lessForm.get("endDate").invalid),c.Db(1),c.yc(" Is form valid: ",e.lessForm.valid," "),c.Db(10),c.jc("for",p),c.Db(3),c.jc("formControl",e.lessEqualFormControl)("matDatepicker",p),c.Db(3),c.jc("ngIf",e.lessEqualFormControl.invalid),c.Db(6),c.jc("formGroup",e.lessEqualForm),c.Db(2),c.jc("for",g),c.Db(3),c.jc("matDatepicker",g),c.Db(3),c.jc("ngIf",e.lessEqualForm.get("startDate").invalid),c.Db(2),c.jc("for",f),c.Db(3),c.jc("matDatepicker",f),c.Db(3),c.jc("ngIf",e.lessEqualForm.get("endDate").invalid),c.Db(1),c.yc(" Is form valid: ",e.lessEqualForm.valid," ")}},directives:[i.b,i.a,m.e,g.r,g.m,w.c,m.a,D.d,w.g,w.f,v.b,g.c,D.b,g.l,g.e,D.a,a.j,m.f,g.h,g.f,w.b],pipes:[h.a],styles:[""]}),t})();const K=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ib({type:t,selectors:[["app-date-comparator-validator"]],decls:10,vars:0,consts:[["animationDuration","0ms"],["label","Overview"],[1,"mt-2"],["label","API"],["label","Examples"]],template:function(t,e){1&t&&(c.Tb(0,"mat-tab-group",0),c.Tb(1,"mat-tab",1),c.Tb(2,"div",2),c.Pb(3,"app-date-comparator-overview"),c.Sb(),c.Sb(),c.Tb(4,"mat-tab",3),c.Tb(5,"div",2),c.Pb(6,"app-date-comparator-api"),c.Sb(),c.Sb(),c.Tb(7,"mat-tab",4),c.Tb(8,"div",2),c.Pb(9,"app-date-comparator-examples"),c.Sb(),c.Sb(),c.Sb())},directives:[i.b,i.a,d,p,M],styles:[""]}),t})()}];let N=(()=>{class t{}return t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({factory:function(e){return new(e||t)},imports:[[a.b,o.a,b.d.forChild(K),l,n,s]]}),t})()}}]);