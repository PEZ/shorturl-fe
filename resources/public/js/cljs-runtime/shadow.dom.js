goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_23035 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_23035(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_23038 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_23038(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__21849 = coll;
var G__21850 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__21849,G__21850) : shadow.dom.lazy_native_coll_seq.call(null,G__21849,G__21850));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__21888 = arguments.length;
switch (G__21888) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__21894 = arguments.length;
switch (G__21894) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__21906 = arguments.length;
switch (G__21906) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__21912 = arguments.length;
switch (G__21912) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__21923 = arguments.length;
switch (G__21923) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__21937 = arguments.length;
switch (G__21937) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e21943){if((e21943 instanceof Object)){
var e = e21943;
return console.log("didnt support attachEvent",el,e);
} else {
throw e21943;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__21957 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__21958 = null;
var count__21959 = (0);
var i__21960 = (0);
while(true){
if((i__21960 < count__21959)){
var el = chunk__21958.cljs$core$IIndexed$_nth$arity$2(null,i__21960);
var handler_23064__$1 = ((function (seq__21957,chunk__21958,count__21959,i__21960,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__21957,chunk__21958,count__21959,i__21960,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_23064__$1);


var G__23065 = seq__21957;
var G__23066 = chunk__21958;
var G__23067 = count__21959;
var G__23068 = (i__21960 + (1));
seq__21957 = G__23065;
chunk__21958 = G__23066;
count__21959 = G__23067;
i__21960 = G__23068;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21957);
if(temp__5804__auto__){
var seq__21957__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21957__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21957__$1);
var G__23069 = cljs.core.chunk_rest(seq__21957__$1);
var G__23070 = c__5568__auto__;
var G__23071 = cljs.core.count(c__5568__auto__);
var G__23072 = (0);
seq__21957 = G__23069;
chunk__21958 = G__23070;
count__21959 = G__23071;
i__21960 = G__23072;
continue;
} else {
var el = cljs.core.first(seq__21957__$1);
var handler_23073__$1 = ((function (seq__21957,chunk__21958,count__21959,i__21960,el,seq__21957__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__21957,chunk__21958,count__21959,i__21960,el,seq__21957__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_23073__$1);


var G__23074 = cljs.core.next(seq__21957__$1);
var G__23075 = null;
var G__23076 = (0);
var G__23077 = (0);
seq__21957 = G__23074;
chunk__21958 = G__23075;
count__21959 = G__23076;
i__21960 = G__23077;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__21984 = arguments.length;
switch (G__21984) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__21994 = cljs.core.seq(events);
var chunk__21995 = null;
var count__21996 = (0);
var i__21997 = (0);
while(true){
if((i__21997 < count__21996)){
var vec__22011 = chunk__21995.cljs$core$IIndexed$_nth$arity$2(null,i__21997);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22011,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22011,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__23083 = seq__21994;
var G__23084 = chunk__21995;
var G__23085 = count__21996;
var G__23086 = (i__21997 + (1));
seq__21994 = G__23083;
chunk__21995 = G__23084;
count__21996 = G__23085;
i__21997 = G__23086;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21994);
if(temp__5804__auto__){
var seq__21994__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21994__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21994__$1);
var G__23087 = cljs.core.chunk_rest(seq__21994__$1);
var G__23088 = c__5568__auto__;
var G__23089 = cljs.core.count(c__5568__auto__);
var G__23090 = (0);
seq__21994 = G__23087;
chunk__21995 = G__23088;
count__21996 = G__23089;
i__21997 = G__23090;
continue;
} else {
var vec__22020 = cljs.core.first(seq__21994__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22020,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22020,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__23092 = cljs.core.next(seq__21994__$1);
var G__23093 = null;
var G__23094 = (0);
var G__23095 = (0);
seq__21994 = G__23092;
chunk__21995 = G__23093;
count__21996 = G__23094;
i__21997 = G__23095;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__22032 = cljs.core.seq(styles);
var chunk__22033 = null;
var count__22034 = (0);
var i__22035 = (0);
while(true){
if((i__22035 < count__22034)){
var vec__22050 = chunk__22033.cljs$core$IIndexed$_nth$arity$2(null,i__22035);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22050,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22050,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__23096 = seq__22032;
var G__23097 = chunk__22033;
var G__23098 = count__22034;
var G__23099 = (i__22035 + (1));
seq__22032 = G__23096;
chunk__22033 = G__23097;
count__22034 = G__23098;
i__22035 = G__23099;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22032);
if(temp__5804__auto__){
var seq__22032__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22032__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22032__$1);
var G__23100 = cljs.core.chunk_rest(seq__22032__$1);
var G__23101 = c__5568__auto__;
var G__23102 = cljs.core.count(c__5568__auto__);
var G__23103 = (0);
seq__22032 = G__23100;
chunk__22033 = G__23101;
count__22034 = G__23102;
i__22035 = G__23103;
continue;
} else {
var vec__22055 = cljs.core.first(seq__22032__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22055,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22055,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__23104 = cljs.core.next(seq__22032__$1);
var G__23105 = null;
var G__23106 = (0);
var G__23107 = (0);
seq__22032 = G__23104;
chunk__22033 = G__23105;
count__22034 = G__23106;
i__22035 = G__23107;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__22061_23108 = key;
var G__22061_23109__$1 = (((G__22061_23108 instanceof cljs.core.Keyword))?G__22061_23108.fqn:null);
switch (G__22061_23109__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_23115 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_23115,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_23115,"aria-");
}
})())){
el.setAttribute(ks_23115,value);
} else {
(el[ks_23115] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__22097){
var map__22098 = p__22097;
var map__22098__$1 = cljs.core.__destructure_map(map__22098);
var props = map__22098__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22098__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__22100 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22100,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22100,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22100,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__22104 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__22104,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__22104;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__22108 = arguments.length;
switch (G__22108) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__22115){
var vec__22117 = p__22115;
var seq__22118 = cljs.core.seq(vec__22117);
var first__22119 = cljs.core.first(seq__22118);
var seq__22118__$1 = cljs.core.next(seq__22118);
var nn = first__22119;
var first__22119__$1 = cljs.core.first(seq__22118__$1);
var seq__22118__$2 = cljs.core.next(seq__22118__$1);
var np = first__22119__$1;
var nc = seq__22118__$2;
var node = vec__22117;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22124 = nn;
var G__22125 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__22124,G__22125) : create_fn.call(null,G__22124,G__22125));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22128 = nn;
var G__22129 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__22128,G__22129) : create_fn.call(null,G__22128,G__22129));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__22138 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22138,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22138,(1),null);
var seq__22142_23134 = cljs.core.seq(node_children);
var chunk__22143_23135 = null;
var count__22144_23136 = (0);
var i__22145_23137 = (0);
while(true){
if((i__22145_23137 < count__22144_23136)){
var child_struct_23138 = chunk__22143_23135.cljs$core$IIndexed$_nth$arity$2(null,i__22145_23137);
var children_23139 = shadow.dom.dom_node(child_struct_23138);
if(cljs.core.seq_QMARK_(children_23139)){
var seq__22168_23140 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_23139));
var chunk__22170_23141 = null;
var count__22171_23142 = (0);
var i__22172_23143 = (0);
while(true){
if((i__22172_23143 < count__22171_23142)){
var child_23144 = chunk__22170_23141.cljs$core$IIndexed$_nth$arity$2(null,i__22172_23143);
if(cljs.core.truth_(child_23144)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_23144);


var G__23145 = seq__22168_23140;
var G__23146 = chunk__22170_23141;
var G__23147 = count__22171_23142;
var G__23148 = (i__22172_23143 + (1));
seq__22168_23140 = G__23145;
chunk__22170_23141 = G__23146;
count__22171_23142 = G__23147;
i__22172_23143 = G__23148;
continue;
} else {
var G__23149 = seq__22168_23140;
var G__23150 = chunk__22170_23141;
var G__23151 = count__22171_23142;
var G__23152 = (i__22172_23143 + (1));
seq__22168_23140 = G__23149;
chunk__22170_23141 = G__23150;
count__22171_23142 = G__23151;
i__22172_23143 = G__23152;
continue;
}
} else {
var temp__5804__auto___23153 = cljs.core.seq(seq__22168_23140);
if(temp__5804__auto___23153){
var seq__22168_23154__$1 = temp__5804__auto___23153;
if(cljs.core.chunked_seq_QMARK_(seq__22168_23154__$1)){
var c__5568__auto___23155 = cljs.core.chunk_first(seq__22168_23154__$1);
var G__23156 = cljs.core.chunk_rest(seq__22168_23154__$1);
var G__23157 = c__5568__auto___23155;
var G__23158 = cljs.core.count(c__5568__auto___23155);
var G__23159 = (0);
seq__22168_23140 = G__23156;
chunk__22170_23141 = G__23157;
count__22171_23142 = G__23158;
i__22172_23143 = G__23159;
continue;
} else {
var child_23160 = cljs.core.first(seq__22168_23154__$1);
if(cljs.core.truth_(child_23160)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_23160);


var G__23161 = cljs.core.next(seq__22168_23154__$1);
var G__23162 = null;
var G__23163 = (0);
var G__23164 = (0);
seq__22168_23140 = G__23161;
chunk__22170_23141 = G__23162;
count__22171_23142 = G__23163;
i__22172_23143 = G__23164;
continue;
} else {
var G__23165 = cljs.core.next(seq__22168_23154__$1);
var G__23166 = null;
var G__23167 = (0);
var G__23168 = (0);
seq__22168_23140 = G__23165;
chunk__22170_23141 = G__23166;
count__22171_23142 = G__23167;
i__22172_23143 = G__23168;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_23139);
}


var G__23170 = seq__22142_23134;
var G__23171 = chunk__22143_23135;
var G__23172 = count__22144_23136;
var G__23173 = (i__22145_23137 + (1));
seq__22142_23134 = G__23170;
chunk__22143_23135 = G__23171;
count__22144_23136 = G__23172;
i__22145_23137 = G__23173;
continue;
} else {
var temp__5804__auto___23175 = cljs.core.seq(seq__22142_23134);
if(temp__5804__auto___23175){
var seq__22142_23177__$1 = temp__5804__auto___23175;
if(cljs.core.chunked_seq_QMARK_(seq__22142_23177__$1)){
var c__5568__auto___23178 = cljs.core.chunk_first(seq__22142_23177__$1);
var G__23179 = cljs.core.chunk_rest(seq__22142_23177__$1);
var G__23180 = c__5568__auto___23178;
var G__23181 = cljs.core.count(c__5568__auto___23178);
var G__23182 = (0);
seq__22142_23134 = G__23179;
chunk__22143_23135 = G__23180;
count__22144_23136 = G__23181;
i__22145_23137 = G__23182;
continue;
} else {
var child_struct_23183 = cljs.core.first(seq__22142_23177__$1);
var children_23184 = shadow.dom.dom_node(child_struct_23183);
if(cljs.core.seq_QMARK_(children_23184)){
var seq__22189_23185 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_23184));
var chunk__22191_23186 = null;
var count__22192_23187 = (0);
var i__22193_23188 = (0);
while(true){
if((i__22193_23188 < count__22192_23187)){
var child_23189 = chunk__22191_23186.cljs$core$IIndexed$_nth$arity$2(null,i__22193_23188);
if(cljs.core.truth_(child_23189)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_23189);


var G__23190 = seq__22189_23185;
var G__23191 = chunk__22191_23186;
var G__23192 = count__22192_23187;
var G__23193 = (i__22193_23188 + (1));
seq__22189_23185 = G__23190;
chunk__22191_23186 = G__23191;
count__22192_23187 = G__23192;
i__22193_23188 = G__23193;
continue;
} else {
var G__23195 = seq__22189_23185;
var G__23196 = chunk__22191_23186;
var G__23197 = count__22192_23187;
var G__23198 = (i__22193_23188 + (1));
seq__22189_23185 = G__23195;
chunk__22191_23186 = G__23196;
count__22192_23187 = G__23197;
i__22193_23188 = G__23198;
continue;
}
} else {
var temp__5804__auto___23200__$1 = cljs.core.seq(seq__22189_23185);
if(temp__5804__auto___23200__$1){
var seq__22189_23201__$1 = temp__5804__auto___23200__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22189_23201__$1)){
var c__5568__auto___23202 = cljs.core.chunk_first(seq__22189_23201__$1);
var G__23203 = cljs.core.chunk_rest(seq__22189_23201__$1);
var G__23204 = c__5568__auto___23202;
var G__23205 = cljs.core.count(c__5568__auto___23202);
var G__23206 = (0);
seq__22189_23185 = G__23203;
chunk__22191_23186 = G__23204;
count__22192_23187 = G__23205;
i__22193_23188 = G__23206;
continue;
} else {
var child_23207 = cljs.core.first(seq__22189_23201__$1);
if(cljs.core.truth_(child_23207)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_23207);


var G__23209 = cljs.core.next(seq__22189_23201__$1);
var G__23210 = null;
var G__23211 = (0);
var G__23212 = (0);
seq__22189_23185 = G__23209;
chunk__22191_23186 = G__23210;
count__22192_23187 = G__23211;
i__22193_23188 = G__23212;
continue;
} else {
var G__23213 = cljs.core.next(seq__22189_23201__$1);
var G__23214 = null;
var G__23215 = (0);
var G__23216 = (0);
seq__22189_23185 = G__23213;
chunk__22191_23186 = G__23214;
count__22192_23187 = G__23215;
i__22193_23188 = G__23216;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_23184);
}


var G__23217 = cljs.core.next(seq__22142_23177__$1);
var G__23218 = null;
var G__23219 = (0);
var G__23220 = (0);
seq__22142_23134 = G__23217;
chunk__22143_23135 = G__23218;
count__22144_23136 = G__23219;
i__22145_23137 = G__23220;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__22230 = cljs.core.seq(node);
var chunk__22231 = null;
var count__22232 = (0);
var i__22233 = (0);
while(true){
if((i__22233 < count__22232)){
var n = chunk__22231.cljs$core$IIndexed$_nth$arity$2(null,i__22233);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__23222 = seq__22230;
var G__23223 = chunk__22231;
var G__23224 = count__22232;
var G__23225 = (i__22233 + (1));
seq__22230 = G__23222;
chunk__22231 = G__23223;
count__22232 = G__23224;
i__22233 = G__23225;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22230);
if(temp__5804__auto__){
var seq__22230__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22230__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22230__$1);
var G__23226 = cljs.core.chunk_rest(seq__22230__$1);
var G__23227 = c__5568__auto__;
var G__23228 = cljs.core.count(c__5568__auto__);
var G__23229 = (0);
seq__22230 = G__23226;
chunk__22231 = G__23227;
count__22232 = G__23228;
i__22233 = G__23229;
continue;
} else {
var n = cljs.core.first(seq__22230__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__23230 = cljs.core.next(seq__22230__$1);
var G__23231 = null;
var G__23232 = (0);
var G__23233 = (0);
seq__22230 = G__23230;
chunk__22231 = G__23231;
count__22232 = G__23232;
i__22233 = G__23233;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__22254 = arguments.length;
switch (G__22254) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__22260 = arguments.length;
switch (G__22260) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__22271 = arguments.length;
switch (G__22271) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23244 = arguments.length;
var i__5770__auto___23245 = (0);
while(true){
if((i__5770__auto___23245 < len__5769__auto___23244)){
args__5775__auto__.push((arguments[i__5770__auto___23245]));

var G__23246 = (i__5770__auto___23245 + (1));
i__5770__auto___23245 = G__23246;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__22290_23249 = cljs.core.seq(nodes);
var chunk__22291_23250 = null;
var count__22292_23251 = (0);
var i__22293_23252 = (0);
while(true){
if((i__22293_23252 < count__22292_23251)){
var node_23253 = chunk__22291_23250.cljs$core$IIndexed$_nth$arity$2(null,i__22293_23252);
fragment.appendChild(shadow.dom._to_dom(node_23253));


var G__23255 = seq__22290_23249;
var G__23256 = chunk__22291_23250;
var G__23257 = count__22292_23251;
var G__23258 = (i__22293_23252 + (1));
seq__22290_23249 = G__23255;
chunk__22291_23250 = G__23256;
count__22292_23251 = G__23257;
i__22293_23252 = G__23258;
continue;
} else {
var temp__5804__auto___23259 = cljs.core.seq(seq__22290_23249);
if(temp__5804__auto___23259){
var seq__22290_23260__$1 = temp__5804__auto___23259;
if(cljs.core.chunked_seq_QMARK_(seq__22290_23260__$1)){
var c__5568__auto___23261 = cljs.core.chunk_first(seq__22290_23260__$1);
var G__23262 = cljs.core.chunk_rest(seq__22290_23260__$1);
var G__23263 = c__5568__auto___23261;
var G__23264 = cljs.core.count(c__5568__auto___23261);
var G__23265 = (0);
seq__22290_23249 = G__23262;
chunk__22291_23250 = G__23263;
count__22292_23251 = G__23264;
i__22293_23252 = G__23265;
continue;
} else {
var node_23266 = cljs.core.first(seq__22290_23260__$1);
fragment.appendChild(shadow.dom._to_dom(node_23266));


var G__23267 = cljs.core.next(seq__22290_23260__$1);
var G__23268 = null;
var G__23269 = (0);
var G__23270 = (0);
seq__22290_23249 = G__23267;
chunk__22291_23250 = G__23268;
count__22292_23251 = G__23269;
i__22293_23252 = G__23270;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq22280){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22280));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__22328_23275 = cljs.core.seq(scripts);
var chunk__22329_23276 = null;
var count__22330_23277 = (0);
var i__22331_23278 = (0);
while(true){
if((i__22331_23278 < count__22330_23277)){
var vec__22352_23279 = chunk__22329_23276.cljs$core$IIndexed$_nth$arity$2(null,i__22331_23278);
var script_tag_23280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22352_23279,(0),null);
var script_body_23281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22352_23279,(1),null);
eval(script_body_23281);


var G__23282 = seq__22328_23275;
var G__23283 = chunk__22329_23276;
var G__23284 = count__22330_23277;
var G__23285 = (i__22331_23278 + (1));
seq__22328_23275 = G__23282;
chunk__22329_23276 = G__23283;
count__22330_23277 = G__23284;
i__22331_23278 = G__23285;
continue;
} else {
var temp__5804__auto___23286 = cljs.core.seq(seq__22328_23275);
if(temp__5804__auto___23286){
var seq__22328_23287__$1 = temp__5804__auto___23286;
if(cljs.core.chunked_seq_QMARK_(seq__22328_23287__$1)){
var c__5568__auto___23288 = cljs.core.chunk_first(seq__22328_23287__$1);
var G__23290 = cljs.core.chunk_rest(seq__22328_23287__$1);
var G__23291 = c__5568__auto___23288;
var G__23292 = cljs.core.count(c__5568__auto___23288);
var G__23293 = (0);
seq__22328_23275 = G__23290;
chunk__22329_23276 = G__23291;
count__22330_23277 = G__23292;
i__22331_23278 = G__23293;
continue;
} else {
var vec__22355_23294 = cljs.core.first(seq__22328_23287__$1);
var script_tag_23295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22355_23294,(0),null);
var script_body_23296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22355_23294,(1),null);
eval(script_body_23296);


var G__23297 = cljs.core.next(seq__22328_23287__$1);
var G__23298 = null;
var G__23299 = (0);
var G__23300 = (0);
seq__22328_23275 = G__23297;
chunk__22329_23276 = G__23298;
count__22330_23277 = G__23299;
i__22331_23278 = G__23300;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__22363){
var vec__22364 = p__22363;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22364,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22364,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__22378 = arguments.length;
switch (G__22378) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__22435 = cljs.core.seq(style_keys);
var chunk__22436 = null;
var count__22437 = (0);
var i__22438 = (0);
while(true){
if((i__22438 < count__22437)){
var it = chunk__22436.cljs$core$IIndexed$_nth$arity$2(null,i__22438);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__23313 = seq__22435;
var G__23314 = chunk__22436;
var G__23315 = count__22437;
var G__23316 = (i__22438 + (1));
seq__22435 = G__23313;
chunk__22436 = G__23314;
count__22437 = G__23315;
i__22438 = G__23316;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22435);
if(temp__5804__auto__){
var seq__22435__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22435__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22435__$1);
var G__23319 = cljs.core.chunk_rest(seq__22435__$1);
var G__23320 = c__5568__auto__;
var G__23321 = cljs.core.count(c__5568__auto__);
var G__23322 = (0);
seq__22435 = G__23319;
chunk__22436 = G__23320;
count__22437 = G__23321;
i__22438 = G__23322;
continue;
} else {
var it = cljs.core.first(seq__22435__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__23323 = cljs.core.next(seq__22435__$1);
var G__23324 = null;
var G__23325 = (0);
var G__23326 = (0);
seq__22435 = G__23323;
chunk__22436 = G__23324;
count__22437 = G__23325;
i__22438 = G__23326;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k22504,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__22522 = k22504;
var G__22522__$1 = (((G__22522 instanceof cljs.core.Keyword))?G__22522.fqn:null);
switch (G__22522__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22504,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__22529){
var vec__22530 = p__22529;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22530,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22530,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22503){
var self__ = this;
var G__22503__$1 = this;
return (new cljs.core.RecordIter((0),G__22503__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22505,other22506){
var self__ = this;
var this22505__$1 = this;
return (((!((other22506 == null)))) && ((((this22505__$1.constructor === other22506.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22505__$1.x,other22506.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22505__$1.y,other22506.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22505__$1.__extmap,other22506.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k22504){
var self__ = this;
var this__5350__auto____$1 = this;
var G__22574 = k22504;
var G__22574__$1 = (((G__22574 instanceof cljs.core.Keyword))?G__22574.fqn:null);
switch (G__22574__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k22504);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__22503){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__22584 = cljs.core.keyword_identical_QMARK_;
var expr__22585 = k__5352__auto__;
if(cljs.core.truth_((pred__22584.cljs$core$IFn$_invoke$arity$2 ? pred__22584.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__22585) : pred__22584.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__22585)))){
return (new shadow.dom.Coordinate(G__22503,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22584.cljs$core$IFn$_invoke$arity$2 ? pred__22584.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__22585) : pred__22584.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__22585)))){
return (new shadow.dom.Coordinate(self__.x,G__22503,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__22503),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__22503){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__22503,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__22512){
var extmap__5385__auto__ = (function (){var G__22624 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22512,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__22512)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__22624);
} else {
return G__22624;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__22512),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__22512),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k22654,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__22684 = k22654;
var G__22684__$1 = (((G__22684 instanceof cljs.core.Keyword))?G__22684.fqn:null);
switch (G__22684__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22654,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__22695){
var vec__22700 = p__22695;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22700,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22700,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22653){
var self__ = this;
var G__22653__$1 = this;
return (new cljs.core.RecordIter((0),G__22653__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22655,other22656){
var self__ = this;
var this22655__$1 = this;
return (((!((other22656 == null)))) && ((((this22655__$1.constructor === other22656.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22655__$1.w,other22656.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22655__$1.h,other22656.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22655__$1.__extmap,other22656.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k22654){
var self__ = this;
var this__5350__auto____$1 = this;
var G__22768 = k22654;
var G__22768__$1 = (((G__22768 instanceof cljs.core.Keyword))?G__22768.fqn:null);
switch (G__22768__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k22654);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__22653){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__22772 = cljs.core.keyword_identical_QMARK_;
var expr__22773 = k__5352__auto__;
if(cljs.core.truth_((pred__22772.cljs$core$IFn$_invoke$arity$2 ? pred__22772.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__22773) : pred__22772.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__22773)))){
return (new shadow.dom.Size(G__22653,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22772.cljs$core$IFn$_invoke$arity$2 ? pred__22772.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__22773) : pred__22772.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__22773)))){
return (new shadow.dom.Size(self__.w,G__22653,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__22653),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__22653){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__22653,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__22658){
var extmap__5385__auto__ = (function (){var G__22799 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22658,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__22658)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__22799);
} else {
return G__22799;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__22658),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__22658),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__23385 = (i + (1));
var G__23386 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__23385;
ret = G__23386;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22837){
var vec__22838 = p__22837;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22838,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22838,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__22847 = arguments.length;
switch (G__22847) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__23393 = ps;
var G__23394 = (i + (1));
el__$1 = G__23393;
i = G__23394;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__22893 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22893,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22893,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22893,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__22899_23396 = cljs.core.seq(props);
var chunk__22900_23397 = null;
var count__22901_23398 = (0);
var i__22902_23399 = (0);
while(true){
if((i__22902_23399 < count__22901_23398)){
var vec__22917_23400 = chunk__22900_23397.cljs$core$IIndexed$_nth$arity$2(null,i__22902_23399);
var k_23401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22917_23400,(0),null);
var v_23402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22917_23400,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_23401);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_23401),v_23402);


var G__23403 = seq__22899_23396;
var G__23404 = chunk__22900_23397;
var G__23405 = count__22901_23398;
var G__23406 = (i__22902_23399 + (1));
seq__22899_23396 = G__23403;
chunk__22900_23397 = G__23404;
count__22901_23398 = G__23405;
i__22902_23399 = G__23406;
continue;
} else {
var temp__5804__auto___23407 = cljs.core.seq(seq__22899_23396);
if(temp__5804__auto___23407){
var seq__22899_23408__$1 = temp__5804__auto___23407;
if(cljs.core.chunked_seq_QMARK_(seq__22899_23408__$1)){
var c__5568__auto___23409 = cljs.core.chunk_first(seq__22899_23408__$1);
var G__23410 = cljs.core.chunk_rest(seq__22899_23408__$1);
var G__23411 = c__5568__auto___23409;
var G__23412 = cljs.core.count(c__5568__auto___23409);
var G__23413 = (0);
seq__22899_23396 = G__23410;
chunk__22900_23397 = G__23411;
count__22901_23398 = G__23412;
i__22902_23399 = G__23413;
continue;
} else {
var vec__22925_23414 = cljs.core.first(seq__22899_23408__$1);
var k_23415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22925_23414,(0),null);
var v_23416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22925_23414,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_23415);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_23415),v_23416);


var G__23420 = cljs.core.next(seq__22899_23408__$1);
var G__23421 = null;
var G__23422 = (0);
var G__23423 = (0);
seq__22899_23396 = G__23420;
chunk__22900_23397 = G__23421;
count__22901_23398 = G__23422;
i__22902_23399 = G__23423;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__22947 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22947,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22947,(1),null);
var seq__22951_23424 = cljs.core.seq(node_children);
var chunk__22953_23425 = null;
var count__22954_23426 = (0);
var i__22955_23427 = (0);
while(true){
if((i__22955_23427 < count__22954_23426)){
var child_struct_23431 = chunk__22953_23425.cljs$core$IIndexed$_nth$arity$2(null,i__22955_23427);
if((!((child_struct_23431 == null)))){
if(typeof child_struct_23431 === 'string'){
var text_23432 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_23432),child_struct_23431].join(''));
} else {
var children_23433 = shadow.dom.svg_node(child_struct_23431);
if(cljs.core.seq_QMARK_(children_23433)){
var seq__22984_23434 = cljs.core.seq(children_23433);
var chunk__22986_23435 = null;
var count__22987_23436 = (0);
var i__22988_23437 = (0);
while(true){
if((i__22988_23437 < count__22987_23436)){
var child_23438 = chunk__22986_23435.cljs$core$IIndexed$_nth$arity$2(null,i__22988_23437);
if(cljs.core.truth_(child_23438)){
node.appendChild(child_23438);


var G__23439 = seq__22984_23434;
var G__23440 = chunk__22986_23435;
var G__23441 = count__22987_23436;
var G__23442 = (i__22988_23437 + (1));
seq__22984_23434 = G__23439;
chunk__22986_23435 = G__23440;
count__22987_23436 = G__23441;
i__22988_23437 = G__23442;
continue;
} else {
var G__23443 = seq__22984_23434;
var G__23444 = chunk__22986_23435;
var G__23445 = count__22987_23436;
var G__23446 = (i__22988_23437 + (1));
seq__22984_23434 = G__23443;
chunk__22986_23435 = G__23444;
count__22987_23436 = G__23445;
i__22988_23437 = G__23446;
continue;
}
} else {
var temp__5804__auto___23447 = cljs.core.seq(seq__22984_23434);
if(temp__5804__auto___23447){
var seq__22984_23448__$1 = temp__5804__auto___23447;
if(cljs.core.chunked_seq_QMARK_(seq__22984_23448__$1)){
var c__5568__auto___23449 = cljs.core.chunk_first(seq__22984_23448__$1);
var G__23450 = cljs.core.chunk_rest(seq__22984_23448__$1);
var G__23451 = c__5568__auto___23449;
var G__23452 = cljs.core.count(c__5568__auto___23449);
var G__23453 = (0);
seq__22984_23434 = G__23450;
chunk__22986_23435 = G__23451;
count__22987_23436 = G__23452;
i__22988_23437 = G__23453;
continue;
} else {
var child_23454 = cljs.core.first(seq__22984_23448__$1);
if(cljs.core.truth_(child_23454)){
node.appendChild(child_23454);


var G__23455 = cljs.core.next(seq__22984_23448__$1);
var G__23456 = null;
var G__23457 = (0);
var G__23458 = (0);
seq__22984_23434 = G__23455;
chunk__22986_23435 = G__23456;
count__22987_23436 = G__23457;
i__22988_23437 = G__23458;
continue;
} else {
var G__23459 = cljs.core.next(seq__22984_23448__$1);
var G__23460 = null;
var G__23461 = (0);
var G__23462 = (0);
seq__22984_23434 = G__23459;
chunk__22986_23435 = G__23460;
count__22987_23436 = G__23461;
i__22988_23437 = G__23462;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_23433);
}
}


var G__23463 = seq__22951_23424;
var G__23464 = chunk__22953_23425;
var G__23465 = count__22954_23426;
var G__23466 = (i__22955_23427 + (1));
seq__22951_23424 = G__23463;
chunk__22953_23425 = G__23464;
count__22954_23426 = G__23465;
i__22955_23427 = G__23466;
continue;
} else {
var G__23467 = seq__22951_23424;
var G__23468 = chunk__22953_23425;
var G__23469 = count__22954_23426;
var G__23470 = (i__22955_23427 + (1));
seq__22951_23424 = G__23467;
chunk__22953_23425 = G__23468;
count__22954_23426 = G__23469;
i__22955_23427 = G__23470;
continue;
}
} else {
var temp__5804__auto___23471 = cljs.core.seq(seq__22951_23424);
if(temp__5804__auto___23471){
var seq__22951_23472__$1 = temp__5804__auto___23471;
if(cljs.core.chunked_seq_QMARK_(seq__22951_23472__$1)){
var c__5568__auto___23475 = cljs.core.chunk_first(seq__22951_23472__$1);
var G__23476 = cljs.core.chunk_rest(seq__22951_23472__$1);
var G__23477 = c__5568__auto___23475;
var G__23478 = cljs.core.count(c__5568__auto___23475);
var G__23479 = (0);
seq__22951_23424 = G__23476;
chunk__22953_23425 = G__23477;
count__22954_23426 = G__23478;
i__22955_23427 = G__23479;
continue;
} else {
var child_struct_23480 = cljs.core.first(seq__22951_23472__$1);
if((!((child_struct_23480 == null)))){
if(typeof child_struct_23480 === 'string'){
var text_23481 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_23481),child_struct_23480].join(''));
} else {
var children_23482 = shadow.dom.svg_node(child_struct_23480);
if(cljs.core.seq_QMARK_(children_23482)){
var seq__22992_23484 = cljs.core.seq(children_23482);
var chunk__22994_23485 = null;
var count__22995_23486 = (0);
var i__22996_23487 = (0);
while(true){
if((i__22996_23487 < count__22995_23486)){
var child_23489 = chunk__22994_23485.cljs$core$IIndexed$_nth$arity$2(null,i__22996_23487);
if(cljs.core.truth_(child_23489)){
node.appendChild(child_23489);


var G__23490 = seq__22992_23484;
var G__23491 = chunk__22994_23485;
var G__23492 = count__22995_23486;
var G__23493 = (i__22996_23487 + (1));
seq__22992_23484 = G__23490;
chunk__22994_23485 = G__23491;
count__22995_23486 = G__23492;
i__22996_23487 = G__23493;
continue;
} else {
var G__23494 = seq__22992_23484;
var G__23495 = chunk__22994_23485;
var G__23496 = count__22995_23486;
var G__23497 = (i__22996_23487 + (1));
seq__22992_23484 = G__23494;
chunk__22994_23485 = G__23495;
count__22995_23486 = G__23496;
i__22996_23487 = G__23497;
continue;
}
} else {
var temp__5804__auto___23499__$1 = cljs.core.seq(seq__22992_23484);
if(temp__5804__auto___23499__$1){
var seq__22992_23500__$1 = temp__5804__auto___23499__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22992_23500__$1)){
var c__5568__auto___23501 = cljs.core.chunk_first(seq__22992_23500__$1);
var G__23502 = cljs.core.chunk_rest(seq__22992_23500__$1);
var G__23503 = c__5568__auto___23501;
var G__23504 = cljs.core.count(c__5568__auto___23501);
var G__23505 = (0);
seq__22992_23484 = G__23502;
chunk__22994_23485 = G__23503;
count__22995_23486 = G__23504;
i__22996_23487 = G__23505;
continue;
} else {
var child_23506 = cljs.core.first(seq__22992_23500__$1);
if(cljs.core.truth_(child_23506)){
node.appendChild(child_23506);


var G__23508 = cljs.core.next(seq__22992_23500__$1);
var G__23509 = null;
var G__23510 = (0);
var G__23511 = (0);
seq__22992_23484 = G__23508;
chunk__22994_23485 = G__23509;
count__22995_23486 = G__23510;
i__22996_23487 = G__23511;
continue;
} else {
var G__23512 = cljs.core.next(seq__22992_23500__$1);
var G__23513 = null;
var G__23514 = (0);
var G__23515 = (0);
seq__22992_23484 = G__23512;
chunk__22994_23485 = G__23513;
count__22995_23486 = G__23514;
i__22996_23487 = G__23515;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_23482);
}
}


var G__23516 = cljs.core.next(seq__22951_23472__$1);
var G__23517 = null;
var G__23518 = (0);
var G__23519 = (0);
seq__22951_23424 = G__23516;
chunk__22953_23425 = G__23517;
count__22954_23426 = G__23518;
i__22955_23427 = G__23519;
continue;
} else {
var G__23520 = cljs.core.next(seq__22951_23472__$1);
var G__23521 = null;
var G__23522 = (0);
var G__23523 = (0);
seq__22951_23424 = G__23520;
chunk__22953_23425 = G__23521;
count__22954_23426 = G__23522;
i__22955_23427 = G__23523;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23524 = arguments.length;
var i__5770__auto___23525 = (0);
while(true){
if((i__5770__auto___23525 < len__5769__auto___23524)){
args__5775__auto__.push((arguments[i__5770__auto___23525]));

var G__23526 = (i__5770__auto___23525 + (1));
i__5770__auto___23525 = G__23526;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq23006){
var G__23007 = cljs.core.first(seq23006);
var seq23006__$1 = cljs.core.next(seq23006);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23007,seq23006__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__23012 = arguments.length;
switch (G__23012) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__17711__auto___23532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17712__auto__ = (function (){var switch__16956__auto__ = (function (state_23017){
var state_val_23018 = (state_23017[(1)]);
if((state_val_23018 === (1))){
var state_23017__$1 = state_23017;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23017__$1,(2),once_or_cleanup);
} else {
if((state_val_23018 === (2))){
var inst_23014 = (state_23017[(2)]);
var inst_23015 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_23017__$1 = (function (){var statearr_23019 = state_23017;
(statearr_23019[(7)] = inst_23014);

return statearr_23019;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23017__$1,inst_23015);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__16957__auto__ = null;
var shadow$dom$state_machine__16957__auto____0 = (function (){
var statearr_23020 = [null,null,null,null,null,null,null,null];
(statearr_23020[(0)] = shadow$dom$state_machine__16957__auto__);

(statearr_23020[(1)] = (1));

return statearr_23020;
});
var shadow$dom$state_machine__16957__auto____1 = (function (state_23017){
while(true){
var ret_value__16958__auto__ = (function (){try{while(true){
var result__16959__auto__ = switch__16956__auto__(state_23017);
if(cljs.core.keyword_identical_QMARK_(result__16959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16959__auto__;
}
break;
}
}catch (e23021){var ex__16960__auto__ = e23021;
var statearr_23022_23540 = state_23017;
(statearr_23022_23540[(2)] = ex__16960__auto__);


if(cljs.core.seq((state_23017[(4)]))){
var statearr_23023_23541 = state_23017;
(statearr_23023_23541[(1)] = cljs.core.first((state_23017[(4)])));

} else {
throw ex__16960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23546 = state_23017;
state_23017 = G__23546;
continue;
} else {
return ret_value__16958__auto__;
}
break;
}
});
shadow$dom$state_machine__16957__auto__ = function(state_23017){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__16957__auto____0.call(this);
case 1:
return shadow$dom$state_machine__16957__auto____1.call(this,state_23017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__16957__auto____0;
shadow$dom$state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__16957__auto____1;
return shadow$dom$state_machine__16957__auto__;
})()
})();
var state__17713__auto__ = (function (){var statearr_23024 = f__17712__auto__();
(statearr_23024[(6)] = c__17711__auto___23532);

return statearr_23024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17713__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
