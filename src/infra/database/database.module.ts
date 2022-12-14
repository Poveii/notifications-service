import { Module } from "@nestjs/common";
import { NotificationsRepository } from "src/application/repositories/notifications-repository";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaNotificationsRepository } from "./prisma/repositories/prisma-notifications-repository";

@Module({
  providers: [
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
    PrismaService,
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
