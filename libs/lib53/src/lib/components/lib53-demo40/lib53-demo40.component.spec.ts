import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo40Component } from './lib53-demo40.component';

describe('Lib53Demo40Component', () => {
  let component: Lib53Demo40Component;
  let fixture: ComponentFixture<Lib53Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
