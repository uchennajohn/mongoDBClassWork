"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const todoRoute_1 = __importDefault(require("./routes/todoRoute"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
mongoose_1.default.connect(process.env.DATABASE_URL, () => {
    console.log("Database connected successfully");
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use('/todo', todoRoute_1.default);
const Port = 5000;
app.listen(Port, () => {
    console.log(`app running at  http://localhost:${Port}`);
});
