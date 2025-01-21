import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo9Component } from './lib6-demo9.component';

describe('Lib6Demo9Component', () => {
  let component: Lib6Demo9Component;
  let fixture: ComponentFixture<Lib6Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
