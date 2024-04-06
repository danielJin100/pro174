AFRAME.registerComponent("createmodels", {
//create init function 










  getModels: function() {
    return fetch("js/models.json")
      .then(res => res.json())
      .then(data => data);
  },
  createModel: function(model) {

  }
   //add the code
});
