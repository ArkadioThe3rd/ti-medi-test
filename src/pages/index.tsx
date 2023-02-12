import Head from "next/head";
import { SearchBar, Tabla } from "@/components";
import { useContext, useEffect, useState } from "react";
import DataContext, { IData } from "../repo/ContextDefault";

const Home = () => {
  const [listData, setListData] = useState<IData[] | undefined>([]);
  const [listActive, setListActive] = useState(false);
  const dataContext = useContext(DataContext);

  useEffect(() => {
    console.log(dataContext.searchData);
    if (dataContext.searchData?.length !== 0) {
      setListData(dataContext.searchData);
      setListActive(true);
    }
    console.log(listData);
  }, [dataContext.searchData]);

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <Head>
        <title>Github Repository Search App</title>
        <meta name="description" content="Ti-Medi-Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center">
        <SearchBar
          className="w-3/4 my-8"
          searchHandler={dataContext.searchRepositories}
        />
        {listActive && <Tabla data={listData} />}
      </main>
    </div>
  );
};

export default Home;
