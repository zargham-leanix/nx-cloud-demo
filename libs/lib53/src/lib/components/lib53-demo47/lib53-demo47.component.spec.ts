import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo47Component } from './lib53-demo47.component';

describe('Lib53Demo47Component', () => {
  let component: Lib53Demo47Component;
  let fixture: ComponentFixture<Lib53Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
