import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo47Component } from './lib6-demo47.component';

describe('Lib6Demo47Component', () => {
  let component: Lib6Demo47Component;
  let fixture: ComponentFixture<Lib6Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
