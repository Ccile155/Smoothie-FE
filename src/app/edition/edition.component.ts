import { Component, OnInit } from '@angular/core';
import { Smoothie, SmoothieService } from '../smoothie.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';
import {MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent, MatChipList} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})

export class EditionComponent implements OnInit {

  beError$;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  public selectedIngredients = [];

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
    private smoothieService: SmoothieService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  //pour raccourcir la syntaxe dans la suite du code:
  get myForm() {
    return this.smoothieForm.controls;
  }


  public addIngredient(event: MatChipInputEvent): void {

    const input = event.input;
    const value = event.value;

    if (!(value || '').trim()) {
      return;
    }

    // Create a new tag
    this.selectedIngredients.push({
      nom: value.trim(),
      quantite: '',
    });
    // Update form with selected ingredient

    this.myForm.ingredients.setValue(this.selectedIngredients);

    if (input) {
      input.value = '';
    }

    this.myForm.ingredients.setValue(null);
  }

  public removeIngredient(ingredient: any): void {
    const index = this.selectedIngredients.indexOf(ingredient);

    if (index >= 0) {
      this.selectedIngredients.splice(index, 1);
      // Update form with selected ingredients
      this.myForm.ingredients.setValue(this.selectedIngredients);
    }
  }

  // Préparation des contrôles de champ et assigniation de propriétés au formulaire
  // Le formbuilder fb permet de créer un groupe avec {des paramètres}
  private buildForm() {
    this.smoothieForm = this.fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      title: ['', Validators.required],
      picture:[''],
      alt:[''],
      pictureName:[''],
      description: ['', Validators.required],
      prepTime: [''],
      cost:[''],
      advice: [''],
      ingredients:[''],
      recipe:['']
    });
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.smoothieForm.invalid) {
      return;
    } else {
      this.smoothie.title = this.myForm.title.value;
      // this.smoothie.picture.name = this.myForm.pictureName.value;
      // this.smoothie.picture.path = this.myForm.picture.value;
      // this.smoothie.picture.alt = this.myForm.alt.value;
      this.smoothie.description = this.myForm.description.value;
      this.smoothie.features.prepTime = this.myForm.prepTime.value;
      this.smoothie.features.cost = this.myForm.cost.value;
      this.smoothie.advice = this.myForm.advice.value;
      this.smoothie.recipe = this.myForm.recipe.value;
      // this.addIngredient('');
      // this.removeIngredient('');
      this.smoothie.ingredients = this.myForm.ingredients.value;
      this.addSmoothie(this.smoothie);

    }
    
  }

  addSmoothie(smoothie: Smoothie) {
    // console.log(this.smoothie);
    this.smoothieService.addSmoothie(smoothie)
      .subscribe((lastInsertSmoothie) => {
        console.log('smoothie inséré', lastInsertSmoothie);
        if (!SmoothieService.backendError) {
          this.router.navigate(['edition/success']);
        }
      });
  }
  
}