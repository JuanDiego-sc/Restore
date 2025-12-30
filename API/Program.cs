using API.Data;
using API.Middleware;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddCors();
builder.Services.AddTransient<ExceptionMiddleware>();
builder.Services.AddDbContext<StoreContext>(opt =>
{
   opt.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")); 
});

var app = builder.Build();

app.UseMiddleware<ExceptionMiddleware>();
app.UseCors(opt =>
{
   opt.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:3000");
});

app.MapControllers();


DbInitializer.Initdb(app);

app.Run();
