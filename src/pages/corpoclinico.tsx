import React from 'react'
import type { NextPage } from 'next'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { MdChildCare } from 'react-icons/md'
// import Tooltip from '@mui/material/Tooltip'

import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'

import IResponsive from '../interfaces/IResponsive'

import dent1 from '../assets/dentists/dent1.jpg'
import dent2 from '../assets/dentists/dent2.jpg'
// import dent3 from '../assets/dentists/dent3.jpg'
// import dent4 from '../assets/dentists/dent4.jpg'
import dent_carina from '../assets/dentists/dent_carina.jpg'
import dent_tere from '../assets/dentists/dent_teresinha.jpg'
import dent_anderson from '../assets/dentists/dent_anderson.jpg'
import dent_leonardo from '../assets/dentists/dent_leonardo.jpg'

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
  TreatmentContainer,
  AdviseContainer
} from '../styles/pages/CorpoClinico'
import Logo from '../components/Logo'

const listDentists = [
  {
    name: 'Dra. Neiff Pereira',
    cro: 'CRO-RJ 32226',
    skills: [
      'Especialidade em Endodontia',
      'Especialidade em Ortodontia',
      'Invisalign Doctor'
    ],
    treatments: [
      'Tratamento Endodôntico',
      'Endodontia Mecanizada Rotatória',
      'Aparelhos Estéticos e Convencionais',
      'Alinhadores Invisíveis (Invisalign)',
      'Ortopedia dos Maxilares',
      'Clareamento Dental',
      'Clínica Geral'
    ],
    photo: dent1
  },
  {
    name: 'Dr. Guilherme Trindade',
    cro: 'CRO-RJ 32218',
    skills: [
      'Especialidade em Prótese',
      'Especialidade em Implantodontia',
      'Capacitação em Odontologia do Sono'
    ],
    treatments: [
      'Odontologia Estética',
      'Reabilitação Oral',
      'Implantes Dentários',
      'Próteses Fixas e Removíveis',
      'Cirurgia Plástica Periodontal',
      'Lentes de Contato Dental',
      'Clareamento Dental',
      'Clínica Geral',
      'Facetas em Resina Composta',
      'AIO (Aparelho IntraOral)'
    ],
    photo: dent2
  },
  {
    name: 'Dra. Terezinha Raposo Alvarenga',
    cro: 'CRO-RJ 19813',
    skills: [
      'Especialidade em Implantodontia',
      'Especialidade em HOF – Harmonização Orofacial',
      'Membro da ABEO',
      'Membro da STBI'
    ],
    treatments: [
      'Botox',
      'Preenchimento (ácido hialurônico e fios)',
      'Bioestimulação de colágeno (fios, intradermoterapia, microagulhamento, skinbooster)',
      'Lipo de papada enzimática',
      'Lipo de papada cirúrgica',
      'Bichectomia',
      'Lifting facial com fios',
      'Rinomodelação',
      'Peeling'
    ],
    photo: dent_tere
  },
  {
    name: 'Dra. Carina Johnson',
    cro: 'CRO-RJ 39019',
    skills: ['Especialidade em Odontopediatria'],
    treatments: [
      'Restaurações',
      'Extrações',
      'Cirurgias',
      'Aparelhos mantenedores de espaço',
      'Profilaxias e Manutenções de controle'
    ],
    photo: dent_carina,
    isPediatric: true
  },
  {
    name: 'Dr. Anderson A. Gomes',
    cro: '',
    skills: [
      'Especialidade em Cirurgia e Traumatologia BucoMaxiloFacial',
      'Professor de Cirurgia Oral'
    ],
    treatments: [
      'Cirurgia de Extrações de Sisos',
      'Cirurgias Orais gerais (dentes extranumerários, Lesões em mucosa e intraosseas, remoção de dentes impactados)',
      'Ciriurgias Avançadas'
    ],
    photo: dent_anderson
  },
  {
    name: 'Dr. Leonardo',
    cro: 'CRO-RJ 33571',
    skills: [
      'Especialidade em Prótese Dentária',
      'Especialidade em Implantodontia',
      'Especialidade em DTM'
    ],
    treatments: [
      'Tratamentos e diagnóstico das DTMs',
      'Confecção de placas e dispositivos Miorrelaxantes',
      'Tratamento de distúrbios parafuncionais (bruxismo, apertamentos, desgastes articulares)'
    ],
    photo: dent_leonardo
  }
]

const CorpoClinico: NextPage<IResponsive> = ({ isBreakpoint }: IResponsive) => {
  // const tooltipRef = useRef()

  const title = 'Corpo Clínico'
  const subtitle = 'Conheça nossa equipe de dentistas'

  return (
    <Layout title={`${title} - Gente`} description={`${title} - ${subtitle}`}>
      <Container>
        <PageTitle
          title={title}
          subtitle={subtitle}
          isBreakpoint={isBreakpoint}
        />
        <ListDentists isBreakpoint={isBreakpoint}>
          {listDentists.map(dentist => (
            <ItemDentist key={dentist.cro}>
              <AccordionStyled
                sx={{
                  backgroundColor: '#333'
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color={'info'} />}
                >
                  <DescriptionContainer>
                    <PhotoContainer image={dentist.photo} key={dentist.cro} />
                    <Name>{dentist.name}</Name>
                    <Cro>{dentist.cro}</Cro>
                  </DescriptionContainer>
                </AccordionSummary>
                <AccordionDetailsStyled sx={{ padding: '5vw' }}>
                  <SkillList>
                    {dentist.skills.map((item, i) => (
                      <SkillContainer key={i}>{item}</SkillContainer>
                    ))}
                  </SkillList>
                  <TreatmentList>
                    {dentist.treatments.map((item, i) => (
                      <TreatmentContainer key={i}>
                        {item} {dentist.isPediatric && <MdChildCare />}
                        {/* {dentist.isPediatric && (
                          <Tooltip title="Bebês, crianças e adolescentes" arrow>
                            <span ref={tooltipRef}>
                              <MdChildCare />
                            </span>
                          </Tooltip>
                        )} */}
                      </TreatmentContainer>
                    ))}
                  </TreatmentList>
                  {dentist.isPediatric && (
                    <AdviseContainer>
                      <MdChildCare /> = Bebês, crianças e adolescentes
                    </AdviseContainer>
                  )}
                </AccordionDetailsStyled>
              </AccordionStyled>
            </ItemDentist>
          ))}
        </ListDentists>
      </Container>
      <Logo />
    </Layout>
  )
}

export default CorpoClinico
