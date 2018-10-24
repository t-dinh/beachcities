using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server
{
    public class Employee
    {
        [Key]
        public int              employee_id {get; set;}
        public string           name        {get; set;}
        public string           phone       {get; set;}
        public string           email       {get; set;}
        public string           address     {get; set;}
        public string           status      {get; set;}
        public string           comments    {get; set;}
        [ForeignKey("project_id")]
        public int?             project_id  {get; set;}
        public Project          project     {get; set;}
        
        public Employee()
        {
            this.name     = name; 
            this.phone    = phone; 
            this.email    = email; 
            this.address  = address; 
            this.status   = status; 
            this.comments = comments; 

        }
    }
}