import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo44Component } from './lib71-demo44.component';

describe('Lib71Demo44Component', () => {
  let component: Lib71Demo44Component;
  let fixture: ComponentFixture<Lib71Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
