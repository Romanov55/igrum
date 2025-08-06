'use client'

import { useStore } from '@/context';
import React from 'react';

export const TgInfo  = () => {
  const { userInfo } = useStore()

  return (
    <span className="font-semibold">@{userInfo && userInfo.telegram}</span>
  );
};