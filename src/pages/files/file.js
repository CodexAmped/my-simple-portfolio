import { useEffect, useRef } from 'react';

export default function MyResume() {
  const viewer = useRef(null);

  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path: '/lib',
          initialDoc: '/pdf/gertmafatle.pdf',
        },
        viewer.current
      ).then((instance) => {
        const { docViewer } = instance;
        // you can now call WebViewer APIs here...
      });
    });
  }, []);

  return (
    <div className='MyComponent'>
      <div className='webviewer' ref={viewer} style={{ height: '100vh' }}></div>
    </div>
  );
}