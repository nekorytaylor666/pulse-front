/* eslint-disable react-hooks/exhaustive-deps */
import { default as React, useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Delimiter from '@editorjs/delimiter';
import NestedList from '@editorjs/nested-list';
import Checklist from '@editorjs/checklist';
import ImageTool from '@editorjs/image';
import Table from '@editorjs/table';
import AttachesTool from '@editorjs/attaches';
import LinkAutocomplete from '@editorjs/link-autocomplete';
import { useSession } from 'next-auth/react';
const EDITTOR_HOLDER_ID = 'editorjs';

const EditorComponent = ({ onChange, initialData }) => {
  const ejInstance = useRef();
  const [editorData, setEditorData] = React.useState(() => initialData);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const uploadApiUrl = `${apiUrl}/filemanager`;
  const session = useSession();
  const authorId = session?.data?.user?.user?.id;
  // This will run only once
  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }
    return () => {
      ejInstance.current.destroy();
      ejInstance.current = null;
    };
  }, []);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: EDITTOR_HOLDER_ID,
      logLevel: 'ERROR',
      data: editorData,
      inlineToolbar: ['bold', 'italic', 'link'],
      onReady: () => {
        ejInstance.current = editor;
      },
      onChange: async (api, event) => {
        let content = await api.saver.save();
        console.log('contenet', content);
        onChange && onChange(content);
        setEditorData(content);
      },
      autofocus: true,
      tools: {
        link: {
          class: LinkAutocomplete,
          config: {
            endpoint: 'http://localhost:3000/',
            queryParam: 'search',
          },
        },
        image: {
          class: ImageTool,
          config: {
            field: 'file',
            endpoints: {
              byFile: uploadApiUrl, // Your backend file uploader endpoint
              byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
            },
            additionalRequestHeaders: {
              authorId,
              iseditor: true,
            },
          },
        },
        attaches: {
          class: AttachesTool,
          config: {
            endpoint: uploadApiUrl,
            additionalRequestHeaders: {
              authorId,
              iseditor: true,
            },
          },
        },
        table: Table,
        delimiter: Delimiter,
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        list: {
          class: NestedList,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered',
          },
        },
        header: {
          class: Header,
          config: {
            placeholder: 'Enter a header',
            levels: [2, 3, 4],
            defaultLevel: 3,
          },
        },
      },
    });
  };

  return (
    <React.Fragment>
      <div id={EDITTOR_HOLDER_ID}> </div>
    </React.Fragment>
  );
};

export default EditorComponent;
