import { Column, Table, Model } from 'sequelize-typescript'

@Table
export default class Netease_comment extends Model<Netease_comment>{
    @Column({primaryKey: true})
    id?: number
    @Column
    nickname: string
    @Column
    comment: string
    @Column
    time: string
}