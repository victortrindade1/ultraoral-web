import React from 'react'
import type { NextPage } from 'next'
import { useMediaQuery } from '@mui/material'

import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'

import icon_endo from '../assets/icons/speciality_endo.svg'
import icon_ciru from '../assets/icons/speciality_ciru.svg'
import icon_dent from '../assets/icons/speciality_dent.svg'
import icon_impl from '../assets/icons/speciality_impl.svg'
import icon_pedi from '../assets/icons/speciality_pedi.svg'
import icon_orto from '../assets/icons/speciality_orto.svg'
import icon_peri from '../assets/icons/speciality_peri.svg'
import icon_prot from '../assets/icons/speciality_prot.svg'

import {
  Container,
  ListSpecialities,
  ItemSpeciality,
  IconContainer,
  Icon,
  SpecialityName
} from '../styles/pages/Especialidades'

const listSpecialities = [
  {
    icon: icon_ciru,
    speciality: 'Cirurgia'
  },
  {
    icon: icon_dent,
    speciality: 'Dentística'
  },
  {
    icon: icon_endo,
    speciality: 'Endodontia'
  },
  {
    icon: icon_impl,
    speciality: 'Implantodontia'
  },
  {
    icon: icon_pedi,
    speciality: 'Odontopediatria'
  },
  {
    icon: icon_orto,
    speciality: 'Ortodontia'
  },
  {
    icon: icon_peri,
    speciality: 'Periodontia'
  },
  {
    icon: icon_prot,
    speciality: 'Prótese'
  }
]

const Especialidades: NextPage = () => {
  const title = 'Especialidades'
  const subtitle = 'Aqui você conta com a confiança dos melhores especialistas.'

  const isBreakpoint = useMediaQuery('(max-width:768px)')

  return (
    <Layout title="Especialidades" description={`${title} - ${subtitle}`}>
      <Container>
        <PageTitle title={title} subtitle={subtitle} />
        <ListSpecialities isBreakpoint={isBreakpoint}>
          {listSpecialities.map(item => (
            <ItemSpeciality key={item.speciality} isBreakpoint={isBreakpoint}>
              <IconContainer>
                <Icon src={item.icon} alt={item.speciality} />
              </IconContainer>
              <SpecialityName>{item.speciality}</SpecialityName>
            </ItemSpeciality>
          ))}
        </ListSpecialities>
      </Container>
    </Layout>
  )
}

export default Especialidades
