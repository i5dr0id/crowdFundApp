<template>
  <div id="campaigns" class="container">
    <div class="main container">
      <h1 class="page-header text-center"> Manage Campaigns </h1>

      <h4 class="page-header text-center" v-if="!items"> you have no active campaigns</h4>

      <div class="text-center btn-cnc">
        <a href="/add" class="btn btn-primary btn-create">Create New Campaign</a>
      </div><br>
      <p style="text-align:center"><i class="fa fa-spinner fa-spin" v-show="loading" style="font-size:60px;"></i></p>
      <br><br>

      <div class="section" v-for="(item, key) in items">
        <div>
          <table class="table">
            <thead>
              <tr>
				<th scope="col">Candidate</th>
                <th scope="col">Target</th>
				 <th scope="col">Raised</th>
                <th scope="col">Contributions</th>
                <th scope="col">Endorsements</th>
               
              </tr>
            </thead>
            <tbody>
              <tr>
				<td><a href="#" style="color:green"><router-link :to="/aspirant/ + item._id">{{ item.firstname }} {{ item.lastname }}</router-link></a></td>
                <td>&#8358;{{ item.fund }}</td>
				<td>0</td>
                <td>0</td>
                <!-- <td>{{ items[0].aspirant_endorsements.length }}</td> -->
                <td>0</td>
                
                <td><a v-on:click="deleteCampaign(item._id)" class="btn btn-danger ">Delete Campaign</a></td>
                <td><a href="#" class="btn btn-warning "><router-link :to="/update/ + item._id">Edit Campaign</router-link></a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr> </div>
      <!-- <div class="text-center">
				<a href="/add" class="btn btn-primary">Create New Campaign</a>
			</div> --></div>
  </div>
</template>
<script>
// import axios from 'axios';
export default {
  name: "Campaigns",
  data() {
    return {
      id: "",
      token: "",
      alias: "",
      fund: "",
      items: [],
      index: null,
      jokes: [],
      api: "https://onepercent-crowdfund.herokuapp.com/aspirants/all/",
      // onCam: {},
      loading: true
    };
  },
  methods: {
    refresh() {
      this.id = localStorage.getItem("id");
      this.token = localStorage.getItem("token");
      // console.log("TOKEN RE")
      // console.log({"TOKEN":this.token});
      this.api =
        "https://onepercent-crowdfund.herokuapp.com/aspirants/all/" + this.id;
      let config = {
        "x-access-token": this.token,
        "Content-Type": "application/json"
      };
      this.axios
        .get(this.api, {
          headers: {
            "x-access-token": this.token,
            "Content-Type": "application/json"
          }
        })
        .then(
          response => {
            this.loading = false;
            this.items = response.data.aspirant;
            console.log(this.items);
            this.index = this.items.length;
          },
          function(err) {
            console.log(err);
            this.loading = false;
          }
        );
    },
    deleteCampaign(id) {
      console.log(id);
      let deleteurl =
        "https://onepercent-crowdfund.herokuapp.com/aspirants/" + id;
      swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result === true) {
          this.axios
            .delete(deleteurl)
            .then(response => {
              this.refresh();
              console.log(response.data);
              if (response.data.responseCode === "00") {
                swal("Deleted!", "Campaign deleted.", "success");
              }
            })
            .catch(error => {
              console.log(error);
            });
        }
      });
    }
  },
  created: function() {
    this.refresh();
  }
};
</script>
<style scoped>
.main {
}

a {
  color: #ff4814;
}

router-link {
  color: #ff4814;
}

#campaigns {
  padding-top: 5%;
  padding-bottom: 10%;
}

.al {
  color: #787878;
  /* border: ipx solid red; */
}

.btn-cnc {
  padding-top: 3%;
}
.btn-create {
  /* width: 50%; */
  color: rgb(254, 205, 11);
  background-color: #006600;
}

.btn-create:hover {
  color: #006600;
  background-color: rgb(254, 205, 11);
}
</style>
 