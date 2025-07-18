(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/context/CreditPartyContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CreditPartyProvider": (()=>CreditPartyProvider),
    "useCreditParties": (()=>useCreditParties)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const CreditPartyContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const CreditPartyProvider = ({ children })=>{
    _s();
    const [creditParties, setCreditParties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [payments, setPayments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Load data from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreditPartyProvider.useEffect": ()=>{
            try {
                const savedParties = localStorage.getItem('creditParties');
                const savedPayments = localStorage.getItem('payments');
                if (savedParties) {
                    setCreditParties(JSON.parse(savedParties));
                }
                if (savedPayments) {
                    setPayments(JSON.parse(savedPayments));
                }
            } catch (error) {
                console.error('Error loading data from localStorage:', error);
            }
        }
    }["CreditPartyProvider.useEffect"], []);
    // Save data to localStorage whenever it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreditPartyProvider.useEffect": ()=>{
            try {
                localStorage.setItem('creditParties', JSON.stringify(creditParties));
                localStorage.setItem('payments', JSON.stringify(payments));
            } catch (error) {
                console.error('Error saving data to localStorage:', error);
            }
        }
    }["CreditPartyProvider.useEffect"], [
        creditParties,
        payments
    ]);
    const addCreditParty = (partyData)=>{
        try {
            const newParty = {
                ...partyData,
                id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
                remainingBalance: partyData.totalCreditAmount
            };
            setCreditParties((prev)=>[
                    ...prev,
                    newParty
                ]);
        } catch (error) {
            console.error('Error adding credit party:', error);
        }
    };
    const updateCreditParty = (id, updates)=>{
        try {
            setCreditParties((prev)=>prev.map((party)=>party.id === id ? {
                        ...party,
                        ...updates
                    } : party));
        } catch (error) {
            console.error('Error updating credit party:', error);
        }
    };
    const addPayment = (paymentData)=>{
        try {
            const newPayment = {
                ...paymentData,
                id: Date.now().toString() + Math.random().toString(36).substr(2, 9)
            };
            setPayments((prev)=>[
                    ...prev,
                    newPayment
                ]);
            // Update remaining balance for the credit party
            setCreditParties((prev)=>prev.map((party)=>{
                    if (party.id === paymentData.creditPartyId) {
                        const amountChange = paymentData.type === 'payment' ? -paymentData.amount : paymentData.amount;
                        return {
                            ...party,
                            remainingBalance: Math.max(0, party.remainingBalance + amountChange)
                        };
                    }
                    return party;
                }));
        } catch (error) {
            console.error('Error adding payment:', error);
        }
    };
    const removePayment = (id)=>{
        try {
            const paymentToRemove = payments.find((p)=>p.id === id);
            if (!paymentToRemove) return;
            setPayments((prev)=>prev.filter((p)=>p.id !== id));
            // Revert the balance change
            setCreditParties((prev)=>prev.map((party)=>{
                    if (party.id === paymentToRemove.creditPartyId) {
                        const amountChange = paymentToRemove.type === 'payment' ? paymentToRemove.amount : -paymentToRemove.amount;
                        return {
                            ...party,
                            remainingBalance: Math.max(0, party.remainingBalance + amountChange)
                        };
                    }
                    return party;
                }));
        } catch (error) {
            console.error('Error removing payment:', error);
        }
    };
    const getCreditPartyById = (id)=>{
        return creditParties.find((party)=>party.id === id);
    };
    const getPaymentsByPartyId = (partyId)=>{
        return payments.filter((payment)=>payment.creditPartyId === partyId);
    };
    const getTotalOutstanding = ()=>{
        return creditParties.reduce((total, party)=>total + party.remainingBalance, 0);
    };
    const getTotalPaid = ()=>{
        return payments.filter((p)=>p.type === 'payment').reduce((total, payment)=>total + payment.amount, 0);
    };
    const getOverdueParties = ()=>{
        const today = new Date();
        return creditParties.filter((party)=>{
            if (!party.dueDate || party.remainingBalance <= 0) return false;
            return new Date(party.dueDate) < today;
        });
    };
    const value = {
        creditParties,
        payments,
        addCreditParty,
        updateCreditParty,
        addPayment,
        removePayment,
        getCreditPartyById,
        getPaymentsByPartyId,
        getTotalOutstanding,
        getTotalPaid,
        getOverdueParties
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CreditPartyContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/CreditPartyContext.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
};
_s(CreditPartyProvider, "U0Pt7WTJGB2CKNGe0kk5qt7bZaw=");
_c = CreditPartyProvider;
const useCreditParties = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CreditPartyContext);
    if (context === undefined) {
        throw new Error('useCreditParties must be used within a CreditPartyProvider');
    }
    return context;
};
_s1(useCreditParties, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CreditPartyProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_context_CreditPartyContext_tsx_fa1bdfac._.js.map