import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { email, set, z } from 'zod';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../stores/userStore';


const BookMovie = () =>{

    const navigate = useNavigate();
    const setBooking = 
        useUserStore((state) => state.setBooking);
    const selectedMovie = 
        useUserStore((state) => state.selectedMovie);

    const userSchema =
    z.object({
        name: z.string().min(3, "Name is required"),
        email: z.string().email("Invalid email address"),
        phone: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be at most 15 digits"),
        tickets: z.number().min(1, "At least one ticket is required").max(10, "You can book a maximum of 10 tickets"),
    }) 

   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
        name: "",
        email: "",
        phone: "",
        tickets: 1,
    }
  });

    const onSubmit = (data) => {
        setBooking({...data, selectedMovie});
        navigate('/');
    }
    if (!selectedMovie) 
        return <h1>No movie selected</h1>
    
    return(
        <div>
            <h1>Book a Movie</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Selected Movie <mark>{selectedMovie.title}</mark></h1>
                <input
                    placeholder='Enter your name'
                    {...register("name")}/>
                <p>{errors.name?.message}</p> 
                <input
                    placeholder='Enter your email'
                    {...register("email")}/>
                <p>{errors.email?.message}</p>
                <input
                    placeholder='Enter your number'
                    {...register("phone")}/>
                <p>{errors.phone?.message}</p>
                <input
                    type="number"
                    placeholder='Enter number of tickets'
                    {...register("tickets", {valueAsNumber: true})}/>
                <p>{errors.tickets?.message}</p>
                <hr />
                <button type="submit">Book Now</button>
            </form>
        </div>
        
    )
}
export default BookMovie;