import React from 'react'
import type { NextPage } from 'next'
import { FaWhatsapp, FaPhone, FaRegEnvelope } from 'react-icons/fa'

// import Image from 'next/image'

import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
// import Album from '../components/Album'
// import SimpleMap from '../components/SimpleMap'
import Logo from '../components/Logo'

import sala_primeiro_atendimento from '../assets/clinic/sala_primeiro_atendimento.jpeg'
import estudio_fotografia from '../assets/clinic/estudio_fotografia.jpeg'
import cadeira from '../assets/clinic/cadeira.jpeg'
import scanner_intraoral from '../assets/clinic/scanner_intraoral.jpeg'
import raio_x_temporario from '../assets/clinic/raio_x_temporario.jpeg'
import laserterapia from '../assets/clinic/laserterapia.jpeg'
import lupas from '../assets/clinic/lupas.jpeg'
import clinica_completa from '../assets/clinic/clinica_completa.png'
import recepcao from '../assets/clinic/recepcao.jpeg'
import camera_intraoral from '../assets/clinic/camera_intraoral_temporario.jpeg'

import { companyInfo } from '../config/companyInfo'

import IResponsive from '../interfaces/IResponsive'

import {
  Container,
  BodyClinic,
  Subtitle,
  PhotoTextContainer,
  TextContainer,
  PhotoContainer,
  FlippedTextContainer,
  FlippedPhotoContainer,
  Photo,
  // Address,
  GridContact,
  Text
  // MapContainer
} from '../styles/pages/Clinic'

const Clinic: NextPage<IResponsive> = ({ isBreakpoint }: IResponsive) => {
  const title = 'A Clínica'
  const subtitle =
    // 'Seja bem-vindo(a)! Conheça o conforto da clínica mais moderna de Campos.'
    'Seja bem-vindo(a)! Conheça o conforto, qualidade e excelência no atendimento odontológico na estrutura mais moderna da cidade!'

  return (
    <Layout title={`${title} - Gente`} description={`${title} - ${subtitle}`}>
      <Container>
        <PageTitle
          title={title}
          subtitle={subtitle}
          isBreakpoint={isBreakpoint}
        />
        <BodyClinic isBreakpoint={isBreakpoint}>
          <p>
            A clínica GeNTe surgiu de um grande sonho!! Idealizado pelo casal de
            dentistas Guilherme Trindade e Neiff Pereira, já atuantes na área há
            mais de 16 anos, com vasta experiência no atendimento de excelência
            e currículo alicerçado em diversos cursos de pós graduação, entre
            especializações, imersões, capacitações e atualizações.
          </p>
          {!isBreakpoint && (
            <p>
              A palavra GeNTe surgiu da ideia de agregar a nossa{' '}
              <span>VISÃO</span>, <span>MISSÃO</span> e <span>VALORES</span>,
              onde trazemos a você o conceito humanizado, porque tratamos dente,
              mas cuidamos de GENTE. Além de reunir em uma pequena palavra tanto
              significado, traz consigo as iniciais dos proprietários da
              clínica, Guilherme e Neiff Trindade (GNT). Pensando em trazer o{' '}
              <span>MÁXIMO CONFORTO POSSÍVEL</span> aos clientes durante os
              tratamentos, minimizando quase totalmente, qualquer receio,
              dúvidas, “medo de dentista”, pânico ou experiências traumáticas
              passadas, direcionamos toda a equipe com foco total no atendimento{' '}
              <span>HUMANIZADO</span>!
            </p>
          )}

          <Subtitle>Sala de primeiro atendimento</Subtitle>

          <PhotoTextContainer isBreakpoint={isBreakpoint}>
            <PhotoContainer isBreakpoint={isBreakpoint}>
              <Photo
                src={sala_primeiro_atendimento}
                alt="sala-primeiro-atendimento"
                isBreakpoint={isBreakpoint}
              />
            </PhotoContainer>

            <TextContainer>
              <p>
                Aqui é possível conversar em <span>reservado</span> sobre todas
                as queixas e questionamentos ou até mesmo tomar um gostoso café
                com o profissional responsável!
              </p>
            </TextContainer>
          </PhotoTextContainer>

          <Subtitle>Cadeiras com massagem anti-stress</Subtitle>

          <PhotoTextContainer isBreakpoint={isBreakpoint} isReverse>
            <FlippedTextContainer isBreakpoint={isBreakpoint}>
              <p>
                Nossas cadeiras com tecnologia de ponta, possuem ultrassom e
                jatos de bicarbonato acoplados, massageadores anti-stress por
                toda a extensão da cadeira para promover{' '}
                <span>relaxamento total</span>, motores elétricos que extinguem
                aquele odiado “Barulho do Motor”
              </p>
            </FlippedTextContainer>

            <FlippedPhotoContainer isBreakpoint={isBreakpoint}>
              <Photo
                src={cadeira}
                alt="cadeira-odontologica"
                isBreakpoint={isBreakpoint}
              />
            </FlippedPhotoContainer>
          </PhotoTextContainer>

          <Subtitle>Câmera intraoral com projeção em SmartTV</Subtitle>

          <PhotoTextContainer isBreakpoint={isBreakpoint}>
            <PhotoContainer isBreakpoint={isBreakpoint}>
              <Photo
                src={camera_intraoral}
                alt="camera_intraoral"
                isBreakpoint={isBreakpoint}
              />
            </PhotoContainer>

            <TextContainer>
              <p>
                Contamos com câmera intraoral para permitir ao cliente{' '}
                <span>visualizar</span> qualquer lesão ou possível problema que
                possa acometer algum dente, projetado{' '}
                <span>diretamente em uma SmartTV</span> fixada ao teto, TV esta
                que também poderá promover bons momentos programando a sua
                série, partida esportiva, clipe, show ou playlist preferida
                enquanto realiza o tratamento{' '}
                <span role="img" aria-label="winking face">
                  😉
                </span>
              </p>
            </TextContainer>
          </PhotoTextContainer>

          <Subtitle>Scanner intraoral em alta resolução</Subtitle>

          <PhotoTextContainer isBreakpoint={isBreakpoint} isReverse>
            <FlippedTextContainer isBreakpoint={isBreakpoint}>
              <p>
                Aqui você acompanha todos os detalhes da sua <span>arcada</span>{' '}
                renderizada digitalmente e <span>projetada em 3D</span> em
                monitor com tecnologia de ponta. São tiradas{' '}
                <span>6 mil fotos por segundo</span>, para não perder nenhum
                detalhe!
              </p>
            </FlippedTextContainer>

            <FlippedPhotoContainer isBreakpoint={isBreakpoint}>
              <Photo
                src={scanner_intraoral}
                alt="scanner-intraoral"
                isBreakpoint={isBreakpoint}
              />
            </FlippedPhotoContainer>
          </PhotoTextContainer>

          <Subtitle>Raio-X com revelação digital instantânea</Subtitle>

          <PhotoTextContainer isBreakpoint={isBreakpoint}>
            <FlippedTextContainer isBreakpoint={isBreakpoint}>
              <p>
                Contamos com aparelho digital de Raio-X que, conectado por um
                sensor a um computador, faz a{' '}
                <span>revelação digital na hora</span>, projetando na TV ou em
                um monitor a fim de facilitar o procedimento para o operador.
              </p>
            </FlippedTextContainer>

            <FlippedPhotoContainer isBreakpoint={isBreakpoint}>
              <Photo
                src={raio_x_temporario}
                alt="raio-x"
                isBreakpoint={isBreakpoint}
              />
            </FlippedPhotoContainer>
          </PhotoTextContainer>

          <Subtitle>Estúdio de fotografia</Subtitle>

          <PhotoTextContainer isBreakpoint={isBreakpoint} isReverse>
            <PhotoContainer isBreakpoint={isBreakpoint}>
              <Photo
                src={estudio_fotografia}
                alt="estudio-de-fotografia"
                isBreakpoint={isBreakpoint}
              />
            </PhotoContainer>

            <TextContainer>
              <p>
                No estúdio registramos{' '}
                <span>todas as etapas dos tratamentos</span>, para viabilizar os
                planejamentos e para o cliente poder checar o decorrer do mesmo.
              </p>
            </TextContainer>
          </PhotoTextContainer>

          <Subtitle>Laserterapia</Subtitle>

          <PhotoTextContainer isBreakpoint={isBreakpoint}>
            <FlippedTextContainer isBreakpoint={isBreakpoint}>
              <p>
                A Laserterapia é um moderno tratamento utilizado em aceleradores
                de cicatrização, bioestimuladores,{' '}
                <span>redução de sensibilidade</span> entres outros
                procedimentos.
              </p>
            </FlippedTextContainer>

            <FlippedPhotoContainer isBreakpoint={isBreakpoint}>
              <Photo
                src={laserterapia}
                alt="laserterapia"
                isBreakpoint={isBreakpoint}
              />
            </FlippedPhotoContainer>
          </PhotoTextContainer>

          <Subtitle>Lupas de magnificação</Subtitle>

          <PhotoTextContainer isBreakpoint={isBreakpoint} isReverse>
            <PhotoContainer isBreakpoint={isBreakpoint}>
              <Photo
                src={lupas}
                alt="lupas-de-magnificacao"
                isBreakpoint={isBreakpoint}
              />
            </PhotoContainer>

            <TextContainer>
              <p>
                As Lupas de Magnificação permitem ao dentista ter uma{' '}
                <span>visão ampliada</span>, evitando quaisquer erros
                transoperatórios e ressaltando todos os detalhes, sobretudo nos
                tratamentos Estéticos e Endodônticos.
              </p>
            </TextContainer>
          </PhotoTextContainer>

          <Subtitle>Recepção</Subtitle>

          <PhotoTextContainer isBreakpoint={isBreakpoint}>
            <FlippedTextContainer isBreakpoint={isBreakpoint}>
              <p>
                Em nossa recepção montamos sempre um{' '}
                <span>coffee delicioso</span> para pequenas degustações, além de
                som ambiente e aquele clima gostoso na temperatura ideal.
                Enquanto aguarda, você curtirá nossa <span>Aromaterapia</span>,
                que promove relaxamento, conforto e tranquilidade.
              </p>
            </FlippedTextContainer>

            <FlippedPhotoContainer isBreakpoint={isBreakpoint}>
              <Photo
                src={recepcao}
                alt="recepcao"
                isBreakpoint={isBreakpoint}
              />
            </FlippedPhotoContainer>
          </PhotoTextContainer>

          <Subtitle>Clínica completa</Subtitle>

          <PhotoTextContainer isBreakpoint={isBreakpoint} isReverse>
            <PhotoContainer isBreakpoint={isBreakpoint}>
              <div>
                <Photo
                  src={clinica_completa}
                  alt="todas-especialidades"
                  isBreakpoint={isBreakpoint}
                />
              </div>
            </PhotoContainer>

            <TextContainer>
              <p>
                Nosso corpo clínico abraça{' '}
                <span>todas as Especialidades da Odontologia</span>, SEMPRE
                direcionaremos o seu tratamento com uma visão multidisciplinar,
                associando todas as áreas da Odontologia, bem como da Medicina,
                Fonoaudiologia, Fisioterapia entre outras!!
              </p>
            </TextContainer>
          </PhotoTextContainer>

          {/* <Subtitle>Álbum de fotos</Subtitle>
          <Album />
          <Subtitle>Como chegar</Subtitle>
          <MapContainer>
            <SimpleMap />
          </MapContainer>
          <Address>{companyInfo.street}</Address> */}
          <Subtitle>Contato</Subtitle>
          <GridContact isBreakpoint={isBreakpoint}>
            <FaWhatsapp />
            <Text>{companyInfo.whatsapp}</Text>
            <FaPhone />
            <Text>{companyInfo.phone}</Text>
            <FaRegEnvelope />
            <Text>{companyInfo.mail}</Text>
          </GridContact>
        </BodyClinic>
      </Container>
      <Logo />
    </Layout>
  )
}

export default Clinic
