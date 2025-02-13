import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchInventoryData } from "../actions/inventory";

export interface Product {
  name: string;
  category: string;
  value: string;
  quantity: number;
  price: string;
  isHidden?: boolean;
}

export interface ProductWithIndex extends Omit<Product, "name"> {
  index: number | null;
}

export interface inventoryState {
  products: Product[];
  productLoading: boolean;
}

const initialState: inventoryState = {
  products: [],
  productLoading: true,
};

export const inventorySlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (_, index) => index !== action.payload
      );
    },
    updateVisibliity: (state, action: PayloadAction<number>) => {
        state.products = state.products.map((product, proIndx) => {
           if(proIndx === action.payload) {
             return {
                ...product,
                isHidden: !product.isHidden 
             }
           }
            return product;
        });
    },
    editProduct: (state, action: PayloadAction<ProductWithIndex>) => {
      const { index, ...rest } = action.payload;
      state.products = state.products.map((product, proIndx) => {
        if(proIndx === index) {
          return {
            ...product,
            ...rest
          }
        }
        return product
    })
  }
},
  extraReducers: (builder) => {
    builder.addCase(fetchInventoryData.fulfilled, (state, action) => {
      state.products = action.payload.map((product: Product) => ({
        ...product,
        isHidden: false
      }))
      state.productLoading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { deleteProduct, updateVisibliity, editProduct } = inventorySlice.actions;

export default inventorySlice.reducer;
