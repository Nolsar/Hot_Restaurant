var router = require("express").Router();

const tableData = [
    {
        id: 1,
        name: "name1",
        phone: 1234596789,
        email: "email1@gmail.com", 
    },
    {
        id: 2,
        name: "name2",
        phone: 1234596789,
        email: "email2@gmail.com",
    },
    {
        id: 3,
        name: "name3",
        phone: 1234596789,
        email: "email3@gmail.com",
    } 
];



// Displays all characters
router.get("/api/tableData", function (req, res) {
    return res.json(tableData);
});

module.exports=router;