var builder = WebApplication.CreateBuilder(args);

// Registra os serviços necessários
builder.Services.AddControllers(); // 👈 ESSENCIAL!
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers(); // usa os controllers registrados

app.Run();
