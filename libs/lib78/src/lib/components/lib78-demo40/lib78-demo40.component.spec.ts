import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo40Component } from './lib78-demo40.component';

describe('Lib78Demo40Component', () => {
  let component: Lib78Demo40Component;
  let fixture: ComponentFixture<Lib78Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
