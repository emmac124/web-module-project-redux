export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = (feature, price) => {
    return {type: "ADD_FEATURE", payload: {feature: feature, price: price}}
}