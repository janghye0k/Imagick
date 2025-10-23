import { useEventListener } from 'usehooks-ts';

const CompressPage = () => {
  useEventListener('global-file-drop', (event) => {
    const files = event.detail.files;
    console.log(files);
  });

  return <div>CompressPage</div>;
};

export default CompressPage;
