import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo41Component } from './lib71-demo41.component';

describe('Lib71Demo41Component', () => {
  let component: Lib71Demo41Component;
  let fixture: ComponentFixture<Lib71Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
