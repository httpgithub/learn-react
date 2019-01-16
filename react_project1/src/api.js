import axios from "axios";
export default {
  user: {
    login: credentials =>
      // axios.post("/api/auth", { credentials }).then(res => res.data.user)
      //axios.post("/api/auth", { credentials })  等价于 axios.post("/api/auth", { credentials: credentials})

      //可以省略 { } return  https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001438565969057627e5435793645b7acaee3b6869d1374000
      {
        
        return axios.post("/api/auth", credentials);
      }
  }
};
