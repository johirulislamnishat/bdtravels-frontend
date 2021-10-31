import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddDestination.css'

const AddDestination = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('https://chilling-pirate-27336.herokuapp.com/travelData/', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Success');
                    reset();
                }
            })
    };

    return (
        <Container className='my-5'>
            <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column w-75 mx-auto'>

                <input className='inputStyle form-control' {...register("img", { required: true })} placeholder='Enter Image Url' />

                <input className='inputStyle form-control' {...register("discount", { required: true })} placeholder='Enter Discount Price' />
                <input className='inputStyle form-control' {...register("location", { required: true })} placeholder='Enter Location' />
                <input className='inputStyle form-control' {...register("title", { required: true })} placeholder='Enter Title' />
                <textarea className='inputStyle form-control' {...register("description", { required: true })} placeholder='Enter Description' />
                <input type='number' className='inputStyle form-control' {...register("rating", { required: true })} placeholder='Enter Rating' />
                <input type='number' className='inputStyle form-control' {...register("price", { required: true })} placeholder='Enter Price' />

                {errors.exampleRequired && <span>This field is required</span>}

                <input className='inputBtnStyle mt-4 w-50 mx-auto rounded-pill bg-primary py-3' type="submit" />
            </form>
        </Container>
    );
};

export default AddDestination;