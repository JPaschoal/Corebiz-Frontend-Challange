import React, { useState } from 'react';
import api from '../services/api';

import '../styles/components/newsletter.css'

function Newsletter() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [sended, setSended] = useState(false)
  const [error, setError] =  useState(false)

  const handleSubmit = (event) => {
    
    event.preventDefault();

    if(validateName(name) && validadeEmail(email))  {
      sendNewsletter(name, email)
    }
    else {
      setError(true)
    }
  }

  const validateName = (name) => {
    return name !== ''
  }

  const validadeEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email)
  }

  const sendNewsletter = (name, email) => {
    api.post('newsletter', {
      email,
      name
    }).then(response => {
      response.status === 200 ? setSended(true) : setSended(false)
      console.log(response.data)
    })
  }

  const reset = () => {
    setSended(false)
    setName('')
    setEmail('')
    setError(false)
  }

  return (
    <div className='newsletter'>
      { !sended ? (
        <div className='newsletterContent'>
          <div className='newsletterTitle'>Participe de nossas news com promoções e novidades!</div>
          <form onSubmit={handleSubmit} className='newsletterForm'>
            <div className='inputWrapper'>
              <input
                className={error ? 'newsletterInput inputError' : 'newsletterInput'}
                placeholder='Digite seu nome'
                value={name}
                onChange={event => setName(event.target.value)}
              />
              {error ? <div className='errorMessage'>Preencha com seu nome completo</div> : <div></div>}
            </div>
            <div className='inputWrapper'>
              <input
                className={error ? 'newsletterInput inputError' : 'newsletterInput'}
                placeholder='Digite seu email'
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
              {error ? <div className='errorMessage'>Preencha com um e-mail válido</div> : <div></div>}
            </div>
            <div className='buttonWrapper'>
              <button className="confirmButton" type="submit">
                  Eu  quero!
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className='successMessage'>
          <div className='successTitle'>Seu e-mail foicadastrado com sucesso!</div>
          <div className='successText'>A partir de agora você receberá as novidade e ofertas exclusivas.</div>
          <button onClick={reset} className='successBtn'>
            Cadastrar novo e-email
          </button>
        </div>
      )}
    </div>
  );
}

export default Newsletter;