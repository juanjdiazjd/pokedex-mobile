
export type actionType = {
    type: string;
    error?: boolean;
    payload?: any;
  };

  
export const createAction = ({ type, error, payload }: actionType) => {
    return {
      type,
      error,
      payload
    };
  };
  