import { CalendarMonth, Folder, Groups2, Newspaper, Web } from '@mui/icons-material'
import { ReactNode, SyntheticEvent, useState } from 'react'
import { Box, Container, Paper, Tab, Tabs } from '@mui/material'
import Head from 'next/head'
import NewsPanel from '../../components/portal/NewsPanel'
import AuthCheck from '../../components/portal/AuthCheck'

interface TabPanelProps {
  children?: ReactNode
  index: number
  value: number
}

const TabPanel = ({ children, value, index, ...rest }: TabPanelProps) => (
  <div
    role='tabpanel'
    hidden={value !== index}
    id={`tabpanel-${index}`}
    aria-labelledby={`tab-${index}`}
    {...rest}
  >
    {value === index ? (
      <Box sx={{ p: '1rem' }}>
        {children}
      </Box>
    ) : null}
  </div>
)

const a11yProps = (index: number) => {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`
  }
}

export default function Portal () {
  const [currentTab, setCurrentTab] = useState(0)
  const tabPanels = [<><NewsPanel/></>, 'Obsah', 'Členové', 'Kalendář', 'Soubory']
  const handleChangeTab = (event: SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue)
  }

  return (
    <>
      <Head>
        <title>Portal | Sejong Taekwondo</title>
        <meta name="description" content="Sejong Taekwondo – sportovní klub Taekwondo WT v Praze"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <AuthCheck>
        <Container sx={{ my: '2rem' }}>
          <Paper elevation={2}>
            <Tabs
              value={currentTab}
              onChange={handleChangeTab}
              variant='scrollable'
              scrollButtons='auto'
              allowScrollButtonsMobile
              aria-label='tabs'
            >
              <Tab icon={<Newspaper/>} iconPosition='start' label='Aktuality' {...a11yProps(0)} />
              <Tab icon={<Web/>} iconPosition='start' label='Obsah' {...a11yProps(1)} />
              <Tab icon={<Groups2/>} iconPosition='start' label='Členové' {...a11yProps(2)} />
              <Tab icon={<CalendarMonth/>} iconPosition='start' label='Kalendář' {...a11yProps(3)} />
              <Tab icon={<Folder/>} iconPosition='start' label='Soubory' {...a11yProps(4)} />
            </Tabs>
            <Box>
              {tabPanels.map((tabPanel, index) => (
                <TabPanel key={index} index={index} value={currentTab}>
                  {tabPanel}
                </TabPanel>
              ))}
            </Box>
          </Paper>
        </Container>
      </AuthCheck>
    </>
  )
}
