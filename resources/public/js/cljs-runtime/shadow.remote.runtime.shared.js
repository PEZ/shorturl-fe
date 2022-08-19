goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__19787,res){
var map__19789 = p__19787;
var map__19789__$1 = cljs.core.__destructure_map(map__19789);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19789__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19789__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__19793 = res;
var G__19793__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19793,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__19793);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19793__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__19793__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__19805 = arguments.length;
switch (G__19805) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__19830,msg,handlers,timeout_after_ms){
var map__19832 = p__19830;
var map__19832__$1 = cljs.core.__destructure_map(map__19832);
var runtime = map__19832__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19832__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20364 = arguments.length;
var i__5770__auto___20365 = (0);
while(true){
if((i__5770__auto___20365 < len__5769__auto___20364)){
args__5775__auto__.push((arguments[i__5770__auto___20365]));

var G__20367 = (i__5770__auto___20365 + (1));
i__5770__auto___20365 = G__20367;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19855,ev,args){
var map__19858 = p__19855;
var map__19858__$1 = cljs.core.__destructure_map(map__19858);
var runtime = map__19858__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19858__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__19863 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19866 = null;
var count__19867 = (0);
var i__19868 = (0);
while(true){
if((i__19868 < count__19867)){
var ext = chunk__19866.cljs$core$IIndexed$_nth$arity$2(null,i__19868);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__20377 = seq__19863;
var G__20378 = chunk__19866;
var G__20379 = count__19867;
var G__20380 = (i__19868 + (1));
seq__19863 = G__20377;
chunk__19866 = G__20378;
count__19867 = G__20379;
i__19868 = G__20380;
continue;
} else {
var G__20381 = seq__19863;
var G__20382 = chunk__19866;
var G__20383 = count__19867;
var G__20384 = (i__19868 + (1));
seq__19863 = G__20381;
chunk__19866 = G__20382;
count__19867 = G__20383;
i__19868 = G__20384;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19863);
if(temp__5804__auto__){
var seq__19863__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19863__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19863__$1);
var G__20391 = cljs.core.chunk_rest(seq__19863__$1);
var G__20392 = c__5568__auto__;
var G__20393 = cljs.core.count(c__5568__auto__);
var G__20394 = (0);
seq__19863 = G__20391;
chunk__19866 = G__20392;
count__19867 = G__20393;
i__19868 = G__20394;
continue;
} else {
var ext = cljs.core.first(seq__19863__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__20396 = cljs.core.next(seq__19863__$1);
var G__20397 = null;
var G__20398 = (0);
var G__20399 = (0);
seq__19863 = G__20396;
chunk__19866 = G__20397;
count__19867 = G__20398;
i__19868 = G__20399;
continue;
} else {
var G__20400 = cljs.core.next(seq__19863__$1);
var G__20401 = null;
var G__20402 = (0);
var G__20403 = (0);
seq__19863 = G__20400;
chunk__19866 = G__20401;
count__19867 = G__20402;
i__19868 = G__20403;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq19838){
var G__19839 = cljs.core.first(seq19838);
var seq19838__$1 = cljs.core.next(seq19838);
var G__19840 = cljs.core.first(seq19838__$1);
var seq19838__$2 = cljs.core.next(seq19838__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19839,G__19840,seq19838__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__19998,p__19999){
var map__20001 = p__19998;
var map__20001__$1 = cljs.core.__destructure_map(map__20001);
var runtime = map__20001__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20001__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__20002 = p__19999;
var map__20002__$1 = cljs.core.__destructure_map(map__20002);
var msg = map__20002__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20002__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__20004 = cljs.core.deref(state_ref);
var map__20004__$1 = cljs.core.__destructure_map(map__20004);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20004__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20004__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__20026){
var map__20027 = p__20026;
var map__20027__$1 = cljs.core.__destructure_map(map__20027);
var runtime = map__20027__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20027__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__20028,msg){
var map__20029 = p__20028;
var map__20029__$1 = cljs.core.__destructure_map(map__20029);
var runtime = map__20029__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20029__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__20046,key,p__20047){
var map__20052 = p__20046;
var map__20052__$1 = cljs.core.__destructure_map(map__20052);
var state = map__20052__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20052__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__20053 = p__20047;
var map__20053__$1 = cljs.core.__destructure_map(map__20053);
var spec = map__20053__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20053__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__20064,key,spec){
var map__20067 = p__20064;
var map__20067__$1 = cljs.core.__destructure_map(map__20067);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20067__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__20073_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__20073_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__20074_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__20074_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__20075_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__20075_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__20077_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__20077_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__20078_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__20078_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__20106,key){
var map__20108 = p__20106;
var map__20108__$1 = cljs.core.__destructure_map(map__20108);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20108__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__20119,msg){
var map__20124 = p__20119;
var map__20124__$1 = cljs.core.__destructure_map(map__20124);
var runtime = map__20124__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20124__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__20145,p__20146){
var map__20149 = p__20145;
var map__20149__$1 = cljs.core.__destructure_map(map__20149);
var runtime = map__20149__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20149__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__20151 = p__20146;
var map__20151__$1 = cljs.core.__destructure_map(map__20151);
var msg = map__20151__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20151__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20151__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__20206 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__20208 = null;
var count__20209 = (0);
var i__20210 = (0);
while(true){
if((i__20210 < count__20209)){
var map__20274 = chunk__20208.cljs$core$IIndexed$_nth$arity$2(null,i__20210);
var map__20274__$1 = cljs.core.__destructure_map(map__20274);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20274__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__20457 = seq__20206;
var G__20458 = chunk__20208;
var G__20459 = count__20209;
var G__20460 = (i__20210 + (1));
seq__20206 = G__20457;
chunk__20208 = G__20458;
count__20209 = G__20459;
i__20210 = G__20460;
continue;
} else {
var G__20461 = seq__20206;
var G__20462 = chunk__20208;
var G__20463 = count__20209;
var G__20464 = (i__20210 + (1));
seq__20206 = G__20461;
chunk__20208 = G__20462;
count__20209 = G__20463;
i__20210 = G__20464;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20206);
if(temp__5804__auto__){
var seq__20206__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20206__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20206__$1);
var G__20465 = cljs.core.chunk_rest(seq__20206__$1);
var G__20466 = c__5568__auto__;
var G__20467 = cljs.core.count(c__5568__auto__);
var G__20468 = (0);
seq__20206 = G__20465;
chunk__20208 = G__20466;
count__20209 = G__20467;
i__20210 = G__20468;
continue;
} else {
var map__20298 = cljs.core.first(seq__20206__$1);
var map__20298__$1 = cljs.core.__destructure_map(map__20298);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20298__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__20469 = cljs.core.next(seq__20206__$1);
var G__20470 = null;
var G__20471 = (0);
var G__20472 = (0);
seq__20206 = G__20469;
chunk__20208 = G__20470;
count__20209 = G__20471;
i__20210 = G__20472;
continue;
} else {
var G__20473 = cljs.core.next(seq__20206__$1);
var G__20474 = null;
var G__20475 = (0);
var G__20476 = (0);
seq__20206 = G__20473;
chunk__20208 = G__20474;
count__20209 = G__20475;
i__20210 = G__20476;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
