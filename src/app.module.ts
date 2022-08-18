import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize'
import { SonglistModule } from './songlist/songlist.module';
import { NeteaseCommentModule } from './netease-comment/netease-comment.module';
import { ZhouMusicController } from './zhou-music/zhou-music.controller';
import { ZhouMusicService } from './zhou-music/zhou-music.service';
import { ZhouMusicModule } from './zhou-music/zhou-music.module';
import Song_list from './songlist/songlist.model';
import Netease_comment from './netease-comment/netease-comment.model';
import Zhou_music from './zhou-music/zhouMusic.model';

@Module({
  imports: [
    // 配置连接数据库信息
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3309,
      username: 'root',
      password: '123456',
      database: 'graduation_project',
      models: [Song_list, Netease_comment, Zhou_music], //引入表格模型
      //配置防止报错
      define: {
        freezeTableName: true,  //配置不在表名后面加s
        timestamps: false //配置不加createdAt和updateAt字段
      }
    }),
    SonglistModule,
    NeteaseCommentModule,
    ZhouMusicModule,
  ],
  controllers: [AppController, ZhouMusicController ],
  providers: [AppService, ZhouMusicService],
})
export class AppModule {}
