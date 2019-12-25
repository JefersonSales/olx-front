import React, { useState, useRef } from 'react';
import { PageArea } from './styled';
import useAPI from '../../helpers/OlxAPI';
import { doLogin } from '../../helpers/auth-handler';

import {
  PageContainer,
  PageTitle,
  ErrorMessage,
} from '../../components/main-components';

function Page() {
  const api = useAPI();

  const fileField = useRef();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [priceNegotiable, setPriceNegotiable] = useState(false);
  const [desc, setDesc] = useState('');

  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setDisabled(true);
    setError('');
    /*
    const json = await api.login(email, password);
    if (json.error) {
      setError(json.error);
    } else {
      doLogin(json.token, rememberPassword);
      window.location.href = '/';
    }*/

    setDisabled(false);
  };

  return (
    <PageContainer>
      <PageTitle>Postar um anúncio</PageTitle>
      <PageArea>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area-title">Titulo</div>
            <div className="area-input">
              <input
                type="text"
                disabled={disabled}
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area-title">Categoria</div>
            <div className="area-input">
              <select></select>
            </div>
          </label>
          <label className="area">
            <div className="area-title">Preço</div>
            <div>...</div>
          </label>
          <label className="area">
            <div className="area-title">Preço Negociável</div>
            <div>
              <input
                type="checkbox"
                disabled={disabled}
                checked={priceNegotiable}
                onChange={e => setPriceNegotiable(!priceNegotiable)}
              />
            </div>
          </label>
          <label className="area">
            <div className="area-title">Descrição</div>
            <div>
              <textarea
                disabled={disabled}
                value={desc}
                onChange={e => setDesc(e.target.value)}
                className="textareaInput"
              ></textarea>
            </div>
          </label>
          <label className="area">
            <div className="area-title">Imagens (1 ou mais)</div>
            <div>
              <input type="file" disabled={disabled} ref={fileField} multiple />
            </div>
          </label>
          <label className="area">
            <div className="area-title" />
            <div className="area-input">
              <button type="submit" disabled={disabled}>
                Adicionar anúncio
              </button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
}

export default Page;
