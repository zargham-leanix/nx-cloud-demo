import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo47Component } from './lib63-demo47.component';

describe('Lib63Demo47Component', () => {
  let component: Lib63Demo47Component;
  let fixture: ComponentFixture<Lib63Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
