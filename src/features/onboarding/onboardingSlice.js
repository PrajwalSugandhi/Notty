const initialState = {
    completed: false,
    slides: [
        {
          id: '1',
          image: 'onboarding1.png',
          heading: 'Capture Notes',
          description: 'Easily take and manage your notes.',
        },
        {
          id: '2',
          image: 'onboarding2.png',
          heading: 'Track Tasks',
          description: 'Stay on top of your to-dos.',
        },
  ],
}

const onboardingSlice = createSlice({
    name: 'onboarding',
    initialState,
    reducers: {
        
    }
})