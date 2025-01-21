import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo25Component } from './lib52-demo25.component';

describe('Lib52Demo25Component', () => {
  let component: Lib52Demo25Component;
  let fixture: ComponentFixture<Lib52Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
