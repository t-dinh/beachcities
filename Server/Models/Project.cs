using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server
{
    public class Project
    {
        [Key]
        public int              project_id  {get; set;}
        public string           address     {get; set;}
        public string           city        {get; set;}
        public string           zip         {get; set;}
        public string           est_cost    {get; set;}
        public string           est_finish  {get; set;}
        public string           start_date  {get; set;}
        public string           end_date    {get; set;}
        public string           materials   {get; set;}
        public string           actual_cost {get; set;}
        public string           comments    {get; set;}
        public string           satisfaction {get; set;}
        [ForeignKey("contact_id")]
        public int?             contact_id  {get; set;}
        public Contact          contact     {get; set;}
        
        public Project()
        {
            this.address        = address;
            this.est_cost       = est_cost;
            this.est_finish     = est_finish;
            this.start_date     = start_date;
            this.end_date       = end_date;
            this.materials      = materials;
            this.actual_cost    = actual_cost;
            this.comments       = comments;
            this.contact_id     = contact_id;
        }
    }
}