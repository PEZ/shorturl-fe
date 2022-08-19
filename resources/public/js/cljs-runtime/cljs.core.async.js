goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17876 = arguments.length;
switch (G__17876) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17881 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17881 = (function (f,blockable,meta17882){
this.f = f;
this.blockable = blockable;
this.meta17882 = meta17882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17883,meta17882__$1){
var self__ = this;
var _17883__$1 = this;
return (new cljs.core.async.t_cljs$core$async17881(self__.f,self__.blockable,meta17882__$1));
}));

(cljs.core.async.t_cljs$core$async17881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17883){
var self__ = this;
var _17883__$1 = this;
return self__.meta17882;
}));

(cljs.core.async.t_cljs$core$async17881.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17881.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17881.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17881.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17882","meta17882",1624842847,null)], null);
}));

(cljs.core.async.t_cljs$core$async17881.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17881");

(cljs.core.async.t_cljs$core$async17881.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17881");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17881.
 */
cljs.core.async.__GT_t_cljs$core$async17881 = (function cljs$core$async$__GT_t_cljs$core$async17881(f__$1,blockable__$1,meta17882){
return (new cljs.core.async.t_cljs$core$async17881(f__$1,blockable__$1,meta17882));
});

}

return (new cljs.core.async.t_cljs$core$async17881(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__17911 = arguments.length;
switch (G__17911) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17966 = arguments.length;
switch (G__17966) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__18014 = arguments.length;
switch (G__18014) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_21863 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_21863) : fn1.call(null,val_21863));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_21863) : fn1.call(null,val_21863));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__18086 = arguments.length;
switch (G__18086) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___21876 = n;
var x_21877 = (0);
while(true){
if((x_21877 < n__5636__auto___21876)){
(a[x_21877] = x_21877);

var G__21882 = (x_21877 + (1));
x_21877 = G__21882;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18119 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18119 = (function (flag,meta18120){
this.flag = flag;
this.meta18120 = meta18120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18121,meta18120__$1){
var self__ = this;
var _18121__$1 = this;
return (new cljs.core.async.t_cljs$core$async18119(self__.flag,meta18120__$1));
}));

(cljs.core.async.t_cljs$core$async18119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18121){
var self__ = this;
var _18121__$1 = this;
return self__.meta18120;
}));

(cljs.core.async.t_cljs$core$async18119.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18119.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18119.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18119.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18120","meta18120",1814073951,null)], null);
}));

(cljs.core.async.t_cljs$core$async18119.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18119");

(cljs.core.async.t_cljs$core$async18119.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18119");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18119.
 */
cljs.core.async.__GT_t_cljs$core$async18119 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18119(flag__$1,meta18120){
return (new cljs.core.async.t_cljs$core$async18119(flag__$1,meta18120));
});

}

return (new cljs.core.async.t_cljs$core$async18119(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18131 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18131 = (function (flag,cb,meta18132){
this.flag = flag;
this.cb = cb;
this.meta18132 = meta18132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18133,meta18132__$1){
var self__ = this;
var _18133__$1 = this;
return (new cljs.core.async.t_cljs$core$async18131(self__.flag,self__.cb,meta18132__$1));
}));

(cljs.core.async.t_cljs$core$async18131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18133){
var self__ = this;
var _18133__$1 = this;
return self__.meta18132;
}));

(cljs.core.async.t_cljs$core$async18131.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18131.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18131.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18131.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18132","meta18132",-830940449,null)], null);
}));

(cljs.core.async.t_cljs$core$async18131.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18131");

(cljs.core.async.t_cljs$core$async18131.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18131");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18131.
 */
cljs.core.async.__GT_t_cljs$core$async18131 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18131(flag__$1,cb__$1,meta18132){
return (new cljs.core.async.t_cljs$core$async18131(flag__$1,cb__$1,meta18132));
});

}

return (new cljs.core.async.t_cljs$core$async18131(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18145_SHARP_){
var G__18181 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18145_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18181) : fret.call(null,G__18181));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18146_SHARP_){
var G__18183 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18146_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18183) : fret.call(null,G__18183));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21907 = (i + (1));
i = G__21907;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21908 = arguments.length;
var i__5770__auto___21909 = (0);
while(true){
if((i__5770__auto___21909 < len__5769__auto___21908)){
args__5775__auto__.push((arguments[i__5770__auto___21909]));

var G__21911 = (i__5770__auto___21909 + (1));
i__5770__auto___21909 = G__21911;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18202){
var map__18203 = p__18202;
var map__18203__$1 = cljs.core.__destructure_map(map__18203);
var opts = map__18203__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18200){
var G__18201 = cljs.core.first(seq18200);
var seq18200__$1 = cljs.core.next(seq18200);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18201,seq18200__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__18208 = arguments.length;
switch (G__18208) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17711__auto___21917 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17712__auto__ = (function (){var switch__16956__auto__ = (function (state_18250){
var state_val_18251 = (state_18250[(1)]);
if((state_val_18251 === (7))){
var inst_18239 = (state_18250[(2)]);
var state_18250__$1 = state_18250;
var statearr_18261_21918 = state_18250__$1;
(statearr_18261_21918[(2)] = inst_18239);

(statearr_18261_21918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (1))){
var state_18250__$1 = state_18250;
var statearr_18262_21919 = state_18250__$1;
(statearr_18262_21919[(2)] = null);

(statearr_18262_21919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (4))){
var inst_18220 = (state_18250[(7)]);
var inst_18220__$1 = (state_18250[(2)]);
var inst_18223 = (inst_18220__$1 == null);
var state_18250__$1 = (function (){var statearr_18263 = state_18250;
(statearr_18263[(7)] = inst_18220__$1);

return statearr_18263;
})();
if(cljs.core.truth_(inst_18223)){
var statearr_18264_21921 = state_18250__$1;
(statearr_18264_21921[(1)] = (5));

} else {
var statearr_18265_21922 = state_18250__$1;
(statearr_18265_21922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (13))){
var state_18250__$1 = state_18250;
var statearr_18273_21924 = state_18250__$1;
(statearr_18273_21924[(2)] = null);

(statearr_18273_21924[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (6))){
var inst_18220 = (state_18250[(7)]);
var state_18250__$1 = state_18250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18250__$1,(11),to,inst_18220);
} else {
if((state_val_18251 === (3))){
var inst_18241 = (state_18250[(2)]);
var state_18250__$1 = state_18250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18250__$1,inst_18241);
} else {
if((state_val_18251 === (12))){
var state_18250__$1 = state_18250;
var statearr_18283_21925 = state_18250__$1;
(statearr_18283_21925[(2)] = null);

(statearr_18283_21925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (2))){
var state_18250__$1 = state_18250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18250__$1,(4),from);
} else {
if((state_val_18251 === (11))){
var inst_18232 = (state_18250[(2)]);
var state_18250__$1 = state_18250;
if(cljs.core.truth_(inst_18232)){
var statearr_18284_21926 = state_18250__$1;
(statearr_18284_21926[(1)] = (12));

} else {
var statearr_18286_21927 = state_18250__$1;
(statearr_18286_21927[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (9))){
var state_18250__$1 = state_18250;
var statearr_18289_21928 = state_18250__$1;
(statearr_18289_21928[(2)] = null);

(statearr_18289_21928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (5))){
var state_18250__$1 = state_18250;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18292_21929 = state_18250__$1;
(statearr_18292_21929[(1)] = (8));

} else {
var statearr_18293_21930 = state_18250__$1;
(statearr_18293_21930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (14))){
var inst_18237 = (state_18250[(2)]);
var state_18250__$1 = state_18250;
var statearr_18298_21931 = state_18250__$1;
(statearr_18298_21931[(2)] = inst_18237);

(statearr_18298_21931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (10))){
var inst_18229 = (state_18250[(2)]);
var state_18250__$1 = state_18250;
var statearr_18299_21932 = state_18250__$1;
(statearr_18299_21932[(2)] = inst_18229);

(statearr_18299_21932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (8))){
var inst_18226 = cljs.core.async.close_BANG_(to);
var state_18250__$1 = state_18250;
var statearr_18300_21933 = state_18250__$1;
(statearr_18300_21933[(2)] = inst_18226);

(statearr_18300_21933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16957__auto__ = null;
var cljs$core$async$state_machine__16957__auto____0 = (function (){
var statearr_18302 = [null,null,null,null,null,null,null,null];
(statearr_18302[(0)] = cljs$core$async$state_machine__16957__auto__);

(statearr_18302[(1)] = (1));

return statearr_18302;
});
var cljs$core$async$state_machine__16957__auto____1 = (function (state_18250){
while(true){
var ret_value__16958__auto__ = (function (){try{while(true){
var result__16959__auto__ = switch__16956__auto__(state_18250);
if(cljs.core.keyword_identical_QMARK_(result__16959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16959__auto__;
}
break;
}
}catch (e18306){var ex__16960__auto__ = e18306;
var statearr_18307_21934 = state_18250;
(statearr_18307_21934[(2)] = ex__16960__auto__);


if(cljs.core.seq((state_18250[(4)]))){
var statearr_18308_21936 = state_18250;
(statearr_18308_21936[(1)] = cljs.core.first((state_18250[(4)])));

} else {
throw ex__16960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21938 = state_18250;
state_18250 = G__21938;
continue;
} else {
return ret_value__16958__auto__;
}
break;
}
});
cljs$core$async$state_machine__16957__auto__ = function(state_18250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16957__auto____1.call(this,state_18250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16957__auto____0;
cljs$core$async$state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16957__auto____1;
return cljs$core$async$state_machine__16957__auto__;
})()
})();
var state__17713__auto__ = (function (){var statearr_18309 = f__17712__auto__();
(statearr_18309[(6)] = c__17711__auto___21917);

return statearr_18309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17713__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__18318){
var vec__18319 = p__18318;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18319,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18319,(1),null);
var job = vec__18319;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17711__auto___21939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17712__auto__ = (function (){var switch__16956__auto__ = (function (state_18326){
var state_val_18327 = (state_18326[(1)]);
if((state_val_18327 === (1))){
var state_18326__$1 = state_18326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18326__$1,(2),res,v);
} else {
if((state_val_18327 === (2))){
var inst_18323 = (state_18326[(2)]);
var inst_18324 = cljs.core.async.close_BANG_(res);
var state_18326__$1 = (function (){var statearr_18339 = state_18326;
(statearr_18339[(7)] = inst_18323);

return statearr_18339;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18326__$1,inst_18324);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____0 = (function (){
var statearr_18340 = [null,null,null,null,null,null,null,null];
(statearr_18340[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__);

(statearr_18340[(1)] = (1));

return statearr_18340;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____1 = (function (state_18326){
while(true){
var ret_value__16958__auto__ = (function (){try{while(true){
var result__16959__auto__ = switch__16956__auto__(state_18326);
if(cljs.core.keyword_identical_QMARK_(result__16959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16959__auto__;
}
break;
}
}catch (e18341){var ex__16960__auto__ = e18341;
var statearr_18342_21940 = state_18326;
(statearr_18342_21940[(2)] = ex__16960__auto__);


if(cljs.core.seq((state_18326[(4)]))){
var statearr_18343_21941 = state_18326;
(statearr_18343_21941[(1)] = cljs.core.first((state_18326[(4)])));

} else {
throw ex__16960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21942 = state_18326;
state_18326 = G__21942;
continue;
} else {
return ret_value__16958__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__ = function(state_18326){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____1.call(this,state_18326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__;
})()
})();
var state__17713__auto__ = (function (){var statearr_18345 = f__17712__auto__();
(statearr_18345[(6)] = c__17711__auto___21939);

return statearr_18345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17713__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__18347){
var vec__18349 = p__18347;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18349,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18349,(1),null);
var job = vec__18349;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___21944 = n;
var __21945 = (0);
while(true){
if((__21945 < n__5636__auto___21944)){
var G__18359_21946 = type;
var G__18359_21947__$1 = (((G__18359_21946 instanceof cljs.core.Keyword))?G__18359_21946.fqn:null);
switch (G__18359_21947__$1) {
case "compute":
var c__17711__auto___21949 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21945,c__17711__auto___21949,G__18359_21946,G__18359_21947__$1,n__5636__auto___21944,jobs,results,process__$1,async){
return (function (){
var f__17712__auto__ = (function (){var switch__16956__auto__ = ((function (__21945,c__17711__auto___21949,G__18359_21946,G__18359_21947__$1,n__5636__auto___21944,jobs,results,process__$1,async){
return (function (state_18375){
var state_val_18376 = (state_18375[(1)]);
if((state_val_18376 === (1))){
var state_18375__$1 = state_18375;
var statearr_18380_21950 = state_18375__$1;
(statearr_18380_21950[(2)] = null);

(statearr_18380_21950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18376 === (2))){
var state_18375__$1 = state_18375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18375__$1,(4),jobs);
} else {
if((state_val_18376 === (3))){
var inst_18373 = (state_18375[(2)]);
var state_18375__$1 = state_18375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18375__$1,inst_18373);
} else {
if((state_val_18376 === (4))){
var inst_18365 = (state_18375[(2)]);
var inst_18366 = process__$1(inst_18365);
var state_18375__$1 = state_18375;
if(cljs.core.truth_(inst_18366)){
var statearr_18382_21952 = state_18375__$1;
(statearr_18382_21952[(1)] = (5));

} else {
var statearr_18386_21953 = state_18375__$1;
(statearr_18386_21953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18376 === (5))){
var state_18375__$1 = state_18375;
var statearr_18388_21954 = state_18375__$1;
(statearr_18388_21954[(2)] = null);

(statearr_18388_21954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18376 === (6))){
var state_18375__$1 = state_18375;
var statearr_18389_21955 = state_18375__$1;
(statearr_18389_21955[(2)] = null);

(statearr_18389_21955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18376 === (7))){
var inst_18371 = (state_18375[(2)]);
var state_18375__$1 = state_18375;
var statearr_18390_21956 = state_18375__$1;
(statearr_18390_21956[(2)] = inst_18371);

(statearr_18390_21956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21945,c__17711__auto___21949,G__18359_21946,G__18359_21947__$1,n__5636__auto___21944,jobs,results,process__$1,async))
;
return ((function (__21945,switch__16956__auto__,c__17711__auto___21949,G__18359_21946,G__18359_21947__$1,n__5636__auto___21944,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____0 = (function (){
var statearr_18394 = [null,null,null,null,null,null,null];
(statearr_18394[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__);

(statearr_18394[(1)] = (1));

return statearr_18394;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____1 = (function (state_18375){
while(true){
var ret_value__16958__auto__ = (function (){try{while(true){
var result__16959__auto__ = switch__16956__auto__(state_18375);
if(cljs.core.keyword_identical_QMARK_(result__16959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16959__auto__;
}
break;
}
}catch (e18396){var ex__16960__auto__ = e18396;
var statearr_18397_21961 = state_18375;
(statearr_18397_21961[(2)] = ex__16960__auto__);


if(cljs.core.seq((state_18375[(4)]))){
var statearr_18399_21962 = state_18375;
(statearr_18399_21962[(1)] = cljs.core.first((state_18375[(4)])));

} else {
throw ex__16960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21963 = state_18375;
state_18375 = G__21963;
continue;
} else {
return ret_value__16958__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__ = function(state_18375){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____1.call(this,state_18375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__;
})()
;})(__21945,switch__16956__auto__,c__17711__auto___21949,G__18359_21946,G__18359_21947__$1,n__5636__auto___21944,jobs,results,process__$1,async))
})();
var state__17713__auto__ = (function (){var statearr_18402 = f__17712__auto__();
(statearr_18402[(6)] = c__17711__auto___21949);

return statearr_18402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17713__auto__);
});})(__21945,c__17711__auto___21949,G__18359_21946,G__18359_21947__$1,n__5636__auto___21944,jobs,results,process__$1,async))
);


break;
case "async":
var c__17711__auto___21967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21945,c__17711__auto___21967,G__18359_21946,G__18359_21947__$1,n__5636__auto___21944,jobs,results,process__$1,async){
return (function (){
var f__17712__auto__ = (function (){var switch__16956__auto__ = ((function (__21945,c__17711__auto___21967,G__18359_21946,G__18359_21947__$1,n__5636__auto___21944,jobs,results,process__$1,async){
return (function (state_18423){
var state_val_18424 = (state_18423[(1)]);
if((state_val_18424 === (1))){
var state_18423__$1 = state_18423;
var statearr_18427_21968 = state_18423__$1;
(statearr_18427_21968[(2)] = null);

(statearr_18427_21968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (2))){
var state_18423__$1 = state_18423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18423__$1,(4),jobs);
} else {
if((state_val_18424 === (3))){
var inst_18421 = (state_18423[(2)]);
var state_18423__$1 = state_18423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18423__$1,inst_18421);
} else {
if((state_val_18424 === (4))){
var inst_18409 = (state_18423[(2)]);
var inst_18413 = async(inst_18409);
var state_18423__$1 = state_18423;
if(cljs.core.truth_(inst_18413)){
var statearr_18430_21969 = state_18423__$1;
(statearr_18430_21969[(1)] = (5));

} else {
var statearr_18431_21970 = state_18423__$1;
(statearr_18431_21970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (5))){
var state_18423__$1 = state_18423;
var statearr_18432_21971 = state_18423__$1;
(statearr_18432_21971[(2)] = null);

(statearr_18432_21971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (6))){
var state_18423__$1 = state_18423;
var statearr_18433_21972 = state_18423__$1;
(statearr_18433_21972[(2)] = null);

(statearr_18433_21972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (7))){
var inst_18419 = (state_18423[(2)]);
var state_18423__$1 = state_18423;
var statearr_18434_21973 = state_18423__$1;
(statearr_18434_21973[(2)] = inst_18419);

(statearr_18434_21973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21945,c__17711__auto___21967,G__18359_21946,G__18359_21947__$1,n__5636__auto___21944,jobs,results,process__$1,async))
;
return ((function (__21945,switch__16956__auto__,c__17711__auto___21967,G__18359_21946,G__18359_21947__$1,n__5636__auto___21944,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____0 = (function (){
var statearr_18441 = [null,null,null,null,null,null,null];
(statearr_18441[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__);

(statearr_18441[(1)] = (1));

return statearr_18441;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____1 = (function (state_18423){
while(true){
var ret_value__16958__auto__ = (function (){try{while(true){
var result__16959__auto__ = switch__16956__auto__(state_18423);
if(cljs.core.keyword_identical_QMARK_(result__16959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16959__auto__;
}
break;
}
}catch (e18442){var ex__16960__auto__ = e18442;
var statearr_18445_21977 = state_18423;
(statearr_18445_21977[(2)] = ex__16960__auto__);


if(cljs.core.seq((state_18423[(4)]))){
var statearr_18449_21978 = state_18423;
(statearr_18449_21978[(1)] = cljs.core.first((state_18423[(4)])));

} else {
throw ex__16960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21979 = state_18423;
state_18423 = G__21979;
continue;
} else {
return ret_value__16958__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__ = function(state_18423){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____1.call(this,state_18423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__;
})()
;})(__21945,switch__16956__auto__,c__17711__auto___21967,G__18359_21946,G__18359_21947__$1,n__5636__auto___21944,jobs,results,process__$1,async))
})();
var state__17713__auto__ = (function (){var statearr_18451 = f__17712__auto__();
(statearr_18451[(6)] = c__17711__auto___21967);

return statearr_18451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17713__auto__);
});})(__21945,c__17711__auto___21967,G__18359_21946,G__18359_21947__$1,n__5636__auto___21944,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18359_21947__$1)].join('')));

}

var G__21980 = (__21945 + (1));
__21945 = G__21980;
continue;
} else {
}
break;
}

var c__17711__auto___21981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17712__auto__ = (function (){var switch__16956__auto__ = (function (state_18493){
var state_val_18494 = (state_18493[(1)]);
if((state_val_18494 === (7))){
var inst_18483 = (state_18493[(2)]);
var state_18493__$1 = state_18493;
var statearr_18502_21983 = state_18493__$1;
(statearr_18502_21983[(2)] = inst_18483);

(statearr_18502_21983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18494 === (1))){
var state_18493__$1 = state_18493;
var statearr_18504_21985 = state_18493__$1;
(statearr_18504_21985[(2)] = null);

(statearr_18504_21985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18494 === (4))){
var inst_18463 = (state_18493[(7)]);
var inst_18463__$1 = (state_18493[(2)]);
var inst_18464 = (inst_18463__$1 == null);
var state_18493__$1 = (function (){var statearr_18511 = state_18493;
(statearr_18511[(7)] = inst_18463__$1);

return statearr_18511;
})();
if(cljs.core.truth_(inst_18464)){
var statearr_18512_21986 = state_18493__$1;
(statearr_18512_21986[(1)] = (5));

} else {
var statearr_18513_21987 = state_18493__$1;
(statearr_18513_21987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18494 === (6))){
var inst_18472 = (state_18493[(8)]);
var inst_18463 = (state_18493[(7)]);
var inst_18472__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18474 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18475 = [inst_18463,inst_18472__$1];
var inst_18476 = (new cljs.core.PersistentVector(null,2,(5),inst_18474,inst_18475,null));
var state_18493__$1 = (function (){var statearr_18519 = state_18493;
(statearr_18519[(8)] = inst_18472__$1);

return statearr_18519;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18493__$1,(8),jobs,inst_18476);
} else {
if((state_val_18494 === (3))){
var inst_18489 = (state_18493[(2)]);
var state_18493__$1 = state_18493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18493__$1,inst_18489);
} else {
if((state_val_18494 === (2))){
var state_18493__$1 = state_18493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18493__$1,(4),from);
} else {
if((state_val_18494 === (9))){
var inst_18480 = (state_18493[(2)]);
var state_18493__$1 = (function (){var statearr_18520 = state_18493;
(statearr_18520[(9)] = inst_18480);

return statearr_18520;
})();
var statearr_18533_21988 = state_18493__$1;
(statearr_18533_21988[(2)] = null);

(statearr_18533_21988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18494 === (5))){
var inst_18466 = cljs.core.async.close_BANG_(jobs);
var state_18493__$1 = state_18493;
var statearr_18536_21989 = state_18493__$1;
(statearr_18536_21989[(2)] = inst_18466);

(statearr_18536_21989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18494 === (8))){
var inst_18472 = (state_18493[(8)]);
var inst_18478 = (state_18493[(2)]);
var state_18493__$1 = (function (){var statearr_18538 = state_18493;
(statearr_18538[(10)] = inst_18478);

return statearr_18538;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18493__$1,(9),results,inst_18472);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____0 = (function (){
var statearr_18543 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18543[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__);

(statearr_18543[(1)] = (1));

return statearr_18543;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____1 = (function (state_18493){
while(true){
var ret_value__16958__auto__ = (function (){try{while(true){
var result__16959__auto__ = switch__16956__auto__(state_18493);
if(cljs.core.keyword_identical_QMARK_(result__16959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16959__auto__;
}
break;
}
}catch (e18550){var ex__16960__auto__ = e18550;
var statearr_18551_21990 = state_18493;
(statearr_18551_21990[(2)] = ex__16960__auto__);


if(cljs.core.seq((state_18493[(4)]))){
var statearr_18552_21991 = state_18493;
(statearr_18552_21991[(1)] = cljs.core.first((state_18493[(4)])));

} else {
throw ex__16960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21992 = state_18493;
state_18493 = G__21992;
continue;
} else {
return ret_value__16958__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__ = function(state_18493){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____1.call(this,state_18493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__;
})()
})();
var state__17713__auto__ = (function (){var statearr_18558 = f__17712__auto__();
(statearr_18558[(6)] = c__17711__auto___21981);

return statearr_18558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17713__auto__);
}));


var c__17711__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17712__auto__ = (function (){var switch__16956__auto__ = (function (state_18621){
var state_val_18622 = (state_18621[(1)]);
if((state_val_18622 === (7))){
var inst_18617 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
var statearr_18625_22001 = state_18621__$1;
(statearr_18625_22001[(2)] = inst_18617);

(statearr_18625_22001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (20))){
var state_18621__$1 = state_18621;
var statearr_18630_22002 = state_18621__$1;
(statearr_18630_22002[(2)] = null);

(statearr_18630_22002[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (1))){
var state_18621__$1 = state_18621;
var statearr_18634_22003 = state_18621__$1;
(statearr_18634_22003[(2)] = null);

(statearr_18634_22003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (4))){
var inst_18567 = (state_18621[(7)]);
var inst_18567__$1 = (state_18621[(2)]);
var inst_18568 = (inst_18567__$1 == null);
var state_18621__$1 = (function (){var statearr_18642 = state_18621;
(statearr_18642[(7)] = inst_18567__$1);

return statearr_18642;
})();
if(cljs.core.truth_(inst_18568)){
var statearr_18643_22004 = state_18621__$1;
(statearr_18643_22004[(1)] = (5));

} else {
var statearr_18644_22005 = state_18621__$1;
(statearr_18644_22005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (15))){
var inst_18588 = (state_18621[(8)]);
var state_18621__$1 = state_18621;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18621__$1,(18),to,inst_18588);
} else {
if((state_val_18622 === (21))){
var inst_18610 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
var statearr_18646_22009 = state_18621__$1;
(statearr_18646_22009[(2)] = inst_18610);

(statearr_18646_22009[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (13))){
var inst_18614 = (state_18621[(2)]);
var state_18621__$1 = (function (){var statearr_18647 = state_18621;
(statearr_18647[(9)] = inst_18614);

return statearr_18647;
})();
var statearr_18650_22010 = state_18621__$1;
(statearr_18650_22010[(2)] = null);

(statearr_18650_22010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (6))){
var inst_18567 = (state_18621[(7)]);
var state_18621__$1 = state_18621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18621__$1,(11),inst_18567);
} else {
if((state_val_18622 === (17))){
var inst_18598 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
if(cljs.core.truth_(inst_18598)){
var statearr_18652_22015 = state_18621__$1;
(statearr_18652_22015[(1)] = (19));

} else {
var statearr_18653_22019 = state_18621__$1;
(statearr_18653_22019[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (3))){
var inst_18619 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18621__$1,inst_18619);
} else {
if((state_val_18622 === (12))){
var inst_18584 = (state_18621[(10)]);
var state_18621__$1 = state_18621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18621__$1,(14),inst_18584);
} else {
if((state_val_18622 === (2))){
var state_18621__$1 = state_18621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18621__$1,(4),results);
} else {
if((state_val_18622 === (19))){
var state_18621__$1 = state_18621;
var statearr_18658_22023 = state_18621__$1;
(statearr_18658_22023[(2)] = null);

(statearr_18658_22023[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (11))){
var inst_18584 = (state_18621[(2)]);
var state_18621__$1 = (function (){var statearr_18659 = state_18621;
(statearr_18659[(10)] = inst_18584);

return statearr_18659;
})();
var statearr_18660_22028 = state_18621__$1;
(statearr_18660_22028[(2)] = null);

(statearr_18660_22028[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (9))){
var state_18621__$1 = state_18621;
var statearr_18665_22029 = state_18621__$1;
(statearr_18665_22029[(2)] = null);

(statearr_18665_22029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (5))){
var state_18621__$1 = state_18621;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18669_22030 = state_18621__$1;
(statearr_18669_22030[(1)] = (8));

} else {
var statearr_18678_22031 = state_18621__$1;
(statearr_18678_22031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (14))){
var inst_18588 = (state_18621[(8)]);
var inst_18591 = (state_18621[(11)]);
var inst_18588__$1 = (state_18621[(2)]);
var inst_18590 = (inst_18588__$1 == null);
var inst_18591__$1 = cljs.core.not(inst_18590);
var state_18621__$1 = (function (){var statearr_18679 = state_18621;
(statearr_18679[(8)] = inst_18588__$1);

(statearr_18679[(11)] = inst_18591__$1);

return statearr_18679;
})();
if(inst_18591__$1){
var statearr_18680_22036 = state_18621__$1;
(statearr_18680_22036[(1)] = (15));

} else {
var statearr_18682_22037 = state_18621__$1;
(statearr_18682_22037[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (16))){
var inst_18591 = (state_18621[(11)]);
var state_18621__$1 = state_18621;
var statearr_18683_22041 = state_18621__$1;
(statearr_18683_22041[(2)] = inst_18591);

(statearr_18683_22041[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (10))){
var inst_18575 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
var statearr_18684_22042 = state_18621__$1;
(statearr_18684_22042[(2)] = inst_18575);

(statearr_18684_22042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (18))){
var inst_18595 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
var statearr_18685_22043 = state_18621__$1;
(statearr_18685_22043[(2)] = inst_18595);

(statearr_18685_22043[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (8))){
var inst_18572 = cljs.core.async.close_BANG_(to);
var state_18621__$1 = state_18621;
var statearr_18688_22044 = state_18621__$1;
(statearr_18688_22044[(2)] = inst_18572);

(statearr_18688_22044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____0 = (function (){
var statearr_18689 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18689[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__);

(statearr_18689[(1)] = (1));

return statearr_18689;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____1 = (function (state_18621){
while(true){
var ret_value__16958__auto__ = (function (){try{while(true){
var result__16959__auto__ = switch__16956__auto__(state_18621);
if(cljs.core.keyword_identical_QMARK_(result__16959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16959__auto__;
}
break;
}
}catch (e18692){var ex__16960__auto__ = e18692;
var statearr_18693_22048 = state_18621;
(statearr_18693_22048[(2)] = ex__16960__auto__);


if(cljs.core.seq((state_18621[(4)]))){
var statearr_18702_22049 = state_18621;
(statearr_18702_22049[(1)] = cljs.core.first((state_18621[(4)])));

} else {
throw ex__16960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22053 = state_18621;
state_18621 = G__22053;
continue;
} else {
return ret_value__16958__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__ = function(state_18621){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____1.call(this,state_18621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16957__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16957__auto__;
})()
})();
var state__17713__auto__ = (function (){var statearr_18703 = f__17712__auto__();
(statearr_18703[(6)] = c__17711__auto__);

return statearr_18703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17713__auto__);
}));

return c__17711__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18712 = arguments.length;
switch (G__18712) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__18715 = arguments.length;
switch (G__18715) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__18729 = arguments.length;
switch (G__18729) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17711__auto___22063 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17712__auto__ = (function (){var switch__16956__auto__ = (function (state_18768){
var state_val_18769 = (state_18768[(1)]);
if((state_val_18769 === (7))){
var inst_18764 = (state_18768[(2)]);
var state_18768__$1 = state_18768;
var statearr_18771_22064 = state_18768__$1;
(statearr_18771_22064[(2)] = inst_18764);

(statearr_18771_22064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18769 === (1))){
var state_18768__$1 = state_18768;
var statearr_18772_22065 = state_18768__$1;
(statearr_18772_22065[(2)] = null);

(statearr_18772_22065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18769 === (4))){
var inst_18745 = (state_18768[(7)]);
var inst_18745__$1 = (state_18768[(2)]);
var inst_18746 = (inst_18745__$1 == null);
var state_18768__$1 = (function (){var statearr_18773 = state_18768;
(statearr_18773[(7)] = inst_18745__$1);

return statearr_18773;
})();
if(cljs.core.truth_(inst_18746)){
var statearr_18774_22066 = state_18768__$1;
(statearr_18774_22066[(1)] = (5));

} else {
var statearr_18776_22067 = state_18768__$1;
(statearr_18776_22067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18769 === (13))){
var state_18768__$1 = state_18768;
var statearr_18777_22068 = state_18768__$1;
(statearr_18777_22068[(2)] = null);

(statearr_18777_22068[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18769 === (6))){
var inst_18745 = (state_18768[(7)]);
var inst_18751 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18745) : p.call(null,inst_18745));
var state_18768__$1 = state_18768;
if(cljs.core.truth_(inst_18751)){
var statearr_18778_22069 = state_18768__$1;
(statearr_18778_22069[(1)] = (9));

} else {
var statearr_18779_22070 = state_18768__$1;
(statearr_18779_22070[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18769 === (3))){
var inst_18766 = (state_18768[(2)]);
var state_18768__$1 = state_18768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18768__$1,inst_18766);
} else {
if((state_val_18769 === (12))){
var state_18768__$1 = state_18768;
var statearr_18785_22071 = state_18768__$1;
(statearr_18785_22071[(2)] = null);

(statearr_18785_22071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18769 === (2))){
var state_18768__$1 = state_18768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18768__$1,(4),ch);
} else {
if((state_val_18769 === (11))){
var inst_18745 = (state_18768[(7)]);
var inst_18755 = (state_18768[(2)]);
var state_18768__$1 = state_18768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18768__$1,(8),inst_18755,inst_18745);
} else {
if((state_val_18769 === (9))){
var state_18768__$1 = state_18768;
var statearr_18794_22072 = state_18768__$1;
(statearr_18794_22072[(2)] = tc);

(statearr_18794_22072[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18769 === (5))){
var inst_18748 = cljs.core.async.close_BANG_(tc);
var inst_18749 = cljs.core.async.close_BANG_(fc);
var state_18768__$1 = (function (){var statearr_18795 = state_18768;
(statearr_18795[(8)] = inst_18748);

return statearr_18795;
})();
var statearr_18796_22073 = state_18768__$1;
(statearr_18796_22073[(2)] = inst_18749);

(statearr_18796_22073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18769 === (14))){
var inst_18762 = (state_18768[(2)]);
var state_18768__$1 = state_18768;
var statearr_18798_22074 = state_18768__$1;
(statearr_18798_22074[(2)] = inst_18762);

(statearr_18798_22074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18769 === (10))){
var state_18768__$1 = state_18768;
var statearr_18799_22075 = state_18768__$1;
(statearr_18799_22075[(2)] = fc);

(statearr_18799_22075[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18769 === (8))){
var inst_18757 = (state_18768[(2)]);
var state_18768__$1 = state_18768;
if(cljs.core.truth_(inst_18757)){
var statearr_18801_22076 = state_18768__$1;
(statearr_18801_22076[(1)] = (12));

} else {
var statearr_18802_22077 = state_18768__$1;
(statearr_18802_22077[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16957__auto__ = null;
var cljs$core$async$state_machine__16957__auto____0 = (function (){
var statearr_18803 = [null,null,null,null,null,null,null,null,null];
(statearr_18803[(0)] = cljs$core$async$state_machine__16957__auto__);

(statearr_18803[(1)] = (1));

return statearr_18803;
});
var cljs$core$async$state_machine__16957__auto____1 = (function (state_18768){
while(true){
var ret_value__16958__auto__ = (function (){try{while(true){
var result__16959__auto__ = switch__16956__auto__(state_18768);
if(cljs.core.keyword_identical_QMARK_(result__16959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16959__auto__;
}
break;
}
}catch (e18812){var ex__16960__auto__ = e18812;
var statearr_18813_22082 = state_18768;
(statearr_18813_22082[(2)] = ex__16960__auto__);


if(cljs.core.seq((state_18768[(4)]))){
var statearr_18814_22083 = state_18768;
(statearr_18814_22083[(1)] = cljs.core.first((state_18768[(4)])));

} else {
throw ex__16960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22084 = state_18768;
state_18768 = G__22084;
continue;
} else {
return ret_value__16958__auto__;
}
break;
}
});
cljs$core$async$state_machine__16957__auto__ = function(state_18768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16957__auto____1.call(this,state_18768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16957__auto____0;
cljs$core$async$state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16957__auto____1;
return cljs$core$async$state_machine__16957__auto__;
})()
})();
var state__17713__auto__ = (function (){var statearr_18816 = f__17712__auto__();
(statearr_18816[(6)] = c__17711__auto___22063);

return statearr_18816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17713__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17711__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17712__auto__ = (function (){var switch__16956__auto__ = (function (state_18843){
var state_val_18844 = (state_18843[(1)]);
if((state_val_18844 === (7))){
var inst_18835 = (state_18843[(2)]);
var state_18843__$1 = state_18843;
var statearr_18847_22085 = state_18843__$1;
(statearr_18847_22085[(2)] = inst_18835);

(statearr_18847_22085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18844 === (1))){
var inst_18818 = init;
var inst_18819 = inst_18818;
var state_18843__$1 = (function (){var statearr_18848 = state_18843;
(statearr_18848[(7)] = inst_18819);

return statearr_18848;
})();
var statearr_18850_22089 = state_18843__$1;
(statearr_18850_22089[(2)] = null);

(statearr_18850_22089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18844 === (4))){
var inst_18822 = (state_18843[(8)]);
var inst_18822__$1 = (state_18843[(2)]);
var inst_18823 = (inst_18822__$1 == null);
var state_18843__$1 = (function (){var statearr_18851 = state_18843;
(statearr_18851[(8)] = inst_18822__$1);

return statearr_18851;
})();
if(cljs.core.truth_(inst_18823)){
var statearr_18852_22090 = state_18843__$1;
(statearr_18852_22090[(1)] = (5));

} else {
var statearr_18853_22091 = state_18843__$1;
(statearr_18853_22091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18844 === (6))){
var inst_18822 = (state_18843[(8)]);
var inst_18819 = (state_18843[(7)]);
var inst_18826 = (state_18843[(9)]);
var inst_18826__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18819,inst_18822) : f.call(null,inst_18819,inst_18822));
var inst_18827 = cljs.core.reduced_QMARK_(inst_18826__$1);
var state_18843__$1 = (function (){var statearr_18859 = state_18843;
(statearr_18859[(9)] = inst_18826__$1);

return statearr_18859;
})();
if(inst_18827){
var statearr_18860_22092 = state_18843__$1;
(statearr_18860_22092[(1)] = (8));

} else {
var statearr_18862_22093 = state_18843__$1;
(statearr_18862_22093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18844 === (3))){
var inst_18837 = (state_18843[(2)]);
var state_18843__$1 = state_18843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18843__$1,inst_18837);
} else {
if((state_val_18844 === (2))){
var state_18843__$1 = state_18843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18843__$1,(4),ch);
} else {
if((state_val_18844 === (9))){
var inst_18826 = (state_18843[(9)]);
var inst_18819 = inst_18826;
var state_18843__$1 = (function (){var statearr_18863 = state_18843;
(statearr_18863[(7)] = inst_18819);

return statearr_18863;
})();
var statearr_18868_22094 = state_18843__$1;
(statearr_18868_22094[(2)] = null);

(statearr_18868_22094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18844 === (5))){
var inst_18819 = (state_18843[(7)]);
var state_18843__$1 = state_18843;
var statearr_18869_22095 = state_18843__$1;
(statearr_18869_22095[(2)] = inst_18819);

(statearr_18869_22095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18844 === (10))){
var inst_18833 = (state_18843[(2)]);
var state_18843__$1 = state_18843;
var statearr_18872_22096 = state_18843__$1;
(statearr_18872_22096[(2)] = inst_18833);

(statearr_18872_22096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18844 === (8))){
var inst_18826 = (state_18843[(9)]);
var inst_18829 = cljs.core.deref(inst_18826);
var state_18843__$1 = state_18843;
var statearr_18873_22099 = state_18843__$1;
(statearr_18873_22099[(2)] = inst_18829);

(statearr_18873_22099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__16957__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16957__auto____0 = (function (){
var statearr_18876 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18876[(0)] = cljs$core$async$reduce_$_state_machine__16957__auto__);

(statearr_18876[(1)] = (1));

return statearr_18876;
});
var cljs$core$async$reduce_$_state_machine__16957__auto____1 = (function (state_18843){
while(true){
var ret_value__16958__auto__ = (function (){try{while(true){
var result__16959__auto__ = switch__16956__auto__(state_18843);
if(cljs.core.keyword_identical_QMARK_(result__16959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16959__auto__;
}
break;
}
}catch (e18877){var ex__16960__auto__ = e18877;
var statearr_18878_22103 = state_18843;
(statearr_18878_22103[(2)] = ex__16960__auto__);


if(cljs.core.seq((state_18843[(4)]))){
var statearr_18882_22105 = state_18843;
(statearr_18882_22105[(1)] = cljs.core.first((state_18843[(4)])));

} else {
throw ex__16960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22106 = state_18843;
state_18843 = G__22106;
continue;
} else {
return ret_value__16958__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16957__auto__ = function(state_18843){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16957__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16957__auto____1.call(this,state_18843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16957__auto____0;
cljs$core$async$reduce_$_state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16957__auto____1;
return cljs$core$async$reduce_$_state_machine__16957__auto__;
})()
})();
var state__17713__auto__ = (function (){var statearr_18884 = f__17712__auto__();
(statearr_18884[(6)] = c__17711__auto__);

return statearr_18884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17713__auto__);
}));

return c__17711__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17711__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17712__auto__ = (function (){var switch__16956__auto__ = (function (state_18894){
var state_val_18895 = (state_18894[(1)]);
if((state_val_18895 === (1))){
var inst_18889 = cljs.core.async.reduce(f__$1,init,ch);
var state_18894__$1 = state_18894;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18894__$1,(2),inst_18889);
} else {
if((state_val_18895 === (2))){
var inst_18891 = (state_18894[(2)]);
var inst_18892 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18891) : f__$1.call(null,inst_18891));
var state_18894__$1 = state_18894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18894__$1,inst_18892);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__16957__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16957__auto____0 = (function (){
var statearr_18903 = [null,null,null,null,null,null,null];
(statearr_18903[(0)] = cljs$core$async$transduce_$_state_machine__16957__auto__);

(statearr_18903[(1)] = (1));

return statearr_18903;
});
var cljs$core$async$transduce_$_state_machine__16957__auto____1 = (function (state_18894){
while(true){
var ret_value__16958__auto__ = (function (){try{while(true){
var result__16959__auto__ = switch__16956__auto__(state_18894);
if(cljs.core.keyword_identical_QMARK_(result__16959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16959__auto__;
}
break;
}
}catch (e18906){var ex__16960__auto__ = e18906;
var statearr_18907_22110 = state_18894;
(statearr_18907_22110[(2)] = ex__16960__auto__);


if(cljs.core.seq((state_18894[(4)]))){
var statearr_18908_22111 = state_18894;
(statearr_18908_22111[(1)] = cljs.core.first((state_18894[(4)])));

} else {
throw ex__16960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22112 = state_18894;
state_18894 = G__22112;
continue;
} else {
return ret_value__16958__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16957__auto__ = function(state_18894){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16957__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16957__auto____1.call(this,state_18894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16957__auto____0;
cljs$core$async$transduce_$_state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16957__auto____1;
return cljs$core$async$transduce_$_state_machine__16957__auto__;
})()
})();
var state__17713__auto__ = (function (){var statearr_18911 = f__17712__auto__();
(statearr_18911[(6)] = c__17711__auto__);

return statearr_18911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17713__auto__);
}));

return c__17711__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__18918 = arguments.length;
switch (G__18918) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17711__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17712__auto__ = (function (){var switch__16956__auto__ = (function (state_18950){
var state_val_18952 = (state_18950[(1)]);
if((state_val_18952 === (7))){
var inst_18931 = (state_18950[(2)]);
var state_18950__$1 = state_18950;
var statearr_18955_22114 = state_18950__$1;
(statearr_18955_22114[(2)] = inst_18931);

(statearr_18955_22114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18952 === (1))){
var inst_18922 = cljs.core.seq(coll);
var inst_18923 = inst_18922;
var state_18950__$1 = (function (){var statearr_18956 = state_18950;
(statearr_18956[(7)] = inst_18923);

return statearr_18956;
})();
var statearr_18957_22116 = state_18950__$1;
(statearr_18957_22116[(2)] = null);

(statearr_18957_22116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18952 === (4))){
var inst_18923 = (state_18950[(7)]);
var inst_18928 = cljs.core.first(inst_18923);
var state_18950__$1 = state_18950;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18950__$1,(7),ch,inst_18928);
} else {
if((state_val_18952 === (13))){
var inst_18943 = (state_18950[(2)]);
var state_18950__$1 = state_18950;
var statearr_18960_22120 = state_18950__$1;
(statearr_18960_22120[(2)] = inst_18943);

(statearr_18960_22120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18952 === (6))){
var inst_18934 = (state_18950[(2)]);
var state_18950__$1 = state_18950;
if(cljs.core.truth_(inst_18934)){
var statearr_18961_22121 = state_18950__$1;
(statearr_18961_22121[(1)] = (8));

} else {
var statearr_18968_22122 = state_18950__$1;
(statearr_18968_22122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18952 === (3))){
var inst_18947 = (state_18950[(2)]);
var state_18950__$1 = state_18950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18950__$1,inst_18947);
} else {
if((state_val_18952 === (12))){
var state_18950__$1 = state_18950;
var statearr_18973_22123 = state_18950__$1;
(statearr_18973_22123[(2)] = null);

(statearr_18973_22123[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18952 === (2))){
var inst_18923 = (state_18950[(7)]);
var state_18950__$1 = state_18950;
if(cljs.core.truth_(inst_18923)){
var statearr_18974_22126 = state_18950__$1;
(statearr_18974_22126[(1)] = (4));

} else {
var statearr_18975_22127 = state_18950__$1;
(statearr_18975_22127[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18952 === (11))){
var inst_18940 = cljs.core.async.close_BANG_(ch);
var state_18950__$1 = state_18950;
var statearr_18980_22130 = state_18950__$1;
(statearr_18980_22130[(2)] = inst_18940);

(statearr_18980_22130[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18952 === (9))){
var state_18950__$1 = state_18950;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18986_22131 = state_18950__$1;
(statearr_18986_22131[(1)] = (11));

} else {
var statearr_18993_22132 = state_18950__$1;
(statearr_18993_22132[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18952 === (5))){
var inst_18923 = (state_18950[(7)]);
var state_18950__$1 = state_18950;
var statearr_18995_22133 = state_18950__$1;
(statearr_18995_22133[(2)] = inst_18923);

(statearr_18995_22133[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18952 === (10))){
var inst_18945 = (state_18950[(2)]);
var state_18950__$1 = state_18950;
var statearr_18996_22137 = state_18950__$1;
(statearr_18996_22137[(2)] = inst_18945);

(statearr_18996_22137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18952 === (8))){
var inst_18923 = (state_18950[(7)]);
var inst_18936 = cljs.core.next(inst_18923);
var inst_18923__$1 = inst_18936;
var state_18950__$1 = (function (){var statearr_18997 = state_18950;
(statearr_18997[(7)] = inst_18923__$1);

return statearr_18997;
})();
var statearr_18998_22141 = state_18950__$1;
(statearr_18998_22141[(2)] = null);

(statearr_18998_22141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16957__auto__ = null;
var cljs$core$async$state_machine__16957__auto____0 = (function (){
var statearr_19003 = [null,null,null,null,null,null,null,null];
(statearr_19003[(0)] = cljs$core$async$state_machine__16957__auto__);

(statearr_19003[(1)] = (1));

return statearr_19003;
});
var cljs$core$async$state_machine__16957__auto____1 = (function (state_18950){
while(true){
var ret_value__16958__auto__ = (function (){try{while(true){
var result__16959__auto__ = switch__16956__auto__(state_18950);
if(cljs.core.keyword_identical_QMARK_(result__16959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16959__auto__;
}
break;
}
}catch (e19008){var ex__16960__auto__ = e19008;
var statearr_19009_22146 = state_18950;
(statearr_19009_22146[(2)] = ex__16960__auto__);


if(cljs.core.seq((state_18950[(4)]))){
var statearr_19010_22153 = state_18950;
(statearr_19010_22153[(1)] = cljs.core.first((state_18950[(4)])));

} else {
throw ex__16960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22154 = state_18950;
state_18950 = G__22154;
continue;
} else {
return ret_value__16958__auto__;
}
break;
}
});
cljs$core$async$state_machine__16957__auto__ = function(state_18950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16957__auto____1.call(this,state_18950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16957__auto____0;
cljs$core$async$state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16957__auto____1;
return cljs$core$async$state_machine__16957__auto__;
})()
})();
var state__17713__auto__ = (function (){var statearr_19014 = f__17712__auto__();
(statearr_19014[(6)] = c__17711__auto__);

return statearr_19014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17713__auto__);
}));

return c__17711__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__19021 = arguments.length;
switch (G__19021) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_22156 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_22156(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_22157 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_22157(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_22158 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_22158(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_22165 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_22165(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19099 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19099 = (function (ch,cs,meta19100){
this.ch = ch;
this.cs = cs;
this.meta19100 = meta19100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19101,meta19100__$1){
var self__ = this;
var _19101__$1 = this;
return (new cljs.core.async.t_cljs$core$async19099(self__.ch,self__.cs,meta19100__$1));
}));

(cljs.core.async.t_cljs$core$async19099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19101){
var self__ = this;
var _19101__$1 = this;
return self__.meta19100;
}));

(cljs.core.async.t_cljs$core$async19099.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19099.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19099.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19099.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async19099.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async19099.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async19099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19100","meta19100",1847779546,null)], null);
}));

(cljs.core.async.t_cljs$core$async19099.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19099");

(cljs.core.async.t_cljs$core$async19099.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19099");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19099.
 */
cljs.core.async.__GT_t_cljs$core$async19099 = (function cljs$core$async$mult_$___GT_t_cljs$core$async19099(ch__$1,cs__$1,meta19100){
return (new cljs.core.async.t_cljs$core$async19099(ch__$1,cs__$1,meta19100));
});

}

return (new cljs.core.async.t_cljs$core$async19099(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17711__auto___22166 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17712__auto__ = (function (){var switch__16956__auto__ = (function (state_19344){
var state_val_19345 = (state_19344[(1)]);
if((state_val_19345 === (7))){
var inst_19317 = (state_19344[(2)]);
var state_19344__$1 = state_19344;
var statearr_19354_22167 = state_19344__$1;
(statearr_19354_22167[(2)] = inst_19317);

(statearr_19354_22167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (20))){
var inst_19194 = (state_19344[(7)]);
var inst_19208 = cljs.core.first(inst_19194);
var inst_19209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19208,(0),null);
var inst_19210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19208,(1),null);
var state_19344__$1 = (function (){var statearr_19360 = state_19344;
(statearr_19360[(8)] = inst_19209);

return statearr_19360;
})();
if(cljs.core.truth_(inst_19210)){
var statearr_19365_22174 = state_19344__$1;
(statearr_19365_22174[(1)] = (22));

} else {
var statearr_19366_22175 = state_19344__$1;
(statearr_19366_22175[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (27))){
var inst_19253 = (state_19344[(9)]);
var inst_19244 = (state_19344[(10)]);
var inst_19246 = (state_19344[(11)]);
var inst_19151 = (state_19344[(12)]);
var inst_19253__$1 = cljs.core._nth(inst_19244,inst_19246);
var inst_19256 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19253__$1,inst_19151,done);
var state_19344__$1 = (function (){var statearr_19371 = state_19344;
(statearr_19371[(9)] = inst_19253__$1);

return statearr_19371;
})();
if(cljs.core.truth_(inst_19256)){
var statearr_19372_22176 = state_19344__$1;
(statearr_19372_22176[(1)] = (30));

} else {
var statearr_19377_22177 = state_19344__$1;
(statearr_19377_22177[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (1))){
var state_19344__$1 = state_19344;
var statearr_19380_22178 = state_19344__$1;
(statearr_19380_22178[(2)] = null);

(statearr_19380_22178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (24))){
var inst_19194 = (state_19344[(7)]);
var inst_19217 = (state_19344[(2)]);
var inst_19219 = cljs.core.next(inst_19194);
var inst_19163 = inst_19219;
var inst_19164 = null;
var inst_19165 = (0);
var inst_19166 = (0);
var state_19344__$1 = (function (){var statearr_19389 = state_19344;
(statearr_19389[(13)] = inst_19165);

(statearr_19389[(14)] = inst_19164);

(statearr_19389[(15)] = inst_19166);

(statearr_19389[(16)] = inst_19163);

(statearr_19389[(17)] = inst_19217);

return statearr_19389;
})();
var statearr_19391_22179 = state_19344__$1;
(statearr_19391_22179[(2)] = null);

(statearr_19391_22179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (39))){
var state_19344__$1 = state_19344;
var statearr_19398_22180 = state_19344__$1;
(statearr_19398_22180[(2)] = null);

(statearr_19398_22180[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (4))){
var inst_19151 = (state_19344[(12)]);
var inst_19151__$1 = (state_19344[(2)]);
var inst_19153 = (inst_19151__$1 == null);
var state_19344__$1 = (function (){var statearr_19400 = state_19344;
(statearr_19400[(12)] = inst_19151__$1);

return statearr_19400;
})();
if(cljs.core.truth_(inst_19153)){
var statearr_19402_22182 = state_19344__$1;
(statearr_19402_22182[(1)] = (5));

} else {
var statearr_19405_22183 = state_19344__$1;
(statearr_19405_22183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (15))){
var inst_19165 = (state_19344[(13)]);
var inst_19164 = (state_19344[(14)]);
var inst_19166 = (state_19344[(15)]);
var inst_19163 = (state_19344[(16)]);
var inst_19187 = (state_19344[(2)]);
var inst_19190 = (inst_19166 + (1));
var tmp19394 = inst_19165;
var tmp19395 = inst_19164;
var tmp19396 = inst_19163;
var inst_19163__$1 = tmp19396;
var inst_19164__$1 = tmp19395;
var inst_19165__$1 = tmp19394;
var inst_19166__$1 = inst_19190;
var state_19344__$1 = (function (){var statearr_19407 = state_19344;
(statearr_19407[(13)] = inst_19165__$1);

(statearr_19407[(14)] = inst_19164__$1);

(statearr_19407[(15)] = inst_19166__$1);

(statearr_19407[(18)] = inst_19187);

(statearr_19407[(16)] = inst_19163__$1);

return statearr_19407;
})();
var statearr_19414_22185 = state_19344__$1;
(statearr_19414_22185[(2)] = null);

(statearr_19414_22185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (21))){
var inst_19222 = (state_19344[(2)]);
var state_19344__$1 = state_19344;
var statearr_19420_22187 = state_19344__$1;
(statearr_19420_22187[(2)] = inst_19222);

(statearr_19420_22187[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (31))){
var inst_19253 = (state_19344[(9)]);
var inst_19261 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19253);
var state_19344__$1 = state_19344;
var statearr_19433_22188 = state_19344__$1;
(statearr_19433_22188[(2)] = inst_19261);

(statearr_19433_22188[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (32))){
var inst_19243 = (state_19344[(19)]);
var inst_19244 = (state_19344[(10)]);
var inst_19246 = (state_19344[(11)]);
var inst_19245 = (state_19344[(20)]);
var inst_19263 = (state_19344[(2)]);
var inst_19264 = (inst_19246 + (1));
var tmp19416 = inst_19243;
var tmp19417 = inst_19244;
var tmp19418 = inst_19245;
var inst_19243__$1 = tmp19416;
var inst_19244__$1 = tmp19417;
var inst_19245__$1 = tmp19418;
var inst_19246__$1 = inst_19264;
var state_19344__$1 = (function (){var statearr_19445 = state_19344;
(statearr_19445[(19)] = inst_19243__$1);

(statearr_19445[(10)] = inst_19244__$1);

(statearr_19445[(11)] = inst_19246__$1);

(statearr_19445[(21)] = inst_19263);

(statearr_19445[(20)] = inst_19245__$1);

return statearr_19445;
})();
var statearr_19454_22195 = state_19344__$1;
(statearr_19454_22195[(2)] = null);

(statearr_19454_22195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (40))){
var inst_19278 = (state_19344[(22)]);
var inst_19288 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19278);
var state_19344__$1 = state_19344;
var statearr_19459_22196 = state_19344__$1;
(statearr_19459_22196[(2)] = inst_19288);

(statearr_19459_22196[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (33))){
var inst_19267 = (state_19344[(23)]);
var inst_19270 = cljs.core.chunked_seq_QMARK_(inst_19267);
var state_19344__$1 = state_19344;
if(inst_19270){
var statearr_19463_22197 = state_19344__$1;
(statearr_19463_22197[(1)] = (36));

} else {
var statearr_19464_22198 = state_19344__$1;
(statearr_19464_22198[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (13))){
var inst_19180 = (state_19344[(24)]);
var inst_19183 = cljs.core.async.close_BANG_(inst_19180);
var state_19344__$1 = state_19344;
var statearr_19468_22199 = state_19344__$1;
(statearr_19468_22199[(2)] = inst_19183);

(statearr_19468_22199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (22))){
var inst_19209 = (state_19344[(8)]);
var inst_19214 = cljs.core.async.close_BANG_(inst_19209);
var state_19344__$1 = state_19344;
var statearr_19472_22200 = state_19344__$1;
(statearr_19472_22200[(2)] = inst_19214);

(statearr_19472_22200[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (36))){
var inst_19267 = (state_19344[(23)]);
var inst_19272 = cljs.core.chunk_first(inst_19267);
var inst_19273 = cljs.core.chunk_rest(inst_19267);
var inst_19274 = cljs.core.count(inst_19272);
var inst_19243 = inst_19273;
var inst_19244 = inst_19272;
var inst_19245 = inst_19274;
var inst_19246 = (0);
var state_19344__$1 = (function (){var statearr_19476 = state_19344;
(statearr_19476[(19)] = inst_19243);

(statearr_19476[(10)] = inst_19244);

(statearr_19476[(11)] = inst_19246);

(statearr_19476[(20)] = inst_19245);

return statearr_19476;
})();
var statearr_19478_22201 = state_19344__$1;
(statearr_19478_22201[(2)] = null);

(statearr_19478_22201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (41))){
var inst_19267 = (state_19344[(23)]);
var inst_19290 = (state_19344[(2)]);
var inst_19291 = cljs.core.next(inst_19267);
var inst_19243 = inst_19291;
var inst_19244 = null;
var inst_19245 = (0);
var inst_19246 = (0);
var state_19344__$1 = (function (){var statearr_19484 = state_19344;
(statearr_19484[(19)] = inst_19243);

(statearr_19484[(10)] = inst_19244);

(statearr_19484[(11)] = inst_19246);

(statearr_19484[(25)] = inst_19290);

(statearr_19484[(20)] = inst_19245);

return statearr_19484;
})();
var statearr_19487_22202 = state_19344__$1;
(statearr_19487_22202[(2)] = null);

(statearr_19487_22202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (43))){
var state_19344__$1 = state_19344;
var statearr_19493_22203 = state_19344__$1;
(statearr_19493_22203[(2)] = null);

(statearr_19493_22203[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (29))){
var inst_19299 = (state_19344[(2)]);
var state_19344__$1 = state_19344;
var statearr_19497_22204 = state_19344__$1;
(statearr_19497_22204[(2)] = inst_19299);

(statearr_19497_22204[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (44))){
var inst_19310 = (state_19344[(2)]);
var state_19344__$1 = (function (){var statearr_19503 = state_19344;
(statearr_19503[(26)] = inst_19310);

return statearr_19503;
})();
var statearr_19509_22205 = state_19344__$1;
(statearr_19509_22205[(2)] = null);

(statearr_19509_22205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (6))){
var inst_19233 = (state_19344[(27)]);
var inst_19232 = cljs.core.deref(cs);
var inst_19233__$1 = cljs.core.keys(inst_19232);
var inst_19234 = cljs.core.count(inst_19233__$1);
var inst_19235 = cljs.core.reset_BANG_(dctr,inst_19234);
var inst_19242 = cljs.core.seq(inst_19233__$1);
var inst_19243 = inst_19242;
var inst_19244 = null;
var inst_19245 = (0);
var inst_19246 = (0);
var state_19344__$1 = (function (){var statearr_19517 = state_19344;
(statearr_19517[(19)] = inst_19243);

(statearr_19517[(28)] = inst_19235);

(statearr_19517[(10)] = inst_19244);

(statearr_19517[(11)] = inst_19246);

(statearr_19517[(20)] = inst_19245);

(statearr_19517[(27)] = inst_19233__$1);

return statearr_19517;
})();
var statearr_19519_22206 = state_19344__$1;
(statearr_19519_22206[(2)] = null);

(statearr_19519_22206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (28))){
var inst_19243 = (state_19344[(19)]);
var inst_19267 = (state_19344[(23)]);
var inst_19267__$1 = cljs.core.seq(inst_19243);
var state_19344__$1 = (function (){var statearr_19526 = state_19344;
(statearr_19526[(23)] = inst_19267__$1);

return statearr_19526;
})();
if(inst_19267__$1){
var statearr_19527_22207 = state_19344__$1;
(statearr_19527_22207[(1)] = (33));

} else {
var statearr_19528_22208 = state_19344__$1;
(statearr_19528_22208[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (25))){
var inst_19246 = (state_19344[(11)]);
var inst_19245 = (state_19344[(20)]);
var inst_19249 = (inst_19246 < inst_19245);
var inst_19250 = inst_19249;
var state_19344__$1 = state_19344;
if(cljs.core.truth_(inst_19250)){
var statearr_19536_22209 = state_19344__$1;
(statearr_19536_22209[(1)] = (27));

} else {
var statearr_19537_22210 = state_19344__$1;
(statearr_19537_22210[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (34))){
var state_19344__$1 = state_19344;
var statearr_19552_22211 = state_19344__$1;
(statearr_19552_22211[(2)] = null);

(statearr_19552_22211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (17))){
var state_19344__$1 = state_19344;
var statearr_19555_22212 = state_19344__$1;
(statearr_19555_22212[(2)] = null);

(statearr_19555_22212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (3))){
var inst_19319 = (state_19344[(2)]);
var state_19344__$1 = state_19344;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19344__$1,inst_19319);
} else {
if((state_val_19345 === (12))){
var inst_19227 = (state_19344[(2)]);
var state_19344__$1 = state_19344;
var statearr_19562_22213 = state_19344__$1;
(statearr_19562_22213[(2)] = inst_19227);

(statearr_19562_22213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (2))){
var state_19344__$1 = state_19344;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19344__$1,(4),ch);
} else {
if((state_val_19345 === (23))){
var state_19344__$1 = state_19344;
var statearr_19570_22214 = state_19344__$1;
(statearr_19570_22214[(2)] = null);

(statearr_19570_22214[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (35))){
var inst_19297 = (state_19344[(2)]);
var state_19344__$1 = state_19344;
var statearr_19573_22215 = state_19344__$1;
(statearr_19573_22215[(2)] = inst_19297);

(statearr_19573_22215[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (19))){
var inst_19194 = (state_19344[(7)]);
var inst_19199 = cljs.core.chunk_first(inst_19194);
var inst_19201 = cljs.core.chunk_rest(inst_19194);
var inst_19202 = cljs.core.count(inst_19199);
var inst_19163 = inst_19201;
var inst_19164 = inst_19199;
var inst_19165 = inst_19202;
var inst_19166 = (0);
var state_19344__$1 = (function (){var statearr_19575 = state_19344;
(statearr_19575[(13)] = inst_19165);

(statearr_19575[(14)] = inst_19164);

(statearr_19575[(15)] = inst_19166);

(statearr_19575[(16)] = inst_19163);

return statearr_19575;
})();
var statearr_19577_22216 = state_19344__$1;
(statearr_19577_22216[(2)] = null);

(statearr_19577_22216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (11))){
var inst_19194 = (state_19344[(7)]);
var inst_19163 = (state_19344[(16)]);
var inst_19194__$1 = cljs.core.seq(inst_19163);
var state_19344__$1 = (function (){var statearr_19579 = state_19344;
(statearr_19579[(7)] = inst_19194__$1);

return statearr_19579;
})();
if(inst_19194__$1){
var statearr_19580_22217 = state_19344__$1;
(statearr_19580_22217[(1)] = (16));

} else {
var statearr_19581_22218 = state_19344__$1;
(statearr_19581_22218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (9))){
var inst_19229 = (state_19344[(2)]);
var state_19344__$1 = state_19344;
var statearr_19582_22219 = state_19344__$1;
(statearr_19582_22219[(2)] = inst_19229);

(statearr_19582_22219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (5))){
var inst_19161 = cljs.core.deref(cs);
var inst_19162 = cljs.core.seq(inst_19161);
var inst_19163 = inst_19162;
var inst_19164 = null;
var inst_19165 = (0);
var inst_19166 = (0);
var state_19344__$1 = (function (){var statearr_19583 = state_19344;
(statearr_19583[(13)] = inst_19165);

(statearr_19583[(14)] = inst_19164);

(statearr_19583[(15)] = inst_19166);

(statearr_19583[(16)] = inst_19163);

return statearr_19583;
})();
var statearr_19584_22220 = state_19344__$1;
(statearr_19584_22220[(2)] = null);

(statearr_19584_22220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (14))){
var state_19344__$1 = state_19344;
var statearr_19587_22221 = state_19344__$1;
(statearr_19587_22221[(2)] = null);

(statearr_19587_22221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (45))){
var inst_19307 = (state_19344[(2)]);
var state_19344__$1 = state_19344;
var statearr_19588_22222 = state_19344__$1;
(statearr_19588_22222[(2)] = inst_19307);

(statearr_19588_22222[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (26))){
var inst_19233 = (state_19344[(27)]);
var inst_19301 = (state_19344[(2)]);
var inst_19302 = cljs.core.seq(inst_19233);
var state_19344__$1 = (function (){var statearr_19592 = state_19344;
(statearr_19592[(29)] = inst_19301);

return statearr_19592;
})();
if(inst_19302){
var statearr_19593_22223 = state_19344__$1;
(statearr_19593_22223[(1)] = (42));

} else {
var statearr_19595_22224 = state_19344__$1;
(statearr_19595_22224[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (16))){
var inst_19194 = (state_19344[(7)]);
var inst_19196 = cljs.core.chunked_seq_QMARK_(inst_19194);
var state_19344__$1 = state_19344;
if(inst_19196){
var statearr_19601_22225 = state_19344__$1;
(statearr_19601_22225[(1)] = (19));

} else {
var statearr_19602_22226 = state_19344__$1;
(statearr_19602_22226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (38))){
var inst_19294 = (state_19344[(2)]);
var state_19344__$1 = state_19344;
var statearr_19608_22228 = state_19344__$1;
(statearr_19608_22228[(2)] = inst_19294);

(statearr_19608_22228[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (30))){
var state_19344__$1 = state_19344;
var statearr_19611_22229 = state_19344__$1;
(statearr_19611_22229[(2)] = null);

(statearr_19611_22229[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (10))){
var inst_19164 = (state_19344[(14)]);
var inst_19166 = (state_19344[(15)]);
var inst_19179 = cljs.core._nth(inst_19164,inst_19166);
var inst_19180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19179,(0),null);
var inst_19181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19179,(1),null);
var state_19344__$1 = (function (){var statearr_19612 = state_19344;
(statearr_19612[(24)] = inst_19180);

return statearr_19612;
})();
if(cljs.core.truth_(inst_19181)){
var statearr_19613_22234 = state_19344__$1;
(statearr_19613_22234[(1)] = (13));

} else {
var statearr_19614_22235 = state_19344__$1;
(statearr_19614_22235[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (18))){
var inst_19225 = (state_19344[(2)]);
var state_19344__$1 = state_19344;
var statearr_19615_22236 = state_19344__$1;
(statearr_19615_22236[(2)] = inst_19225);

(statearr_19615_22236[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (42))){
var state_19344__$1 = state_19344;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19344__$1,(45),dchan);
} else {
if((state_val_19345 === (37))){
var inst_19267 = (state_19344[(23)]);
var inst_19278 = (state_19344[(22)]);
var inst_19151 = (state_19344[(12)]);
var inst_19278__$1 = cljs.core.first(inst_19267);
var inst_19285 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19278__$1,inst_19151,done);
var state_19344__$1 = (function (){var statearr_19624 = state_19344;
(statearr_19624[(22)] = inst_19278__$1);

return statearr_19624;
})();
if(cljs.core.truth_(inst_19285)){
var statearr_19628_22237 = state_19344__$1;
(statearr_19628_22237[(1)] = (39));

} else {
var statearr_19629_22238 = state_19344__$1;
(statearr_19629_22238[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (8))){
var inst_19165 = (state_19344[(13)]);
var inst_19166 = (state_19344[(15)]);
var inst_19168 = (inst_19166 < inst_19165);
var inst_19169 = inst_19168;
var state_19344__$1 = state_19344;
if(cljs.core.truth_(inst_19169)){
var statearr_19631_22243 = state_19344__$1;
(statearr_19631_22243[(1)] = (10));

} else {
var statearr_19632_22244 = state_19344__$1;
(statearr_19632_22244[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__16957__auto__ = null;
var cljs$core$async$mult_$_state_machine__16957__auto____0 = (function (){
var statearr_19645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19645[(0)] = cljs$core$async$mult_$_state_machine__16957__auto__);

(statearr_19645[(1)] = (1));

return statearr_19645;
});
var cljs$core$async$mult_$_state_machine__16957__auto____1 = (function (state_19344){
while(true){
var ret_value__16958__auto__ = (function (){try{while(true){
var result__16959__auto__ = switch__16956__auto__(state_19344);
if(cljs.core.keyword_identical_QMARK_(result__16959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16959__auto__;
}
break;
}
}catch (e19649){var ex__16960__auto__ = e19649;
var statearr_19650_22245 = state_19344;
(statearr_19650_22245[(2)] = ex__16960__auto__);


if(cljs.core.seq((state_19344[(4)]))){
var statearr_19651_22250 = state_19344;
(statearr_19651_22250[(1)] = cljs.core.first((state_19344[(4)])));

} else {
throw ex__16960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22251 = state_19344;
state_19344 = G__22251;
continue;
} else {
return ret_value__16958__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16957__auto__ = function(state_19344){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16957__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16957__auto____1.call(this,state_19344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16957__auto____0;
cljs$core$async$mult_$_state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16957__auto____1;
return cljs$core$async$mult_$_state_machine__16957__auto__;
})()
})();
var state__17713__auto__ = (function (){var statearr_19663 = f__17712__auto__();
(statearr_19663[(6)] = c__17711__auto___22166);

return statearr_19663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17713__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__19672 = arguments.length;
switch (G__19672) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_22255 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_22255(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_22256 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_22256(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_22257 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_22257(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_22259 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_22259(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_22261 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_22261(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22262 = arguments.length;
var i__5770__auto___22263 = (0);
while(true){
if((i__5770__auto___22263 < len__5769__auto___22262)){
args__5775__auto__.push((arguments[i__5770__auto___22263]));

var G__22264 = (i__5770__auto___22263 + (1));
i__5770__auto___22263 = G__22264;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19768){
var map__19770 = p__19768;
var map__19770__$1 = cljs.core.__destructure_map(map__19770);
var opts = map__19770__$1;
var statearr_19771_22265 = state;
(statearr_19771_22265[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_19773_22266 = state;
(statearr_19773_22266[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_19774_22267 = state;
(statearr_19774_22267[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19760){
var G__19761 = cljs.core.first(seq19760);
var seq19760__$1 = cljs.core.next(seq19760);
var G__19762 = cljs.core.first(seq19760__$1);
var seq19760__$2 = cljs.core.next(seq19760__$1);
var G__19763 = cljs.core.first(seq19760__$2);
var seq19760__$3 = cljs.core.next(seq19760__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19761,G__19762,G__19763,seq19760__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19807 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19807 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19808){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19808 = meta19808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19809,meta19808__$1){
var self__ = this;
var _19809__$1 = this;
return (new cljs.core.async.t_cljs$core$async19807(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19808__$1));
}));

(cljs.core.async.t_cljs$core$async19807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19809){
var self__ = this;
var _19809__$1 = this;
return self__.meta19808;
}));

(cljs.core.async.t_cljs$core$async19807.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19807.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19807.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19807.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19807.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19807.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19807.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19807.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19808","meta19808",-1743421826,null)], null);
}));

(cljs.core.async.t_cljs$core$async19807.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19807");

(cljs.core.async.t_cljs$core$async19807.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19807");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19807.
 */
cljs.core.async.__GT_t_cljs$core$async19807 = (function cljs$core$async$mix_$___GT_t_cljs$core$async19807(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19808){
return (new cljs.core.async.t_cljs$core$async19807(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19808));
});

}

return (new cljs.core.async.t_cljs$core$async19807(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17711__auto___22276 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17712__auto__ = (function (){var switch__16956__auto__ = (function (state_19938){
var state_val_19939 = (state_19938[(1)]);
if((state_val_19939 === (7))){
var inst_19889 = (state_19938[(2)]);
var state_19938__$1 = state_19938;
if(cljs.core.truth_(inst_19889)){
var statearr_19945_22277 = state_19938__$1;
(statearr_19945_22277[(1)] = (8));

} else {
var statearr_19946_22278 = state_19938__$1;
(statearr_19946_22278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19939 === (20))){
var inst_19881 = (state_19938[(7)]);
var state_19938__$1 = state_19938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19938__$1,(23),out,inst_19881);
} else {
if((state_val_19939 === (1))){
var inst_19854 = calc_state();
var inst_19856 = cljs.core.__destructure_map(inst_19854);
var inst_19857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19856,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19856,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19856,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19861 = inst_19854;
var state_19938__$1 = (function (){var statearr_19952 = state_19938;
(statearr_19952[(8)] = inst_19860);

(statearr_19952[(9)] = inst_19857);

(statearr_19952[(10)] = inst_19859);

(statearr_19952[(11)] = inst_19861);

return statearr_19952;
})();
var statearr_19953_22279 = state_19938__$1;
(statearr_19953_22279[(2)] = null);

(statearr_19953_22279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19939 === (24))){
var inst_19872 = (state_19938[(12)]);
var inst_19861 = inst_19872;
var state_19938__$1 = (function (){var statearr_19955 = state_19938;
(statearr_19955[(11)] = inst_19861);

return statearr_19955;
})();
var statearr_19956_22281 = state_19938__$1;
(statearr_19956_22281[(2)] = null);

(statearr_19956_22281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19939 === (4))){
var inst_19883 = (state_19938[(13)]);
var inst_19881 = (state_19938[(7)]);
var inst_19880 = (state_19938[(2)]);
var inst_19881__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19880,(0),null);
var inst_19882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19880,(1),null);
var inst_19883__$1 = (inst_19881__$1 == null);
var state_19938__$1 = (function (){var statearr_19958 = state_19938;
(statearr_19958[(13)] = inst_19883__$1);

(statearr_19958[(7)] = inst_19881__$1);

(statearr_19958[(14)] = inst_19882);

return statearr_19958;
})();
if(cljs.core.truth_(inst_19883__$1)){
var statearr_19960_22282 = state_19938__$1;
(statearr_19960_22282[(1)] = (5));

} else {
var statearr_19961_22283 = state_19938__$1;
(statearr_19961_22283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19939 === (15))){
var inst_19873 = (state_19938[(15)]);
var inst_19907 = (state_19938[(16)]);
var inst_19907__$1 = cljs.core.empty_QMARK_(inst_19873);
var state_19938__$1 = (function (){var statearr_19962 = state_19938;
(statearr_19962[(16)] = inst_19907__$1);

return statearr_19962;
})();
if(inst_19907__$1){
var statearr_19963_22284 = state_19938__$1;
(statearr_19963_22284[(1)] = (17));

} else {
var statearr_19964_22289 = state_19938__$1;
(statearr_19964_22289[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19939 === (21))){
var inst_19872 = (state_19938[(12)]);
var inst_19861 = inst_19872;
var state_19938__$1 = (function (){var statearr_19965 = state_19938;
(statearr_19965[(11)] = inst_19861);

return statearr_19965;
})();
var statearr_19967_22294 = state_19938__$1;
(statearr_19967_22294[(2)] = null);

(statearr_19967_22294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19939 === (13))){
var inst_19896 = (state_19938[(2)]);
var inst_19898 = calc_state();
var inst_19861 = inst_19898;
var state_19938__$1 = (function (){var statearr_19968 = state_19938;
(statearr_19968[(17)] = inst_19896);

(statearr_19968[(11)] = inst_19861);

return statearr_19968;
})();
var statearr_19969_22299 = state_19938__$1;
(statearr_19969_22299[(2)] = null);

(statearr_19969_22299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19939 === (22))){
var inst_19929 = (state_19938[(2)]);
var state_19938__$1 = state_19938;
var statearr_19971_22300 = state_19938__$1;
(statearr_19971_22300[(2)] = inst_19929);

(statearr_19971_22300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19939 === (6))){
var inst_19882 = (state_19938[(14)]);
var inst_19887 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19882,change);
var state_19938__$1 = state_19938;
var statearr_19973_22301 = state_19938__$1;
(statearr_19973_22301[(2)] = inst_19887);

(statearr_19973_22301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19939 === (25))){
var state_19938__$1 = state_19938;
var statearr_19974_22302 = state_19938__$1;
(statearr_19974_22302[(2)] = null);

(statearr_19974_22302[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19939 === (17))){
var inst_19882 = (state_19938[(14)]);
var inst_19874 = (state_19938[(18)]);
var inst_19909 = (inst_19874.cljs$core$IFn$_invoke$arity$1 ? inst_19874.cljs$core$IFn$_invoke$arity$1(inst_19882) : inst_19874.call(null,inst_19882));
var inst_19910 = cljs.core.not(inst_19909);
var state_19938__$1 = state_19938;
var statearr_19978_22304 = state_19938__$1;
(statearr_19978_22304[(2)] = inst_19910);

(statearr_19978_22304[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19939 === (3))){
var inst_19935 = (state_19938[(2)]);
var state_19938__$1 = state_19938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19938__$1,inst_19935);
} else {
if((state_val_19939 === (12))){
var state_19938__$1 = state_19938;
var statearr_19980_22305 = state_19938__$1;
(statearr_19980_22305[(2)] = null);

(statearr_19980_22305[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19939 === (2))){
var inst_19861 = (state_19938[(11)]);
var inst_19872 = (state_19938[(12)]);
var inst_19872__$1 = cljs.core.__destructure_map(inst_19861);
var inst_19873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19872__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19872__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19872__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19938__$1 = (function (){var statearr_19981 = state_19938;
(statearr_19981[(15)] = inst_19873);

(statearr_19981[(18)] = inst_19874);

(statearr_19981[(12)] = inst_19872__$1);

return statearr_19981;
})();
return cljs.core.async.ioc_alts_BANG_(state_19938__$1,(4),inst_19875);
} else {
if((state_val_19939 === (23))){
var inst_19918 = (state_19938[(2)]);
var state_19938__$1 = state_19938;
if(cljs.core.truth_(inst_19918)){
var statearr_19983_22311 = state_19938__$1;
(statearr_19983_22311[(1)] = (24));

} else {
var statearr_19984_22312 = state_19938__$1;
(statearr_19984_22312[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19939 === (19))){
var inst_19913 = (state_19938[(2)]);
var state_19938__$1 = state_19938;
var statearr_19985_22314 = state_19938__$1;
(statearr_19985_22314[(2)] = inst_19913);

(statearr_19985_22314[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19939 === (11))){
var inst_19882 = (state_19938[(14)]);
var inst_19893 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19882);
var state_19938__$1 = state_19938;
var statearr_19986_22315 = state_19938__$1;
(statearr_19986_22315[(2)] = inst_19893);

(statearr_19986_22315[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19939 === (9))){
var inst_19873 = (state_19938[(15)]);
var inst_19882 = (state_19938[(14)]);
var inst_19904 = (state_19938[(19)]);
var inst_19904__$1 = (inst_19873.cljs$core$IFn$_invoke$arity$1 ? inst_19873.cljs$core$IFn$_invoke$arity$1(inst_19882) : inst_19873.call(null,inst_19882));
var state_19938__$1 = (function (){var statearr_19987 = state_19938;
(statearr_19987[(19)] = inst_19904__$1);

return statearr_19987;
})();
if(cljs.core.truth_(inst_19904__$1)){
var statearr_19988_22321 = state_19938__$1;
(statearr_19988_22321[(1)] = (14));

} else {
var statearr_19990_22322 = state_19938__$1;
(statearr_19990_22322[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19939 === (5))){
var inst_19883 = (state_19938[(13)]);
var state_19938__$1 = state_19938;
var statearr_19992_22323 = state_19938__$1;
(statearr_19992_22323[(2)] = inst_19883);

(statearr_19992_22323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19939 === (14))){
var inst_19904 = (state_19938[(19)]);
var state_19938__$1 = state_19938;
var statearr_19993_22324 = state_19938__$1;
(statearr_19993_22324[(2)] = inst_19904);

(statearr_19993_22324[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19939 === (26))){
var inst_19924 = (state_19938[(2)]);
var state_19938__$1 = state_19938;
var statearr_19994_22326 = state_19938__$1;
(statearr_19994_22326[(2)] = inst_19924);

(statearr_19994_22326[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19939 === (16))){
var inst_19915 = (state_19938[(2)]);
var state_19938__$1 = state_19938;
if(cljs.core.truth_(inst_19915)){
var statearr_19997_22327 = state_19938__$1;
(statearr_19997_22327[(1)] = (20));

} else {
var statearr_20000_22332 = state_19938__$1;
(statearr_20000_22332[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19939 === (10))){
var inst_19931 = (state_19938[(2)]);
var state_19938__$1 = state_19938;
var statearr_20003_22334 = state_19938__$1;
(statearr_20003_22334[(2)] = inst_19931);

(statearr_20003_22334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19939 === (18))){
var inst_19907 = (state_19938[(16)]);
var state_19938__$1 = state_19938;
var statearr_20005_22338 = state_19938__$1;
(statearr_20005_22338[(2)] = inst_19907);

(statearr_20005_22338[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19939 === (8))){
var inst_19881 = (state_19938[(7)]);
var inst_19891 = (inst_19881 == null);
var state_19938__$1 = state_19938;
if(cljs.core.truth_(inst_19891)){
var statearr_20006_22339 = state_19938__$1;
(statearr_20006_22339[(1)] = (11));

} else {
var statearr_20007_22340 = state_19938__$1;
(statearr_20007_22340[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__16957__auto__ = null;
var cljs$core$async$mix_$_state_machine__16957__auto____0 = (function (){
var statearr_20010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20010[(0)] = cljs$core$async$mix_$_state_machine__16957__auto__);

(statearr_20010[(1)] = (1));

return statearr_20010;
});
var cljs$core$async$mix_$_state_machine__16957__auto____1 = (function (state_19938){
while(true){
var ret_value__16958__auto__ = (function (){try{while(true){
var result__16959__auto__ = switch__16956__auto__(state_19938);
if(cljs.core.keyword_identical_QMARK_(result__16959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16959__auto__;
}
break;
}
}catch (e20012){var ex__16960__auto__ = e20012;
var statearr_20013_22349 = state_19938;
(statearr_20013_22349[(2)] = ex__16960__auto__);


if(cljs.core.seq((state_19938[(4)]))){
var statearr_20015_22350 = state_19938;
(statearr_20015_22350[(1)] = cljs.core.first((state_19938[(4)])));

} else {
throw ex__16960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22351 = state_19938;
state_19938 = G__22351;
continue;
} else {
return ret_value__16958__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16957__auto__ = function(state_19938){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16957__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16957__auto____1.call(this,state_19938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16957__auto____0;
cljs$core$async$mix_$_state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16957__auto____1;
return cljs$core$async$mix_$_state_machine__16957__auto__;
})()
})();
var state__17713__auto__ = (function (){var statearr_20017 = f__17712__auto__();
(statearr_20017[(6)] = c__17711__auto___22276);

return statearr_20017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17713__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_22358 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_22358(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_22369 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_22369(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_22371 = (function() {
var G__22372 = null;
var G__22372__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__22372__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__22372 = function(p,v){
switch(arguments.length){
case 1:
return G__22372__1.call(this,p);
case 2:
return G__22372__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22372.cljs$core$IFn$_invoke$arity$1 = G__22372__1;
G__22372.cljs$core$IFn$_invoke$arity$2 = G__22372__2;
return G__22372;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__20054 = arguments.length;
switch (G__20054) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_22371(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_22371(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__20076 = arguments.length;
switch (G__20076) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__20060_SHARP_){
if(cljs.core.truth_((p1__20060_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__20060_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__20060_SHARP_.call(null,topic)))){
return p1__20060_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20060_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20094 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20094 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20095){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20095 = meta20095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20096,meta20095__$1){
var self__ = this;
var _20096__$1 = this;
return (new cljs.core.async.t_cljs$core$async20094(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20095__$1));
}));

(cljs.core.async.t_cljs$core$async20094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20096){
var self__ = this;
var _20096__$1 = this;
return self__.meta20095;
}));

(cljs.core.async.t_cljs$core$async20094.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20094.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async20094.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20094.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async20094.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async20094.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async20094.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async20094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20095","meta20095",-611111847,null)], null);
}));

(cljs.core.async.t_cljs$core$async20094.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20094.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20094");

(cljs.core.async.t_cljs$core$async20094.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20094");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20094.
 */
cljs.core.async.__GT_t_cljs$core$async20094 = (function cljs$core$async$__GT_t_cljs$core$async20094(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20095){
return (new cljs.core.async.t_cljs$core$async20094(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20095));
});

}

return (new cljs.core.async.t_cljs$core$async20094(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17711__auto___22379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17712__auto__ = (function (){var switch__16956__auto__ = (function (state_20261){
var state_val_20265 = (state_20261[(1)]);
if((state_val_20265 === (7))){
var inst_20253 = (state_20261[(2)]);
var state_20261__$1 = state_20261;
var statearr_20288_22384 = state_20261__$1;
(statearr_20288_22384[(2)] = inst_20253);

(statearr_20288_22384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (20))){
var state_20261__$1 = state_20261;
var statearr_20293_22398 = state_20261__$1;
(statearr_20293_22398[(2)] = null);

(statearr_20293_22398[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (1))){
var state_20261__$1 = state_20261;
var statearr_20296_22399 = state_20261__$1;
(statearr_20296_22399[(2)] = null);

(statearr_20296_22399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (24))){
var inst_20235 = (state_20261[(7)]);
var inst_20245 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_20235);
var state_20261__$1 = state_20261;
var statearr_20299_22400 = state_20261__$1;
(statearr_20299_22400[(2)] = inst_20245);

(statearr_20299_22400[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (4))){
var inst_20171 = (state_20261[(8)]);
var inst_20171__$1 = (state_20261[(2)]);
var inst_20172 = (inst_20171__$1 == null);
var state_20261__$1 = (function (){var statearr_20305 = state_20261;
(statearr_20305[(8)] = inst_20171__$1);

return statearr_20305;
})();
if(cljs.core.truth_(inst_20172)){
var statearr_20306_22405 = state_20261__$1;
(statearr_20306_22405[(1)] = (5));

} else {
var statearr_20308_22406 = state_20261__$1;
(statearr_20308_22406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (15))){
var inst_20229 = (state_20261[(2)]);
var state_20261__$1 = state_20261;
var statearr_20312_22410 = state_20261__$1;
(statearr_20312_22410[(2)] = inst_20229);

(statearr_20312_22410[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (21))){
var inst_20250 = (state_20261[(2)]);
var state_20261__$1 = (function (){var statearr_20315 = state_20261;
(statearr_20315[(9)] = inst_20250);

return statearr_20315;
})();
var statearr_20316_22411 = state_20261__$1;
(statearr_20316_22411[(2)] = null);

(statearr_20316_22411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (13))){
var inst_20200 = (state_20261[(10)]);
var inst_20212 = cljs.core.chunked_seq_QMARK_(inst_20200);
var state_20261__$1 = state_20261;
if(inst_20212){
var statearr_20321_22412 = state_20261__$1;
(statearr_20321_22412[(1)] = (16));

} else {
var statearr_20322_22413 = state_20261__$1;
(statearr_20322_22413[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (22))){
var inst_20241 = (state_20261[(2)]);
var state_20261__$1 = state_20261;
if(cljs.core.truth_(inst_20241)){
var statearr_20323_22420 = state_20261__$1;
(statearr_20323_22420[(1)] = (23));

} else {
var statearr_20325_22426 = state_20261__$1;
(statearr_20325_22426[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (6))){
var inst_20235 = (state_20261[(7)]);
var inst_20237 = (state_20261[(11)]);
var inst_20171 = (state_20261[(8)]);
var inst_20235__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_20171) : topic_fn.call(null,inst_20171));
var inst_20236 = cljs.core.deref(mults);
var inst_20237__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20236,inst_20235__$1);
var state_20261__$1 = (function (){var statearr_20329 = state_20261;
(statearr_20329[(7)] = inst_20235__$1);

(statearr_20329[(11)] = inst_20237__$1);

return statearr_20329;
})();
if(cljs.core.truth_(inst_20237__$1)){
var statearr_20330_22430 = state_20261__$1;
(statearr_20330_22430[(1)] = (19));

} else {
var statearr_20331_22439 = state_20261__$1;
(statearr_20331_22439[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (25))){
var inst_20247 = (state_20261[(2)]);
var state_20261__$1 = state_20261;
var statearr_20334_22446 = state_20261__$1;
(statearr_20334_22446[(2)] = inst_20247);

(statearr_20334_22446[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (17))){
var inst_20200 = (state_20261[(10)]);
var inst_20220 = cljs.core.first(inst_20200);
var inst_20221 = cljs.core.async.muxch_STAR_(inst_20220);
var inst_20222 = cljs.core.async.close_BANG_(inst_20221);
var inst_20223 = cljs.core.next(inst_20200);
var inst_20181 = inst_20223;
var inst_20182 = null;
var inst_20183 = (0);
var inst_20184 = (0);
var state_20261__$1 = (function (){var statearr_20342 = state_20261;
(statearr_20342[(12)] = inst_20182);

(statearr_20342[(13)] = inst_20183);

(statearr_20342[(14)] = inst_20222);

(statearr_20342[(15)] = inst_20184);

(statearr_20342[(16)] = inst_20181);

return statearr_20342;
})();
var statearr_20348_22461 = state_20261__$1;
(statearr_20348_22461[(2)] = null);

(statearr_20348_22461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (3))){
var inst_20255 = (state_20261[(2)]);
var state_20261__$1 = state_20261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20261__$1,inst_20255);
} else {
if((state_val_20265 === (12))){
var inst_20231 = (state_20261[(2)]);
var state_20261__$1 = state_20261;
var statearr_20361_22469 = state_20261__$1;
(statearr_20361_22469[(2)] = inst_20231);

(statearr_20361_22469[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (2))){
var state_20261__$1 = state_20261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20261__$1,(4),ch);
} else {
if((state_val_20265 === (23))){
var state_20261__$1 = state_20261;
var statearr_20362_22470 = state_20261__$1;
(statearr_20362_22470[(2)] = null);

(statearr_20362_22470[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (19))){
var inst_20237 = (state_20261[(11)]);
var inst_20171 = (state_20261[(8)]);
var inst_20239 = cljs.core.async.muxch_STAR_(inst_20237);
var state_20261__$1 = state_20261;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20261__$1,(22),inst_20239,inst_20171);
} else {
if((state_val_20265 === (11))){
var inst_20181 = (state_20261[(16)]);
var inst_20200 = (state_20261[(10)]);
var inst_20200__$1 = cljs.core.seq(inst_20181);
var state_20261__$1 = (function (){var statearr_20370 = state_20261;
(statearr_20370[(10)] = inst_20200__$1);

return statearr_20370;
})();
if(inst_20200__$1){
var statearr_20372_22487 = state_20261__$1;
(statearr_20372_22487[(1)] = (13));

} else {
var statearr_20373_22488 = state_20261__$1;
(statearr_20373_22488[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (9))){
var inst_20233 = (state_20261[(2)]);
var state_20261__$1 = state_20261;
var statearr_20385_22489 = state_20261__$1;
(statearr_20385_22489[(2)] = inst_20233);

(statearr_20385_22489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (5))){
var inst_20178 = cljs.core.deref(mults);
var inst_20179 = cljs.core.vals(inst_20178);
var inst_20180 = cljs.core.seq(inst_20179);
var inst_20181 = inst_20180;
var inst_20182 = null;
var inst_20183 = (0);
var inst_20184 = (0);
var state_20261__$1 = (function (){var statearr_20404 = state_20261;
(statearr_20404[(12)] = inst_20182);

(statearr_20404[(13)] = inst_20183);

(statearr_20404[(15)] = inst_20184);

(statearr_20404[(16)] = inst_20181);

return statearr_20404;
})();
var statearr_20407_22502 = state_20261__$1;
(statearr_20407_22502[(2)] = null);

(statearr_20407_22502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (14))){
var state_20261__$1 = state_20261;
var statearr_20412_22507 = state_20261__$1;
(statearr_20412_22507[(2)] = null);

(statearr_20412_22507[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (16))){
var inst_20200 = (state_20261[(10)]);
var inst_20214 = cljs.core.chunk_first(inst_20200);
var inst_20215 = cljs.core.chunk_rest(inst_20200);
var inst_20216 = cljs.core.count(inst_20214);
var inst_20181 = inst_20215;
var inst_20182 = inst_20214;
var inst_20183 = inst_20216;
var inst_20184 = (0);
var state_20261__$1 = (function (){var statearr_20417 = state_20261;
(statearr_20417[(12)] = inst_20182);

(statearr_20417[(13)] = inst_20183);

(statearr_20417[(15)] = inst_20184);

(statearr_20417[(16)] = inst_20181);

return statearr_20417;
})();
var statearr_20420_22513 = state_20261__$1;
(statearr_20420_22513[(2)] = null);

(statearr_20420_22513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (10))){
var inst_20182 = (state_20261[(12)]);
var inst_20183 = (state_20261[(13)]);
var inst_20184 = (state_20261[(15)]);
var inst_20181 = (state_20261[(16)]);
var inst_20189 = cljs.core._nth(inst_20182,inst_20184);
var inst_20191 = cljs.core.async.muxch_STAR_(inst_20189);
var inst_20192 = cljs.core.async.close_BANG_(inst_20191);
var inst_20197 = (inst_20184 + (1));
var tmp20409 = inst_20182;
var tmp20410 = inst_20183;
var tmp20411 = inst_20181;
var inst_20181__$1 = tmp20411;
var inst_20182__$1 = tmp20409;
var inst_20183__$1 = tmp20410;
var inst_20184__$1 = inst_20197;
var state_20261__$1 = (function (){var statearr_20429 = state_20261;
(statearr_20429[(12)] = inst_20182__$1);

(statearr_20429[(13)] = inst_20183__$1);

(statearr_20429[(15)] = inst_20184__$1);

(statearr_20429[(16)] = inst_20181__$1);

(statearr_20429[(17)] = inst_20192);

return statearr_20429;
})();
var statearr_20430_22516 = state_20261__$1;
(statearr_20430_22516[(2)] = null);

(statearr_20430_22516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (18))){
var inst_20226 = (state_20261[(2)]);
var state_20261__$1 = state_20261;
var statearr_20434_22518 = state_20261__$1;
(statearr_20434_22518[(2)] = inst_20226);

(statearr_20434_22518[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (8))){
var inst_20183 = (state_20261[(13)]);
var inst_20184 = (state_20261[(15)]);
var inst_20186 = (inst_20184 < inst_20183);
var inst_20187 = inst_20186;
var state_20261__$1 = state_20261;
if(cljs.core.truth_(inst_20187)){
var statearr_20435_22520 = state_20261__$1;
(statearr_20435_22520[(1)] = (10));

} else {
var statearr_20436_22521 = state_20261__$1;
(statearr_20436_22521[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16957__auto__ = null;
var cljs$core$async$state_machine__16957__auto____0 = (function (){
var statearr_20440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20440[(0)] = cljs$core$async$state_machine__16957__auto__);

(statearr_20440[(1)] = (1));

return statearr_20440;
});
var cljs$core$async$state_machine__16957__auto____1 = (function (state_20261){
while(true){
var ret_value__16958__auto__ = (function (){try{while(true){
var result__16959__auto__ = switch__16956__auto__(state_20261);
if(cljs.core.keyword_identical_QMARK_(result__16959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16959__auto__;
}
break;
}
}catch (e20441){var ex__16960__auto__ = e20441;
var statearr_20442_22525 = state_20261;
(statearr_20442_22525[(2)] = ex__16960__auto__);


if(cljs.core.seq((state_20261[(4)]))){
var statearr_20443_22526 = state_20261;
(statearr_20443_22526[(1)] = cljs.core.first((state_20261[(4)])));

} else {
throw ex__16960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22528 = state_20261;
state_20261 = G__22528;
continue;
} else {
return ret_value__16958__auto__;
}
break;
}
});
cljs$core$async$state_machine__16957__auto__ = function(state_20261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16957__auto____1.call(this,state_20261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16957__auto____0;
cljs$core$async$state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16957__auto____1;
return cljs$core$async$state_machine__16957__auto__;
})()
})();
var state__17713__auto__ = (function (){var statearr_20448 = f__17712__auto__();
(statearr_20448[(6)] = c__17711__auto___22379);

return statearr_20448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17713__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__20456 = arguments.length;
switch (G__20456) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__20484 = arguments.length;
switch (G__20484) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__20491 = arguments.length;
switch (G__20491) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__17711__auto___22544 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17712__auto__ = (function (){var switch__16956__auto__ = (function (state_20582){
var state_val_20583 = (state_20582[(1)]);
if((state_val_20583 === (7))){
var state_20582__$1 = state_20582;
var statearr_20588_22545 = state_20582__$1;
(statearr_20588_22545[(2)] = null);

(statearr_20588_22545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20583 === (1))){
var state_20582__$1 = state_20582;
var statearr_20589_22546 = state_20582__$1;
(statearr_20589_22546[(2)] = null);

(statearr_20589_22546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20583 === (4))){
var inst_20509 = (state_20582[(7)]);
var inst_20508 = (state_20582[(8)]);
var inst_20511 = (inst_20509 < inst_20508);
var state_20582__$1 = state_20582;
if(cljs.core.truth_(inst_20511)){
var statearr_20590_22550 = state_20582__$1;
(statearr_20590_22550[(1)] = (6));

} else {
var statearr_20591_22551 = state_20582__$1;
(statearr_20591_22551[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20583 === (15))){
var inst_20556 = (state_20582[(9)]);
var inst_20570 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_20556);
var state_20582__$1 = state_20582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20582__$1,(17),out,inst_20570);
} else {
if((state_val_20583 === (13))){
var inst_20556 = (state_20582[(9)]);
var inst_20556__$1 = (state_20582[(2)]);
var inst_20561 = cljs.core.some(cljs.core.nil_QMARK_,inst_20556__$1);
var state_20582__$1 = (function (){var statearr_20600 = state_20582;
(statearr_20600[(9)] = inst_20556__$1);

return statearr_20600;
})();
if(cljs.core.truth_(inst_20561)){
var statearr_20601_22553 = state_20582__$1;
(statearr_20601_22553[(1)] = (14));

} else {
var statearr_20602_22555 = state_20582__$1;
(statearr_20602_22555[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20583 === (6))){
var state_20582__$1 = state_20582;
var statearr_20603_22556 = state_20582__$1;
(statearr_20603_22556[(2)] = null);

(statearr_20603_22556[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20583 === (17))){
var inst_20572 = (state_20582[(2)]);
var state_20582__$1 = (function (){var statearr_20606 = state_20582;
(statearr_20606[(10)] = inst_20572);

return statearr_20606;
})();
var statearr_20609_22557 = state_20582__$1;
(statearr_20609_22557[(2)] = null);

(statearr_20609_22557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20583 === (3))){
var inst_20580 = (state_20582[(2)]);
var state_20582__$1 = state_20582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20582__$1,inst_20580);
} else {
if((state_val_20583 === (12))){
var _ = (function (){var statearr_20614 = state_20582;
(statearr_20614[(4)] = cljs.core.rest((state_20582[(4)])));

return statearr_20614;
})();
var state_20582__$1 = state_20582;
var ex20605 = (state_20582__$1[(2)]);
var statearr_20616_22559 = state_20582__$1;
(statearr_20616_22559[(5)] = ex20605);


if((ex20605 instanceof Object)){
var statearr_20623_22560 = state_20582__$1;
(statearr_20623_22560[(1)] = (11));

(statearr_20623_22560[(5)] = null);

} else {
throw ex20605;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20583 === (2))){
var inst_20506 = cljs.core.reset_BANG_(dctr,cnt);
var inst_20508 = cnt;
var inst_20509 = (0);
var state_20582__$1 = (function (){var statearr_20643 = state_20582;
(statearr_20643[(7)] = inst_20509);

(statearr_20643[(11)] = inst_20506);

(statearr_20643[(8)] = inst_20508);

return statearr_20643;
})();
var statearr_20644_22561 = state_20582__$1;
(statearr_20644_22561[(2)] = null);

(statearr_20644_22561[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20583 === (11))){
var inst_20524 = (state_20582[(2)]);
var inst_20525 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_20582__$1 = (function (){var statearr_20645 = state_20582;
(statearr_20645[(12)] = inst_20524);

return statearr_20645;
})();
var statearr_20646_22562 = state_20582__$1;
(statearr_20646_22562[(2)] = inst_20525);

(statearr_20646_22562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20583 === (9))){
var inst_20509 = (state_20582[(7)]);
var _ = (function (){var statearr_20647 = state_20582;
(statearr_20647[(4)] = cljs.core.cons((12),(state_20582[(4)])));

return statearr_20647;
})();
var inst_20537 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_20509) : chs__$1.call(null,inst_20509));
var inst_20538 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_20509) : done.call(null,inst_20509));
var inst_20539 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_20537,inst_20538);
var ___$1 = (function (){var statearr_20649 = state_20582;
(statearr_20649[(4)] = cljs.core.rest((state_20582[(4)])));

return statearr_20649;
})();
var state_20582__$1 = state_20582;
var statearr_20651_22563 = state_20582__$1;
(statearr_20651_22563[(2)] = inst_20539);

(statearr_20651_22563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20583 === (5))){
var inst_20553 = (state_20582[(2)]);
var state_20582__$1 = (function (){var statearr_20653 = state_20582;
(statearr_20653[(13)] = inst_20553);

return statearr_20653;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20582__$1,(13),dchan);
} else {
if((state_val_20583 === (14))){
var inst_20568 = cljs.core.async.close_BANG_(out);
var state_20582__$1 = state_20582;
var statearr_20654_22564 = state_20582__$1;
(statearr_20654_22564[(2)] = inst_20568);

(statearr_20654_22564[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20583 === (16))){
var inst_20578 = (state_20582[(2)]);
var state_20582__$1 = state_20582;
var statearr_20655_22566 = state_20582__$1;
(statearr_20655_22566[(2)] = inst_20578);

(statearr_20655_22566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20583 === (10))){
var inst_20509 = (state_20582[(7)]);
var inst_20542 = (state_20582[(2)]);
var inst_20544 = (inst_20509 + (1));
var inst_20509__$1 = inst_20544;
var state_20582__$1 = (function (){var statearr_20656 = state_20582;
(statearr_20656[(7)] = inst_20509__$1);

(statearr_20656[(14)] = inst_20542);

return statearr_20656;
})();
var statearr_20657_22568 = state_20582__$1;
(statearr_20657_22568[(2)] = null);

(statearr_20657_22568[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20583 === (8))){
var inst_20548 = (state_20582[(2)]);
var state_20582__$1 = state_20582;
var statearr_20658_22571 = state_20582__$1;
(statearr_20658_22571[(2)] = inst_20548);

(statearr_20658_22571[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16957__auto__ = null;
var cljs$core$async$state_machine__16957__auto____0 = (function (){
var statearr_20662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20662[(0)] = cljs$core$async$state_machine__16957__auto__);

(statearr_20662[(1)] = (1));

return statearr_20662;
});
var cljs$core$async$state_machine__16957__auto____1 = (function (state_20582){
while(true){
var ret_value__16958__auto__ = (function (){try{while(true){
var result__16959__auto__ = switch__16956__auto__(state_20582);
if(cljs.core.keyword_identical_QMARK_(result__16959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16959__auto__;
}
break;
}
}catch (e20664){var ex__16960__auto__ = e20664;
var statearr_20665_22577 = state_20582;
(statearr_20665_22577[(2)] = ex__16960__auto__);


if(cljs.core.seq((state_20582[(4)]))){
var statearr_20666_22578 = state_20582;
(statearr_20666_22578[(1)] = cljs.core.first((state_20582[(4)])));

} else {
throw ex__16960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22581 = state_20582;
state_20582 = G__22581;
continue;
} else {
return ret_value__16958__auto__;
}
break;
}
});
cljs$core$async$state_machine__16957__auto__ = function(state_20582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16957__auto____1.call(this,state_20582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16957__auto____0;
cljs$core$async$state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16957__auto____1;
return cljs$core$async$state_machine__16957__auto__;
})()
})();
var state__17713__auto__ = (function (){var statearr_20672 = f__17712__auto__();
(statearr_20672[(6)] = c__17711__auto___22544);

return statearr_20672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17713__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__20677 = arguments.length;
switch (G__20677) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17711__auto___22588 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17712__auto__ = (function (){var switch__16956__auto__ = (function (state_20718){
var state_val_20719 = (state_20718[(1)]);
if((state_val_20719 === (7))){
var inst_20695 = (state_20718[(7)]);
var inst_20694 = (state_20718[(8)]);
var inst_20694__$1 = (state_20718[(2)]);
var inst_20695__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20694__$1,(0),null);
var inst_20696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20694__$1,(1),null);
var inst_20697 = (inst_20695__$1 == null);
var state_20718__$1 = (function (){var statearr_20726 = state_20718;
(statearr_20726[(9)] = inst_20696);

(statearr_20726[(7)] = inst_20695__$1);

(statearr_20726[(8)] = inst_20694__$1);

return statearr_20726;
})();
if(cljs.core.truth_(inst_20697)){
var statearr_20729_22589 = state_20718__$1;
(statearr_20729_22589[(1)] = (8));

} else {
var statearr_20733_22590 = state_20718__$1;
(statearr_20733_22590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (1))){
var inst_20684 = cljs.core.vec(chs);
var inst_20685 = inst_20684;
var state_20718__$1 = (function (){var statearr_20734 = state_20718;
(statearr_20734[(10)] = inst_20685);

return statearr_20734;
})();
var statearr_20735_22592 = state_20718__$1;
(statearr_20735_22592[(2)] = null);

(statearr_20735_22592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (4))){
var inst_20685 = (state_20718[(10)]);
var state_20718__$1 = state_20718;
return cljs.core.async.ioc_alts_BANG_(state_20718__$1,(7),inst_20685);
} else {
if((state_val_20719 === (6))){
var inst_20711 = (state_20718[(2)]);
var state_20718__$1 = state_20718;
var statearr_20740_22597 = state_20718__$1;
(statearr_20740_22597[(2)] = inst_20711);

(statearr_20740_22597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (3))){
var inst_20713 = (state_20718[(2)]);
var state_20718__$1 = state_20718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20718__$1,inst_20713);
} else {
if((state_val_20719 === (2))){
var inst_20685 = (state_20718[(10)]);
var inst_20687 = cljs.core.count(inst_20685);
var inst_20688 = (inst_20687 > (0));
var state_20718__$1 = state_20718;
if(cljs.core.truth_(inst_20688)){
var statearr_20758_22602 = state_20718__$1;
(statearr_20758_22602[(1)] = (4));

} else {
var statearr_20764_22603 = state_20718__$1;
(statearr_20764_22603[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (11))){
var inst_20685 = (state_20718[(10)]);
var inst_20704 = (state_20718[(2)]);
var tmp20741 = inst_20685;
var inst_20685__$1 = tmp20741;
var state_20718__$1 = (function (){var statearr_20777 = state_20718;
(statearr_20777[(10)] = inst_20685__$1);

(statearr_20777[(11)] = inst_20704);

return statearr_20777;
})();
var statearr_20783_22604 = state_20718__$1;
(statearr_20783_22604[(2)] = null);

(statearr_20783_22604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (9))){
var inst_20695 = (state_20718[(7)]);
var state_20718__$1 = state_20718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20718__$1,(11),out,inst_20695);
} else {
if((state_val_20719 === (5))){
var inst_20709 = cljs.core.async.close_BANG_(out);
var state_20718__$1 = state_20718;
var statearr_20800_22605 = state_20718__$1;
(statearr_20800_22605[(2)] = inst_20709);

(statearr_20800_22605[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (10))){
var inst_20707 = (state_20718[(2)]);
var state_20718__$1 = state_20718;
var statearr_20804_22606 = state_20718__$1;
(statearr_20804_22606[(2)] = inst_20707);

(statearr_20804_22606[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (8))){
var inst_20685 = (state_20718[(10)]);
var inst_20696 = (state_20718[(9)]);
var inst_20695 = (state_20718[(7)]);
var inst_20694 = (state_20718[(8)]);
var inst_20699 = (function (){var cs = inst_20685;
var vec__20690 = inst_20694;
var v = inst_20695;
var c = inst_20696;
return (function (p1__20675_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__20675_SHARP_);
});
})();
var inst_20700 = cljs.core.filterv(inst_20699,inst_20685);
var inst_20685__$1 = inst_20700;
var state_20718__$1 = (function (){var statearr_20809 = state_20718;
(statearr_20809[(10)] = inst_20685__$1);

return statearr_20809;
})();
var statearr_20810_22612 = state_20718__$1;
(statearr_20810_22612[(2)] = null);

(statearr_20810_22612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16957__auto__ = null;
var cljs$core$async$state_machine__16957__auto____0 = (function (){
var statearr_20811 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20811[(0)] = cljs$core$async$state_machine__16957__auto__);

(statearr_20811[(1)] = (1));

return statearr_20811;
});
var cljs$core$async$state_machine__16957__auto____1 = (function (state_20718){
while(true){
var ret_value__16958__auto__ = (function (){try{while(true){
var result__16959__auto__ = switch__16956__auto__(state_20718);
if(cljs.core.keyword_identical_QMARK_(result__16959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16959__auto__;
}
break;
}
}catch (e20817){var ex__16960__auto__ = e20817;
var statearr_20819_22623 = state_20718;
(statearr_20819_22623[(2)] = ex__16960__auto__);


if(cljs.core.seq((state_20718[(4)]))){
var statearr_20821_22625 = state_20718;
(statearr_20821_22625[(1)] = cljs.core.first((state_20718[(4)])));

} else {
throw ex__16960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22630 = state_20718;
state_20718 = G__22630;
continue;
} else {
return ret_value__16958__auto__;
}
break;
}
});
cljs$core$async$state_machine__16957__auto__ = function(state_20718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16957__auto____1.call(this,state_20718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16957__auto____0;
cljs$core$async$state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16957__auto____1;
return cljs$core$async$state_machine__16957__auto__;
})()
})();
var state__17713__auto__ = (function (){var statearr_20825 = f__17712__auto__();
(statearr_20825[(6)] = c__17711__auto___22588);

return statearr_20825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17713__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__20833 = arguments.length;
switch (G__20833) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17711__auto___22637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17712__auto__ = (function (){var switch__16956__auto__ = (function (state_20862){
var state_val_20863 = (state_20862[(1)]);
if((state_val_20863 === (7))){
var inst_20841 = (state_20862[(7)]);
var inst_20841__$1 = (state_20862[(2)]);
var inst_20844 = (inst_20841__$1 == null);
var inst_20845 = cljs.core.not(inst_20844);
var state_20862__$1 = (function (){var statearr_20866 = state_20862;
(statearr_20866[(7)] = inst_20841__$1);

return statearr_20866;
})();
if(inst_20845){
var statearr_20867_22638 = state_20862__$1;
(statearr_20867_22638[(1)] = (8));

} else {
var statearr_20868_22639 = state_20862__$1;
(statearr_20868_22639[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20863 === (1))){
var inst_20836 = (0);
var state_20862__$1 = (function (){var statearr_20870 = state_20862;
(statearr_20870[(8)] = inst_20836);

return statearr_20870;
})();
var statearr_20871_22645 = state_20862__$1;
(statearr_20871_22645[(2)] = null);

(statearr_20871_22645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20863 === (4))){
var state_20862__$1 = state_20862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20862__$1,(7),ch);
} else {
if((state_val_20863 === (6))){
var inst_20857 = (state_20862[(2)]);
var state_20862__$1 = state_20862;
var statearr_20873_22646 = state_20862__$1;
(statearr_20873_22646[(2)] = inst_20857);

(statearr_20873_22646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20863 === (3))){
var inst_20859 = (state_20862[(2)]);
var inst_20860 = cljs.core.async.close_BANG_(out);
var state_20862__$1 = (function (){var statearr_20882 = state_20862;
(statearr_20882[(9)] = inst_20859);

return statearr_20882;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20862__$1,inst_20860);
} else {
if((state_val_20863 === (2))){
var inst_20836 = (state_20862[(8)]);
var inst_20838 = (inst_20836 < n);
var state_20862__$1 = state_20862;
if(cljs.core.truth_(inst_20838)){
var statearr_20890_22647 = state_20862__$1;
(statearr_20890_22647[(1)] = (4));

} else {
var statearr_20891_22648 = state_20862__$1;
(statearr_20891_22648[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20863 === (11))){
var inst_20836 = (state_20862[(8)]);
var inst_20848 = (state_20862[(2)]);
var inst_20850 = (inst_20836 + (1));
var inst_20836__$1 = inst_20850;
var state_20862__$1 = (function (){var statearr_20892 = state_20862;
(statearr_20892[(10)] = inst_20848);

(statearr_20892[(8)] = inst_20836__$1);

return statearr_20892;
})();
var statearr_20899_22649 = state_20862__$1;
(statearr_20899_22649[(2)] = null);

(statearr_20899_22649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20863 === (9))){
var state_20862__$1 = state_20862;
var statearr_20900_22651 = state_20862__$1;
(statearr_20900_22651[(2)] = null);

(statearr_20900_22651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20863 === (5))){
var state_20862__$1 = state_20862;
var statearr_20901_22652 = state_20862__$1;
(statearr_20901_22652[(2)] = null);

(statearr_20901_22652[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20863 === (10))){
var inst_20854 = (state_20862[(2)]);
var state_20862__$1 = state_20862;
var statearr_20902_22657 = state_20862__$1;
(statearr_20902_22657[(2)] = inst_20854);

(statearr_20902_22657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20863 === (8))){
var inst_20841 = (state_20862[(7)]);
var state_20862__$1 = state_20862;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20862__$1,(11),out,inst_20841);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16957__auto__ = null;
var cljs$core$async$state_machine__16957__auto____0 = (function (){
var statearr_20904 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20904[(0)] = cljs$core$async$state_machine__16957__auto__);

(statearr_20904[(1)] = (1));

return statearr_20904;
});
var cljs$core$async$state_machine__16957__auto____1 = (function (state_20862){
while(true){
var ret_value__16958__auto__ = (function (){try{while(true){
var result__16959__auto__ = switch__16956__auto__(state_20862);
if(cljs.core.keyword_identical_QMARK_(result__16959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16959__auto__;
}
break;
}
}catch (e20905){var ex__16960__auto__ = e20905;
var statearr_20906_22659 = state_20862;
(statearr_20906_22659[(2)] = ex__16960__auto__);


if(cljs.core.seq((state_20862[(4)]))){
var statearr_20907_22660 = state_20862;
(statearr_20907_22660[(1)] = cljs.core.first((state_20862[(4)])));

} else {
throw ex__16960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22661 = state_20862;
state_20862 = G__22661;
continue;
} else {
return ret_value__16958__auto__;
}
break;
}
});
cljs$core$async$state_machine__16957__auto__ = function(state_20862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16957__auto____1.call(this,state_20862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16957__auto____0;
cljs$core$async$state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16957__auto____1;
return cljs$core$async$state_machine__16957__auto__;
})()
})();
var state__17713__auto__ = (function (){var statearr_20922 = f__17712__auto__();
(statearr_20922[(6)] = c__17711__auto___22637);

return statearr_20922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17713__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20932 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20932 = (function (f,ch,meta20933){
this.f = f;
this.ch = ch;
this.meta20933 = meta20933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20934,meta20933__$1){
var self__ = this;
var _20934__$1 = this;
return (new cljs.core.async.t_cljs$core$async20932(self__.f,self__.ch,meta20933__$1));
}));

(cljs.core.async.t_cljs$core$async20932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20934){
var self__ = this;
var _20934__$1 = this;
return self__.meta20933;
}));

(cljs.core.async.t_cljs$core$async20932.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20932.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20932.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20932.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20932.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20945 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20945 = (function (f,ch,meta20933,_,fn1,meta20946){
this.f = f;
this.ch = ch;
this.meta20933 = meta20933;
this._ = _;
this.fn1 = fn1;
this.meta20946 = meta20946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20947,meta20946__$1){
var self__ = this;
var _20947__$1 = this;
return (new cljs.core.async.t_cljs$core$async20945(self__.f,self__.ch,self__.meta20933,self__._,self__.fn1,meta20946__$1));
}));

(cljs.core.async.t_cljs$core$async20945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20947){
var self__ = this;
var _20947__$1 = this;
return self__.meta20946;
}));

(cljs.core.async.t_cljs$core$async20945.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20945.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async20945.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20945.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__20930_SHARP_){
var G__20952 = (((p1__20930_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20930_SHARP_) : self__.f.call(null,p1__20930_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__20952) : f1.call(null,G__20952));
});
}));

(cljs.core.async.t_cljs$core$async20945.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20933","meta20933",908179893,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20932","cljs.core.async/t_cljs$core$async20932",1628857552,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20946","meta20946",1743771541,null)], null);
}));

(cljs.core.async.t_cljs$core$async20945.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20945.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20945");

(cljs.core.async.t_cljs$core$async20945.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20945");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20945.
 */
cljs.core.async.__GT_t_cljs$core$async20945 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20945(f__$1,ch__$1,meta20933__$1,___$2,fn1__$1,meta20946){
return (new cljs.core.async.t_cljs$core$async20945(f__$1,ch__$1,meta20933__$1,___$2,fn1__$1,meta20946));
});

}

return (new cljs.core.async.t_cljs$core$async20945(self__.f,self__.ch,self__.meta20933,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__20968 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20968) : self__.f.call(null,G__20968));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async20932.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20932.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async20932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20933","meta20933",908179893,null)], null);
}));

(cljs.core.async.t_cljs$core$async20932.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20932");

(cljs.core.async.t_cljs$core$async20932.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20932");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20932.
 */
cljs.core.async.__GT_t_cljs$core$async20932 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20932(f__$1,ch__$1,meta20933){
return (new cljs.core.async.t_cljs$core$async20932(f__$1,ch__$1,meta20933));
});

}

return (new cljs.core.async.t_cljs$core$async20932(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20978 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20978 = (function (f,ch,meta20979){
this.f = f;
this.ch = ch;
this.meta20979 = meta20979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20980,meta20979__$1){
var self__ = this;
var _20980__$1 = this;
return (new cljs.core.async.t_cljs$core$async20978(self__.f,self__.ch,meta20979__$1));
}));

(cljs.core.async.t_cljs$core$async20978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20980){
var self__ = this;
var _20980__$1 = this;
return self__.meta20979;
}));

(cljs.core.async.t_cljs$core$async20978.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20978.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20978.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20978.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20978.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20978.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async20978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20979","meta20979",-498101678,null)], null);
}));

(cljs.core.async.t_cljs$core$async20978.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20978");

(cljs.core.async.t_cljs$core$async20978.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20978");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20978.
 */
cljs.core.async.__GT_t_cljs$core$async20978 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20978(f__$1,ch__$1,meta20979){
return (new cljs.core.async.t_cljs$core$async20978(f__$1,ch__$1,meta20979));
});

}

return (new cljs.core.async.t_cljs$core$async20978(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20991 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20991 = (function (p,ch,meta20992){
this.p = p;
this.ch = ch;
this.meta20992 = meta20992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20993,meta20992__$1){
var self__ = this;
var _20993__$1 = this;
return (new cljs.core.async.t_cljs$core$async20991(self__.p,self__.ch,meta20992__$1));
}));

(cljs.core.async.t_cljs$core$async20991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20993){
var self__ = this;
var _20993__$1 = this;
return self__.meta20992;
}));

(cljs.core.async.t_cljs$core$async20991.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20991.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20991.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20991.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20991.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20991.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20991.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async20991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20992","meta20992",563192964,null)], null);
}));

(cljs.core.async.t_cljs$core$async20991.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20991");

(cljs.core.async.t_cljs$core$async20991.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20991");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20991.
 */
cljs.core.async.__GT_t_cljs$core$async20991 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20991(p__$1,ch__$1,meta20992){
return (new cljs.core.async.t_cljs$core$async20991(p__$1,ch__$1,meta20992));
});

}

return (new cljs.core.async.t_cljs$core$async20991(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__20996 = arguments.length;
switch (G__20996) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17711__auto___22750 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17712__auto__ = (function (){var switch__16956__auto__ = (function (state_21022){
var state_val_21023 = (state_21022[(1)]);
if((state_val_21023 === (7))){
var inst_21018 = (state_21022[(2)]);
var state_21022__$1 = state_21022;
var statearr_21060_22751 = state_21022__$1;
(statearr_21060_22751[(2)] = inst_21018);

(statearr_21060_22751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (1))){
var state_21022__$1 = state_21022;
var statearr_21064_22752 = state_21022__$1;
(statearr_21064_22752[(2)] = null);

(statearr_21064_22752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (4))){
var inst_21004 = (state_21022[(7)]);
var inst_21004__$1 = (state_21022[(2)]);
var inst_21005 = (inst_21004__$1 == null);
var state_21022__$1 = (function (){var statearr_21065 = state_21022;
(statearr_21065[(7)] = inst_21004__$1);

return statearr_21065;
})();
if(cljs.core.truth_(inst_21005)){
var statearr_21066_22757 = state_21022__$1;
(statearr_21066_22757[(1)] = (5));

} else {
var statearr_21067_22760 = state_21022__$1;
(statearr_21067_22760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (6))){
var inst_21004 = (state_21022[(7)]);
var inst_21009 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_21004) : p.call(null,inst_21004));
var state_21022__$1 = state_21022;
if(cljs.core.truth_(inst_21009)){
var statearr_21073_22761 = state_21022__$1;
(statearr_21073_22761[(1)] = (8));

} else {
var statearr_21074_22762 = state_21022__$1;
(statearr_21074_22762[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (3))){
var inst_21020 = (state_21022[(2)]);
var state_21022__$1 = state_21022;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21022__$1,inst_21020);
} else {
if((state_val_21023 === (2))){
var state_21022__$1 = state_21022;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21022__$1,(4),ch);
} else {
if((state_val_21023 === (11))){
var inst_21012 = (state_21022[(2)]);
var state_21022__$1 = state_21022;
var statearr_21076_22763 = state_21022__$1;
(statearr_21076_22763[(2)] = inst_21012);

(statearr_21076_22763[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (9))){
var state_21022__$1 = state_21022;
var statearr_21077_22764 = state_21022__$1;
(statearr_21077_22764[(2)] = null);

(statearr_21077_22764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (5))){
var inst_21007 = cljs.core.async.close_BANG_(out);
var state_21022__$1 = state_21022;
var statearr_21078_22765 = state_21022__$1;
(statearr_21078_22765[(2)] = inst_21007);

(statearr_21078_22765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (10))){
var inst_21015 = (state_21022[(2)]);
var state_21022__$1 = (function (){var statearr_21079 = state_21022;
(statearr_21079[(8)] = inst_21015);

return statearr_21079;
})();
var statearr_21080_22767 = state_21022__$1;
(statearr_21080_22767[(2)] = null);

(statearr_21080_22767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (8))){
var inst_21004 = (state_21022[(7)]);
var state_21022__$1 = state_21022;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21022__$1,(11),out,inst_21004);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16957__auto__ = null;
var cljs$core$async$state_machine__16957__auto____0 = (function (){
var statearr_21081 = [null,null,null,null,null,null,null,null,null];
(statearr_21081[(0)] = cljs$core$async$state_machine__16957__auto__);

(statearr_21081[(1)] = (1));

return statearr_21081;
});
var cljs$core$async$state_machine__16957__auto____1 = (function (state_21022){
while(true){
var ret_value__16958__auto__ = (function (){try{while(true){
var result__16959__auto__ = switch__16956__auto__(state_21022);
if(cljs.core.keyword_identical_QMARK_(result__16959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16959__auto__;
}
break;
}
}catch (e21082){var ex__16960__auto__ = e21082;
var statearr_21083_22769 = state_21022;
(statearr_21083_22769[(2)] = ex__16960__auto__);


if(cljs.core.seq((state_21022[(4)]))){
var statearr_21084_22770 = state_21022;
(statearr_21084_22770[(1)] = cljs.core.first((state_21022[(4)])));

} else {
throw ex__16960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22771 = state_21022;
state_21022 = G__22771;
continue;
} else {
return ret_value__16958__auto__;
}
break;
}
});
cljs$core$async$state_machine__16957__auto__ = function(state_21022){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16957__auto____1.call(this,state_21022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16957__auto____0;
cljs$core$async$state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16957__auto____1;
return cljs$core$async$state_machine__16957__auto__;
})()
})();
var state__17713__auto__ = (function (){var statearr_21085 = f__17712__auto__();
(statearr_21085[(6)] = c__17711__auto___22750);

return statearr_21085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17713__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__21087 = arguments.length;
switch (G__21087) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17711__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17712__auto__ = (function (){var switch__16956__auto__ = (function (state_21161){
var state_val_21162 = (state_21161[(1)]);
if((state_val_21162 === (7))){
var inst_21157 = (state_21161[(2)]);
var state_21161__$1 = state_21161;
var statearr_21168_22776 = state_21161__$1;
(statearr_21168_22776[(2)] = inst_21157);

(statearr_21168_22776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21162 === (20))){
var inst_21122 = (state_21161[(7)]);
var inst_21135 = (state_21161[(2)]);
var inst_21136 = cljs.core.next(inst_21122);
var inst_21104 = inst_21136;
var inst_21105 = null;
var inst_21106 = (0);
var inst_21107 = (0);
var state_21161__$1 = (function (){var statearr_21172 = state_21161;
(statearr_21172[(8)] = inst_21107);

(statearr_21172[(9)] = inst_21106);

(statearr_21172[(10)] = inst_21135);

(statearr_21172[(11)] = inst_21105);

(statearr_21172[(12)] = inst_21104);

return statearr_21172;
})();
var statearr_21174_22777 = state_21161__$1;
(statearr_21174_22777[(2)] = null);

(statearr_21174_22777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21162 === (1))){
var state_21161__$1 = state_21161;
var statearr_21176_22778 = state_21161__$1;
(statearr_21176_22778[(2)] = null);

(statearr_21176_22778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21162 === (4))){
var inst_21090 = (state_21161[(13)]);
var inst_21090__$1 = (state_21161[(2)]);
var inst_21091 = (inst_21090__$1 == null);
var state_21161__$1 = (function (){var statearr_21177 = state_21161;
(statearr_21177[(13)] = inst_21090__$1);

return statearr_21177;
})();
if(cljs.core.truth_(inst_21091)){
var statearr_21178_22779 = state_21161__$1;
(statearr_21178_22779[(1)] = (5));

} else {
var statearr_21179_22780 = state_21161__$1;
(statearr_21179_22780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21162 === (15))){
var state_21161__$1 = state_21161;
var statearr_21183_22781 = state_21161__$1;
(statearr_21183_22781[(2)] = null);

(statearr_21183_22781[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21162 === (21))){
var state_21161__$1 = state_21161;
var statearr_21185_22782 = state_21161__$1;
(statearr_21185_22782[(2)] = null);

(statearr_21185_22782[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21162 === (13))){
var inst_21107 = (state_21161[(8)]);
var inst_21106 = (state_21161[(9)]);
var inst_21105 = (state_21161[(11)]);
var inst_21104 = (state_21161[(12)]);
var inst_21117 = (state_21161[(2)]);
var inst_21119 = (inst_21107 + (1));
var tmp21180 = inst_21106;
var tmp21181 = inst_21105;
var tmp21182 = inst_21104;
var inst_21104__$1 = tmp21182;
var inst_21105__$1 = tmp21181;
var inst_21106__$1 = tmp21180;
var inst_21107__$1 = inst_21119;
var state_21161__$1 = (function (){var statearr_21190 = state_21161;
(statearr_21190[(8)] = inst_21107__$1);

(statearr_21190[(9)] = inst_21106__$1);

(statearr_21190[(14)] = inst_21117);

(statearr_21190[(11)] = inst_21105__$1);

(statearr_21190[(12)] = inst_21104__$1);

return statearr_21190;
})();
var statearr_21191_22786 = state_21161__$1;
(statearr_21191_22786[(2)] = null);

(statearr_21191_22786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21162 === (22))){
var state_21161__$1 = state_21161;
var statearr_21196_22787 = state_21161__$1;
(statearr_21196_22787[(2)] = null);

(statearr_21196_22787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21162 === (6))){
var inst_21090 = (state_21161[(13)]);
var inst_21102 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_21090) : f.call(null,inst_21090));
var inst_21103 = cljs.core.seq(inst_21102);
var inst_21104 = inst_21103;
var inst_21105 = null;
var inst_21106 = (0);
var inst_21107 = (0);
var state_21161__$1 = (function (){var statearr_21202 = state_21161;
(statearr_21202[(8)] = inst_21107);

(statearr_21202[(9)] = inst_21106);

(statearr_21202[(11)] = inst_21105);

(statearr_21202[(12)] = inst_21104);

return statearr_21202;
})();
var statearr_21204_22797 = state_21161__$1;
(statearr_21204_22797[(2)] = null);

(statearr_21204_22797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21162 === (17))){
var inst_21122 = (state_21161[(7)]);
var inst_21126 = cljs.core.chunk_first(inst_21122);
var inst_21127 = cljs.core.chunk_rest(inst_21122);
var inst_21128 = cljs.core.count(inst_21126);
var inst_21104 = inst_21127;
var inst_21105 = inst_21126;
var inst_21106 = inst_21128;
var inst_21107 = (0);
var state_21161__$1 = (function (){var statearr_21205 = state_21161;
(statearr_21205[(8)] = inst_21107);

(statearr_21205[(9)] = inst_21106);

(statearr_21205[(11)] = inst_21105);

(statearr_21205[(12)] = inst_21104);

return statearr_21205;
})();
var statearr_21208_22800 = state_21161__$1;
(statearr_21208_22800[(2)] = null);

(statearr_21208_22800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21162 === (3))){
var inst_21159 = (state_21161[(2)]);
var state_21161__$1 = state_21161;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21161__$1,inst_21159);
} else {
if((state_val_21162 === (12))){
var inst_21144 = (state_21161[(2)]);
var state_21161__$1 = state_21161;
var statearr_21212_22801 = state_21161__$1;
(statearr_21212_22801[(2)] = inst_21144);

(statearr_21212_22801[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21162 === (2))){
var state_21161__$1 = state_21161;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21161__$1,(4),in$);
} else {
if((state_val_21162 === (23))){
var inst_21155 = (state_21161[(2)]);
var state_21161__$1 = state_21161;
var statearr_21213_22807 = state_21161__$1;
(statearr_21213_22807[(2)] = inst_21155);

(statearr_21213_22807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21162 === (19))){
var inst_21139 = (state_21161[(2)]);
var state_21161__$1 = state_21161;
var statearr_21219_22808 = state_21161__$1;
(statearr_21219_22808[(2)] = inst_21139);

(statearr_21219_22808[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21162 === (11))){
var inst_21122 = (state_21161[(7)]);
var inst_21104 = (state_21161[(12)]);
var inst_21122__$1 = cljs.core.seq(inst_21104);
var state_21161__$1 = (function (){var statearr_21224 = state_21161;
(statearr_21224[(7)] = inst_21122__$1);

return statearr_21224;
})();
if(inst_21122__$1){
var statearr_21225_22809 = state_21161__$1;
(statearr_21225_22809[(1)] = (14));

} else {
var statearr_21231_22810 = state_21161__$1;
(statearr_21231_22810[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21162 === (9))){
var inst_21146 = (state_21161[(2)]);
var inst_21150 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_21161__$1 = (function (){var statearr_21232 = state_21161;
(statearr_21232[(15)] = inst_21146);

return statearr_21232;
})();
if(cljs.core.truth_(inst_21150)){
var statearr_21233_22815 = state_21161__$1;
(statearr_21233_22815[(1)] = (21));

} else {
var statearr_21234_22816 = state_21161__$1;
(statearr_21234_22816[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21162 === (5))){
var inst_21096 = cljs.core.async.close_BANG_(out);
var state_21161__$1 = state_21161;
var statearr_21235_22817 = state_21161__$1;
(statearr_21235_22817[(2)] = inst_21096);

(statearr_21235_22817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21162 === (14))){
var inst_21122 = (state_21161[(7)]);
var inst_21124 = cljs.core.chunked_seq_QMARK_(inst_21122);
var state_21161__$1 = state_21161;
if(inst_21124){
var statearr_21236_22818 = state_21161__$1;
(statearr_21236_22818[(1)] = (17));

} else {
var statearr_21237_22819 = state_21161__$1;
(statearr_21237_22819[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21162 === (16))){
var inst_21142 = (state_21161[(2)]);
var state_21161__$1 = state_21161;
var statearr_21238_22820 = state_21161__$1;
(statearr_21238_22820[(2)] = inst_21142);

(statearr_21238_22820[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21162 === (10))){
var inst_21107 = (state_21161[(8)]);
var inst_21105 = (state_21161[(11)]);
var inst_21115 = cljs.core._nth(inst_21105,inst_21107);
var state_21161__$1 = state_21161;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21161__$1,(13),out,inst_21115);
} else {
if((state_val_21162 === (18))){
var inst_21122 = (state_21161[(7)]);
var inst_21132 = cljs.core.first(inst_21122);
var state_21161__$1 = state_21161;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21161__$1,(20),out,inst_21132);
} else {
if((state_val_21162 === (8))){
var inst_21107 = (state_21161[(8)]);
var inst_21106 = (state_21161[(9)]);
var inst_21109 = (inst_21107 < inst_21106);
var inst_21110 = inst_21109;
var state_21161__$1 = state_21161;
if(cljs.core.truth_(inst_21110)){
var statearr_21249_22821 = state_21161__$1;
(statearr_21249_22821[(1)] = (10));

} else {
var statearr_21250_22822 = state_21161__$1;
(statearr_21250_22822[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16957__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16957__auto____0 = (function (){
var statearr_21254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21254[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16957__auto__);

(statearr_21254[(1)] = (1));

return statearr_21254;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16957__auto____1 = (function (state_21161){
while(true){
var ret_value__16958__auto__ = (function (){try{while(true){
var result__16959__auto__ = switch__16956__auto__(state_21161);
if(cljs.core.keyword_identical_QMARK_(result__16959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16959__auto__;
}
break;
}
}catch (e21259){var ex__16960__auto__ = e21259;
var statearr_21260_22823 = state_21161;
(statearr_21260_22823[(2)] = ex__16960__auto__);


if(cljs.core.seq((state_21161[(4)]))){
var statearr_21263_22824 = state_21161;
(statearr_21263_22824[(1)] = cljs.core.first((state_21161[(4)])));

} else {
throw ex__16960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22825 = state_21161;
state_21161 = G__22825;
continue;
} else {
return ret_value__16958__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16957__auto__ = function(state_21161){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16957__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16957__auto____1.call(this,state_21161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16957__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16957__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16957__auto__;
})()
})();
var state__17713__auto__ = (function (){var statearr_21270 = f__17712__auto__();
(statearr_21270[(6)] = c__17711__auto__);

return statearr_21270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17713__auto__);
}));

return c__17711__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__21286 = arguments.length;
switch (G__21286) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__21302 = arguments.length;
switch (G__21302) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__21311 = arguments.length;
switch (G__21311) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17711__auto___22834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17712__auto__ = (function (){var switch__16956__auto__ = (function (state_21335){
var state_val_21336 = (state_21335[(1)]);
if((state_val_21336 === (7))){
var inst_21330 = (state_21335[(2)]);
var state_21335__$1 = state_21335;
var statearr_21337_22835 = state_21335__$1;
(statearr_21337_22835[(2)] = inst_21330);

(statearr_21337_22835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (1))){
var inst_21312 = null;
var state_21335__$1 = (function (){var statearr_21338 = state_21335;
(statearr_21338[(7)] = inst_21312);

return statearr_21338;
})();
var statearr_21339_22836 = state_21335__$1;
(statearr_21339_22836[(2)] = null);

(statearr_21339_22836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (4))){
var inst_21315 = (state_21335[(8)]);
var inst_21315__$1 = (state_21335[(2)]);
var inst_21316 = (inst_21315__$1 == null);
var inst_21317 = cljs.core.not(inst_21316);
var state_21335__$1 = (function (){var statearr_21342 = state_21335;
(statearr_21342[(8)] = inst_21315__$1);

return statearr_21342;
})();
if(inst_21317){
var statearr_21344_22842 = state_21335__$1;
(statearr_21344_22842[(1)] = (5));

} else {
var statearr_21345_22843 = state_21335__$1;
(statearr_21345_22843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (6))){
var state_21335__$1 = state_21335;
var statearr_21348_22844 = state_21335__$1;
(statearr_21348_22844[(2)] = null);

(statearr_21348_22844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (3))){
var inst_21332 = (state_21335[(2)]);
var inst_21333 = cljs.core.async.close_BANG_(out);
var state_21335__$1 = (function (){var statearr_21351 = state_21335;
(statearr_21351[(9)] = inst_21332);

return statearr_21351;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21335__$1,inst_21333);
} else {
if((state_val_21336 === (2))){
var state_21335__$1 = state_21335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21335__$1,(4),ch);
} else {
if((state_val_21336 === (11))){
var inst_21315 = (state_21335[(8)]);
var inst_21324 = (state_21335[(2)]);
var inst_21312 = inst_21315;
var state_21335__$1 = (function (){var statearr_21355 = state_21335;
(statearr_21355[(10)] = inst_21324);

(statearr_21355[(7)] = inst_21312);

return statearr_21355;
})();
var statearr_21356_22846 = state_21335__$1;
(statearr_21356_22846[(2)] = null);

(statearr_21356_22846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (9))){
var inst_21315 = (state_21335[(8)]);
var state_21335__$1 = state_21335;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21335__$1,(11),out,inst_21315);
} else {
if((state_val_21336 === (5))){
var inst_21315 = (state_21335[(8)]);
var inst_21312 = (state_21335[(7)]);
var inst_21319 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21315,inst_21312);
var state_21335__$1 = state_21335;
if(inst_21319){
var statearr_21358_22848 = state_21335__$1;
(statearr_21358_22848[(1)] = (8));

} else {
var statearr_21359_22849 = state_21335__$1;
(statearr_21359_22849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (10))){
var inst_21327 = (state_21335[(2)]);
var state_21335__$1 = state_21335;
var statearr_21360_22850 = state_21335__$1;
(statearr_21360_22850[(2)] = inst_21327);

(statearr_21360_22850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (8))){
var inst_21312 = (state_21335[(7)]);
var tmp21357 = inst_21312;
var inst_21312__$1 = tmp21357;
var state_21335__$1 = (function (){var statearr_21363 = state_21335;
(statearr_21363[(7)] = inst_21312__$1);

return statearr_21363;
})();
var statearr_21364_22851 = state_21335__$1;
(statearr_21364_22851[(2)] = null);

(statearr_21364_22851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16957__auto__ = null;
var cljs$core$async$state_machine__16957__auto____0 = (function (){
var statearr_21365 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21365[(0)] = cljs$core$async$state_machine__16957__auto__);

(statearr_21365[(1)] = (1));

return statearr_21365;
});
var cljs$core$async$state_machine__16957__auto____1 = (function (state_21335){
while(true){
var ret_value__16958__auto__ = (function (){try{while(true){
var result__16959__auto__ = switch__16956__auto__(state_21335);
if(cljs.core.keyword_identical_QMARK_(result__16959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16959__auto__;
}
break;
}
}catch (e21366){var ex__16960__auto__ = e21366;
var statearr_21367_22854 = state_21335;
(statearr_21367_22854[(2)] = ex__16960__auto__);


if(cljs.core.seq((state_21335[(4)]))){
var statearr_21369_22856 = state_21335;
(statearr_21369_22856[(1)] = cljs.core.first((state_21335[(4)])));

} else {
throw ex__16960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22857 = state_21335;
state_21335 = G__22857;
continue;
} else {
return ret_value__16958__auto__;
}
break;
}
});
cljs$core$async$state_machine__16957__auto__ = function(state_21335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16957__auto____1.call(this,state_21335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16957__auto____0;
cljs$core$async$state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16957__auto____1;
return cljs$core$async$state_machine__16957__auto__;
})()
})();
var state__17713__auto__ = (function (){var statearr_21380 = f__17712__auto__();
(statearr_21380[(6)] = c__17711__auto___22834);

return statearr_21380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17713__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__21384 = arguments.length;
switch (G__21384) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17711__auto___22860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17712__auto__ = (function (){var switch__16956__auto__ = (function (state_21422){
var state_val_21423 = (state_21422[(1)]);
if((state_val_21423 === (7))){
var inst_21418 = (state_21422[(2)]);
var state_21422__$1 = state_21422;
var statearr_21424_22862 = state_21422__$1;
(statearr_21424_22862[(2)] = inst_21418);

(statearr_21424_22862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21423 === (1))){
var inst_21385 = (new Array(n));
var inst_21386 = inst_21385;
var inst_21387 = (0);
var state_21422__$1 = (function (){var statearr_21425 = state_21422;
(statearr_21425[(7)] = inst_21386);

(statearr_21425[(8)] = inst_21387);

return statearr_21425;
})();
var statearr_21426_22863 = state_21422__$1;
(statearr_21426_22863[(2)] = null);

(statearr_21426_22863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21423 === (4))){
var inst_21390 = (state_21422[(9)]);
var inst_21390__$1 = (state_21422[(2)]);
var inst_21391 = (inst_21390__$1 == null);
var inst_21392 = cljs.core.not(inst_21391);
var state_21422__$1 = (function (){var statearr_21427 = state_21422;
(statearr_21427[(9)] = inst_21390__$1);

return statearr_21427;
})();
if(inst_21392){
var statearr_21428_22864 = state_21422__$1;
(statearr_21428_22864[(1)] = (5));

} else {
var statearr_21429_22865 = state_21422__$1;
(statearr_21429_22865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21423 === (15))){
var inst_21412 = (state_21422[(2)]);
var state_21422__$1 = state_21422;
var statearr_21432_22871 = state_21422__$1;
(statearr_21432_22871[(2)] = inst_21412);

(statearr_21432_22871[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21423 === (13))){
var state_21422__$1 = state_21422;
var statearr_21433_22872 = state_21422__$1;
(statearr_21433_22872[(2)] = null);

(statearr_21433_22872[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21423 === (6))){
var inst_21387 = (state_21422[(8)]);
var inst_21408 = (inst_21387 > (0));
var state_21422__$1 = state_21422;
if(cljs.core.truth_(inst_21408)){
var statearr_21434_22873 = state_21422__$1;
(statearr_21434_22873[(1)] = (12));

} else {
var statearr_21436_22875 = state_21422__$1;
(statearr_21436_22875[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21423 === (3))){
var inst_21420 = (state_21422[(2)]);
var state_21422__$1 = state_21422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21422__$1,inst_21420);
} else {
if((state_val_21423 === (12))){
var inst_21386 = (state_21422[(7)]);
var inst_21410 = cljs.core.vec(inst_21386);
var state_21422__$1 = state_21422;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21422__$1,(15),out,inst_21410);
} else {
if((state_val_21423 === (2))){
var state_21422__$1 = state_21422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21422__$1,(4),ch);
} else {
if((state_val_21423 === (11))){
var inst_21402 = (state_21422[(2)]);
var inst_21403 = (new Array(n));
var inst_21386 = inst_21403;
var inst_21387 = (0);
var state_21422__$1 = (function (){var statearr_21437 = state_21422;
(statearr_21437[(7)] = inst_21386);

(statearr_21437[(10)] = inst_21402);

(statearr_21437[(8)] = inst_21387);

return statearr_21437;
})();
var statearr_21439_22880 = state_21422__$1;
(statearr_21439_22880[(2)] = null);

(statearr_21439_22880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21423 === (9))){
var inst_21386 = (state_21422[(7)]);
var inst_21400 = cljs.core.vec(inst_21386);
var state_21422__$1 = state_21422;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21422__$1,(11),out,inst_21400);
} else {
if((state_val_21423 === (5))){
var inst_21390 = (state_21422[(9)]);
var inst_21386 = (state_21422[(7)]);
var inst_21395 = (state_21422[(11)]);
var inst_21387 = (state_21422[(8)]);
var inst_21394 = (inst_21386[inst_21387] = inst_21390);
var inst_21395__$1 = (inst_21387 + (1));
var inst_21396 = (inst_21395__$1 < n);
var state_21422__$1 = (function (){var statearr_21449 = state_21422;
(statearr_21449[(11)] = inst_21395__$1);

(statearr_21449[(12)] = inst_21394);

return statearr_21449;
})();
if(cljs.core.truth_(inst_21396)){
var statearr_21450_22881 = state_21422__$1;
(statearr_21450_22881[(1)] = (8));

} else {
var statearr_21451_22882 = state_21422__$1;
(statearr_21451_22882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21423 === (14))){
var inst_21415 = (state_21422[(2)]);
var inst_21416 = cljs.core.async.close_BANG_(out);
var state_21422__$1 = (function (){var statearr_21454 = state_21422;
(statearr_21454[(13)] = inst_21415);

return statearr_21454;
})();
var statearr_21455_22886 = state_21422__$1;
(statearr_21455_22886[(2)] = inst_21416);

(statearr_21455_22886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21423 === (10))){
var inst_21406 = (state_21422[(2)]);
var state_21422__$1 = state_21422;
var statearr_21456_22887 = state_21422__$1;
(statearr_21456_22887[(2)] = inst_21406);

(statearr_21456_22887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21423 === (8))){
var inst_21386 = (state_21422[(7)]);
var inst_21395 = (state_21422[(11)]);
var tmp21452 = inst_21386;
var inst_21386__$1 = tmp21452;
var inst_21387 = inst_21395;
var state_21422__$1 = (function (){var statearr_21457 = state_21422;
(statearr_21457[(7)] = inst_21386__$1);

(statearr_21457[(8)] = inst_21387);

return statearr_21457;
})();
var statearr_21458_22888 = state_21422__$1;
(statearr_21458_22888[(2)] = null);

(statearr_21458_22888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16957__auto__ = null;
var cljs$core$async$state_machine__16957__auto____0 = (function (){
var statearr_21459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21459[(0)] = cljs$core$async$state_machine__16957__auto__);

(statearr_21459[(1)] = (1));

return statearr_21459;
});
var cljs$core$async$state_machine__16957__auto____1 = (function (state_21422){
while(true){
var ret_value__16958__auto__ = (function (){try{while(true){
var result__16959__auto__ = switch__16956__auto__(state_21422);
if(cljs.core.keyword_identical_QMARK_(result__16959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16959__auto__;
}
break;
}
}catch (e21460){var ex__16960__auto__ = e21460;
var statearr_21461_22889 = state_21422;
(statearr_21461_22889[(2)] = ex__16960__auto__);


if(cljs.core.seq((state_21422[(4)]))){
var statearr_21462_22890 = state_21422;
(statearr_21462_22890[(1)] = cljs.core.first((state_21422[(4)])));

} else {
throw ex__16960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22891 = state_21422;
state_21422 = G__22891;
continue;
} else {
return ret_value__16958__auto__;
}
break;
}
});
cljs$core$async$state_machine__16957__auto__ = function(state_21422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16957__auto____1.call(this,state_21422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16957__auto____0;
cljs$core$async$state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16957__auto____1;
return cljs$core$async$state_machine__16957__auto__;
})()
})();
var state__17713__auto__ = (function (){var statearr_21463 = f__17712__auto__();
(statearr_21463[(6)] = c__17711__auto___22860);

return statearr_21463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17713__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__21467 = arguments.length;
switch (G__21467) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17711__auto___22896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17712__auto__ = (function (){var switch__16956__auto__ = (function (state_21514){
var state_val_21516 = (state_21514[(1)]);
if((state_val_21516 === (7))){
var inst_21510 = (state_21514[(2)]);
var state_21514__$1 = state_21514;
var statearr_21526_22898 = state_21514__$1;
(statearr_21526_22898[(2)] = inst_21510);

(statearr_21526_22898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21516 === (1))){
var inst_21470 = [];
var inst_21471 = inst_21470;
var inst_21472 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21514__$1 = (function (){var statearr_21527 = state_21514;
(statearr_21527[(7)] = inst_21471);

(statearr_21527[(8)] = inst_21472);

return statearr_21527;
})();
var statearr_21528_22903 = state_21514__$1;
(statearr_21528_22903[(2)] = null);

(statearr_21528_22903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21516 === (4))){
var inst_21475 = (state_21514[(9)]);
var inst_21475__$1 = (state_21514[(2)]);
var inst_21476 = (inst_21475__$1 == null);
var inst_21477 = cljs.core.not(inst_21476);
var state_21514__$1 = (function (){var statearr_21538 = state_21514;
(statearr_21538[(9)] = inst_21475__$1);

return statearr_21538;
})();
if(inst_21477){
var statearr_21539_22907 = state_21514__$1;
(statearr_21539_22907[(1)] = (5));

} else {
var statearr_21540_22908 = state_21514__$1;
(statearr_21540_22908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21516 === (15))){
var inst_21471 = (state_21514[(7)]);
var inst_21502 = cljs.core.vec(inst_21471);
var state_21514__$1 = state_21514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21514__$1,(18),out,inst_21502);
} else {
if((state_val_21516 === (13))){
var inst_21497 = (state_21514[(2)]);
var state_21514__$1 = state_21514;
var statearr_21553_22909 = state_21514__$1;
(statearr_21553_22909[(2)] = inst_21497);

(statearr_21553_22909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21516 === (6))){
var inst_21471 = (state_21514[(7)]);
var inst_21499 = inst_21471.length;
var inst_21500 = (inst_21499 > (0));
var state_21514__$1 = state_21514;
if(cljs.core.truth_(inst_21500)){
var statearr_21565_22911 = state_21514__$1;
(statearr_21565_22911[(1)] = (15));

} else {
var statearr_21568_22912 = state_21514__$1;
(statearr_21568_22912[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21516 === (17))){
var inst_21507 = (state_21514[(2)]);
var inst_21508 = cljs.core.async.close_BANG_(out);
var state_21514__$1 = (function (){var statearr_21572 = state_21514;
(statearr_21572[(10)] = inst_21507);

return statearr_21572;
})();
var statearr_21575_22916 = state_21514__$1;
(statearr_21575_22916[(2)] = inst_21508);

(statearr_21575_22916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21516 === (3))){
var inst_21512 = (state_21514[(2)]);
var state_21514__$1 = state_21514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21514__$1,inst_21512);
} else {
if((state_val_21516 === (12))){
var inst_21471 = (state_21514[(7)]);
var inst_21490 = cljs.core.vec(inst_21471);
var state_21514__$1 = state_21514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21514__$1,(14),out,inst_21490);
} else {
if((state_val_21516 === (2))){
var state_21514__$1 = state_21514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21514__$1,(4),ch);
} else {
if((state_val_21516 === (11))){
var inst_21475 = (state_21514[(9)]);
var inst_21471 = (state_21514[(7)]);
var inst_21479 = (state_21514[(11)]);
var inst_21487 = inst_21471.push(inst_21475);
var tmp21577 = inst_21471;
var inst_21471__$1 = tmp21577;
var inst_21472 = inst_21479;
var state_21514__$1 = (function (){var statearr_21593 = state_21514;
(statearr_21593[(7)] = inst_21471__$1);

(statearr_21593[(12)] = inst_21487);

(statearr_21593[(8)] = inst_21472);

return statearr_21593;
})();
var statearr_21596_22920 = state_21514__$1;
(statearr_21596_22920[(2)] = null);

(statearr_21596_22920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21516 === (9))){
var inst_21472 = (state_21514[(8)]);
var inst_21483 = cljs.core.keyword_identical_QMARK_(inst_21472,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_21514__$1 = state_21514;
var statearr_21599_22923 = state_21514__$1;
(statearr_21599_22923[(2)] = inst_21483);

(statearr_21599_22923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21516 === (5))){
var inst_21475 = (state_21514[(9)]);
var inst_21479 = (state_21514[(11)]);
var inst_21480 = (state_21514[(13)]);
var inst_21472 = (state_21514[(8)]);
var inst_21479__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_21475) : f.call(null,inst_21475));
var inst_21480__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21479__$1,inst_21472);
var state_21514__$1 = (function (){var statearr_21604 = state_21514;
(statearr_21604[(11)] = inst_21479__$1);

(statearr_21604[(13)] = inst_21480__$1);

return statearr_21604;
})();
if(inst_21480__$1){
var statearr_21605_22929 = state_21514__$1;
(statearr_21605_22929[(1)] = (8));

} else {
var statearr_21606_22930 = state_21514__$1;
(statearr_21606_22930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21516 === (14))){
var inst_21475 = (state_21514[(9)]);
var inst_21479 = (state_21514[(11)]);
var inst_21492 = (state_21514[(2)]);
var inst_21493 = [];
var inst_21494 = inst_21493.push(inst_21475);
var inst_21471 = inst_21493;
var inst_21472 = inst_21479;
var state_21514__$1 = (function (){var statearr_21615 = state_21514;
(statearr_21615[(7)] = inst_21471);

(statearr_21615[(14)] = inst_21494);

(statearr_21615[(15)] = inst_21492);

(statearr_21615[(8)] = inst_21472);

return statearr_21615;
})();
var statearr_21616_22931 = state_21514__$1;
(statearr_21616_22931[(2)] = null);

(statearr_21616_22931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21516 === (16))){
var state_21514__$1 = state_21514;
var statearr_21620_22934 = state_21514__$1;
(statearr_21620_22934[(2)] = null);

(statearr_21620_22934[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21516 === (10))){
var inst_21485 = (state_21514[(2)]);
var state_21514__$1 = state_21514;
if(cljs.core.truth_(inst_21485)){
var statearr_21621_22935 = state_21514__$1;
(statearr_21621_22935[(1)] = (11));

} else {
var statearr_21622_22937 = state_21514__$1;
(statearr_21622_22937[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21516 === (18))){
var inst_21504 = (state_21514[(2)]);
var state_21514__$1 = state_21514;
var statearr_21623_22938 = state_21514__$1;
(statearr_21623_22938[(2)] = inst_21504);

(statearr_21623_22938[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21516 === (8))){
var inst_21480 = (state_21514[(13)]);
var state_21514__$1 = state_21514;
var statearr_21625_22939 = state_21514__$1;
(statearr_21625_22939[(2)] = inst_21480);

(statearr_21625_22939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16957__auto__ = null;
var cljs$core$async$state_machine__16957__auto____0 = (function (){
var statearr_21631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21631[(0)] = cljs$core$async$state_machine__16957__auto__);

(statearr_21631[(1)] = (1));

return statearr_21631;
});
var cljs$core$async$state_machine__16957__auto____1 = (function (state_21514){
while(true){
var ret_value__16958__auto__ = (function (){try{while(true){
var result__16959__auto__ = switch__16956__auto__(state_21514);
if(cljs.core.keyword_identical_QMARK_(result__16959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16959__auto__;
}
break;
}
}catch (e21642){var ex__16960__auto__ = e21642;
var statearr_21643_22944 = state_21514;
(statearr_21643_22944[(2)] = ex__16960__auto__);


if(cljs.core.seq((state_21514[(4)]))){
var statearr_21648_22945 = state_21514;
(statearr_21648_22945[(1)] = cljs.core.first((state_21514[(4)])));

} else {
throw ex__16960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22950 = state_21514;
state_21514 = G__22950;
continue;
} else {
return ret_value__16958__auto__;
}
break;
}
});
cljs$core$async$state_machine__16957__auto__ = function(state_21514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16957__auto____1.call(this,state_21514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16957__auto____0;
cljs$core$async$state_machine__16957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16957__auto____1;
return cljs$core$async$state_machine__16957__auto__;
})()
})();
var state__17713__auto__ = (function (){var statearr_21661 = f__17712__auto__();
(statearr_21661[(6)] = c__17711__auto___22896);

return statearr_21661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17713__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
