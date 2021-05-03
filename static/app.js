console.log("LOAD!");

const App = {
  data() {
    return {
      servers: [],
      newServer: {
        name: '',
        status: 'created',
      },
    }
  },
  async mounted() {
    const res = await fetch('/api/server');
    this.servers = await res.json();
  },
  methods: {
    async createServer() {
      const res = await fetch('/api/server', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.newServer)
      });
      this.newServer.name = '';
      const newServer = await res.json();
      console.log("newServer = ", newServer);
      this.servers.push(newServer);
    },
    async remove(id) {
      const res = await fetch(`/api/server/${id}`, {
        method: 'DELETE',
      })
      const deletedId = (await res.json()).id;
      this.servers = this.servers.filter(s => s.id != deletedId);
    }
  },
}

Vue.createApp(App).mount('#app');
