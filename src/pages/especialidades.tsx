import React, { useState } from 'react'
import type { NextPage } from 'next'
// import { useMediaQuery } from '@mui/material'

import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import ModalSpeciality from '../components/ModalSpeciality'

import IResponsive from '../interfaces/IResponsive'

import icon_endo from '../assets/icons/speciality_endo.svg'
import icon_ciru from '../assets/icons/speciality_ciru.svg'
import icon_dent from '../assets/icons/speciality_dent.svg'
import icon_impl from '../assets/icons/speciality_impl.svg'
import icon_pedi from '../assets/icons/speciality_pedi.svg'
import icon_orto from '../assets/icons/speciality_orto.svg'
import icon_peri from '../assets/icons/speciality_peri.svg'
import icon_prot from '../assets/icons/speciality_prot.svg'
import icon_harm from '../assets/icons/speciality_harm.svg'
import icon_dtm from '../assets/icons/speciality_dtm.svg'
import icon_sono from '../assets/icons/speciality_sono.svg'

import {
  Container,
  ListSpecialities,
  ItemSpeciality,
  IconContainer,
  Icon,
  SpecialityName
} from '../styles/pages/Especialidades'
import Logo from '../components/Logo'

const listSpecialities = [
  {
    icon: icon_dent,
    speciality: 'Odontologia Restauradora – Dentística / Estética',
    description:
      'Dentística, você já ouviu falar? Se trata de uma área da odontologia voltada a restauração do sorriso não somente em seu aspecto visual, mas também funcional, dividindo-se em dentística estética e restauradora, respectivamente. Esta é a área de maior interesse atualmente!! A tratamos com grande responsabilidade com foco no planejamento fotográfico e baseado em exames de imagem, além de restaurações convencionais, predominantemente em resina composta, tanto para os dentes anteriores quanto para os posteriores, nesta área que se agrega os tratamentos de Clareamento Dental, Facetas em Resina Composta, Laminados Cerâmicos tipo Lentes de Contato Dental, restaurações cervicais entre outros...'
  },
  {
    icon: icon_prot,
    speciality: 'Reabilitação Oral – Prótese Dentária',
    description:
      'Prótese Dentária é a especialidade que tem como objetivo a reconstrução dos dentes parcialmente destruídos ou a reposição de dentes ausentes visando à manutenção das funções do sistema mastigatório, proporcionando ao paciente a função, a SAÚDE, o conforto e a estética.  Através de um criterioso Planejamento Reverso, utilizando da Odontologia Digital buscamos sempre a previsibilidade e assertividade para os Tratamento reabilitadores propostos, com tratamentos duráveis e resultados belíssimos, transformando vidas!!'
  },
  {
    icon: icon_impl,
    speciality: 'Implantodontia',
    description:
      'Implantodontia é a especialidade da odontologia dedicada a restabelecer a função de mastigação e estética perdidas, devido à ausência de um ou mais dentes, através da implantação cirúrgica de “pinos”, ou seja, implantes de titânio (um material biocompatível, portanto não é rejeitado pelo organismo) sobre os quais, posteriormente, serão instalados uma peça protética em substituição aos dentes perdidos.  Também é uma área muito procurada e que traz resultados fantásticos e transformadores na vida das pessoas!'
  },
  {
    icon: icon_orto,
    speciality: 'Ortodontia',
    description:
      'Ortodontia é uma especialidade odontológica que corrige a posição dos dentes e dos ossos maxilares posicionados de forma inadequada. Dentes tortos ou dentes que não se encaixam corretamente são difíceis de serem mantidos limpos, podendo ser perdidos precocemente, devido à deterioração e à doença periodontal. Para esta área, trazemos diversas técnicas, sendo a mais procurada devido à alta praticidade, tempo de tratamento muito menor entre outros atrativos os alinhadores invisíveis, com seu planejamento baseado em imagens digitalizadas através de Escaneamento Intraoral, programação de Softwares e a modernidade tecnológica ao seu alcance!! Cada técnica deverá ter sua devida indicação e colaboração do cliente!'
  },
  {
    icon: icon_endo,
    speciality: 'Endodontia',
    description:
      'Endodontia é a especialidade da Odontologia que trata da prevenção, diagnóstico e tratamento das enfermidades da polpa e de suas repercussões sobre os tecidos da região periapical.  Em geral, também acaba sendo muito indicada e procurada por sanar a temida “Dor de dente”. Em nossa clínica dispomos de uma especialista nesta área onde o acolhimento e cuidado é priorizado sempre, desmistificando por completo, que os tratamentos de canal incomodam.'
  },
  {
    icon: icon_ciru,
    speciality: 'Cirurgia Oral',
    description:
      'A cirurgia oral é a área da Odontologia que se dedica ao diagnóstico e tratamento cirúrgico das doenças, lesões e anomalias dos dentes, boca, maxilares e estruturas anexas.  Normalmente procurada para as temidas “Extrações de Dentes Sisos”, contudo, direcionamos sempre nossos tratamentos baseados em exames de imagens de Radiografias ou Tomografias, a fim de alcançarmos os melhores resultados e trazer o devido conforto e satisfação ao cliente, nesta especialidade utilizamos muito o Lazer como terapia, para acelerar ao máximo as cicatrizações e reduzir qualquer chance de desconforto e complicações pos operatórias. Medicações adequadas serão sempre prescritas e orientadas ao cliente pelo profissional, baseado em entrevistas prévias aos procedimentos.'
  },
  {
    icon: icon_harm,
    speciality: 'Harmonização Orofacial',
    description:
      'A harmonização orofacial é a especialidade da odontologia responsável por buscar o equilíbrio entre a relação estética e funcional do rosto e sorriso do paciente. Através de diversos procedimentos, é possível corrigir assimetrias e melhorar algumas proporções faciais.  Também se tornou uma “queridinha” dos nossos clientes, independente de gênero, sua procura é sempre intensa por agregarem demais, trazerem viço, realçar o belo, mas baseado em criterioso planejamento prévio e no desejo do cliente. Utilizamos para esta área sempre as melhores marcas dos produtos existentes no mercado, como toxinas, preenchedores, fios de PDO, entre outros.'
  },
  {
    icon: icon_pedi,
    speciality: 'Odontopediatria',
    description:
      'Odontopediatria é a especialidade que tem como objetivo o diagnóstico, a prevenção, o tratamento e o controle dos problemas de saúde bucal do bebê, da criança e do adolescente.  Contamos em nosso corpo clínico uma profissional especializada em trazer a melhor experiência e conforto ao seu/sua pequeno (a), sempre de forma lúdica através de desenhos, filmes ou músicas preferidas do pequeno(a) além de orientar os papais e mamães passando todas as informações pertinentes aos cuidados diários, itens de higiene bucal mais adequados, controle de dieta alimentar entre outros, criando o melhor elo e cultura de preservação dos dentes, desde a infância.'
  },
  {
    icon: icon_peri,
    speciality: 'Periodontia',
    description:
      'Periodontia é a especialidade que tem como objetivo o estudo dos tecidos de suporte e circundantes dos dentes e seus substitutos, o diagnóstico, a prevenção, o tratamento das alterações nesses tecidos e das manifestações das condições sistêmicas no periodonto, e a terapia de manutenção para o controle da saúde.  Para esta área tão fundamental, contaremos sempre com uma criteriosa avaliação, baseada em exames de imagem além da tecnologia disponível em nossa estrutura, através de câmera intraoral, ultrassom e jatos de bicarbonato.  Nesta área ainda agregamos aos tratamentos estéticos, onde manipulamos os tecidos gengivais através das cirurgias plásticas gengivais e periodontais, otimizando demais em casos para correção de sorriso gengival e melhora de contornos gengivais, sempre com rigoroso critério e respeitando a biologia e organismo de cada indivíduo.'
  },
  {
    icon: icon_dtm,
    speciality: 'DTM (Disfunção Temporomandibular)',
    description:
      'Disfunção Temporomandibular e Dor Orofacial é a especialidade que tem por objetivo promover e desenvolver uma base de conhecimentos científicos para melhor compreensão do diagnóstico e no tratamento das dores e distúrbios do sistema mastigatório, região orofacial e estruturas relacionadas.  Trata os casos, que são cada vez mais frequentes hoje em dia, onde os clientes sofrem com uma série de sintomas dolorosos e algumas limitações físicas, como dificuldade de abertura de boca, deslocamento e estalos nos ouvidos, dores faciais, ranger de dentes, desgastes de dentes e deterioração do sistema mastigatório.  Contamos em nossa equipe de profissionais, um especialista no assunto, preparado técnica e cientificamente para solucionar e tratar esses transtornos que trazem grande queda na qualidade de vida das pessoas.'
  },
  {
    icon: icon_sono,
    speciality: 'Odontologia do Sono',
    description:
      'A odontologia do sono é uma especialidade relativamente recente da odontologia que permite ao cirurgião-dentista capacitado tratar alguns distúrbios do sono, como o ronco e a SAOS (Síndrome da Apneia Obstrutiva do Sono). Essa área é fundamental para a saúde do paciente, pois está relacionada diretamente a respiração do indivíduo, e sem o tratamento certo, as consequências podem ser graves. Para esta área, estamos preparados com exame de Oximetria de alta precisão, monitorada através de aplicativo de celular, é possível diagnosticar e/ou confirmar diagnósticos de Polissonografias além de tratar, como uma alternativa ao C-PaP, através da confecção de AIO (Aparelho IntraOral) confeccionado por um profissional capacitado em nossa equipe para tratamento de tais patologias.'
  }
]

const Especialidades: NextPage<IResponsive> = ({
  isBreakpoint
}: IResponsive) => {
  const [modalData, setModalData] = useState({
    title: '',
    description: '',
    background: null,
    opened: false
  })

  const title = 'Especialidades'
  const subtitle = 'Aqui você conta com a confiança dos melhores especialistas.'

  const handleClose = () => {
    setModalData({
      ...modalData,
      opened: false
    })
  }

  const handleOpenModal = ({ speciality, description, icon }) => {
    setModalData({
      title: speciality,
      description: description,
      background: icon,
      opened: true
    })
  }

  return (
    <Layout title={`${title} - Gente`} description={`${title} - ${subtitle}`}>
      <Container>
        <PageTitle
          title={title}
          subtitle={subtitle}
          isBreakpoint={isBreakpoint}
        />
        <ListSpecialities isBreakpoint={isBreakpoint}>
          {listSpecialities.map(item => (
            <ItemSpeciality
              key={item.speciality}
              isBreakpoint={isBreakpoint}
              onClick={() => handleOpenModal(item)}
            >
              <IconContainer>
                <Icon src={item.icon} alt={item.speciality} />
              </IconContainer>
              <SpecialityName>{item.speciality}</SpecialityName>
            </ItemSpeciality>
          ))}
        </ListSpecialities>
        <ModalSpeciality
          open={modalData.opened}
          onClose={handleClose}
          data={modalData}
          isBreakpoint={isBreakpoint}
        />
      </Container>
      <Logo />
    </Layout>
  )
}

export default Especialidades
