import { nanoid } from "@reduxjs/toolkit";
import React , {useState} from "react";
import { useDispatch } from "react-redux";

//this is the action that we want to dispatch on clicking button
import { postAdded } from "./postsSlice";
export const AddPostForm = () =>{

    const dispatch = useDispatch()

    const [title ,setTitle] = useState('');
    const [content ,setContent] = useState('')


    const onTitleChanged = e =>{
        setTitle(e.target.value)
    }

    const onContentChanged = e =>{
        setContent(e.target.value)
    }

    const onSavePostClicked = () =>{
        if(title && content){
            dispatch(
                postAdded({
                    id : nanoid(),
                    title,
                    content
                })
            )
        }
        setTitle('');
        setContent('')
    }

    return(
        <section>
            <h2>Add a New Post</h2>
            <form>

                <label htmlFor="postTitle">Post Title</label>
                <input 
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onTitleChanged}/>

                <label htmlFor="postContent">Post Title</label>
                <input 
                type="text"
                id="postContent"
                name="postContent"
                value={content}
                onChange={onContentChanged}/>

                <button type="button" onClick={onSavePostClicked}>Save Post</button>


            </form>
        </section>
    )
}