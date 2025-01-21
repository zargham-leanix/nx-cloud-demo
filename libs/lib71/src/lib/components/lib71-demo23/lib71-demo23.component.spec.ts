import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo23Component } from './lib71-demo23.component';

describe('Lib71Demo23Component', () => {
  let component: Lib71Demo23Component;
  let fixture: ComponentFixture<Lib71Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
