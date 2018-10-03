let app = new Vue({
  el:"#app",
  data: {
    text:"",
    flag:false,
    error:false,
    views:[
      [1, 2, 3, '+'],
      [4, 5, 6, '-'],
      [7, 8, 9, '*'],
      [0, 'c', '=', '/']
    ]
  },
  methods:{
    func:function(ele){
      this.error = false;
      if(ele==="c"){
        this.text = "";
      }else if(ele==="="){
        try{
          this.text = '' + eval(`${this.text};`);
          this.flag = true;
        }
        catch(e){
          this.text = '';
          this.error = true;
        }
      }else{
        if(typeof(ele)=== 'number' && this.flag){
          this.text = "";
        }
        this.flag = false;
        this.text += ele;
      }
    }
  }
});

