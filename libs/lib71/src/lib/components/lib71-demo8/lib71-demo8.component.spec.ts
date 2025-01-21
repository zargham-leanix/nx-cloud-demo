import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo8Component } from './lib71-demo8.component';

describe('Lib71Demo8Component', () => {
  let component: Lib71Demo8Component;
  let fixture: ComponentFixture<Lib71Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
