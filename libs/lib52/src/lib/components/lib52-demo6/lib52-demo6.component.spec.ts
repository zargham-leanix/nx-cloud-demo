import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo6Component } from './lib52-demo6.component';

describe('Lib52Demo6Component', () => {
  let component: Lib52Demo6Component;
  let fixture: ComponentFixture<Lib52Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
