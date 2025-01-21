import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo6Component } from './lib71-demo6.component';

describe('Lib71Demo6Component', () => {
  let component: Lib71Demo6Component;
  let fixture: ComponentFixture<Lib71Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
