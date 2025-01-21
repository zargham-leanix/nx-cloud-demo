import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo14Component } from './lib71-demo14.component';

describe('Lib71Demo14Component', () => {
  let component: Lib71Demo14Component;
  let fixture: ComponentFixture<Lib71Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
