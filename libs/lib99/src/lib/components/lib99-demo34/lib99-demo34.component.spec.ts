import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo34Component } from './lib99-demo34.component';

describe('Lib99Demo34Component', () => {
  let component: Lib99Demo34Component;
  let fixture: ComponentFixture<Lib99Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
