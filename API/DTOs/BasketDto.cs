using System;

namespace API.DTOs;

public record BasketDto
{
    public required string BasketId { get; set; } 
    public List<BasketItemDto> Items { get; set; } = [];
}
