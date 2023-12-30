import { useState } from "react";


export default function Users() {

    const [users, setUsers] = useState('');
    const [sent, setSent] = useState(false);

    function GetUsers() { 

        if (sent == true ) {
            return;
        }

        setSent(true);

        const xhttp = new XMLHttpRequest();

        xhttp.onload = function() {

           const response = this.responseText;

           const obj = JSON.parse(response);

           const responseHtml = obj.map(singleUser =>
                <p key={singleUser.id}>
                {singleUser.name}
                <span>{singleUser.phone}</span>
                </p>
           );
          

          setUsers(responseHtml);

        }

        xhttp.open("GET", "https://jsonplaceholder.typicode.com/users");
        xhttp.send();


    }

    return ( 
        <div>
            <button onClick={GetUsers} >Send Request to get list of users</button>
            <div className="userList">{users}</div>
        </div>
    );

}

