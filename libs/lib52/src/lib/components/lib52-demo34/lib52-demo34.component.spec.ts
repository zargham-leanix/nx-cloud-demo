import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo34Component } from './lib52-demo34.component';

describe('Lib52Demo34Component', () => {
  let component: Lib52Demo34Component;
  let fixture: ComponentFixture<Lib52Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
