import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo27Component } from './lib57-demo27.component';

describe('Lib57Demo27Component', () => {
  let component: Lib57Demo27Component;
  let fixture: ComponentFixture<Lib57Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
