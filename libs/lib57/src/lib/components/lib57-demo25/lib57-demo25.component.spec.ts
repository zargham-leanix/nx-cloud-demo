import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo25Component } from './lib57-demo25.component';

describe('Lib57Demo25Component', () => {
  let component: Lib57Demo25Component;
  let fixture: ComponentFixture<Lib57Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
