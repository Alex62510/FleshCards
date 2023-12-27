import { Logout } from '@/assets/icons'
import Edit from '@/assets/icons/Edit'
import Camera from '@/assets/icons/camera'
import { Button } from '@/components/ui'
import { SimpleCard } from '@/components/ui/simpleCard'
import { Typography } from '@/components/ui/typography'

import s from './personalInfo.module.scss'

type Props = {
  avatar: string
  email: string
  name: string
  onAvatarChange: (newAvatar: string) => void
  onLogout: () => void
  onNameChange: (newName: string) => void
}
export const PersonalInformation = ({
  avatar,
  email,
  name,
  onAvatarChange,
  onLogout,
  onNameChange,
}: Props) => {
  const handleAvatarChanged = () => {
    onAvatarChange('new Avatar')
  }
  const handleNameChanged = () => {
    onNameChange('New name')
  }
  const handleLogout = () => {
    onLogout()
  }

  return (
    <SimpleCard className={s.card}>
      <Typography.Large className={s.title}>Personal Information</Typography.Large>
      <div className={s.photoContainer}>
        <div>
          <img alt={'avatar'} src={avatar} />
          <button className={s.editAvatarButton} onClick={handleAvatarChanged}>
            <Camera />
          </button>
        </div>
      </div>
      <div className={s.nameWithEditButton}>
        <Typography.H1 className={s.name}>{name}</Typography.H1>
        <button className={s.editNameButton} onClick={handleNameChanged}>
          <Edit />
        </button>
      </div>
      <Typography.Body2 className={s.email}>{email}</Typography.Body2>
      <div className={s.buttonContainer}>
        <Button onClick={handleLogout} variant={'secondary'}>
          <Logout />
          Logout
        </Button>
      </div>
    </SimpleCard>
  )
}
