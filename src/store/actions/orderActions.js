export const createOrder = (id)=>{
    return(dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore =getFirestore();

        const order=firestore.collection('orders').doc(id);
        order.update({ progress: "done" }).then(()=>{
            dispatch({type:'UPDATE_ORDER',id});
        }).catch((err)=>{
            dispatch({type:'UPDATE_ORDER_ERROR',err});
        })    
    }
};
