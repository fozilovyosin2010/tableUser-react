import { Skeleton } from "antd";

const SkeletonCom = () => {
  return (
    <tr>
      <td className="border border-[#fff] dark:border-[gray] styleTd dark:bg-[#ccc] dark:text-black text">
        <div className="w-[50px] h-[50px] rounded-[50px]">
          <Skeleton.Button active={true} size={"small"} shape={"circle"} />
        </div>
      </td>
      <td className="border border-[#fff] dark:border-[gray] styleTd dark:bg-[#ccc] dark:text-black text">
        <Skeleton.Input active={true} size={"small"} block={true} />
      </td>
      <td className="border border-[#fff] dark:border-[gray] styleTd dark:bg-[#ccc] dark:text-black text">
        <Skeleton.Input active={true} size={"small"} block={true} />
      </td>
      <td className="border border-[#fff] dark:border-[gray] styleTd dark:bg-[#ccc] dark:text-black text">
        <Skeleton.Input active={true} size={"small"} block={true} />
      </td>
      <td className="border border-[#fff] dark:border-[gray] styleTd dark:bg-[#ccc] dark:text-black text">
        <Skeleton.Input active={true} size={"small"} block={true} />
      </td>

      <td className="border border-[#fff] dark:border-[gray] bg-[#ece1e1] p-[10px] dark:bg-[#ccc] dark:text-black text">
        <Skeleton.Input active={true} size={"small"} block={false} />
      </td>
      <td className="border border-[#fff] dark:border-[gray] bg-[#ece1e1] p-[10px] dark:bg-[#ccc] dark:text-black text">
        <Skeleton.Input active={true} size={"small"} block={false} />
      </td>
    </tr>
  );
};

export default SkeletonCom;
