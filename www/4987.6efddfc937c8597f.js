"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4987],{4987:(h,g,i)=>{i.r(g),i.d(g,{LoginPageModule:()=>L});var c=i(9808),t=i(4182),l=i(2292),r=i(7590),d=i(655),o=i(2096);const m=function(){return["/registro"]},p=[{path:"",component:(()=>{class e{constructor(n,a,u){this.fb=n,this.alertController=a,this.router=u,this.formularioLogin=this.fb.group({nombre:new t.NI("",t.kI.required),password:new t.NI("",t.kI.required)})}ngOnInit(){}ingresar(){return(0,d.mG)(this,void 0,void 0,function*(){var n=this.formularioLogin.value;try{var a=JSON.parse(localStorage.getItem("usuario"));a.nombre==n.nombre&&a.password==n.password?(console.log("Ingresado"),this.router.navigateByUrl("/tabs")):yield(yield this.alertController.create({header:"Datos incorrectos",message:"Los datos que ingresaste son incorrectos.",buttons:["Aceptar"]})).present()}catch(u){yield(yield this.alertController.create({message:"No hay usuarios registrados",buttons:["Aceptar"]})).present()}})}}return e.\u0275fac=function(n){return new(n||e)(o.Y36(t.qu),o.Y36(r.Br),o.Y36(l.F0))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-login"]],decls:27,vars:3,consts:[["color","primary"],[3,"formGroup"],["position","floating"],["formControlName","nombre"],["formControlName","password","type","password"],[3,"click"],["slot","end"],[3,"routerLink"]],template:function(n,a){1&n&&(o.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title"),o._uU(3,"Login"),o.qZA()()(),o.TgZ(4,"ion-content")(5,"ion-card")(6,"ion-card-header")(7,"ion-card-title"),o._uU(8,"Login"),o.qZA()(),o.TgZ(9,"ion-card-content")(10,"form",1)(11,"ion-item")(12,"ion-label",2),o._uU(13,"Nombre"),o.qZA(),o._UZ(14,"ion-input",3),o.qZA(),o.TgZ(15,"ion-item")(16,"ion-label",2),o._uU(17,"Contrase\xf1a"),o.qZA(),o._UZ(18,"ion-input",4),o.qZA()(),o._UZ(19,"br"),o.TgZ(20,"ion-button",5),o.NdJ("click",function(){return a.ingresar()}),o._uU(21," Ingresar "),o.qZA()()()(),o.TgZ(22,"ion-footer")(23,"ion-toolbar",0)(24,"ion-buttons",6)(25,"ion-button",7),o._uU(26,"Registrarse"),o.qZA()()()()),2&n&&(o.xp6(10),o.Q6J("formGroup",a.formularioLogin),o.xp6(15),o.Q6J("routerLink",o.DdM(2,m)))},dependencies:[t._Y,t.JJ,t.JL,t.sg,t.u,r.YG,r.Sm,r.PM,r.FN,r.Zi,r.Dq,r.W2,r.fr,r.Gu,r.pK,r.Ie,r.Q$,r.wd,r.sr,r.j9,r.YI,l.rH]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[l.Bz.forChild(p),l.Bz]}),e})(),L=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[c.ez,t.u5,t.UX,r.Pc,f,l.Bz]}),e})()}}]);