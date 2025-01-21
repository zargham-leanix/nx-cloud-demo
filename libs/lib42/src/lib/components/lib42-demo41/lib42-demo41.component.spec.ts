import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo41Component } from './lib42-demo41.component';

describe('Lib42Demo41Component', () => {
  let component: Lib42Demo41Component;
  let fixture: ComponentFixture<Lib42Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
