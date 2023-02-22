import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('./editor'), {
  loading: () => 'Loading...',
  ssr: false,
});

export default Editor;
