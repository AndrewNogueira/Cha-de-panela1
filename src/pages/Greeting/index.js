import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Countdown from '../../components/Countdown';
import FancySvg from '../../components/FancySvg';
import Panel from '../../components/Panel';
import ButtonPrimary from '../../components/ButtonPrimary';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, Cover, Text, Photo } from './styles';

function Greeting() {
  return (
    <Container>
      <Cover imgSrc="https://scontent.fcgh37-1.fna.fbcdn.net/v/t1.0-9/31271238_10156405833644884_5060567756500369408_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=e3f864&_nc_ohc=znHcOyU7lM8AX_oFohF&_nc_ht=scontent.fcgh37-1.fna&oh=960e95cd5d03749e30b3f889e1fef952&oe=607CED20">
        <div className="cover-container">
          <figure className="figure">
            <div>
              <strong className="full-name">NATALLYA & ANDREW</strong>
              <strong className="min-name">N & A</strong>
              <span>14.03.2026</span>
            </div>
          </figure>
        </div>
      </Cover>
      <Countdown />
      <Panel
        title="sobre nós"
        subtitle="#casorionatallyaeandrew___#JC"
        text="Olá, seja bem-vindo ao nosso site de casamento!___Aqui vamos contar à vocês, queridos amigos e familiares, sobre um pouquinho da nossa vida antes desse momento especial em que daremos esse passo a mais para unirmos nossas vidas. É um prazer compartilhar esse momento com vocês!___....___..."
      />
      <Text>
        <section className="text-wrapper">
          {/* <h2>AVISO</h2> */}
          <p>
            Nada nos deixaria mais felizes do que compartilhar com todos vocês o
            momento da nossa união! Mas nem sempre a vida permite que nossos
            planos aconteçam como sonhamos.
          </p>          
          <p>
            Obrigado por reservar o seu tempo e nos dar o seu carinho. Iremos
            lembrar para sempre deste momento tão esperado.
          </p>
          <FancySvg />
        </section>
      </Text>

      <Photo imgSrc="https://lh3.googleusercontent.com/pw/AP1GczN5JcHuA5v578LEibGYpcb1-coQTy3aV3xqfHtSWHvtFLvKR6TsTUBC8fzs2XupCTgWWPHaXW5heiCScSsWBuwTwIEAmoD9s4tcyJso2A50uuYGKp1Y0OwLaJJKw_4OGGrXpfxRIOqIrajl0XzINlU5uA=w691-h921-s-no-gm?authuser=0">
        <div className="photo-wrapper">
          <figure />
        </div>
      </Photo>
      <div className="button-container">
        <Link to="/shop">
          <ButtonPrimary type="button" text="Ver presentes" />
        </Link>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
