const express = require("express");

const {
  newOrder,
  getSingleOrder,
  myOrder,
  getAllOrders,
  updateOrders,
  deleteOrders,
} = require("../controllers/order.controller");

const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthenticatedUser, newOrder);

router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);

router.route("/orders/me").get(isAuthenticatedUser, myOrder);

router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);

router
  .route("/admin/orders/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrders)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrders);

module.exports = router;
