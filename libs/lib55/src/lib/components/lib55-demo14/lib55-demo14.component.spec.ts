import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo14Component } from './lib55-demo14.component';

describe('Lib55Demo14Component', () => {
  let component: Lib55Demo14Component;
  let fixture: ComponentFixture<Lib55Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
