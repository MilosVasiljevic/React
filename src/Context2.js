
export const reducerFunkcija = (tasks, action) => {


            console.log(tasks.length, action);

            const duzina = tasks.length;

            switch (action.type) {

                case 'add': {
                    return [...tasks, duzina + 1];
                }

                case 'remove': {
                    tasks.pop();
                    return [...tasks];
                }

            }


    }


export default function  fja() {
   return "ok"; 
}