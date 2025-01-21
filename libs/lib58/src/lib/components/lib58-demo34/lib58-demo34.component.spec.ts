import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo34Component } from './lib58-demo34.component';

describe('Lib58Demo34Component', () => {
  let component: Lib58Demo34Component;
  let fixture: ComponentFixture<Lib58Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
