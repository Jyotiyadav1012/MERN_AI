import { create } from 'zustand'

const useUserStore = create((set) => ({
  selectedMovie: null,
  booking: null,
  setSelectedMovie: (movie) => set((state) => ({ selectedMovie: movie })),
  setBooking: (data) => set((state) => ({ booking: data })),
  
}))
export default useUserStore;
