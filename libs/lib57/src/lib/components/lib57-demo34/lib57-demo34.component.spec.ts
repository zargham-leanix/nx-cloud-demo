import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo34Component } from './lib57-demo34.component';

describe('Lib57Demo34Component', () => {
  let component: Lib57Demo34Component;
  let fixture: ComponentFixture<Lib57Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
