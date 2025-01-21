import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo47Component } from './lib78-demo47.component';

describe('Lib78Demo47Component', () => {
  let component: Lib78Demo47Component;
  let fixture: ComponentFixture<Lib78Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
