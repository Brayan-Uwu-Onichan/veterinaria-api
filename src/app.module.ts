// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonasModule } from './personas/personas.module';
import { MascotasModule } from './mascotas/mascotas.module';
import { VeterinariosModule } from './veterinarios/veterinarios.module';
import { ConsultasModule } from './consultas/consultas.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      autoLoadEntities: true,
      synchronize: true, // Temporal para crear tablas
    }),
    PersonasModule, //hola
    MascotasModule,
    VeterinariosModule,
    ConsultasModule,
    AuthModule,
    // ¡Aquí iremos añadiendo los nuevos módulos como PersonasModule, MascotasModule, etc.!
  ],
  controllers: [], // Vacío por ahora
  providers: [], // Vacío por ahora
})
export class AppModule {}
