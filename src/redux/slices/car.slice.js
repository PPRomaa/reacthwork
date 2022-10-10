import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    carforUpdate: null,
    loading: false,
    error: null
};
const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);
const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, {rejectedWithValue}) => {
        try {
            const {data} = await carService.deleteById(id);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({id, car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.updateById(id, car);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        carUp: (state, action) => {
            state.carforUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
                state.loading = false
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true
            })
            .addCase(createCar.fulfilled, (state, action) => {
                state.cars = [...state.cars, action.payload]
            })
            .addCase(deleteCar.fulfilled, (state, action) => {
                const index = state.cars.findIndex(cars => cars.id === action.payload);
                state.cars.splice(index, 1)
            })
            .addCase(updateCar.fulfilled,(state, action) => {
                const index = state.cars.findIndex(cars => cars.id === action.payload.id);
                state.cars[index]=action.payload

            })
}
);

const {reducer: carReducer, actions: {carUp}} = carSlice;

const carActions = {
    carUp,
    getAll,
    createCar,
    deleteCar,
    updateCar
};

export {
    carReducer,
    carActions
}
