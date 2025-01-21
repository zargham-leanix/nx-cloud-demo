import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo12Component } from './lib52-demo12.component';

describe('Lib52Demo12Component', () => {
  let component: Lib52Demo12Component;
  let fixture: ComponentFixture<Lib52Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
