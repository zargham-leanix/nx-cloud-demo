import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo41Component } from './lib54-demo41.component';

describe('Lib54Demo41Component', () => {
  let component: Lib54Demo41Component;
  let fixture: ComponentFixture<Lib54Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
