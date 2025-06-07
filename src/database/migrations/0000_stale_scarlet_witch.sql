CREATE TABLE `accounts` (
	`id` text(36) PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`balance` real DEFAULT 0 NOT NULL,
	`created_at` integer DEFAULT '"2025-06-07T10:31:14.789Z"' NOT NULL,
	`updated_at` integer DEFAULT '"2025-06-07T10:31:14.789Z"' NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `packages` (
	`id` text(36) PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`min_investment` real NOT NULL,
	`max_investment` real NOT NULL,
	`duration_days` integer NOT NULL,
	`profit_percentage` real NOT NULL,
	`is_active` integer DEFAULT true NOT NULL,
	`created_at` integer DEFAULT '"2025-06-07T10:31:14.791Z"' NOT NULL,
	`updated_at` integer DEFAULT '"2025-06-07T10:31:14.791Z"' NOT NULL
);
--> statement-breakpoint
CREATE TABLE `transactions` (
	`id` text(36) PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`account_id` integer NOT NULL,
	`package_id` text,
	`type` text NOT NULL,
	`amount` real NOT NULL,
	`status` text NOT NULL,
	`created_at` integer DEFAULT '"2025-06-07T10:31:14.792Z"' NOT NULL,
	`updated_at` integer DEFAULT '"2025-06-07T10:31:14.793Z"' NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`account_id`) REFERENCES `accounts`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`package_id`) REFERENCES `packages`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text(36) PRIMARY KEY NOT NULL,
	`username` text,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`role` text DEFAULT 'user' NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);