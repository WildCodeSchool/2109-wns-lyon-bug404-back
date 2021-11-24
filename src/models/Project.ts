import { Field, ID, InputType, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Project extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id!: number;

	@Field()
	@Column()
	title!: string;

	@Field()
	@Column()
	description!: string;

	@Field()
	@Column()
	image_url!: string;

	@Field()
	@Column()
	start_date!: string;

	@Field()
	@Column()
	end_date!: string;

	@Field()
	@Column({ default: false })
	status!: boolean;
}

@InputType()
export class ProjectInput extends BaseEntity {
	@Field()
	title!: string;

	@Field()
	description!: string;

	@Field()
	image_url!: string;

	@Field()
	start_date!: string;

	@Field()
	end_date!: string;

	@Field({ nullable: true })
	status: boolean;
}
