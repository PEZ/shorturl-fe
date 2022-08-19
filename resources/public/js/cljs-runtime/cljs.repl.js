goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__22268){
var map__22269 = p__22268;
var map__22269__$1 = cljs.core.__destructure_map(map__22269);
var m = map__22269__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22269__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22269__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22272_22662 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22273_22663 = null;
var count__22274_22664 = (0);
var i__22275_22665 = (0);
while(true){
if((i__22275_22665 < count__22274_22664)){
var f_22666 = chunk__22273_22663.cljs$core$IIndexed$_nth$arity$2(null,i__22275_22665);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_22666], 0));


var G__22667 = seq__22272_22662;
var G__22668 = chunk__22273_22663;
var G__22669 = count__22274_22664;
var G__22670 = (i__22275_22665 + (1));
seq__22272_22662 = G__22667;
chunk__22273_22663 = G__22668;
count__22274_22664 = G__22669;
i__22275_22665 = G__22670;
continue;
} else {
var temp__5804__auto___22671 = cljs.core.seq(seq__22272_22662);
if(temp__5804__auto___22671){
var seq__22272_22672__$1 = temp__5804__auto___22671;
if(cljs.core.chunked_seq_QMARK_(seq__22272_22672__$1)){
var c__5568__auto___22673 = cljs.core.chunk_first(seq__22272_22672__$1);
var G__22674 = cljs.core.chunk_rest(seq__22272_22672__$1);
var G__22675 = c__5568__auto___22673;
var G__22676 = cljs.core.count(c__5568__auto___22673);
var G__22677 = (0);
seq__22272_22662 = G__22674;
chunk__22273_22663 = G__22675;
count__22274_22664 = G__22676;
i__22275_22665 = G__22677;
continue;
} else {
var f_22678 = cljs.core.first(seq__22272_22672__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_22678], 0));


var G__22679 = cljs.core.next(seq__22272_22672__$1);
var G__22680 = null;
var G__22681 = (0);
var G__22682 = (0);
seq__22272_22662 = G__22679;
chunk__22273_22663 = G__22680;
count__22274_22664 = G__22681;
i__22275_22665 = G__22682;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22683 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_22683], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_22683)))?cljs.core.second(arglists_22683):arglists_22683)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22285_22685 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22286_22686 = null;
var count__22287_22687 = (0);
var i__22288_22688 = (0);
while(true){
if((i__22288_22688 < count__22287_22687)){
var vec__22316_22689 = chunk__22286_22686.cljs$core$IIndexed$_nth$arity$2(null,i__22288_22688);
var name_22690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22316_22689,(0),null);
var map__22319_22691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22316_22689,(1),null);
var map__22319_22692__$1 = cljs.core.__destructure_map(map__22319_22691);
var doc_22693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22319_22692__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22319_22692__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_22690], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_22694], 0));

if(cljs.core.truth_(doc_22693)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_22693], 0));
} else {
}


var G__22696 = seq__22285_22685;
var G__22697 = chunk__22286_22686;
var G__22698 = count__22287_22687;
var G__22699 = (i__22288_22688 + (1));
seq__22285_22685 = G__22696;
chunk__22286_22686 = G__22697;
count__22287_22687 = G__22698;
i__22288_22688 = G__22699;
continue;
} else {
var temp__5804__auto___22703 = cljs.core.seq(seq__22285_22685);
if(temp__5804__auto___22703){
var seq__22285_22705__$1 = temp__5804__auto___22703;
if(cljs.core.chunked_seq_QMARK_(seq__22285_22705__$1)){
var c__5568__auto___22706 = cljs.core.chunk_first(seq__22285_22705__$1);
var G__22707 = cljs.core.chunk_rest(seq__22285_22705__$1);
var G__22708 = c__5568__auto___22706;
var G__22709 = cljs.core.count(c__5568__auto___22706);
var G__22710 = (0);
seq__22285_22685 = G__22707;
chunk__22286_22686 = G__22708;
count__22287_22687 = G__22709;
i__22288_22688 = G__22710;
continue;
} else {
var vec__22342_22711 = cljs.core.first(seq__22285_22705__$1);
var name_22712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22342_22711,(0),null);
var map__22345_22713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22342_22711,(1),null);
var map__22345_22714__$1 = cljs.core.__destructure_map(map__22345_22713);
var doc_22715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22345_22714__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22345_22714__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_22712], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_22716], 0));

if(cljs.core.truth_(doc_22715)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_22715], 0));
} else {
}


var G__22717 = cljs.core.next(seq__22285_22705__$1);
var G__22718 = null;
var G__22719 = (0);
var G__22720 = (0);
seq__22285_22685 = G__22717;
chunk__22286_22686 = G__22718;
count__22287_22687 = G__22719;
i__22288_22688 = G__22720;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__22359 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__22360 = null;
var count__22361 = (0);
var i__22362 = (0);
while(true){
if((i__22362 < count__22361)){
var role = chunk__22360.cljs$core$IIndexed$_nth$arity$2(null,i__22362);
var temp__5804__auto___22721__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___22721__$1)){
var spec_22722 = temp__5804__auto___22721__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_22722)], 0));
} else {
}


var G__22723 = seq__22359;
var G__22724 = chunk__22360;
var G__22725 = count__22361;
var G__22726 = (i__22362 + (1));
seq__22359 = G__22723;
chunk__22360 = G__22724;
count__22361 = G__22725;
i__22362 = G__22726;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__22359);
if(temp__5804__auto____$1){
var seq__22359__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__22359__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22359__$1);
var G__22733 = cljs.core.chunk_rest(seq__22359__$1);
var G__22734 = c__5568__auto__;
var G__22735 = cljs.core.count(c__5568__auto__);
var G__22736 = (0);
seq__22359 = G__22733;
chunk__22360 = G__22734;
count__22361 = G__22735;
i__22362 = G__22736;
continue;
} else {
var role = cljs.core.first(seq__22359__$1);
var temp__5804__auto___22737__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___22737__$2)){
var spec_22738 = temp__5804__auto___22737__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_22738)], 0));
} else {
}


var G__22739 = cljs.core.next(seq__22359__$1);
var G__22740 = null;
var G__22741 = (0);
var G__22742 = (0);
seq__22359 = G__22739;
chunk__22360 = G__22740;
count__22361 = G__22741;
i__22362 = G__22742;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__22746 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__22747 = cljs.core.ex_cause(t);
via = G__22746;
t = G__22747;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__22498 = datafied_throwable;
var map__22498__$1 = cljs.core.__destructure_map(map__22498);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22498__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22498__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22498__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__22499 = cljs.core.last(via);
var map__22499__$1 = cljs.core.__destructure_map(map__22499);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22499__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22499__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22499__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__22500 = data;
var map__22500__$1 = cljs.core.__destructure_map(map__22500);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22500__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22500__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22500__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__22501 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__22501__$1 = cljs.core.__destructure_map(map__22501);
var top_data = map__22501__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22501__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__22514 = phase;
var G__22514__$1 = (((G__22514 instanceof cljs.core.Keyword))?G__22514.fqn:null);
switch (G__22514__$1) {
case "read-source":
var map__22517 = data;
var map__22517__$1 = cljs.core.__destructure_map(map__22517);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22517__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22517__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__22519 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__22519__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22519,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22519);
var G__22519__$2 = (cljs.core.truth_((function (){var fexpr__22524 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__22524.cljs$core$IFn$_invoke$arity$1 ? fexpr__22524.cljs$core$IFn$_invoke$arity$1(source) : fexpr__22524.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22519__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22519__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22519__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22519__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__22527 = top_data;
var G__22527__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22527,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22527);
var G__22527__$2 = (cljs.core.truth_((function (){var fexpr__22533 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__22533.cljs$core$IFn$_invoke$arity$1 ? fexpr__22533.cljs$core$IFn$_invoke$arity$1(source) : fexpr__22533.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22527__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22527__$1);
var G__22527__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22527__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22527__$2);
var G__22527__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22527__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22527__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22527__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22527__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__22537 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22537,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22537,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22537,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22537,(3),null);
var G__22540 = top_data;
var G__22540__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22540,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__22540);
var G__22540__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22540__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__22540__$1);
var G__22540__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22540__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__22540__$2);
var G__22540__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22540__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22540__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22540__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22540__$4;
}

break;
case "execution":
var vec__22547 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22547,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22547,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22547,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22547,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__22476_SHARP_){
var or__5045__auto__ = (p1__22476_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__22552 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__22552.cljs$core$IFn$_invoke$arity$1 ? fexpr__22552.cljs$core$IFn$_invoke$arity$1(p1__22476_SHARP_) : fexpr__22552.call(null,p1__22476_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__22558 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__22558__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22558,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__22558);
var G__22558__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22558__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22558__$1);
var G__22558__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22558__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__22558__$2);
var G__22558__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22558__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__22558__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22558__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22558__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22514__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__22575){
var map__22576 = p__22575;
var map__22576__$1 = cljs.core.__destructure_map(map__22576);
var triage_data = map__22576__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22576__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22576__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22576__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22576__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22576__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22576__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22576__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22576__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__22591 = phase;
var G__22591__$1 = (((G__22591 instanceof cljs.core.Keyword))?G__22591.fqn:null);
switch (G__22591__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__22593 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__22594 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22595 = loc;
var G__22596 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22598_22793 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22599_22794 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22600_22795 = true;
var _STAR_print_fn_STAR__temp_val__22601_22796 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22600_22795);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22601_22796);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22565_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__22565_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22599_22794);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22598_22793);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__22593,G__22594,G__22595,G__22596) : format.call(null,G__22593,G__22594,G__22595,G__22596));

break;
case "macroexpansion":
var G__22607 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__22608 = cause_type;
var G__22609 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22610 = loc;
var G__22611 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22607,G__22608,G__22609,G__22610,G__22611) : format.call(null,G__22607,G__22608,G__22609,G__22610,G__22611));

break;
case "compile-syntax-check":
var G__22613 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__22614 = cause_type;
var G__22615 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22616 = loc;
var G__22617 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22613,G__22614,G__22615,G__22616,G__22617) : format.call(null,G__22613,G__22614,G__22615,G__22616,G__22617));

break;
case "compilation":
var G__22618 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__22619 = cause_type;
var G__22620 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22621 = loc;
var G__22622 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22618,G__22619,G__22620,G__22621,G__22622) : format.call(null,G__22618,G__22619,G__22620,G__22621,G__22622));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__22626 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__22627 = symbol;
var G__22628 = loc;
var G__22629 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22632_22811 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22633_22812 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22634_22813 = true;
var _STAR_print_fn_STAR__temp_val__22635_22814 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22634_22813);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22635_22814);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22567_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__22567_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22633_22812);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22632_22811);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__22626,G__22627,G__22628,G__22629) : format.call(null,G__22626,G__22627,G__22628,G__22629));
} else {
var G__22640 = "Execution error%s at %s(%s).\n%s\n";
var G__22641 = cause_type;
var G__22642 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22643 = loc;
var G__22644 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22640,G__22641,G__22642,G__22643,G__22644) : format.call(null,G__22640,G__22641,G__22642,G__22643,G__22644));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22591__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
