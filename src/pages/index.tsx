import Head from "next/head";
import { SearchBar, Tabla, Paginator } from "@/components";
import { useContext, useEffect, useState } from "react";
import DataContext, { IData } from "../repo/ContextDefault";

interface IStateList {
  listData?: IData[];
  currentPage: number;
  results: number;
  jump: number;
  length: number;
}

const Home = () => {
  // const [listData, setListData] = useState<IData[] | undefined>([]);
  const [stateList, setStateList] = useState<IStateList>({
    listData: [],
    currentPage: 1,
    results: 0,
    jump: 0,
    length: 0,
  });

  const [listActive, setListActive] = useState(false);
  const { listData, currentPage, results, jump, length } = stateList;
  const dataContext = useContext(DataContext);

  const setListData = () => {
    const listData = dataContext.searchData;
    const results = listData?.length || 0;
    const jump = 10;
    const length = results / jump;

    setStateList({ ...stateList, listData, results, jump, length });
  };

  const paginatorHandler = (page: number) => {
    setStateList({ ...stateList, currentPage: page });
  };

  useEffect(() => {
    if (dataContext.searchData?.length !== 0) {
      // setListData(dataContext.searchData);
      setListData();
      setListActive(true);
    }
  }, [dataContext.searchData]);

  return (
    <div className="min-h-screen">
      <Head>
        <title>Github Repository Search App</title>
        <meta name="description" content="Ti-Medi-Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center h-screen">
        <SearchBar
          className="w-3/4 my-8"
          searchHandler={dataContext.searchRepositories}
        />
        {listActive && (
          <div className="flex flex-col items-center h-4/5">
            <div className="flex flex-col items-center h-3/4 w-3/4 overflow-auto">
              <Tabla
                data={listData?.slice(
                  currentPage * jump - jump,
                  currentPage * jump
                )}
              />
            </div>
            <Paginator
              jumpList={jump}
              lengthList={length}
              resultsList={results}
              handler={paginatorHandler}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
