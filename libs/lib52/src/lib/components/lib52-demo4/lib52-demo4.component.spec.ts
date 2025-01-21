import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo4Component } from './lib52-demo4.component';

describe('Lib52Demo4Component', () => {
  let component: Lib52Demo4Component;
  let fixture: ComponentFixture<Lib52Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
