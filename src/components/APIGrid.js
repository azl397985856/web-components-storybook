import { Table } from "antd";

let dataSource = [];

function getAPIs(api) {
  dataSource = Object.values(api)
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
  getAPIs(api);
  return <Table dataSource={dataSource} columns={columns} />;
}
