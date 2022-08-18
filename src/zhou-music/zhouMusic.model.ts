import { Column, Table, Model } from 'sequelize-typescript'

@Table
export default class Zhou_music extends Model<Zhou_music>{
    @Column({primaryKey: true})
    id: number
    @Column
    music_name: string
    @Column
    comment_number: number
}