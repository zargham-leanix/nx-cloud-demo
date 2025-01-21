import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo41Component } from './lib8-demo41.component';

describe('Lib8Demo41Component', () => {
  let component: Lib8Demo41Component;
  let fixture: ComponentFixture<Lib8Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
