import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo38Component } from './lib51-demo38.component';

describe('Lib51Demo38Component', () => {
  let component: Lib51Demo38Component;
  let fixture: ComponentFixture<Lib51Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
