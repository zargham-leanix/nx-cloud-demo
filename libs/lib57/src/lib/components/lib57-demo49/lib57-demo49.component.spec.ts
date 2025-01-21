import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo49Component } from './lib57-demo49.component';

describe('Lib57Demo49Component', () => {
  let component: Lib57Demo49Component;
  let fixture: ComponentFixture<Lib57Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
