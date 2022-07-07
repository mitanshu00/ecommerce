import React from "react";
import { useDropzone } from "react-dropzone";
import PropTypes from "prop-types";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 60,
  height: 60,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

export default function UploadImage({ files, setFiles }) {
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxFiles: 6,
    onDrop: (acceptedFiles) => {
      setFiles({
        ...files,
        images: [
          ...acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          ),
        ],
      });
    },
  });

  const thumbs = files.images.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          alt=""
          // Revoke data uri after image is loaded
          // onLoad={() => {
          //   URL.revokeObjectURL(file.preview);
          // }}
        />
      </div>
    </div>
  ));

  // useEffect(() => {
  //   // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
  //   return () =>
  //     files.images.forEach((file) => URL.revokeObjectURL(file.preview));
  // }, []);

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some product images(upto 6).</p>
        <button type="button" onClick={open}>
          select images from files
        </button>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
}

UploadImage.propTypes = {
  files: PropTypes.object,
  setFiles: PropTypes.object,
};
