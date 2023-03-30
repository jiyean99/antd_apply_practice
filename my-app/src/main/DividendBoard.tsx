import '../App.css';
import '../style/style.css';
import { Button, Radio } from 'antd';
import { Typography } from 'antd';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


const { Text } = Typography;

function DividendBoard() {
  return (
    <div className="DividendBoard">
        <Button 
            type="link"
            style={{
                fontSize:'13px',
                color:'#eee',
                fontWeight:'500',
            }}
        >
            <span className='nation'>영국</span>
            <span className='league'>프리미어리그</span>
        </Button>
        <div className='d-b-board'>
            <div>
                <Text
                    className='date'
                >
                    12/10(화)<span>04:00</span>
                </Text>
            </div>
            <div>
                <div>
                    <Text>콜라라도</Text>vs<Text>미네소타와일드</Text>
                </div>
                <Radio.Group buttonStyle="solid" className='d-b-btn-group'>
                    <Radio.Button value="a" className='d-b-btn'>
                        홈 승<span>1.93</span>
                    </Radio.Button>
                    <Radio.Button value="b" className='d-b-btn'>
                        무<span>1.93</span>
                    </Radio.Button>
                    <Radio.Button value="c" className='d-b-btn'>
                        1.93<span>원정 승</span>
                    </Radio.Button>
                    <Radio.Button value="d" className='d-b-btn'>
                        홈 승<span>1.93</span>
                    </Radio.Button>
                    <Radio.Button value="e" className='d-b-btn'>
                        H<span>0.5</span>
                    </Radio.Button>
                    <Radio.Button value="f" className='d-b-btn'>
                        1.93<span>원정 승</span>
                    </Radio.Button>
                    <Radio.Button value="g" className='d-b-btn'>
                        언더<span>1.18</span>
                    </Radio.Button>
                    <Radio.Button value="h" className='d-b-btn'>
                        U/O<span>2.5</span>
                    </Radio.Button>
                    <Radio.Button value="i" className='d-b-btn'>
                        1.93<span>오버</span>
                    </Radio.Button>
                </Radio.Group>
            </div>
        </div>
    </div>
  );
}

export default DividendBoard;

