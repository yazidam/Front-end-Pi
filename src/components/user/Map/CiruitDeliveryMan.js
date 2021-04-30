import MapQuest from './MapQuest';
// import { Button } from 'reactstrap';

function CiruitDeliveryMan() {
  return (
    <div className="App">
      <div className="App-header"></div>
      <div
        style={{
          marginTop: '30px',
          marginBottom: '30px',
          boxShadow: '12px 12px 22px grey',
          height: '600px',
        }}
      >
        <MapQuest
          height={`${window.innerHeight * 0.85}px`}
          width={'100%'}
          center={[36.806496, 10.181532]}
          baseLayer={'light'}
          zoom={10}
          pitch={60}
          bearing={0}
          apiKey={'4NIzTvZz2pqeoBAk5sh1xYokvkJO21A5'}
        />
      </div>
    </div>
  );
}

export default CiruitDeliveryMan;
