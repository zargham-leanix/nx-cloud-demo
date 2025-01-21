import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo34Component } from './lib41-demo34.component';

describe('Lib41Demo34Component', () => {
  let component: Lib41Demo34Component;
  let fixture: ComponentFixture<Lib41Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
