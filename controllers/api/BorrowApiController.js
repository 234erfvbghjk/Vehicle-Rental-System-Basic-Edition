const BorrowApiService = require('../../Services/api/BorrowApiService')

const BorrowApiController = {
    // findAll
    async findAll(req, res) {
        const borrows = await BorrowApiService.findAll();
        const result = borrows.map((borrow) => {
            return {
                id: borrow.id,
                CarId: borrow.CarId,
                userId: borrow.userId,
                status: borrow.status,
                createdAt: borrow.createdAt,
                updatedAt: borrow.updatedAt,
                username: borrow.User ? borrow.User.username : null,
                bookTitle: borrow.Car ? borrow.Car.CarName : null,
                bookAuthor: borrow.Car ? borrow.Car.CarPrice : null,
            };
        });

        res.json(result);
    },
    //   // findOne
    //   // update
    async update(req, res) {
        const { id } = req.params;
        const result = await BorrowApiService.update(id);
        if (!result) {
            res.json({ msg: "更新失败", code: -1 });
        }
        res.json({ msg: "更新成功", code: 1 });
    },
};

module.exports=BorrowApiController