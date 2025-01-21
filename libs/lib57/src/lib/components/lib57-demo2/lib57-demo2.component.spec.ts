import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo2Component } from './lib57-demo2.component';

describe('Lib57Demo2Component', () => {
  let component: Lib57Demo2Component;
  let fixture: ComponentFixture<Lib57Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
