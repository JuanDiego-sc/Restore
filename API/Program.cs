using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddCors();
builder.Services.AddDbContext<StoreContext>(opt =>
{
   opt.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")); 
});

var app = builder.Build();
app.UseCors(opt =>
{
   opt.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:3000");
});

app.MapControllers();


DbInitializer.Initdb(app);

app.Run();
