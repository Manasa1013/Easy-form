
import { Navbar } from "../Components/Navbar/Navbar";
import { FormElements} from "../Components/FormElements/FormElements"
export function Home(){
    return(
        <div className="grid-container bg-white">
          <Navbar />
          <aside className="bg-gray-100 aside-left">
          </aside>
          <main className="main">
                      </main>
          <aside className="bg-gray-100 aside-right">
            {/* <RightSideNav  /> */}
          </aside>
        </div>
    )
}