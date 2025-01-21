import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo26Component } from './lib52-demo26.component';

describe('Lib52Demo26Component', () => {
  let component: Lib52Demo26Component;
  let fixture: ComponentFixture<Lib52Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
