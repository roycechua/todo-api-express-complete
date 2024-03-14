import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength, IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class CreateTodoDto {
  @IsNumber()
  @IsNotEmpty()
  public userId: number

  @IsString()
  @IsNotEmpty()
  public title: string

  @IsString()
  @IsOptional()
  public description: string

  @IsBoolean()
  @IsOptional()
  public completed: boolean
}

export class UpdateTodoDto {
  @IsNumber()
  @IsNotEmpty()
  public userId: number

  @IsString()
  @IsNotEmpty()
  public title: string

  @IsString()
  @IsOptional()
  public description: string

  @IsBoolean()
  @IsOptional()
  public completed: boolean
}
