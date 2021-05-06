import { takeLatest, call, select, put } from "redux-saga/effects";
import axios from "axios";

import { Types, Creators } from "../../reducers/product";

function* product() {
  try {
    // const response = yield call(() => axios.get("http://localhost:3001/products"));

    yield put(Creators.productSuccess({ products: data }));
  } catch (error) {
    yield put(Creators.productError({ error }));
  }
}

export default function* watch() {
  yield takeLatest(Types.PRODUCT_REQUEST, product);
}

const data = [
  {
    id: 1,
    price: 24.9,
    name: "Kimetsu no Yaiba: Demon Slayer - Volume 1",
    brand: "Panin",
    description:
      "Estamos na Era Taishou. O dia-a-dia pacato de Tanjiro, um gentil garoto que vende carvão, se transforma radicalmente quando sua família é assassinada por um demônio. A única sobrevivente é Nezuko, sua irmã mais nova. Porém, agora, ela se transformou em um Oni. Diante dessa tragédia, os dois irmãos partem em uma jornada para derrotar o Oni que matou sua mãe e irmãozinhos. E assim tem início uma aventura sanguinolenta de espadachins!",
    image: "https://cdn.awsli.com.br/600x450/942/942147/produto/50363588/fbda843d46.jpg",
  },
  {
    id: 2,
    price: 21.6,
    name: "KIMETSU NO YAIBA: DEMON SLAYER - VOLUME 2",
    brand: "Panin",
    description:
      "Tanjiro irá se valer de uma técnica ensinada por seu mestre Urokodaki para derrotar o oni na última etapa do teste para ingressar no Kissatsutai. Após isso, ele e Nezuko, agora acordada, irão para uma cidade em que as meninas jovens estão misteriosamente desaparecendo... Qual será o mistério detrás disso?!",
    image: "https://cdn.awsli.com.br/600x450/942/942147/produto/50363745/852a58bb49.jpg",
  },
  {
    id: 3,
    price: 34.8,
    name: "NARUTO GOLD - EDIÇÃO 01",
    brand: "Panin",
    description:
      "Esta é a Vila Oculta da Folha. Naruto é o garoto mais problemático da Academia Ninja e está sempre aprontando todas!! Seu grande sonho é se tornar um shinobi digno do título de Hokage, o mais forte e respeitado ninja da vila, e superar todos os Hokages anteriores...!! Mas um segredo em torno de seu nascimento o mantém distante tanto de seu sonho quanto das pessoas...!!",
    image: "https://cdn.awsli.com.br/600x450/942/942147/produto/74392234/fd24a873bf.jpg",
  },
  {
    id: 4,
    price: 64.2,
    name: "KIMETSU NO YAIBA : DEMON SLAYER - VOLUME 3",
    brand: "Panin",
    description:
      "Tanjirou e Nezuko cruzam caminho com onis que manipulam armas misteriosas e são subordinados diretos de Kibutsuji. Mesmo a ajuda de Tamayo e Yushirou pode não ser o bastante para enfrentá-los!! Será que eles conseguirão pistas para chegar ao seu arqui-inimigo Kibutsuji?!",
    image: "https://cdn.awsli.com.br/600x450/942/942147/produto/53621802/87a9991efd.jpg",
  },
];
