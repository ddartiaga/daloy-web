import CustomerForm from "@/components/customer/CustomerForm";

const page = () => {
  return (
    <>
      <div className="card custom-card mt-2">
        <div className="card-header">
          <div className="card-title">Account</div>
        </div>
        <div className="card-body">
          <CustomerForm />
        </div>
      </div>
    </>
  );
};

export default page;
