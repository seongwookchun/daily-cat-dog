const initialTimelineState = {
  // timeline: { timestamp: [], category: [] },
  timestamp: ['2021-05-04_18:39:18', '2021-05-04_18:39:18'],
  category: ['식사', '케어'],
};

export const timelineReducer = (state = initialTimelineState, action) => {
  switch (action.type) {
    case 'GET':
      return { state };
    case 'POST':
      console.log(`POST: ${action.newItem}`);
      console.log(`lenOftimeline: ${state.timestamp.length}`);
      // console.log(`entire object: \n${state.timeline}`);
      return {
        timestamp: [...state.timestamp, action.newItem.timestamp],
        category: [...state.category, action.newItem.category],
      };
    case 'UPDATE':
      return action.payload;
    case 'DELETE':
      return action.payload;
    default:
      return state;
  }
};
