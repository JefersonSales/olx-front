import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageArea, SearchArea } from './styled';
import useAPI from '../../helpers/OlxAPI';

import { PageContainer } from '../../components/main-components';
import AdItem from '../../components/partials/AdItem';

function Page() {
  const api = useAPI();

  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [adList, setAdList] = useState([]);

  useEffect(() => {
    const getState = async () => {
      const slist = await api.getStates();
      setStateList(slist);
    };
    getState();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const slist = await api.getCategories();
      setCategories(slist);
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getRecentAds = async () => {
      const json = await api.getAds({
        sort: 'desc',
        limit: 8,
      });
      setAdList(json.ads);
    };
    getRecentAds();
  }, []);

  return (
    <>
      <SearchArea>
        <PageContainer>
          <div className="searchBox">
            <form method="GET" action="/ads">
              <input type="text" name="q" placeholder="O que você procura?" />
              <select name="state">
                {stateList.map((i, k) => (
                  <option key={k} value={i.name}>
                    {i.name}
                  </option>
                ))}
              </select>
              <button type="submit">Pesquisar</button>
            </form>
          </div>
          <div className="categoryList">
            {categories.map((i, k) => (
              <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                <img src={i.img} alt="" />
                <span>{i.name}</span>
              </Link>
            ))}
          </div>
        </PageContainer>
      </SearchArea>
      <PageContainer>
        <PageArea>
          <h2>Anúncios Recentes</h2>
          <div className="list">
            {adList.map((i, k) => (
              <AdItem key={k} data={i} />
            ))}
          </div>
          <div className="seeAll">
            <Link to="/ads" className="seeAllLink">
              Ver todos >>
            </Link>
          </div>
          <hr />
          <p>
            Utilize estruturas ágeis para fornecer uma sinopse robusta para
            visões gerais de alto nível. As abordagens iterativas da estratégia
            corporativa promovem o pensamento colaborativo para promover a
            proposição de valor geral. Crescer organicamente a visão holística
            do mundo da inovação disruptiva via diversidade e capacitação no
            local de trabalho.
          </p>
        </PageArea>
      </PageContainer>
    </>
  );
}

export default Page;
