import AllCourses from "../data/AllCoursesData.json";

const completeInfo = {
    allAvailableCourses : JSON.parse(JSON.stringify(AllCourses)),
    wishListArray : JSON.parse(JSON.stringify(AllCourses)).slice(0,0),
    originalWishList : JSON.parse(JSON.stringify(AllCourses)).slice(0,0),
    searchValue : "",
    sortType : "0"
}

function removeItemFromWishList(id: any,wishList: any[],allCourses:any){
    let index = wishList.findIndex(e =>  e.uniqueID === id.uniqueID);
    let indexForAllCourses = allCourses.findIndex((e: { uniqueID: any; }) =>  e.uniqueID === id.uniqueID);
    allCourses[indexForAllCourses].insideWishList = false;

    if(index !== -1){
        console.log(wishList);
        wishList.splice(index,1);
        console.log(wishList);
        return wishList;
    }
    else
    return wishList;
}

function removeItemFromCart(id: any,wishListArray: any,allCourses:any){
    let index = wishListArray.findIndex((e: { uniqueID: any; }) =>  e.uniqueID === id.uniqueID);
    let indexForAllCourses = allCourses.findIndex((e: { uniqueID: any; }) =>  e.uniqueID === id.uniqueID);
    allCourses[indexForAllCourses].insideCart = true;

    if(index !== -1){
        wishListArray[index].insideCart = false;
        wishListArray.splice(index,1);
        console.log(wishListArray);
        return wishListArray;
    }
    else
    return wishListArray;
}

function addItemToCart(id: any,cartArray: any,allCourses: any){
    let index = allCourses.findIndex((e: { uniqueID: any; }) =>  e.uniqueID === id.uniqueID);
    let newCopy = cartArray.slice();
    allCourses[index].insideCart = true;
    return [...newCopy,id];
}

function addItemToWishList(id:any,wishListArray:any,allCourses:any){
    let index = allCourses.findIndex((e: { uniqueID: any; }) =>  e.uniqueID === id.uniqueID);
    let newCopy = wishListArray.slice();
    allCourses[index].insideWishList = true;
    return [...newCopy,id];
}

function checkoutAllCourses(cartArray: any){
    let newCopy = cartArray.slice();
    newCopy.splice(0, newCopy.length);
    return newCopy;
}


const RootReducer = (state = completeInfo,action: any) =>{
    switch(action.type){
        case "ADD_TO_CART":
            console.log(state);
            return {
                ...state,
                // wishListArray : [...state.wishListArray,action.id]
                wishListArray : addItemToCart(action.id,state.wishListArray,state.allAvailableCourses)
            }
        case "ADD_TO_WISHLIST":
            return {
                ...state,
                // originalWishList : [...state.originalWishList,action.id]
                originalWishList : addItemToWishList(action.id,state.originalWishList,state.allAvailableCourses)
            }
        case "REMOVE_FROM_WISHLIST":
            return{
                ...state,
                // originalWishList : state.originalWishList.filter((e:any) => e.uniqueID !== action.id.uniqueID)
                originalWishList : removeItemFromWishList(action.id,state.originalWishList,state.allAvailableCourses)

            }
        case "REMOVE_FROM_CART":
            return{
                ...state,
                wishListArray : removeItemFromCart(action.id,state.wishListArray,state.allAvailableCourses)
            }
        
        case "FILTERED_STRING" :
            return{
                ...state,
                searchValue : action.filterString
            }
        
        case "SORT_CARDS":
            return{
                ...state,
                sortType : action.pattern
            }
        
        case  "FINAL_CHECKOUT" :
            return{
                ...state,
                wishListArray : checkoutAllCourses(state.wishListArray)
            }

        default: 
            return state;
    }

}

export default RootReducer;