'use client'

import {create} from 'zustand'
import {AnimatePresence, Variants} from 'framer-motion'
import style from './style.module.css'
import {Col, Divider, Row, Typo} from "@/shared/ui/atoms";
import classNames from "classnames";

const useSidebarControl = create<{
  isOpen: boolean
  toggleIsOpen: () => void
  activeNavIndex: number
  setActiveNavIndex: (newIndex: number) => void
}>((set) => ({
  isOpen: true,
  activeNavIndex: 1,
  toggleIsOpen: () => set((state) => ({...state, isOpen: !state.isOpen})),
  setActiveNavIndex: (newIndex) => set(prev => {
    if(prev.activeNavIndex === newIndex) return {...prev}
    else return {...prev, activeNavIndex: newIndex}
  })
}))

export default function Sidebar() {
  const {isOpen, toggleIsOpen, activeNavIndex, setActiveNavIndex} = useSidebarControl()

  const variants: Variants = {
    open: {
      width: 260,
    },
    close: {
      width: 96,
    }
  }
  const iconButtonVariants: Variants = {
    open: {
      padding: 4
    },
    close: {
      padding: 12
    },
    hidden: {
      opacity: 0,
      display: 'none'
    }
  }
  return (
    <Col
      className={style.container}
      motion={{
        initial: 'open',
        variants: variants,
        animate: isOpen ? 'open' : 'close',
        transition: {
          duration: 0.24,
          ease: [.13,-0.01,.41,1],
        }
      }}
      gap={isOpen ? 12 : 0}
    >
      <Row
        justifyContents={'space-between'}
        width={'fill'}
      >
        <Row
          className={style.iconButton32}
          motion={{
            variants: iconButtonVariants,
            animate: isOpen ? 'open' : 'close',
          }}
          onClick={toggleIsOpen}
        >
          💋
        </Row>
        <Row
          className={style.iconButton32}
          motion={{
            variants: iconButtonVariants,
            animate: isOpen ? 'open' : 'hidden',
          }}
        >
          🧐
        </Row>
      </Row>
      <AnimatePresence>
        {isOpen && (
          <Col
            width={'fill'}
            motion={{
              initial: {opacity: 0, height: 0},
              animate: {opacity: 1, height: 'min-content'},
              exit: {opacity: 0, height: 0},
              transition: {
                duration: 0.12,
                ease: [.13, -0.01, .41, 1],
              }
            }}
          >
            <Col width={'fill'} gap={4}>
              <Typo.Contents emphasize isPre={'nowrap'}>
                어드민 아이디
              </Typo.Contents>
              <Row gap={2} alignItems={'center'}>
                <div style={{width: 16, height: 16, backgroundColor: 'red'}}/>
                <Typo.Contents color={'primary'} isPre={'nowrap'}>
                  최고 관리자
                </Typo.Contents>
              </Row>
            </Col>
          </Col>
        )}
      </AnimatePresence>
      <Divider padding={[12, 4]}/>
      <Col width={'fill'} gap={12}>
        {Array.from({length: 5}).map((_, i) => (
          <Row
            key={i}
            width={'fill'}
            gap={8}
            className={classNames([style.navItem, activeNavIndex === i && style.navItemActive])}
            onClick={() => setActiveNavIndex(i)}
          >
            <Row
              style={{backgroundColor: 'red', flexShrink: 0}}
              motion={{
                initial: 'open',
                variants: {
                  open: {
                    height: 20,
                    width: 20,
                  },
                  close: {
                    height: 24,
                    width: 24,
                  }
                },
                animate: isOpen ? 'open' : 'close'
              }}
            />
            <AnimatePresence>
              {isOpen && (
                <Row width={'fill'} motion={{
                  initial: {opacity: 0},
                  animate: {opacity: 1},
                  exit: {opacity: 0},
                }}>
                  <Typo.Contents width={'fill'}>
                    nav
                  </Typo.Contents>
                </Row>
              )}
            </AnimatePresence>
          </Row>
        ))}
      </Col>
    </Col>
  )
}
