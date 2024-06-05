const DonorDetailsPage = ({ params }: any) => {
  console.log(params);
  return (
    <div>
      <h1>This is donor details page no : {params}</h1>
    </div>
  );
};

export default DonorDetailsPage;
