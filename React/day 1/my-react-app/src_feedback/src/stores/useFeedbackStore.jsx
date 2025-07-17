import { create } from 'zustand'

export const useFeedbackStore = create((set) => ({
  feedback: [{
    name: 'Ramesh',
    rating: "5",
    comments: 'some comments',
    course: 'abc' 
      
  }],
  //increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllFeedback: () => set({ bears: [] }),
  //updateBears: (newBears) => set({ bears: newBears }),
  addFeedback: (feedback) => set((state) => ({ feedback: [...state.feedbacks, feedback] })),
}))
