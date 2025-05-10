/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { Form, Upload, Modal, message } from "antd";
import Image from "next/image";
import { useState } from "react";
import { useActionConfirm } from "@/app/helper/hooks";
import { deleteImage, updateUser } from "@/app/helper/backend";

const MultipleImageInput = (props) => {
  let max = props.max || 1;
  let name = props.name || "img";
  let label = props.label;
  let listType = props.listType || "picture-card";

  return (
    <div className="">
      <Form.Item
        name={name}
        label={label}
        rules={[
          {
            required: props?.required,
            message: `Please upload ${!!label ? label : props?.video ? "a video" : "an image"}`,
          }
        ]}
      >
        <Input
          max={max}
          listType={listType}
          pdf={props?.pdf}
          noWebp={props?.noWebp}
          video={props?.video}
        />
      </Form.Item>
    </div>
  );
};

const Input = ({ value, onChange, listType, max, noWebp, pdf, video }) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file?.url || file?.preview);
    setPreviewVisible(true);
  };

  const handleChange = ({ fileList }) => {
    onChange(fileList);
  };

  const handleRemove = async (file) => {
    try {
      // Construct the required payload
      const payload = { file: file.url };

     await useActionConfirm(() => deleteImage(payload));
      
    } catch (error) {
      message.error("Failed to delete file.");
      return false; // Prevent removal in case of API failure
    }
  };

  return (
    <>
      <Upload
        accept={`image/png, image/gif, image/jpeg, ${!noWebp && "image/webp"}${pdf && ",application/pdf"}${video && ",video/mp4, application/mpeg, video/*"}`}
        listType={listType}
        onPreview={handlePreview}
        fileList={value || []}
        onChange={handleChange}
        onRemove={handleRemove}
        maxCount={max}
      >
        {(value?.length || 0) < max && "+ upload"}
      </Upload>
      <Modal
        open={previewVisible}
        footer={null}
        onCancel={handleCancel}
        title={"Preview"}
      >
        {video && previewImage.endsWith(".mp4") && (
          <video width="100%" height="600" controls>
            <source src={previewImage} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {pdf && previewImage.endsWith(".pdf") && (
          <embed
            src={previewImage}
            type="application/pdf"
            width="100%"
            height="600px"
          />
        )}
        {!video && !pdf && (
          <Image alt="example" width={1000} height={600} src={previewImage} />
        )}
      </Modal>
    </>
  );
};

export default MultipleImageInput;

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

