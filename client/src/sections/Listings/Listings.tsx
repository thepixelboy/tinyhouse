import React from 'react';

interface IProps {
  title: string;
}

export const Listings = ({ title }: IProps) => {
  return <h2>{title}</h2>;
};
