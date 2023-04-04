import '../App.css';
import '../style/style.css'
import { BackTop } from 'antd';

function FixedElement() {
  return (
    <div className="FixedElement">
        <BackTop>
            <div className="ant-back-top-inner"/>
        </BackTop>
    </div>
  );
}

export default FixedElement;

