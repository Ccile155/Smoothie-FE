import { Component, OnInit } from '@angular/core';
import { Smoothie, SmoothieService } from '../smoothie.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})

export class EditionComponent implements OnInit {

//creation du fromGroup
smoothieForm: FormGroup;
smoothie: Smoothie = {
  title: '',
  ingredients: [
    {
      nom: '',
      quantity: '',
    }],
  picture: {
      name: '',
      alt: '',
      path: '',
    },
  features: {
    cost: '',
    prepTime: '',
  },
  advice: '',
  description: '',
  recipe: [
    {
      stepText: '',
    }
    ]
  };


//import du form builder et de smoothieService qui nous permet de communiquer avec la db:
  constructor(
    private fb: FormBuilder,
    private smoothieService: SmoothieService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  //pour raccourcir la syntaxe dans la suite du code:
  get myForm() {
    return this.smoothieForm.controls;
  }

  // Préparation des contrôles de champ et assigniation de propriétés au formulaire
  // Le formbuilder fb permet de créer un groupe avec {des paramètres}
  private buildForm() {
    this.smoothieForm = this.fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.smoothieForm.invalid) {
      return;
    } else {
      this.smoothie.title = this.myForm.title.value;
      this.smoothie.description = this.myForm.description.value;
      this.addSmoothie(this.smoothie);
      console.log(this.smoothie);
    }
  }

  addSmoothie(smoothie: Smoothie) {
    this.smoothieService.addSmoothie(smoothie)
      .subscribe( (lastInsertSmoothie) => {
        console.log('smoothie inséré', lastInsertSmoothie);
      });
  }

}