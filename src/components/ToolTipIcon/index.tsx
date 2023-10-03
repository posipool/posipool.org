import { Icon, Tooltip } from '@chakra-ui/react'
import { QuestionIcon } from '@chakra-ui/icons'
import { useState } from 'react'

export default function TooltipIcon(props: ToolTipIconProps) {
  const [isToolTipIconOpen, setIsToolTipIconOpen] = useState(false)
  return (
    <Tooltip
      label={props.text}
      isOpen={isToolTipIconOpen}
      hasArrow
      borderRadius="md"
      p={2}
      fontWeight="bold"
      onClose={() => setIsToolTipIconOpen(false)}
    >
      <Icon
        style={{ marginLeft: 4 }}
        as={QuestionIcon}
        color={'gray.300'}
        boxSize={3.5}
        onClick={() => setIsToolTipIconOpen(!isToolTipIconOpen)}
        onMouseEnter={() => setIsToolTipIconOpen(true)}
        onMouseLeave={() => setIsToolTipIconOpen(false)}
      />
    </Tooltip>
  )
}
