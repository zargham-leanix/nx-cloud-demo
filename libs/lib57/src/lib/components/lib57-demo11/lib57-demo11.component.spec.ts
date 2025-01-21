import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo11Component } from './lib57-demo11.component';

describe('Lib57Demo11Component', () => {
  let component: Lib57Demo11Component;
  let fixture: ComponentFixture<Lib57Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
