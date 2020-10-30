<template>
  <div id="addEvent">
    <div class="add-content">
      <div class="add-header">
        <button class="action back">Back</button>
        <div class="title">
          <h2>Add Event</h2>
        </div>
      </div>
      <div class="add-maincontent">
        <div >
          <input placeholder="Enter Title..." class="addinfo eventtitle"/>
        </div>
        <div >
          <textarea placeholder="Enter Description..." class="addinfo description"/>
        </div>
        <div >
          <input placeholder="Enter Date..." class="addinfo date"/>
        </div>
        <div >
          <input placeholder="Enter Location..." class="addinfo location"/>
        </div>  
        <button class="action add">ADD</button>    
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

.action.back{
  float: left;
  background-color: #E6E6E6;  
  padding: 15px;
  border-radius: 20px;
  font-size: 15px;
}

.action.add{
  width: 25%;
  margin-top: 20px;
  background-color: #4A8DA2;
  color: white;
  font-size: 20px;
  padding: 10px;
}

.add-header{
  width: 97%;
  padding: 8px 15px 8px 15px;
  border-bottom: solid 1px gray;
  align-content: center;
  margin-bottom: 10px;
}

.title{
  text-align: center;
}

.addinfo {
  margin-top: 15px;
  padding: 20px;
  font-size: 25px;
  border-radius: 20px;
  color: #4A8DA2;
  border: 2px solid #4A8DA2;
  outline: none;
  width: 75%;
  font-family: serif;
  background-color: #FAFAFA;
}

textarea{
  height: 100px;
}

#addEvent{
  text-align: center;
}

</style>