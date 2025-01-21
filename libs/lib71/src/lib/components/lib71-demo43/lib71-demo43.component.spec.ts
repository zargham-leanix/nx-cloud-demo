import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo43Component } from './lib71-demo43.component';

describe('Lib71Demo43Component', () => {
  let component: Lib71Demo43Component;
  let fixture: ComponentFixture<Lib71Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
