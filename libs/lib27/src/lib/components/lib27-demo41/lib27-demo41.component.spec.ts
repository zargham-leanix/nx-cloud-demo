import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo41Component } from './lib27-demo41.component';

describe('Lib27Demo41Component', () => {
  let component: Lib27Demo41Component;
  let fixture: ComponentFixture<Lib27Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
