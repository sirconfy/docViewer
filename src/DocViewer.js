import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

function MyDocView() {
  const docs = [
    {
      uri: require("./files/DemoPDF.pdf"),
      fileType: "pdf",
      fileName: "Javascript Function",
    },

    {
      uri: require("./files/Image.png"),
      fileType: "png",
      fileName: "IMAGE",
    },
    {
      uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
      fileType: "docx",
      fileName: "Demo Document",
    },

    {
      uri: "https://sample-videos.com/xls/Sample-Spreadsheet-10-rows.xls",
      fileType: "xls",
      fileName: "Demo  Spreadsheet",
    },

    {
      uri: " https://sample-videos.com/ppt/Sample-PPT-File-500kb.ppt",
      fileType: "ppt",
      fileName: "Demo  Powerpoint",
    },
  ];

  return (
    <>
      <DocViewer
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        style={{ height: 500 }}
      />
    </>
  );
}

export default MyDocView;