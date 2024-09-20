import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const childVariant = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      className="mt-5 cursor-pointer rounded-md border-2 border-gray-100 px-5 py-16 text-center transition-all duration-500 hover:border-primary-500"
      variants={childVariant}
    >
      <div className="mb-4 flex cursor-pointer justify-center">
        <div className="cursor-pointer rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="cursor-pointer font-bold">{title}</h4>
      <p className="my-3 cursor-pointer">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline transition-all duration-500 hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.Benefits)}
        href={`#${SelectedPage.Benefits}`}
      >
        <p>Learn more</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
