import '../App.css';
import '../style/style.css'
import { Badge, Button } from 'antd';
import { Typography } from 'antd';

const { Text } = Typography;

function ClubNotice() {
  return (
    <div className="ClubNotice">
        <div>
            <div>
                <Text className="c-n-text">국가대표 365일</Text>
                {/* <Button 
                    shape='round' 
                    size="small" 
                    className="c-n-e-button"
                    style={{
                        width:'45px',
                        height:'22px',
                        fontSize:'12px',
                    }}
                >
                    이벤트
                    <Badge 
                        count={2}
                        className="c-n-e-badge"
                        style={{
                            fontWeight:'700',
                            borderColor:'#1C202B',
                        }}
                    />
                </Button> */}
            </div>
            <div className="c-n-e-button">
                이벤트<span className="c-n-e-badge"></span>
            </div>
            <Button
                shape='circle' 
                className="c-n-m-button"
                style={{
                    minWidth:'27px',
                    height:'27px',
                    backgroundColor:'#50607030',
                    border:'none',
                }}
             />
        </div>
    </div>
  );
}

export default ClubNotice;

