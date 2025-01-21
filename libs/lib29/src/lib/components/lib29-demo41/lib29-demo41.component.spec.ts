import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo41Component } from './lib29-demo41.component';

describe('Lib29Demo41Component', () => {
  let component: Lib29Demo41Component;
  let fixture: ComponentFixture<Lib29Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
