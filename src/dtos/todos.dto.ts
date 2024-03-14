import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength, IsBoolean, IsNumber } from 'class-validator';

export class CreateTodoDto {
  @IsNumber()
  @IsNotEmpty()
  public userId: number

  @IsString()
  @IsNotEmpty()
  public title: string

  @IsString()
  public description?: string

  @IsBoolean()
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
  public description?: string

  @IsBoolean()
  public completed: boolean
}
