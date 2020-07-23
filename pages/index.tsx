import React, { useEffect, useState } from "react";
import { db } from "../utils/create-firestore";
import Header from "../components/header";
import Form from "../components/form";
import Chart from "../components/chart";

const LandingPage = () => {
  const collectionPath = "expenses";
  const [data, setData] = useState([]);

  useEffect(() => {
    db.collection(collectionPath).onSnapshot(async (res) => {
      res.docChanges().forEach((change) => {
        const doc = { ...change.doc.data(), id: change.doc.id };

        switch (change.type) {
          case "added":
            return setData((data) => [doc, ...data]);

          case "modified":
            return setData((data) => [
              ...data.map((d) => (d.id === doc.id ? doc : d)),
            ]);

          case "removed":
            return setData((data) => [...data.filter((d) => d.id !== doc.id)]);
        }
      });
    });
  }, []);

  return (
    <div>
      <Header
        title={"Ninja Wonga"}
        description={"Monthly money tracker for ninjas..."}
      />
      <div className="container section">
        <div className="row">
          <div className="col s12 m6">
            <Form onSubmit={(d) => db.collection(collectionPath).add(d)} />
          </div>
          <div className="col s12 m5 push-m1">
            <Chart
              data={data}
              onSliceClick={(d) =>
                db.collection(collectionPath).doc(d.id).delete()
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
