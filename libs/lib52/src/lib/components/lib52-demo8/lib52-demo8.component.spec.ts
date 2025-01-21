import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo8Component } from './lib52-demo8.component';

describe('Lib52Demo8Component', () => {
  let component: Lib52Demo8Component;
  let fixture: ComponentFixture<Lib52Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
