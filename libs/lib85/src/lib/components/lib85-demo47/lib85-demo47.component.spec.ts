import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo47Component } from './lib85-demo47.component';

describe('Lib85Demo47Component', () => {
  let component: Lib85Demo47Component;
  let fixture: ComponentFixture<Lib85Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
