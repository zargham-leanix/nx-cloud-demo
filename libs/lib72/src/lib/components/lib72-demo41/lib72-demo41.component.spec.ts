import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo41Component } from './lib72-demo41.component';

describe('Lib72Demo41Component', () => {
  let component: Lib72Demo41Component;
  let fixture: ComponentFixture<Lib72Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
