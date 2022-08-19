goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24517 = arguments.length;
var i__5770__auto___24518 = (0);
while(true){
if((i__5770__auto___24518 < len__5769__auto___24517)){
args__5775__auto__.push((arguments[i__5770__auto___24518]));

var G__24519 = (i__5770__auto___24518 + (1));
i__5770__auto___24518 = G__24519;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq24230){
var G__24231 = cljs.core.first(seq24230);
var seq24230__$1 = cljs.core.next(seq24230);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24231,seq24230__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__24237 = cljs.core.seq(sources);
var chunk__24238 = null;
var count__24239 = (0);
var i__24240 = (0);
while(true){
if((i__24240 < count__24239)){
var map__24245 = chunk__24238.cljs$core$IIndexed$_nth$arity$2(null,i__24240);
var map__24245__$1 = cljs.core.__destructure_map(map__24245);
var src = map__24245__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24245__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24245__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24245__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24245__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e24246){var e_24520 = e24246;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_24520);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_24520.message)].join('')));
}

var G__24521 = seq__24237;
var G__24522 = chunk__24238;
var G__24523 = count__24239;
var G__24524 = (i__24240 + (1));
seq__24237 = G__24521;
chunk__24238 = G__24522;
count__24239 = G__24523;
i__24240 = G__24524;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24237);
if(temp__5804__auto__){
var seq__24237__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24237__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24237__$1);
var G__24525 = cljs.core.chunk_rest(seq__24237__$1);
var G__24526 = c__5568__auto__;
var G__24527 = cljs.core.count(c__5568__auto__);
var G__24528 = (0);
seq__24237 = G__24525;
chunk__24238 = G__24526;
count__24239 = G__24527;
i__24240 = G__24528;
continue;
} else {
var map__24248 = cljs.core.first(seq__24237__$1);
var map__24248__$1 = cljs.core.__destructure_map(map__24248);
var src = map__24248__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24248__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24248__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24248__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24248__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e24250){var e_24529 = e24250;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_24529);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_24529.message)].join('')));
}

var G__24530 = cljs.core.next(seq__24237__$1);
var G__24531 = null;
var G__24532 = (0);
var G__24533 = (0);
seq__24237 = G__24530;
chunk__24238 = G__24531;
count__24239 = G__24532;
i__24240 = G__24533;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__24251 = cljs.core.seq(js_requires);
var chunk__24252 = null;
var count__24253 = (0);
var i__24254 = (0);
while(true){
if((i__24254 < count__24253)){
var js_ns = chunk__24252.cljs$core$IIndexed$_nth$arity$2(null,i__24254);
var require_str_24534 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_24534);


var G__24535 = seq__24251;
var G__24536 = chunk__24252;
var G__24537 = count__24253;
var G__24538 = (i__24254 + (1));
seq__24251 = G__24535;
chunk__24252 = G__24536;
count__24253 = G__24537;
i__24254 = G__24538;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24251);
if(temp__5804__auto__){
var seq__24251__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24251__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24251__$1);
var G__24539 = cljs.core.chunk_rest(seq__24251__$1);
var G__24540 = c__5568__auto__;
var G__24541 = cljs.core.count(c__5568__auto__);
var G__24542 = (0);
seq__24251 = G__24539;
chunk__24252 = G__24540;
count__24253 = G__24541;
i__24254 = G__24542;
continue;
} else {
var js_ns = cljs.core.first(seq__24251__$1);
var require_str_24543 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_24543);


var G__24544 = cljs.core.next(seq__24251__$1);
var G__24545 = null;
var G__24546 = (0);
var G__24547 = (0);
seq__24251 = G__24544;
chunk__24252 = G__24545;
count__24253 = G__24546;
i__24254 = G__24547;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__24256){
var map__24257 = p__24256;
var map__24257__$1 = cljs.core.__destructure_map(map__24257);
var msg = map__24257__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24257__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24257__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24258(s__24259){
return (new cljs.core.LazySeq(null,(function (){
var s__24259__$1 = s__24259;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24259__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__24264 = cljs.core.first(xs__6360__auto__);
var map__24264__$1 = cljs.core.__destructure_map(map__24264);
var src = map__24264__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24264__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24264__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__24259__$1,map__24264,map__24264__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24257,map__24257__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24258_$_iter__24260(s__24261){
return (new cljs.core.LazySeq(null,((function (s__24259__$1,map__24264,map__24264__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24257,map__24257__$1,msg,info,reload_info){
return (function (){
var s__24261__$1 = s__24261;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__24261__$1);
if(temp__5804__auto____$1){
var s__24261__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24261__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__24261__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__24263 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__24262 = (0);
while(true){
if((i__24262 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__24262);
cljs.core.chunk_append(b__24263,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__24548 = (i__24262 + (1));
i__24262 = G__24548;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24263),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24258_$_iter__24260(cljs.core.chunk_rest(s__24261__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24263),null);
}
} else {
var warning = cljs.core.first(s__24261__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24258_$_iter__24260(cljs.core.rest(s__24261__$2)));
}
} else {
return null;
}
break;
}
});})(s__24259__$1,map__24264,map__24264__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24257,map__24257__$1,msg,info,reload_info))
,null,null));
});})(s__24259__$1,map__24264,map__24264__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24257,map__24257__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24258(cljs.core.rest(s__24259__$1)));
} else {
var G__24549 = cljs.core.rest(s__24259__$1);
s__24259__$1 = G__24549;
continue;
}
} else {
var G__24550 = cljs.core.rest(s__24259__$1);
s__24259__$1 = G__24550;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__24265_24551 = cljs.core.seq(warnings);
var chunk__24266_24552 = null;
var count__24267_24553 = (0);
var i__24268_24554 = (0);
while(true){
if((i__24268_24554 < count__24267_24553)){
var map__24271_24555 = chunk__24266_24552.cljs$core$IIndexed$_nth$arity$2(null,i__24268_24554);
var map__24271_24556__$1 = cljs.core.__destructure_map(map__24271_24555);
var w_24557 = map__24271_24556__$1;
var msg_24558__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24271_24556__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_24559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24271_24556__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24271_24556__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_24561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24271_24556__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_24561)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_24559),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_24560),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_24558__$1)].join(''));


var G__24562 = seq__24265_24551;
var G__24563 = chunk__24266_24552;
var G__24564 = count__24267_24553;
var G__24565 = (i__24268_24554 + (1));
seq__24265_24551 = G__24562;
chunk__24266_24552 = G__24563;
count__24267_24553 = G__24564;
i__24268_24554 = G__24565;
continue;
} else {
var temp__5804__auto___24566 = cljs.core.seq(seq__24265_24551);
if(temp__5804__auto___24566){
var seq__24265_24567__$1 = temp__5804__auto___24566;
if(cljs.core.chunked_seq_QMARK_(seq__24265_24567__$1)){
var c__5568__auto___24568 = cljs.core.chunk_first(seq__24265_24567__$1);
var G__24569 = cljs.core.chunk_rest(seq__24265_24567__$1);
var G__24570 = c__5568__auto___24568;
var G__24571 = cljs.core.count(c__5568__auto___24568);
var G__24572 = (0);
seq__24265_24551 = G__24569;
chunk__24266_24552 = G__24570;
count__24267_24553 = G__24571;
i__24268_24554 = G__24572;
continue;
} else {
var map__24272_24573 = cljs.core.first(seq__24265_24567__$1);
var map__24272_24574__$1 = cljs.core.__destructure_map(map__24272_24573);
var w_24575 = map__24272_24574__$1;
var msg_24576__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24272_24574__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_24577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24272_24574__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24272_24574__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_24579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24272_24574__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_24579)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_24577),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_24578),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_24576__$1)].join(''));


var G__24580 = cljs.core.next(seq__24265_24567__$1);
var G__24581 = null;
var G__24582 = (0);
var G__24583 = (0);
seq__24265_24551 = G__24580;
chunk__24266_24552 = G__24581;
count__24267_24553 = G__24582;
i__24268_24554 = G__24583;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__24255_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__24255_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__24273){
var map__24274 = p__24273;
var map__24274__$1 = cljs.core.__destructure_map(map__24274);
var msg = map__24274__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24274__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24274__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__24275 = cljs.core.seq(updates);
var chunk__24277 = null;
var count__24278 = (0);
var i__24279 = (0);
while(true){
if((i__24279 < count__24278)){
var path = chunk__24277.cljs$core$IIndexed$_nth$arity$2(null,i__24279);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__24389_24584 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__24393_24585 = null;
var count__24394_24586 = (0);
var i__24395_24587 = (0);
while(true){
if((i__24395_24587 < count__24394_24586)){
var node_24588 = chunk__24393_24585.cljs$core$IIndexed$_nth$arity$2(null,i__24395_24587);
if(cljs.core.not(node_24588.shadow$old)){
var path_match_24589 = shadow.cljs.devtools.client.browser.match_paths(node_24588.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24589)){
var new_link_24590 = (function (){var G__24421 = node_24588.cloneNode(true);
G__24421.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24589),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24421;
})();
(node_24588.shadow$old = true);

(new_link_24590.onload = ((function (seq__24389_24584,chunk__24393_24585,count__24394_24586,i__24395_24587,seq__24275,chunk__24277,count__24278,i__24279,new_link_24590,path_match_24589,node_24588,path,map__24274,map__24274__$1,msg,updates,reload_info){
return (function (e){
var seq__24422_24591 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24424_24592 = null;
var count__24425_24593 = (0);
var i__24426_24594 = (0);
while(true){
if((i__24426_24594 < count__24425_24593)){
var map__24430_24595 = chunk__24424_24592.cljs$core$IIndexed$_nth$arity$2(null,i__24426_24594);
var map__24430_24596__$1 = cljs.core.__destructure_map(map__24430_24595);
var task_24597 = map__24430_24596__$1;
var fn_str_24598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24430_24596__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24430_24596__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24600 = goog.getObjectByName(fn_str_24598,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24599)].join(''));

(fn_obj_24600.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24600.cljs$core$IFn$_invoke$arity$2(path,new_link_24590) : fn_obj_24600.call(null,path,new_link_24590));


var G__24601 = seq__24422_24591;
var G__24602 = chunk__24424_24592;
var G__24603 = count__24425_24593;
var G__24604 = (i__24426_24594 + (1));
seq__24422_24591 = G__24601;
chunk__24424_24592 = G__24602;
count__24425_24593 = G__24603;
i__24426_24594 = G__24604;
continue;
} else {
var temp__5804__auto___24605 = cljs.core.seq(seq__24422_24591);
if(temp__5804__auto___24605){
var seq__24422_24606__$1 = temp__5804__auto___24605;
if(cljs.core.chunked_seq_QMARK_(seq__24422_24606__$1)){
var c__5568__auto___24607 = cljs.core.chunk_first(seq__24422_24606__$1);
var G__24608 = cljs.core.chunk_rest(seq__24422_24606__$1);
var G__24609 = c__5568__auto___24607;
var G__24610 = cljs.core.count(c__5568__auto___24607);
var G__24611 = (0);
seq__24422_24591 = G__24608;
chunk__24424_24592 = G__24609;
count__24425_24593 = G__24610;
i__24426_24594 = G__24611;
continue;
} else {
var map__24431_24612 = cljs.core.first(seq__24422_24606__$1);
var map__24431_24613__$1 = cljs.core.__destructure_map(map__24431_24612);
var task_24614 = map__24431_24613__$1;
var fn_str_24615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24431_24613__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24431_24613__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24617 = goog.getObjectByName(fn_str_24615,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24616)].join(''));

(fn_obj_24617.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24617.cljs$core$IFn$_invoke$arity$2(path,new_link_24590) : fn_obj_24617.call(null,path,new_link_24590));


var G__24618 = cljs.core.next(seq__24422_24606__$1);
var G__24619 = null;
var G__24620 = (0);
var G__24621 = (0);
seq__24422_24591 = G__24618;
chunk__24424_24592 = G__24619;
count__24425_24593 = G__24620;
i__24426_24594 = G__24621;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24588);
});})(seq__24389_24584,chunk__24393_24585,count__24394_24586,i__24395_24587,seq__24275,chunk__24277,count__24278,i__24279,new_link_24590,path_match_24589,node_24588,path,map__24274,map__24274__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24589], 0));

goog.dom.insertSiblingAfter(new_link_24590,node_24588);


var G__24622 = seq__24389_24584;
var G__24623 = chunk__24393_24585;
var G__24624 = count__24394_24586;
var G__24625 = (i__24395_24587 + (1));
seq__24389_24584 = G__24622;
chunk__24393_24585 = G__24623;
count__24394_24586 = G__24624;
i__24395_24587 = G__24625;
continue;
} else {
var G__24626 = seq__24389_24584;
var G__24627 = chunk__24393_24585;
var G__24628 = count__24394_24586;
var G__24629 = (i__24395_24587 + (1));
seq__24389_24584 = G__24626;
chunk__24393_24585 = G__24627;
count__24394_24586 = G__24628;
i__24395_24587 = G__24629;
continue;
}
} else {
var G__24630 = seq__24389_24584;
var G__24631 = chunk__24393_24585;
var G__24632 = count__24394_24586;
var G__24633 = (i__24395_24587 + (1));
seq__24389_24584 = G__24630;
chunk__24393_24585 = G__24631;
count__24394_24586 = G__24632;
i__24395_24587 = G__24633;
continue;
}
} else {
var temp__5804__auto___24634 = cljs.core.seq(seq__24389_24584);
if(temp__5804__auto___24634){
var seq__24389_24635__$1 = temp__5804__auto___24634;
if(cljs.core.chunked_seq_QMARK_(seq__24389_24635__$1)){
var c__5568__auto___24636 = cljs.core.chunk_first(seq__24389_24635__$1);
var G__24637 = cljs.core.chunk_rest(seq__24389_24635__$1);
var G__24638 = c__5568__auto___24636;
var G__24639 = cljs.core.count(c__5568__auto___24636);
var G__24640 = (0);
seq__24389_24584 = G__24637;
chunk__24393_24585 = G__24638;
count__24394_24586 = G__24639;
i__24395_24587 = G__24640;
continue;
} else {
var node_24641 = cljs.core.first(seq__24389_24635__$1);
if(cljs.core.not(node_24641.shadow$old)){
var path_match_24642 = shadow.cljs.devtools.client.browser.match_paths(node_24641.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24642)){
var new_link_24643 = (function (){var G__24432 = node_24641.cloneNode(true);
G__24432.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24642),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24432;
})();
(node_24641.shadow$old = true);

(new_link_24643.onload = ((function (seq__24389_24584,chunk__24393_24585,count__24394_24586,i__24395_24587,seq__24275,chunk__24277,count__24278,i__24279,new_link_24643,path_match_24642,node_24641,seq__24389_24635__$1,temp__5804__auto___24634,path,map__24274,map__24274__$1,msg,updates,reload_info){
return (function (e){
var seq__24433_24644 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24435_24645 = null;
var count__24436_24646 = (0);
var i__24437_24647 = (0);
while(true){
if((i__24437_24647 < count__24436_24646)){
var map__24441_24648 = chunk__24435_24645.cljs$core$IIndexed$_nth$arity$2(null,i__24437_24647);
var map__24441_24649__$1 = cljs.core.__destructure_map(map__24441_24648);
var task_24650 = map__24441_24649__$1;
var fn_str_24651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24441_24649__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24441_24649__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24653 = goog.getObjectByName(fn_str_24651,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24652)].join(''));

(fn_obj_24653.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24653.cljs$core$IFn$_invoke$arity$2(path,new_link_24643) : fn_obj_24653.call(null,path,new_link_24643));


var G__24654 = seq__24433_24644;
var G__24655 = chunk__24435_24645;
var G__24656 = count__24436_24646;
var G__24657 = (i__24437_24647 + (1));
seq__24433_24644 = G__24654;
chunk__24435_24645 = G__24655;
count__24436_24646 = G__24656;
i__24437_24647 = G__24657;
continue;
} else {
var temp__5804__auto___24658__$1 = cljs.core.seq(seq__24433_24644);
if(temp__5804__auto___24658__$1){
var seq__24433_24659__$1 = temp__5804__auto___24658__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24433_24659__$1)){
var c__5568__auto___24660 = cljs.core.chunk_first(seq__24433_24659__$1);
var G__24661 = cljs.core.chunk_rest(seq__24433_24659__$1);
var G__24662 = c__5568__auto___24660;
var G__24663 = cljs.core.count(c__5568__auto___24660);
var G__24664 = (0);
seq__24433_24644 = G__24661;
chunk__24435_24645 = G__24662;
count__24436_24646 = G__24663;
i__24437_24647 = G__24664;
continue;
} else {
var map__24442_24665 = cljs.core.first(seq__24433_24659__$1);
var map__24442_24666__$1 = cljs.core.__destructure_map(map__24442_24665);
var task_24667 = map__24442_24666__$1;
var fn_str_24668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24442_24666__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24442_24666__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24670 = goog.getObjectByName(fn_str_24668,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24669)].join(''));

(fn_obj_24670.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24670.cljs$core$IFn$_invoke$arity$2(path,new_link_24643) : fn_obj_24670.call(null,path,new_link_24643));


var G__24671 = cljs.core.next(seq__24433_24659__$1);
var G__24672 = null;
var G__24673 = (0);
var G__24674 = (0);
seq__24433_24644 = G__24671;
chunk__24435_24645 = G__24672;
count__24436_24646 = G__24673;
i__24437_24647 = G__24674;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24641);
});})(seq__24389_24584,chunk__24393_24585,count__24394_24586,i__24395_24587,seq__24275,chunk__24277,count__24278,i__24279,new_link_24643,path_match_24642,node_24641,seq__24389_24635__$1,temp__5804__auto___24634,path,map__24274,map__24274__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24642], 0));

goog.dom.insertSiblingAfter(new_link_24643,node_24641);


var G__24675 = cljs.core.next(seq__24389_24635__$1);
var G__24676 = null;
var G__24677 = (0);
var G__24678 = (0);
seq__24389_24584 = G__24675;
chunk__24393_24585 = G__24676;
count__24394_24586 = G__24677;
i__24395_24587 = G__24678;
continue;
} else {
var G__24679 = cljs.core.next(seq__24389_24635__$1);
var G__24680 = null;
var G__24681 = (0);
var G__24682 = (0);
seq__24389_24584 = G__24679;
chunk__24393_24585 = G__24680;
count__24394_24586 = G__24681;
i__24395_24587 = G__24682;
continue;
}
} else {
var G__24683 = cljs.core.next(seq__24389_24635__$1);
var G__24684 = null;
var G__24685 = (0);
var G__24686 = (0);
seq__24389_24584 = G__24683;
chunk__24393_24585 = G__24684;
count__24394_24586 = G__24685;
i__24395_24587 = G__24686;
continue;
}
}
} else {
}
}
break;
}


var G__24687 = seq__24275;
var G__24688 = chunk__24277;
var G__24689 = count__24278;
var G__24690 = (i__24279 + (1));
seq__24275 = G__24687;
chunk__24277 = G__24688;
count__24278 = G__24689;
i__24279 = G__24690;
continue;
} else {
var G__24691 = seq__24275;
var G__24692 = chunk__24277;
var G__24693 = count__24278;
var G__24694 = (i__24279 + (1));
seq__24275 = G__24691;
chunk__24277 = G__24692;
count__24278 = G__24693;
i__24279 = G__24694;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24275);
if(temp__5804__auto__){
var seq__24275__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24275__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24275__$1);
var G__24695 = cljs.core.chunk_rest(seq__24275__$1);
var G__24696 = c__5568__auto__;
var G__24697 = cljs.core.count(c__5568__auto__);
var G__24698 = (0);
seq__24275 = G__24695;
chunk__24277 = G__24696;
count__24278 = G__24697;
i__24279 = G__24698;
continue;
} else {
var path = cljs.core.first(seq__24275__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__24443_24699 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__24447_24700 = null;
var count__24448_24701 = (0);
var i__24449_24702 = (0);
while(true){
if((i__24449_24702 < count__24448_24701)){
var node_24703 = chunk__24447_24700.cljs$core$IIndexed$_nth$arity$2(null,i__24449_24702);
if(cljs.core.not(node_24703.shadow$old)){
var path_match_24704 = shadow.cljs.devtools.client.browser.match_paths(node_24703.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24704)){
var new_link_24705 = (function (){var G__24475 = node_24703.cloneNode(true);
G__24475.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24704),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24475;
})();
(node_24703.shadow$old = true);

(new_link_24705.onload = ((function (seq__24443_24699,chunk__24447_24700,count__24448_24701,i__24449_24702,seq__24275,chunk__24277,count__24278,i__24279,new_link_24705,path_match_24704,node_24703,path,seq__24275__$1,temp__5804__auto__,map__24274,map__24274__$1,msg,updates,reload_info){
return (function (e){
var seq__24476_24706 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24478_24707 = null;
var count__24479_24708 = (0);
var i__24480_24709 = (0);
while(true){
if((i__24480_24709 < count__24479_24708)){
var map__24484_24710 = chunk__24478_24707.cljs$core$IIndexed$_nth$arity$2(null,i__24480_24709);
var map__24484_24711__$1 = cljs.core.__destructure_map(map__24484_24710);
var task_24712 = map__24484_24711__$1;
var fn_str_24713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24484_24711__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24484_24711__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24715 = goog.getObjectByName(fn_str_24713,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24714)].join(''));

(fn_obj_24715.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24715.cljs$core$IFn$_invoke$arity$2(path,new_link_24705) : fn_obj_24715.call(null,path,new_link_24705));


var G__24716 = seq__24476_24706;
var G__24717 = chunk__24478_24707;
var G__24718 = count__24479_24708;
var G__24719 = (i__24480_24709 + (1));
seq__24476_24706 = G__24716;
chunk__24478_24707 = G__24717;
count__24479_24708 = G__24718;
i__24480_24709 = G__24719;
continue;
} else {
var temp__5804__auto___24720__$1 = cljs.core.seq(seq__24476_24706);
if(temp__5804__auto___24720__$1){
var seq__24476_24721__$1 = temp__5804__auto___24720__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24476_24721__$1)){
var c__5568__auto___24722 = cljs.core.chunk_first(seq__24476_24721__$1);
var G__24723 = cljs.core.chunk_rest(seq__24476_24721__$1);
var G__24724 = c__5568__auto___24722;
var G__24725 = cljs.core.count(c__5568__auto___24722);
var G__24726 = (0);
seq__24476_24706 = G__24723;
chunk__24478_24707 = G__24724;
count__24479_24708 = G__24725;
i__24480_24709 = G__24726;
continue;
} else {
var map__24485_24727 = cljs.core.first(seq__24476_24721__$1);
var map__24485_24728__$1 = cljs.core.__destructure_map(map__24485_24727);
var task_24729 = map__24485_24728__$1;
var fn_str_24730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24485_24728__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24485_24728__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24732 = goog.getObjectByName(fn_str_24730,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24731)].join(''));

(fn_obj_24732.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24732.cljs$core$IFn$_invoke$arity$2(path,new_link_24705) : fn_obj_24732.call(null,path,new_link_24705));


var G__24733 = cljs.core.next(seq__24476_24721__$1);
var G__24734 = null;
var G__24735 = (0);
var G__24736 = (0);
seq__24476_24706 = G__24733;
chunk__24478_24707 = G__24734;
count__24479_24708 = G__24735;
i__24480_24709 = G__24736;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24703);
});})(seq__24443_24699,chunk__24447_24700,count__24448_24701,i__24449_24702,seq__24275,chunk__24277,count__24278,i__24279,new_link_24705,path_match_24704,node_24703,path,seq__24275__$1,temp__5804__auto__,map__24274,map__24274__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24704], 0));

goog.dom.insertSiblingAfter(new_link_24705,node_24703);


var G__24737 = seq__24443_24699;
var G__24738 = chunk__24447_24700;
var G__24739 = count__24448_24701;
var G__24740 = (i__24449_24702 + (1));
seq__24443_24699 = G__24737;
chunk__24447_24700 = G__24738;
count__24448_24701 = G__24739;
i__24449_24702 = G__24740;
continue;
} else {
var G__24741 = seq__24443_24699;
var G__24742 = chunk__24447_24700;
var G__24743 = count__24448_24701;
var G__24744 = (i__24449_24702 + (1));
seq__24443_24699 = G__24741;
chunk__24447_24700 = G__24742;
count__24448_24701 = G__24743;
i__24449_24702 = G__24744;
continue;
}
} else {
var G__24745 = seq__24443_24699;
var G__24746 = chunk__24447_24700;
var G__24747 = count__24448_24701;
var G__24748 = (i__24449_24702 + (1));
seq__24443_24699 = G__24745;
chunk__24447_24700 = G__24746;
count__24448_24701 = G__24747;
i__24449_24702 = G__24748;
continue;
}
} else {
var temp__5804__auto___24749__$1 = cljs.core.seq(seq__24443_24699);
if(temp__5804__auto___24749__$1){
var seq__24443_24750__$1 = temp__5804__auto___24749__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24443_24750__$1)){
var c__5568__auto___24751 = cljs.core.chunk_first(seq__24443_24750__$1);
var G__24752 = cljs.core.chunk_rest(seq__24443_24750__$1);
var G__24753 = c__5568__auto___24751;
var G__24754 = cljs.core.count(c__5568__auto___24751);
var G__24755 = (0);
seq__24443_24699 = G__24752;
chunk__24447_24700 = G__24753;
count__24448_24701 = G__24754;
i__24449_24702 = G__24755;
continue;
} else {
var node_24756 = cljs.core.first(seq__24443_24750__$1);
if(cljs.core.not(node_24756.shadow$old)){
var path_match_24757 = shadow.cljs.devtools.client.browser.match_paths(node_24756.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24757)){
var new_link_24758 = (function (){var G__24486 = node_24756.cloneNode(true);
G__24486.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24757),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24486;
})();
(node_24756.shadow$old = true);

(new_link_24758.onload = ((function (seq__24443_24699,chunk__24447_24700,count__24448_24701,i__24449_24702,seq__24275,chunk__24277,count__24278,i__24279,new_link_24758,path_match_24757,node_24756,seq__24443_24750__$1,temp__5804__auto___24749__$1,path,seq__24275__$1,temp__5804__auto__,map__24274,map__24274__$1,msg,updates,reload_info){
return (function (e){
var seq__24487_24759 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24489_24760 = null;
var count__24490_24761 = (0);
var i__24491_24762 = (0);
while(true){
if((i__24491_24762 < count__24490_24761)){
var map__24495_24763 = chunk__24489_24760.cljs$core$IIndexed$_nth$arity$2(null,i__24491_24762);
var map__24495_24764__$1 = cljs.core.__destructure_map(map__24495_24763);
var task_24765 = map__24495_24764__$1;
var fn_str_24766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24495_24764__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24495_24764__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24768 = goog.getObjectByName(fn_str_24766,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24767)].join(''));

(fn_obj_24768.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24768.cljs$core$IFn$_invoke$arity$2(path,new_link_24758) : fn_obj_24768.call(null,path,new_link_24758));


var G__24769 = seq__24487_24759;
var G__24770 = chunk__24489_24760;
var G__24771 = count__24490_24761;
var G__24772 = (i__24491_24762 + (1));
seq__24487_24759 = G__24769;
chunk__24489_24760 = G__24770;
count__24490_24761 = G__24771;
i__24491_24762 = G__24772;
continue;
} else {
var temp__5804__auto___24773__$2 = cljs.core.seq(seq__24487_24759);
if(temp__5804__auto___24773__$2){
var seq__24487_24774__$1 = temp__5804__auto___24773__$2;
if(cljs.core.chunked_seq_QMARK_(seq__24487_24774__$1)){
var c__5568__auto___24775 = cljs.core.chunk_first(seq__24487_24774__$1);
var G__24776 = cljs.core.chunk_rest(seq__24487_24774__$1);
var G__24777 = c__5568__auto___24775;
var G__24778 = cljs.core.count(c__5568__auto___24775);
var G__24779 = (0);
seq__24487_24759 = G__24776;
chunk__24489_24760 = G__24777;
count__24490_24761 = G__24778;
i__24491_24762 = G__24779;
continue;
} else {
var map__24496_24780 = cljs.core.first(seq__24487_24774__$1);
var map__24496_24781__$1 = cljs.core.__destructure_map(map__24496_24780);
var task_24782 = map__24496_24781__$1;
var fn_str_24783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24496_24781__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24496_24781__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24785 = goog.getObjectByName(fn_str_24783,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24784)].join(''));

(fn_obj_24785.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24785.cljs$core$IFn$_invoke$arity$2(path,new_link_24758) : fn_obj_24785.call(null,path,new_link_24758));


var G__24786 = cljs.core.next(seq__24487_24774__$1);
var G__24787 = null;
var G__24788 = (0);
var G__24789 = (0);
seq__24487_24759 = G__24786;
chunk__24489_24760 = G__24787;
count__24490_24761 = G__24788;
i__24491_24762 = G__24789;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24756);
});})(seq__24443_24699,chunk__24447_24700,count__24448_24701,i__24449_24702,seq__24275,chunk__24277,count__24278,i__24279,new_link_24758,path_match_24757,node_24756,seq__24443_24750__$1,temp__5804__auto___24749__$1,path,seq__24275__$1,temp__5804__auto__,map__24274,map__24274__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24757], 0));

goog.dom.insertSiblingAfter(new_link_24758,node_24756);


var G__24790 = cljs.core.next(seq__24443_24750__$1);
var G__24791 = null;
var G__24792 = (0);
var G__24793 = (0);
seq__24443_24699 = G__24790;
chunk__24447_24700 = G__24791;
count__24448_24701 = G__24792;
i__24449_24702 = G__24793;
continue;
} else {
var G__24794 = cljs.core.next(seq__24443_24750__$1);
var G__24795 = null;
var G__24796 = (0);
var G__24797 = (0);
seq__24443_24699 = G__24794;
chunk__24447_24700 = G__24795;
count__24448_24701 = G__24796;
i__24449_24702 = G__24797;
continue;
}
} else {
var G__24798 = cljs.core.next(seq__24443_24750__$1);
var G__24799 = null;
var G__24800 = (0);
var G__24801 = (0);
seq__24443_24699 = G__24798;
chunk__24447_24700 = G__24799;
count__24448_24701 = G__24800;
i__24449_24702 = G__24801;
continue;
}
}
} else {
}
}
break;
}


var G__24802 = cljs.core.next(seq__24275__$1);
var G__24803 = null;
var G__24804 = (0);
var G__24805 = (0);
seq__24275 = G__24802;
chunk__24277 = G__24803;
count__24278 = G__24804;
i__24279 = G__24805;
continue;
} else {
var G__24806 = cljs.core.next(seq__24275__$1);
var G__24807 = null;
var G__24808 = (0);
var G__24809 = (0);
seq__24275 = G__24806;
chunk__24277 = G__24807;
count__24278 = G__24808;
i__24279 = G__24809;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__24497){
var map__24498 = p__24497;
var map__24498__$1 = cljs.core.__destructure_map(map__24498);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24498__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__24499){
var map__24500 = p__24499;
var map__24500__$1 = cljs.core.__destructure_map(map__24500);
var _ = map__24500__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24500__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__24501,done,error){
var map__24502 = p__24501;
var map__24502__$1 = cljs.core.__destructure_map(map__24502);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24502__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__24503,done,error){
var map__24504 = p__24503;
var map__24504__$1 = cljs.core.__destructure_map(map__24504);
var msg = map__24504__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24504__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24504__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24504__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__24505){
var map__24506 = p__24505;
var map__24506__$1 = cljs.core.__destructure_map(map__24506);
var src = map__24506__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24506__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__24507 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__24507) : done.call(null,G__24507));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__24508){
var map__24509 = p__24508;
var map__24509__$1 = cljs.core.__destructure_map(map__24509);
var msg__$1 = map__24509__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24509__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e24510){var ex = e24510;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__24511){
var map__24512 = p__24511;
var map__24512__$1 = cljs.core.__destructure_map(map__24512);
var env = map__24512__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24512__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__24513){
var map__24514 = p__24513;
var map__24514__$1 = cljs.core.__destructure_map(map__24514);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24514__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24514__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__24515){
var map__24516 = p__24515;
var map__24516__$1 = cljs.core.__destructure_map(map__24516);
var svc = map__24516__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24516__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
