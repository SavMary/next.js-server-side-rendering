import React from "react";
import {MainPage} from "@/Components/MainPage/MainPage";
import {BASE_URL, User} from "@/pages/api/api";
import {NextPageContext} from 'next';
// import {useRouter} from 'next/router';


type Props = {
    user: User
};

export default function UserPage({ user }: Props) {
    // const router = useRouter();
    // const [userFromServer, setUserFromServer] = useState<User>();

    // useEffect(() => {
    //     async function getUserById() {
    //     const response = await fetch(`${BASE_URL}.${router.query.id}`);
    //     const data = await response.json();
    //
    //     setUserFromServer(data);
    //     }
    //
    //     getUserById();
    // },[])

    return (
        <MainPage>
            <h1>{user?.name}</h1>
        </MainPage>
    )
}

interface UserNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}

UserPage.getInitialProps = async ( ctx: NextPageContext ) => {
    // if (!req) {
    //     return {user: null}
    // }

    const response = await fetch(`${BASE_URL}.${ctx.query.id}`)
    const user: User = await response.json()
    console.log(user)

    return {
        user
    }

}