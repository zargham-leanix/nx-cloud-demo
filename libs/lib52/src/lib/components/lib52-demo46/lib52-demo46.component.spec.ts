import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo46Component } from './lib52-demo46.component';

describe('Lib52Demo46Component', () => {
  let component: Lib52Demo46Component;
  let fixture: ComponentFixture<Lib52Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
