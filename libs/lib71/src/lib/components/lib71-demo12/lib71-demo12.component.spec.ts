import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo12Component } from './lib71-demo12.component';

describe('Lib71Demo12Component', () => {
  let component: Lib71Demo12Component;
  let fixture: ComponentFixture<Lib71Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
