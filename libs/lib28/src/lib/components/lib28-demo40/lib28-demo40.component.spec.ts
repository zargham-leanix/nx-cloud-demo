import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo40Component } from './lib28-demo40.component';

describe('Lib28Demo40Component', () => {
  let component: Lib28Demo40Component;
  let fixture: ComponentFixture<Lib28Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
