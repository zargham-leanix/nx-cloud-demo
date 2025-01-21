import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo40Component } from './lib57-demo40.component';

describe('Lib57Demo40Component', () => {
  let component: Lib57Demo40Component;
  let fixture: ComponentFixture<Lib57Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
