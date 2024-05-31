import './visualBox.css';

type VisualBoxPropType = {
  page: number;
  layoutPattern: number[];
};

function VisualBox({ page, layoutPattern }: VisualBoxPropType) {
  const isPattern = layoutPattern.includes(page);

  return isPattern && <div className='visualBox'></div>;
}

export default VisualBox;
