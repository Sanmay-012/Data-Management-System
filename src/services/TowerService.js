import axios from 'axios';

const TOWER_API_BASE_URL = "http://localhost:8080/towers/getAllTowerDetails"

class TowerService{
    getTowers(){
        return axios.get(TOWER_API_BASE_URL);
    }
}

export default new TowerService();