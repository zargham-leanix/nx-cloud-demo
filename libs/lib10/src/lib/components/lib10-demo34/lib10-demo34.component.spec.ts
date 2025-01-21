import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo34Component } from './lib10-demo34.component';

describe('Lib10Demo34Component', () => {
  let component: Lib10Demo34Component;
  let fixture: ComponentFixture<Lib10Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
