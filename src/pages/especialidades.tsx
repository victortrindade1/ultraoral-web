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
    speciality: 'Cirurgia',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis explicabo excepturi culpa nobis adipisci quidem ipsam, a sint quas assumenda eveniet facilis aliquam nam voluptates blanditiis saepe non dicta dolorum?'
  },
  {
    icon: icon_dent,
    speciality: 'Dentística',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis explicabo excepturi culpa nobis adipisci quidem ipsam, a sint quas assumenda eveniet facilis aliquam nam voluptates blanditiis saepe non dicta dolorum?'
  },
  {
    icon: icon_endo,
    speciality: 'Endodontia',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis explicabo excepturi culpa nobis adipisci quidem ipsam, a sint quas assumenda eveniet facilis aliquam nam voluptates blanditiis saepe non dicta dolorum?'
  },
  {
    icon: icon_impl,
    speciality: 'Implantodontia',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis explicabo excepturi culpa nobis adipisci quidem ipsam, a sint quas assumenda eveniet facilis aliquam nam voluptates blanditiis saepe non dicta dolorum?'
  },
  {
    icon: icon_pedi,
    speciality: 'Odontopediatria',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis explicabo excepturi culpa nobis adipisci quidem ipsam, a sint quas assumenda eveniet facilis aliquam nam voluptates blanditiis saepe non dicta dolorum?'
  },
  {
    icon: icon_orto,
    speciality: 'Ortodontia',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis explicabo excepturi culpa nobis adipisci quidem ipsam, a sint quas assumenda eveniet facilis aliquam nam voluptates blanditiis saepe non dicta dolorum?'
  },
  {
    icon: icon_peri,
    speciality: 'Periodontia',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis explicabo excepturi culpa nobis adipisci quidem ipsam, a sint quas assumenda eveniet facilis aliquam nam voluptates blanditiis saepe non dicta dolorum?'
  },
  {
    icon: icon_prot,
    speciality: 'Prótese',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis explicabo excepturi culpa nobis adipisci quidem ipsam, a sint quas assumenda eveniet facilis aliquam nam voluptates blanditiis saepe non dicta dolorum?'
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
        />
      </Container>
    </Layout>
  )
}

export default Especialidades
