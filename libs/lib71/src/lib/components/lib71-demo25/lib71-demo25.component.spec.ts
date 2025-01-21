import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo25Component } from './lib71-demo25.component';

describe('Lib71Demo25Component', () => {
  let component: Lib71Demo25Component;
  let fixture: ComponentFixture<Lib71Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
