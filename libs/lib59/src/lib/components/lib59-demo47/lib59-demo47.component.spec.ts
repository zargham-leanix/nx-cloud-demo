import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo47Component } from './lib59-demo47.component';

describe('Lib59Demo47Component', () => {
  let component: Lib59Demo47Component;
  let fixture: ComponentFixture<Lib59Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
