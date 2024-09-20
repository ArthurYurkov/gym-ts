import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { motion } from 'framer-motion';

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = 'flex items-center justify-between';
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediaScreen = useMediaQuery('(min-width:1060px)');
  const navbarBackground = isTopOfPage
    ? ''
    : 'bg-primary-100 drop-shadow transition-all rounded-b-[30px]';

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img alt="logo" src={Logo} className="cursor-pointer" />
            {isAboveMediaScreen ? (
              <div className={`${flexBetween} w-full`}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: 50,
                    },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className={`${flexBetween} gap-8 text-sm`}
                >
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -50,
                    },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className={`${flexBetween} gap-8`}
                >
                  <button className="text-sm font-bold text-primary-500 underline transition-all duration-500 hover:text-secondary-500">
                    Sign In
                  </button>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a member
                  </ActionButton>
                </motion.div>
              </div>
            ) : (
              <button
                className="transition-scale rounded-full bg-secondary-500 p-2 duration-500 hover:scale-110 hover:drop-shadow-md"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="text h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* MOBILE MENU MODAL*/}
      {!isAboveMediaScreen && isMenuToggled && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
          variants={{
            hidden: {
              opacity: 0,
              x: 50,
            },
            visible: { opacity: 1, x: 0 },
          }}
          className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl"
        >
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
