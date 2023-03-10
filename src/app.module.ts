import { AppController } from './infra/app.controller';
import { Module } from '@nestjs/common';
import { PrismaService } from './infra/prisma.service';

@Module({
	imports: [],
	controllers: [AppController],
	providers: [PrismaService],
})
export class AppModule {}
