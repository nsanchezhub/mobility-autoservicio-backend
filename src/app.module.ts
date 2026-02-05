import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { ServicesModule } from './services/services.module';
import { CommentsModule } from './comments/comments.module';
import { NotificationsModule } from './notifications/notifications.module';
import { AuditModule } from './audit/audit.module';

@Module({
  imports: [AuthModule, UsersModule, RolesModule, ServicesModule, CommentsModule, NotificationsModule, AuditModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
