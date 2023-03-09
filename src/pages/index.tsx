import Router from 'next/router';
import React, { useEffect } from 'react';
import Marketplace from './client/marketplace';

export default function Home() {
  // useEffect(() => {
  //   Router.push('/admin/dashboards/default');
  // });

  return <Marketplace></Marketplace>;
}
