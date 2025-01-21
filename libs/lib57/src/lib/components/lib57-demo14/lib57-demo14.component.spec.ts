import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo14Component } from './lib57-demo14.component';

describe('Lib57Demo14Component', () => {
  let component: Lib57Demo14Component;
  let fixture: ComponentFixture<Lib57Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
