import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo29Component } from './lib99-demo29.component';

describe('Lib99Demo29Component', () => {
  let component: Lib99Demo29Component;
  let fixture: ComponentFixture<Lib99Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
