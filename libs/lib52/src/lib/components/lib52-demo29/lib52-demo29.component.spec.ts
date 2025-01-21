import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo29Component } from './lib52-demo29.component';

describe('Lib52Demo29Component', () => {
  let component: Lib52Demo29Component;
  let fixture: ComponentFixture<Lib52Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
