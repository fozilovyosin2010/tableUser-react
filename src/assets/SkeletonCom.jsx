import { Skeleton } from "antd";
import { useState } from "react";

const SkeletonCom = ({ type, block, size }) => {
  const [active, setActive] = useState(false);
  const [buttonShape, setButtonShape] = useState("default");
  const [avatarShape, setAvatarShape] = useState("circle");

  // size :default,small,large
  // block:true,false ->display-block
  // type:img, normal
  return (
    <tr>
      <td>
        <Skeleton.Button active={true} size={"large"} shape={"circle"} />
      </td>
      <td>
        <Skeleton.Input active={true} size={"large"} block={true} />
      </td>
      <td>
        <Skeleton.Input active={true} size={"large"} block={true} />
      </td>
      <td>
        <Skeleton.Input active={true} size={"large"} block={true} />
      </td>
      <td>
        <Skeleton.Input active={true} size={"large"} block={true} />
      </td>
      <td>
        <Skeleton.Input active={true} size={"large"} block={true} />
      </td>
      <td>
        <Skeleton.Input active={true} size={"large"} block={true} />
      </td>
    </tr>
  );
};

export default SkeletonCom;
