import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo43Component } from './lib52-demo43.component';

describe('Lib52Demo43Component', () => {
  let component: Lib52Demo43Component;
  let fixture: ComponentFixture<Lib52Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
