import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo43Component } from './lib57-demo43.component';

describe('Lib57Demo43Component', () => {
  let component: Lib57Demo43Component;
  let fixture: ComponentFixture<Lib57Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
