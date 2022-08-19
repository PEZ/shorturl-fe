goog.provide('cljs.core.async.impl.ioc_helpers');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[(1)]),new cljs.core.Keyword(null,"finished","finished",-1018867731));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.ioc_helpers !== 'undefined') && (typeof cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers17015 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers17015 = (function (f,meta17016){
this.f = f;
this.meta17016 = meta17016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers17015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17017,meta17016__$1){
var self__ = this;
var _17017__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers17015(self__.f,meta17016__$1));
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers17015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17017){
var self__ = this;
var _17017__$1 = this;
return self__.meta17016;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers17015.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers17015.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers17015.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers17015.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers17015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta17016","meta17016",1050904706,null)], null);
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers17015.cljs$lang$type = true);

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers17015.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers17015");

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers17015.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers17015");
}));

/**
 * Positional factory function for cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers17015.
 */
cljs.core.async.impl.ioc_helpers.__GT_t_cljs$core$async$impl$ioc_helpers17015 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t_cljs$core$async$impl$ioc_helpers17015(f__$1,meta17016){
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers17015(f__$1,meta17016));
});

}

return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers17015(f,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
var fexpr__17048 = cljs.core.async.impl.ioc_helpers.aget_object(state,(0));
return (fexpr__17048.cljs$core$IFn$_invoke$arity$1 ? fexpr__17048.cljs$core$IFn$_invoke$arity$1(state) : fexpr__17048.call(null,state));
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e17053){if((e17053 instanceof Object)){
var ex = e17053;
cljs.core.async.impl.ioc_helpers.aget_object(state,(6)).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e17053;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__5802__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_17066_17102 = state;
(statearr_17066_17102[(2)] = x);

(statearr_17066_17102[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__5802__auto__)){
var cb = temp__5802__auto__;
var statearr_17069_17103 = state;
(statearr_17069_17103[(2)] = cljs.core.deref(cb));

(statearr_17069_17103[(1)] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__5802__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_17077_17108 = state;
(statearr_17077_17108[(2)] = ret_val);

(statearr_17077_17108[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__5802__auto__)){
var cb = temp__5802__auto__;
var statearr_17079_17116 = state;
(statearr_17079_17116[(2)] = cljs.core.deref(cb));

(statearr_17079_17116[(1)] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[(6)]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler((function (_){
return null;
})));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

//# sourceMappingURL=cljs.core.async.impl.ioc_helpers.js.map
