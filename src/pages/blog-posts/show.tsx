import { IResourceComponentsProps } from "@refinedev/core";
import { AntdShowInferencer } from "@refinedev/inferencer/antd";

export const BlogPostShow: React.FC<IResourceComponentsProps> = () => {
  return (
    <AntdShowInferencer
      fieldTransformer={(field) => {
        if (["$permissions", "$updatedAt", "$createdAt"].includes(field.key)) {
          return false;
        }
        return field;
      }}
    />
  );
};
