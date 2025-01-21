import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo34Component } from './lib75-demo34.component';

describe('Lib75Demo34Component', () => {
  let component: Lib75Demo34Component;
  let fixture: ComponentFixture<Lib75Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
