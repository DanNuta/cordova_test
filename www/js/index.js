

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);



function getData(){
    const container = document.querySelector(".container");

    document.getElementById('fetchButton').addEventListener('click', async function() {

        // const data = await fetch("https://leafy-parfait-dd1dba.netlify.app/.netlify/functions/api/posts");
        // const response = await data.json();

        // const data = await axios.get("https://leafy-parfait-dd1dba.netlify.app/.netlify/functions/api/posts");
        // const response = await data.json();

        console.log("response")

        //renderItem(respnse);
    })


    //     var xhr = new XMLHttpRequest();
    //     xhr.open('GET', 'https://leafy-parfait-dd1dba.netlify.app/.netlify/functions/api/posts', true);
    //     xhr.setRequestHeader("Access-Control-Allow-Origin", "https://leafy-parfait-dd1dba.netlify.app/.netlify/functions/api/posts");

    //     xhr.onreadystatechange = function() {
    //         if (xhr.readyState === 4 && xhr.status === 200) {
    //             var response = JSON.parse(xhr.responseText);
    //             renderItem(response);
    //         }
    //     };
    //     xhr.send();

    // });



}

function onDeviceReady() {
    getData()
}


// function renderItem(data){
//     const h1 = document.createElement("h1");

//    const titleRender = data.forEach(element => {
//     return h1.innerHTML =  element.title;
//     });
// }