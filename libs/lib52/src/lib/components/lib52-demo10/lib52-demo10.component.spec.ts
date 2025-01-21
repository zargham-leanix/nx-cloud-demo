import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo10Component } from './lib52-demo10.component';

describe('Lib52Demo10Component', () => {
  let component: Lib52Demo10Component;
  let fixture: ComponentFixture<Lib52Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
