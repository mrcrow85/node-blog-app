import * as Sequelize from "sequelize";
import { sequelize } from "../models/sequelize";
//import { Post } from "../post/model";

export interface UserInstance
  extends Sequelize.Instance<UserAttrs>,
    UserAttrs {}

export interface UserModel extends Sequelize.Model<UserInstance, UserAttrs> {}

export interface UserAttrs {
  id?: number;
  username: string;
  password?: string;
  email: string;
}

export const User = sequelize.define<UserInstance, UserAttrs>("user", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});
//User.hasMany(Post, {
//  foreignKey: "userId",
//  as: "userPosts"
//});
