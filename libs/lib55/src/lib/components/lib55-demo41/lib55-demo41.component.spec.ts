import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo41Component } from './lib55-demo41.component';

describe('Lib55Demo41Component', () => {
  let component: Lib55Demo41Component;
  let fixture: ComponentFixture<Lib55Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
