import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo29Component } from './lib57-demo29.component';

describe('Lib57Demo29Component', () => {
  let component: Lib57Demo29Component;
  let fixture: ComponentFixture<Lib57Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
