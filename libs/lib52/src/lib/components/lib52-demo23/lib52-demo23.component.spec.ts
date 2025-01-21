import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo23Component } from './lib52-demo23.component';

describe('Lib52Demo23Component', () => {
  let component: Lib52Demo23Component;
  let fixture: ComponentFixture<Lib52Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
