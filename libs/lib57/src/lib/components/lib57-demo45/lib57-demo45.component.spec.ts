import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo45Component } from './lib57-demo45.component';

describe('Lib57Demo45Component', () => {
  let component: Lib57Demo45Component;
  let fixture: ComponentFixture<Lib57Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
