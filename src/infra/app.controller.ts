import {
	Body,
	Controller,
	Get,
	Post
	} from '@nestjs/common';
import { CreateNotificationBody } from './create-notification-body';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'crypto';

@Controller('notifications')
export class AppController {
	constructor(private readonly prisma: PrismaService) {}

	@Get()
	list() {
		return this.prisma.notification.findMany();
	}

	@Post()
	async create(@Body() body: CreateNotificationBody) {
		console.log(body);

		const { recipientId, content, category } = body;

		await this.prisma.notification.create({
			data: {
				id: randomUUID(),
				content,
				category,
				recipientId,
			},
		});
	}
}
