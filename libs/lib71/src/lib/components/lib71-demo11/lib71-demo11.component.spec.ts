import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo11Component } from './lib71-demo11.component';

describe('Lib71Demo11Component', () => {
  let component: Lib71Demo11Component;
  let fixture: ComponentFixture<Lib71Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
