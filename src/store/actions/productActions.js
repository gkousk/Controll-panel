export const createProduct = (product)=>{
    return(dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore =getFirestore();
        console.log(product);
        firestore.collection('products').add({
            category:product.category,
            description:product.description,
            image:product.url,
            name:product.name,
            price:product.price
        }).then(()=>{
            dispatch({type:'CREATE_PRODUCT',product});
        }).catch((err)=>{
            dispatch({type:'CREATE_PRODUCT_ERROR',err});
        })    
        
    }
};
export const SendMessage = (state)=>{
    return(dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore =getFirestore();
        console.log(state);
        firestore.collection('messages').add({
            ...state
        }).then(()=>{
            dispatch({type:'ADD_MESSAGE',state});
        }).catch((err)=>{
            dispatch({type:'ADD_MESSAGE_ERROR',err});
        })        
        
    }
};

export const updateProduct = (product)=>{
    return(dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore =getFirestore();  
        const id=product.id;
        const name=product.pname;
        const desc=product.desc;
        const price=product.price;
        const image=product.image;
        const category=product.category;
        const productupdate=firestore.collection('products').doc(id);
        if(name!==''){
            productupdate.update({ 
                name: name
            }).then(()=>{
                dispatch({type:'UPDATE_PRODUCT',id});
            }).catch((err)=>{
                dispatch({type:'UPDATE_PRODUCT_ERROR',err});
            })  
        }
        if(desc!==''){
            productupdate.update({ 
                description: desc
            }).then(()=>{
                dispatch({type:'UPDATE_PRODUCT',id});
            }).catch((err)=>{
                dispatch({type:'UPDATE_PRODUCT_ERROR',err});
            })  
        }
        if(price!==''){
            productupdate.update({ 
                price: price
            }).then(()=>{
                dispatch({type:'UPDATE_PRODUCT',id});
            }).catch((err)=>{
                dispatch({type:'UPDATE_PRODUCT_ERROR',err});
            })  
        }
        if(image!==''){
            productupdate.update({ 
                image: image
            }).then(()=>{
                dispatch({type:'UPDATE_PRODUCT',id});
            }).catch((err)=>{
                dispatch({type:'UPDATE_PRODUCT_ERROR',err});
            })  
        }
        if(category!==''){
            productupdate.update({ 
                category: category
            }).then(()=>{
                dispatch({type:'UPDATE_PRODUCT',id});
            }).catch((err)=>{
                dispatch({type:'UPDATE_PRODUCT_ERROR',err});
            })  
        }
        
    }
};

export const deleteProduct = (id1)=>{
    return(dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore =getFirestore();
        const product=firestore.collection('products').doc(id1);
        product.delete().then(()=>{
            dispatch({type:'DELETE_PRODUCT',id1});
        }).catch((err)=>{
            dispatch({type:'DELETE_PRODUCT_ERROR',err});
        })     
    }
};
export const addHot = (product,id)=>{
    return(dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore =getFirestore();
        firestore.collection('hots').doc(id).set({
            id:id,
            name:product.name,
            image:product.image,
            price:product.price
        }).then(()=>{
            dispatch({type:'ADD_HOT',product});
        }).catch((err)=>{
            dispatch({type:'ADD_HOT_ERROR',err});
        })   
    }
};
export const deleteHot = (id)=>{
    return(dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore =getFirestore();
        const product=firestore.collection('hots').doc(id);
        product.delete().then(()=>{
            dispatch({type:'DELETE_HOT',id});
        }).catch((err)=>{
            dispatch({type:'DELETE_HOT_ERROR',err});
        })        
        
    }
};