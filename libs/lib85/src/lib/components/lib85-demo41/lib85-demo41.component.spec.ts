import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo41Component } from './lib85-demo41.component';

describe('Lib85Demo41Component', () => {
  let component: Lib85Demo41Component;
  let fixture: ComponentFixture<Lib85Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
