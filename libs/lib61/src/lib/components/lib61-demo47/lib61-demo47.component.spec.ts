import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo47Component } from './lib61-demo47.component';

describe('Lib61Demo47Component', () => {
  let component: Lib61Demo47Component;
  let fixture: ComponentFixture<Lib61Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
