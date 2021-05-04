const initialTimelineState = {
  // timeline: { timestamp: [], category: [] },
  timestamp: [
    '2021-05-04_18:39:18',
    '2021-05-04_18:39:18',
    '2021-05-04_18:39:18',
    '2021-05-04_18:39:18',
    '2021-05-04_18:39:18',
    '2021-05-04_18:39:18',
    '2021-05-04_18:39:18',
    '2021-05-04_18:39:18',
    '2021-05-04_18:39:18',
    '2021-05-04_18:39:18',
    '2021-05-04_18:39:18',
    '2021-05-04_18:39:18',
  ],
  category: [
    '식사',
    '약',
    '운동',
    '대소변',
    '케어',
    '진료',
    '식사',
    '약',
    '운동',
    '대소변',
    '케어',
    '진료',
  ],
};

export const timelineReducer = (state = initialTimelineState, action) => {
  switch (action.type) {
    case 'GET':
      return { state };
    case 'APPEND':
      console.log(`POST: ${action.newItem}`);
      console.log(`lenOftimeline: ${state.timestamp.length}`);
      // console.log(`entire object: \n${state.timeline}`);
      return {
        timestamp: [...state.timestamp, action.newItem.timestamp],
        category: [...state.category, action.newItem.category],
      };
    case 'ASSIGN_CATEGORY':
      return { timestamp: ['new ts'], category: action.newCategory };
    case 'DELETE':
      return action.payload;
    default:
      return state;
  }
};
