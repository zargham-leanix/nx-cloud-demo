import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo41Component } from './lib64-demo41.component';

describe('Lib64Demo41Component', () => {
  let component: Lib64Demo41Component;
  let fixture: ComponentFixture<Lib64Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
