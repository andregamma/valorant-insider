import React from 'react';
import Link from 'next/link'

import Nav from '../components/nav';

const Characters = () => {

  const CharacterList = [
    {
      name: 'Raze',
      imageUrl: 'https://valorantstats.one/img/characters/Raze_v2.png',
      class: 'Duelista'
    },
    {
      name: 'Phoenix',
      imageUrl: 'https://valorantstats.one/img/characters/Phoenix.png',
      class: 'Duelista'
    },
    {
      name: 'Breach',
      imageUrl: 'https://valorantstats.one/img/characters/Breach.png',
      class: 'Iniciador'
    },
    {
      name: 'Brimstone',
      imageUrl: 'https://valorantstats.one/img/characters/Brimstone.png',
      class: 'Controlador'
    },
    {
      name: 'Cypher',
      imageUrl: 'https://valorantstats.one/img/characters/Cypher.png',
      class: 'Sentinela'
    },
    {
      name: 'Jett',
      imageUrl: 'https://valorantstats.one/img/characters/Jett.png',
      class: 'Duelista'
    },
    {
      name: 'Omen',
      imageUrl: 'https://valorantstats.one/img/characters/Omen.png',
      class: 'Controlador'
    },
    {
      name: 'Sage',
      imageUrl: 'https://valorantstats.one/img/characters/Sage.png',
      class: 'Sentinela'
    },
    {
      name: 'Sova',
      imageUrl: 'https://valorantstats.one/img/characters/Sova.png',
      class: 'Iniciador'
    },
    {
      name: 'Viper',
      imageUrl: 'https://valorantstats.one/img/characters/Viper.png',
      class: 'Duelista'
    },
  ]

  return (
    <>
      <section className="p-8 antialiased">
        <div className="lg:text-center">
          <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl sm:leading-10">
            Personagens
          </h3>
          <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
            Todos os personagens, ou <span className="font-semibold">Agentes</span> como também são conhecidos, têm suas próprias habilidades e estilo de jogo.
          </p>
        </div>
        <div class="mt-10 flex justify-center">
          <ul class="grid grid-cols-characters gap-4">
            {CharacterList.map(char => (
              <Link href="/characters/[id]" as={`/characters/${char.name}`}>
                <a className="cursor-pointer">
                  <li>
                    <div className="w-32 bg-primary shadow rounded p-2 text-on-secondary">
                      <img src={char.imageUrl} alt="" className="border border-b-0 object-cover rounded rounded-b-none"/>
                      <p className="text-center border border-t-0 uppercase font-semibold">{char.name}</p>
                      <p className="text-center border border-t-0 uppercase text-sm text-gray-300">{char.class}</p>
                    </div>
                  </li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
};

export default Characters;
