import React from 'react'
import type { NextPage } from 'next'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'

import IResponsive from '../interfaces/IResponsive'

import dent1 from '../assets/dentists/dent1.png'
import dent2 from '../assets/dentists/dent2.jpeg'
import dent3 from '../assets/dentists/dent3.png'
import dent4 from '../assets/dentists/dent4.png'

import {
  Container,
  ListDentists,
  ItemDentist,
  AccordionStyled,
  AccordionDetailsStyled,
  PhotoContainer,
  DescriptionContainer,
  Name,
  Cro,
  SkillList,
  SkillContainer,
  TreatmentList,
  TreatmentContainer
} from '../styles/pages/CorpoClinico'

const listDentists = [
  {
    name: 'Dra. Neiff Pereira',
    cro: 'CRO-RJ 32226',
    skills: ['Especialidade em Endodontia', 'Especialidade em Ortodontia'],
    treatments: [
      'Tratamento Endodôntico',
      'Endodontia Mecanizada Rotatória',
      'Aparelhos Estéticos e Convencionais',
      'Ortopedia dos Maxilares',
      'Clareamento Dental',
      'Clínica Geral'
    ],
    photo: dent1
  },
  {
    name: 'Dr. Guilherme Trindade',
    cro: 'CRO-RJ 32218',
    skills: ['Especialidade em Prótese', 'Especialidade em Implantodontia'],
    treatments: [
      'Odontologia Estética',
      'Reabilitação Oral',
      'Implantes Dentários',
      'Próteses Fixas e Removíveis',
      'Cirurgia Plástica Periodontal',
      'Lentes de Contato Dental',
      'Clareamento Dental',
      'Clínica Geral'
    ],
    photo: dent2
  },
  {
    name: 'Dr. Marcos Tavares',
    cro: 'CRO-RJ 32223',
    skills: ['Especialidade em Ortodontia'],
    treatments: [
      'Tratamentos Ortodônticos',
      'Ortopedia Funcional dos Maxilares',
      'Aparelhos Estéticos e Convencionais'
    ],
    photo: dent3
  },
  {
    name: 'Dr. Fábio Pinheiro',
    cro: 'CRO-RJ 48080',
    skills: ['Harmonização Orofacial'],
    treatments: [
      'Toxina Botulínica',
      'Preenchimento Ácido Hialurônico MD Codes Lipoenzimática',
      'Skinbooster',
      'Microagulhamento'
    ],
    photo: dent4
  }
]

const CorpoClinico: NextPage<IResponsive> = ({ isBreakpoint }: IResponsive) => {
  const title = 'Corpo Clínico'
  const subtitle = 'Conheça nossa equipe de dentistas'

  return (
    <Layout title="Corpo Clínico" description={`${title} - ${subtitle}`}>
      <Container>
        <PageTitle
          title={title}
          subtitle={subtitle}
          isBreakpoint={isBreakpoint}
        />
        <ListDentists isBreakpoint={isBreakpoint}>
          {listDentists.map(item => (
            <ItemDentist key={item.cro}>
              <AccordionStyled color={'primary'}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color={'info'} />}
                >
                  <DescriptionContainer>
                    <PhotoContainer image={item.photo} key={item.cro} />
                    <Name>{item.name}</Name>
                    <Cro>{item.cro}</Cro>
                  </DescriptionContainer>
                </AccordionSummary>
                <AccordionDetailsStyled>
                  <SkillList>
                    {item.skills.map((item, i) => (
                      <SkillContainer key={i}>{item}</SkillContainer>
                    ))}
                  </SkillList>
                  <TreatmentList>
                    {item.treatments.map((item, i) => (
                      <TreatmentContainer key={i}>{item}</TreatmentContainer>
                    ))}
                  </TreatmentList>
                </AccordionDetailsStyled>
              </AccordionStyled>
            </ItemDentist>
          ))}
        </ListDentists>
      </Container>
    </Layout>
  )
}

export default CorpoClinico
