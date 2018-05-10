import { Table } from "antd";

function getAPIs(api) {
  return Object.values(api)
    .filter(field => field.api)
    .map(field => ({
      ...field.api,
      key: field.api.name
    }));
}

const columns = [
  {
    title: "参数",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "说明",
    dataIndex: "desc",
    key: "desc"
  },
  {
    title: "类型",
    dataIndex: "type",
    key: "type"
  },
  {
    title: "默认值",
    dataIndex: "defaultValue",
    key: "defaultValue"
  }
];
export default function APIGrid({ api }) {
  if (!api) return "";

  return <Table dataSource={getAPIs(api)} columns={columns} />;
}
