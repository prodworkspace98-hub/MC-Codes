fetch("/data/services.json")
  .then((res) => {
    if (!res.ok) throw new Error("Failed tp load about data");
    return res.json();
  })
  .then((data) => {})
  .catch((err) => console.assert.error(err));
