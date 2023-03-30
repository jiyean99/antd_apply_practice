import '../App.css';
import '../style/style.css'
import { Affix, Button } from 'antd';

function ZHeader() {
  return (
    <div className="ZHeader">
      <Affix offsetTop={0} onChange={affixed => console.log(affixed)}>
          <Button className='headerLogo'/>
      </Affix>
      <Affix offsetTop={0} onChange={affixed => console.log(affixed)}>
          <Button className='headerProfile'/>
      </Affix>
    </div>
  );
}

export default ZHeader;

