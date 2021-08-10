

import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export const UserProfileCard=()=> {
  return (
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="rect" width={210} height={250} />
    </div>
  );
}
