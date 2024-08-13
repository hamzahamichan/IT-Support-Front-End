import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEquiComponent } from './delete-equi.component';

describe('DeleteEquiComponent', () => {
  let component: DeleteEquiComponent;
  let fixture: ComponentFixture<DeleteEquiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteEquiComponent]
    });
    fixture = TestBed.createComponent(DeleteEquiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
