// 在model文件内创建表格模型 可以通过@Column({defaultValue: true})
import { Table, Column, Model } from "sequelize-typescript";
@Table
export default class Song_list extends Model<Song_list>{    //此类名就是数据库访问的表数据
    @Column({primaryKey: true})
    id: number
    @Column
    listname: String
    @Column
    collect: number
    @Column
    share: number
    @Column
    comment: number
}