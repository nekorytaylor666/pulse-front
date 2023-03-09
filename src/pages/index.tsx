import Router from 'next/router';
import React, { useEffect } from 'react';
import Marketplace from './client/marketplace';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  // useEffect(() => {
  //   Router.push('/admin/dashboards/default');
  // });

  return <Marketplace></Marketplace>;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      // Will be passed to the page component as props
    },
  };
}
