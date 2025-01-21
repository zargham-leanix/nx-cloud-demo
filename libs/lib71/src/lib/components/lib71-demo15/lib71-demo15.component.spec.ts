import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo15Component } from './lib71-demo15.component';

describe('Lib71Demo15Component', () => {
  let component: Lib71Demo15Component;
  let fixture: ComponentFixture<Lib71Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
