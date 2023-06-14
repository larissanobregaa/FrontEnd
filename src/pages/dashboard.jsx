import Menu from '../components/Menu/Menu';
import { AppStyle } from "./style";
import { Bar, Pie } from 'react-chartjs-2';
import data from './data.json';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Dashboard = () => {
  const countByDepartment = data.reduce((count, item) => {
    count[item.departamento] = (count[item.departamento] || 0) + 1;
    return count;
  }, {});

  const contagemData = {
    labels: Object.keys(countByDepartment),
    datasets: [
      {
        data: Object.values(countByDepartment),
        backgroundColor: ['#02288b', '#e5e5e5', '#a5a5a5'],
        borderColor: ['black', 'black', 'black'],
        borderWidth: 1,
      },
    ],
  };

  const chamadosData = {
    labels: data.map(item => item.nome),
    datasets: [
      {
        label: 'Chamados',
        data: data.map(item => item.chamados),
        backgroundColor: '#02288b ',
        borderColor: '#000000',
        borderWidth: 1,
      },
    ],
  };

  return (
    <AppStyle>
    <div className="Login">
    <div>
    <Menu />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ flex: '1 1 100%', maxWidth: '100%' }}>
          <h2 style={{ fontSize: '16px', textAlign: 'center', marginBottom: '10px' }}>Chamados em aberto</h2>
          <div style={{ width: '300px', height: '300px', margin: '0 auto' }}>
            <Pie data={contagemData} />
          </div>
        </div>
        
        <div style={{ flex: '1 1 100%', maxWidth: '100%' }}>
          <div style={{ width: '400px', height: '300px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '16px', textAlign: 'center', marginBottom: '50px' }}>Contagem de chamados</h2>
            <Bar data={chamadosData} />
            </div>
          </div>
      </div> 
    </div>
    <footer className='footer'>
            <p>Desenvolvido por @Techmais. Todos os direitos reservados. </p>
          </footer>
    </div>
    </AppStyle> 
  );
};


export default Dashboard;