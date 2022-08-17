import { useEffect, useState } from "react";

export default function useDatas(collection) {
  const [datas, setDatas] = useState();
  useEffect(() => {
    fetch(`/db.json`)
      .then((r) => r.json())
      .then((d) => {
        if (collection) return setDatas(d[collection]);
        return setDatas(d);
      });
  }, []);
  let data = datas;
  if (collection) {
    data = { [collection]: datas };
  }
  return { ...data, setDatas };
}
