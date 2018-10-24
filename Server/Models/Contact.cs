using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server
{
    public class Contact
    {
        [Key]
        public int              contact_id  {get; set;}
        public string           name        {get; set;}
        public string           phone       {get; set;}
        public string           email       {get; set; }
        public string           address     {get; set;}
        public string           city        {get; set;}
        public string           status      {get; set;}
        public string           satisfaction {get; set;}
        public string           comments    {get; set;}
        
        public Contact()
        {
            this.name     = name; 
            this.phone    = phone; 
            this.email    = email; 
            this.address  = address; 
            this.status   = status; 
            this.status   = satisfaction;
            this.comments = comments; 
        }
    }
}