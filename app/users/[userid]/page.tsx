interface UserIdPageProps {
    params: {
        userid: string
    };
};

const Page = ({
    params,
}: UserIdPageProps) => {
    return (
    <div>
        UserId: {params.userid}
    </div>
    );
};

export default Page;