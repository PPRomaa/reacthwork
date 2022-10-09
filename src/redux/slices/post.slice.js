import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../../services";

const initialState = {
    posts: [],
    currentPost: null,
    loading: false,
    error: null,
    postFromAPI: null,
};

const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await postService.getAll();
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const getByIdPost = createAsyncThunk(
    'postSlice/getByIdPost',
    async ({id}, {rejectedWithValue}) => {
        try {
            const {data} = await postService.getById(id);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data())
        }
    }
);

const userSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        setCurrentPost: (state, action) => {
            state.currentPost = action.payload
        },
        deleteByIdPost: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload);
            state.posts.splice(index, 1)
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllPosts.fulfilled, (state, action) => {
                state.posts = action.payload
                state.loading = false
            })
            .addCase(getAllPosts.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAllPosts.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getByIdPost.fulfilled, (state, action) => {
                state.postFromAPI = action.payload
            })
});

const {reducer: postReducer, actions: {setCurrentPost,deleteByIdPost}} = userSlice;

const postActions = {
    getAllPosts,
    setCurrentPost,
    getByIdPost,
    deleteByIdPost
}

export {
    postReducer,
    postActions
}