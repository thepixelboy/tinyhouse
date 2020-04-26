import React from 'react';
import { Skeleton, Divider, Alert } from 'antd';
import './styles/ListingsSkeleton.css';

interface IProps {
  title: string;
  error?: boolean;
}

export const ListingsSkeleton = ({ title, error = false }: IProps) => {
  const errorAlert = error ? (
    <Alert
      type='error'
      message='Un oh! Someting whent wrong - please try again later :('
      className='listings-skeleton__alert'
    />
  ) : null;

  return (
    <div className='listings-skeleton'>
      {errorAlert}
      <h2>{title}</h2>
      <Skeleton active paragraph={{ rows: 1 }} />
      <Divider />
      <Skeleton active paragraph={{ rows: 1 }} />
      <Divider />
      <Skeleton active paragraph={{ rows: 1 }} />
    </div>
  );
};
